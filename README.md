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

<img width="1919" height="833" alt="image" src="https://github.com/user-attachments/assets/080d014b-e617-48e1-8748-91b837f3a9d9" />


---

## ⚙️ Tech Stack

### Frontend

- React  
- Tailwind CSS  
- React Router DOM  

### Backend

- Express.js  
- Body Parser & CORS  
- Fetch & Serve content using Cheerio / Puppeteer / axios (if implemented)  

### AI Integration

- Google Gemini API  
  - Used for generating improved content based on extracted webpage text  
  - API key is stored securely in environment variables  

---

## 🧪 How It Works

1. User visits the home page and pastes a website URL  
2. The frontend sends the URL to the backend (`/api/improve` endpoint)  
3. The backend fetches the raw content of the page (HTML scraping or direct content parsing)  
4. The content is passed through Gemini API with specific prompt instructions to improve clarity and conversion potential  
5. The API returns the improved version  
6. The frontend displays both original and improved content side-by-side  

---

## ⚡ Latency Note

⏱️ The backend may take around 30 seconds to process a request due to:

- Network fetch delays  
- Parsing and cleaning page content  
- Waiting for Gemini API response  

A loading spinner and user-friendly feedback messages are shown to indicate progress.

---

## 🛣️ Pages & Routing

- `/` — Home Page with form, intro, and improvement engine  
- `/about` — Information about the project and its purpose  
- `/contact` — Contact form and details  
- `/compare` — Compare view (conditionally rendered inside Home)  

---

## 🧑‍💻 Local Setup

### Prerequisites

- Node.js (v18+)  
- npm or yarn  

### Environment Variables

Create a `.env` file in the root of the backend project with:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here

---

### ⚙️ Installation

Follow these steps to install and run the project on your local machine:

---

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/site-content-optimizer.git
cd site-content-optimizer


2. Set Up the Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
The frontend will be available at http://localhost:5173

3. Set Up the Backend
Open a new terminal window and run:

bash
Copy
Edit
cd server
npm install
4. Configure Environment Variables
Inside the server folder, create a file named .env and add the following:

env
Copy
Edit
GEMINI_API_KEY=your_google_gemini_api_key_here

5. Start the Backend Server
bash
Copy
Edit
node index.js
The backend will run on http://localhost:5000

You're now ready to use the app locally!

🧠 Gemini Prompt Strategy
Prompts sent to Gemini API focus on improving clarity, readability, persuasion, and SEO.
The AI is instructed to avoid changing the meaning and to retain structure where possible.

📂 Project Structure
bash
Copy
Edit
site-content-optimizer/
├── client/           # React frontend
│   ├── components/   # Layout, CompareView, etc.
│   ├── pages/        # Home, About, Contact
│   └── App.jsx
│
├── server/           # Express backend
│   └── index.js
│
├── .env              # Environment variables
├── README.md

