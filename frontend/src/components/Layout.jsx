import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="px-6 pt-6">
      <nav className="bg-blue-700 text-white p-4 shadow rounded-2xl max-w-7x1 mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold hover:text-yellow-200 transition">
          🔍 Site Optimizer
        </Link>
        <div className="flex gap-6 text-3xl">
          <Link
            to="/"
            className="px-2 py-2 rounded hover:text-yellow-200 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 rounded hover:text-yellow-200 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 rounded hover:text-yellow-200 transition"
          >
            Contact
          </Link>
        </div>
      </nav>

      <main className="mt-10 max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  )
}
