import requests
from bs4 import BeautifulSoup

def extract_website_copy(url):
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')

    parts = {
        "title": soup.title.string if soup.title else "",
        "meta": "",
        "h1": "",
        "h2": "",
        "hero": "",
        "cta": ""
    }

    meta = soup.find("meta", attrs={"name": "description"})
    parts["meta"] = meta['content'] if meta and 'content' in meta.attrs else ""

    parts["h1"] = soup.find("h1").get_text(strip=True) if soup.find("h1") else ""
    parts["h2"] = soup.find("h2").get_text(strip=True) if soup.find("h2") else ""

    p = soup.find("p")
    parts["hero"] = p.get_text(strip=True) if p else ""

    button = soup.find("button")
    if button:
        parts["cta"] = button.get_text(strip=True)
    else:
        a = soup.find("a", string=lambda s: s and ("sign up" in s.lower() or "get started" in s.lower()))
        parts["cta"] = a.get_text(strip=True) if a else ""

    return "\n".join(f"{k.upper()}: {v}" for k, v in parts.items() if v)