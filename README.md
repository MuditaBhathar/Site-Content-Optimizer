# 🔍 Site Content Optimizer

Site Content Optimizer is a full-stack web application that improves the textual content of any website using AI. Built with React, Tailwind CSS, and powered by Google Gemini API, this tool fetches content from a given URL and transforms it into a more compelling, clearer, and conversion-oriented version — instantly (with minor latency).

---

## 🚀 Purpose

In the digital landscape, website copy is key — it can make or break user engagement and conversions. However, not everyone is a copywriter or marketer. This tool bridges that gap by offering AI-assisted content improvement that’s:

- Cleaner  
- Clearer  
- More persuasive  
- Readable and SEO-friendly  

With just a URL input, users can get an AI-improved version of their existing site content and compare it side-by-side to the original.

---

## 🖥️ Features

- 🌐 Paste URL — Paste any public website link  
- ⚡ Instant Optimization — See the optimized version within ~30 seconds  
- 🔁 Side-by-side Comparison — Compare original vs improved content  
- ✨ Modern UI — Clean, responsive design using TailwindCSS  
- 🧠 Powered by Gemini — Uses Google Gemini API to enhance text quality  

---

## 📸 Screenshots

```
📷 Screenshot  
<img width="1919" height="833" alt="image" src="https://github.com/user-attachments/assets/080d014b-e617-48e1-8748-91b837f3a9d9" />
```

---

## ⚙️ Tech Stack

```
Frontend:
- React  
- Tailwind CSS  
- React Router DOM  

Backend:
- Express.js  
- Body Parser & CORS  
- Cheerio or Puppeteer (for scraping)  
- Gemini API integration  

AI Integration:
- Google Gemini API  
  - Generates improved content from webpage text  
  - API key stored securely in backend environment variables
```

---

## 🧪 How It Works

```
1. User visits the home page and pastes a website URL  
2. The frontend sends the URL to the backend (`/api/improve` endpoint)  
3. Backend fetches and parses the raw page content  
4. Text is sent to Gemini API with prompts to enhance readability, clarity, and SEO  
5. Gemini returns an improved version of the content  
6. Both versions are shown side-by-side in the frontend  
```

---

## ⚡ Latency Note

```
⏱️ The backend may take ~30 seconds due to:

- Fetching external site content  
- Cleaning/sanitizing HTML  
- Gemini API processing time  
```

A loading spinner is shown during the process.

---

## 🛣️ Pages & Routing

```
/             → Home Page (URL input + side-by-side view)  
/about        → About Project  
/contact      → Contact Form  
/compare      → (Internal view used in Home for comparison)  
```

---

## 🧑‍💻 Local Setup

```
1. Prerequisites  
   - Node.js (v18+)  
   - npm or yarn

2. Clone the repository
   git clone https://github.com/your-username/site-content-optimizer.git
   cd site-content-optimizer
```

---

## 🔐 Gemini API Key Setup

```
To use Gemini AI, generate your API key at:
👉 https://aistudio.google.com/app/apikey

Then create a `.env` file inside the `server/` folder with:

GEMINI_API_KEY=your_generated_key_here
```

---

## 🛠 Installation

```
# Set Up Frontend
cd client
npm install
npm run dev
# Runs at http://localhost:5173

# Set Up Backend
cd ../server
npm install

# Add your Gemini API key to .env
GEMINI_API_KEY=your_generated_key_here

# Start backend
node index.js
# Runs at http://localhost:5000
```

---

## 🧠 Gemini Prompt Strategy

```
Prompts focus on:
- Improving clarity and persuasion  
- Maintaining original meaning  
- Boosting SEO and professionalism  
```

---

## 📂 Project Structure

```
site-content-optimizer/
├── client/           # React frontend
│   ├── components/   # Layout, CompareView, etc.
│   ├── pages/        # Home, About, Contact
│   └── App.jsx
│
├── server/           # Express backend
│   └── index.js
│
├── .env              # Environment variables (Gemini API key)
├── README.md
```

---
