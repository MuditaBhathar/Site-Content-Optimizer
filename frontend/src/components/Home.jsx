import React, { useState } from 'react'
import CompareView from './CompareView'

export default function Home() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('https://site-content-optimizer.onrender.comgit ad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })

      if (!res.ok) throw new Error(`Backend error: ${res.statusText}`)

      const data = await res.json()
      setResult(data)
    } catch (err) {
      console.error(err)
      setError('⚠️ Could not fetch site or backend error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center px-4 transition-all duration-500">
      <div
        className={`flex flex-col items-center text-center transition-all duration-500 ${
          result ? 'mt-6' : 'mt-28'
        }`}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-black">
          Site Content Optimizer
        </h1>
        <p className="text-2xl text-gray-700 max-w-2xl mb-8">
          Improve your website's copy using AI. Paste a URL and get a cleaner, high-converting version instantly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl"
        >
          <input
            type="url"
            required
            className="flex-1 border border-gray-300 px-5 py-4 text-2xl rounded-lg shadow focus:outline-blue-500"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 text-3xl rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition min-w-[150px]"
            disabled={loading}
          >
            {loading ? 'Improving...' : 'Improve'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/70 z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-xl font-semibold">Processing site...</p>
        </div>
      )}

      {error && (
        <p className="text-red-600 text-center text-lg font-medium mt-6">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-10 w-full max-w-6xl px-4">
          <CompareView original={result.original} improved={result.improved} />
        </div>
      )}
    </div>
  )
}
