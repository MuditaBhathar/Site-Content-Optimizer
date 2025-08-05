// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import CompareView from './components/CompareView'
// import './index.css'

// function App() {
//   const [url, setUrl] = useState('')
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   async function handleSubmit(e) {
//     e.preventDefault()
//     setLoading(true)
//     setError('')
//     setResult(null)

//     try {
//       const res = await fetch('http://localhost:5000/api/improve', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url })
//       })

//       if (!res.ok) throw new Error(`Backend error: ${res.statusText}`)

//       const data = await res.json()
//       setResult(data)
//     } catch (err) {
//       console.error(err)
//       setError('⚠️ Could not fetch site or backend error occurred.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       className={`flex flex-col items-center transition-all duration-500 ${
//         result ? 'mt-10' : 'justify-center min-h-screen'
//       }`}
//     >
//       <h1 className="text-5xl font-extrabold mb-8 text-black text-center">
//         🛠 Website Copy Improver
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row gap-4 mb-6 justify-center"
//       >
//         <input
//           className="flex-1 border p-3 text-lg rounded-lg min-w-[400px] max-w-[600px] shadow"
//           placeholder="https://example.com"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition"
//           disabled={loading}
//         >
//           {loading ? 'Improving...' : 'Improve'}
//         </button>
//       </form>

//       {/* Spinner */}
//       {loading && (
//         <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/70 z-50">
//           <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600"></div>
//           <p className="mt-4 text-xl font-semibold">Processing site...</p>
//         </div>
//       )}

//       {error && <p className="text-red-600 text-center text-lg">{error}</p>}

//       {result && (
//         <div className="mt-6 w-full max-w-6xl px-4">
//           <CompareView original={result.original} improved={result.improved} />
//         </div>
//       )}
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
