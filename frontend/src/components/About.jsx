// src/components/About.jsx
import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">About Us</h1>
      <p className="text-xl leading-relaxed max-w-3xl text-gray-800">
        We built <strong>Site Content Optimizer</strong> to empower companies and individuals to improve their website copy with the power of artificial intelligence. We scan your site copy and give you cleaner, more convincing copy in an instant to drive engagement and conversions.
        <br /><br />
        No matter if you're operating a personal blog, startup landing page, or online store—our AI helps make your message clear, compelling, and optimized for your visitors.
      </p>
    </div>
  )
}
