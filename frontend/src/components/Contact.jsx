import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen px-8 py-12 bg-gray-50 text-gray-900">
      <h2 className="text-2xl font-extrabold mb-12 text-blue-700 text-center">Contact Us</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-8 text-xl">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600 w-6 h-6" />
            <span className="font-medium">contact@siteoptimizer.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-600 w-6 h-6" />
            <span className="font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600 w-6 h-6" />
            <span className="font-medium">Mumbai, India</span>
          </div>

          <div className="text-gray-700 text-xl">
            <p><span className="font-semibold">Business Hours:</span> Mon - Fri, 10:00 AM - 6:00 PM</p>
            <p className="mt-4">Feel free to reach out. We'll get back to you within 24 hours.</p>
          </div>
        </div>

        {/* Right: Contact/Feedback Form */}
        <form className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full text-2xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your Message / Feedback"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition text-2xl"
          >
            Send Message
          </button>
          <p className="text-gray-500 text-center text-2xl">We'll get back to you via email within 24 hours.</p>
        </form>
      </div>
    </div>
  )
}
