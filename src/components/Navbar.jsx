import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className={`text-2xl font-bold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              Logo
            </Link>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* Right: Theme Toggle + Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 border-2 border-transparent py-1 cursor-pointer rounded-full font-medium text-sm transition ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-900 hover:border-indigo-400"
                  : "bg-whitetext-black hover:bg-white  hover:border-indigo-400"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Login Button */}
            <Link
              to="/login"
              className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium transition ${
                darkMode
                  ? "border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                  : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Login
            </Link>

            {/* Signup Button */}
            <Link
              to="/signup"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                darkMode
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Signup
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                darkMode
                  ? "text-gray-300 hover:text-indigo-400 hover:bg-gray-800 focus:ring-indigo-500"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-600"
              }`}
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile links */}
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              Pricing
            </Link>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full mt-2 px-3 py-2 rounded-md text-base font-medium transition ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Mobile Login */}
            <Link
              to="/login"
              className={`block px-3 py-2 mt-2 border rounded-md text-base font-medium ${
                darkMode
                  ? "border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                  : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Login
            </Link>

            {/* Mobile Signup */}
            <Link
              to="/signup"
              className={`block px-3 py-2 mt-2 rounded-md text-base font-medium ${
                darkMode
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
