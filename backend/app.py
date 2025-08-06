from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
from urllib.parse import urljoin
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


# 🔐 Gemini API Key

genai.configure(api_key=os.getenv("OPENAI_API_KEY"))


def fetch_rendered_html(url):
    """Render full site using Playwright."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(user_agent=(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/122.0.0.0 Safari/537.36"
        ))
        page = context.new_page()
        page.goto(url, timeout=60000, wait_until="networkidle")
        html = page.content()
        browser.close()
        return html

def improve_text_block(text):
    """Rewrite text using Gemini with format-preserving logic."""
    prompt = f"""
You are an expert website copywriter. Improve the following text so it is clearer, more persuasive, and emotionally engaging without making it longer.

Rules:
- Rewrite the text in a similar tone and style.
- Keep the same general length (do not expand).
- Make it more benefit-driven and customer-focused.
- Do NOT use emojis or symbols.
- Do NOT include phrases like 'Original' or 'Improved'.
- Return ONLY the improved version.

Text:
{text}
"""

    model = genai.GenerativeModel("gemini-1.5-flash")
    try:
        response = model.generate_content(prompt)
        improved = response.text.strip() if hasattr(response, "text") else ""

        if not improved or improved.lower() == text.lower() or len(improved.split()) < 5:
            retry_prompt = f"Make this text clearer and more persuasive while keeping it the same length and tone:\n\n{text}"
            retry_response = model.generate_content(retry_prompt)
            retry_text = retry_response.text.strip() if hasattr(retry_response, "text") else ""

            if retry_text and retry_text.lower() != text.lower():
                return retry_text
            return text + " (fallback failed)"

        return improved

    except Exception as e:
        print("Gemini error:", e)
        return text + " (Gemini error)"





def fix_asset_urls(soup, base_url):
    """Fix relative asset URLs for CSS/JS/image links."""
    for tag in soup.find_all(["link", "script", "img"]):
        attr = "href" if tag.name == "link" else "src"
        if tag.has_attr(attr):
            tag[attr] = urljoin(base_url, tag[attr])

@app.route("/api/improve", methods=["POST"])
def improve():
    data = request.get_json()
    url = data.get("url")

    try:
        original_html = fetch_rendered_html(url)
        soup_original = BeautifulSoup(original_html, "html.parser")
        fix_asset_urls(soup_original, url)

        soup_improved = BeautifulSoup(original_html, "html.parser")
        fix_asset_urls(soup_improved, url)

        # Improve text inside <h1>, <h2>, <h3>, <p>
        for tag in soup_improved.find_all(["h1", "h2", "h3", "p"]):
            original_text = tag.get_text(strip=True)
            if original_text and len(original_text) < 500:
                improved = improve_text_block(original_text)
                tag.clear()
                tag.append(improved)
                print("ORIGINAL:", original_text)
                print("IMPROVED:", improved)


        return jsonify({
            "original": str(soup_original),
            "improved": str(soup_improved)
        })
    except Exception as e:
        print("Backend error:", e)
        return jsonify({
            "original": f"⚠️ Could not access {url}",
            "improved": "⚠️ Could not improve this site"
        }), 500

@app.route("/", methods=["GET"])
def home():
    return {"message": "Server running"}

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=True)
