import { Link } from "react-router-dom";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-indigo-50 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-indigo-500 hover:text-indigo-600 transition-colors"
            >
              JobsIndiaAIJI
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Revolutionizing hiring in India with AI-powered interviews and
              smart candidate matching.
            </p>
          </div>

          {/* For Job Seekers */}
          <nav aria-label="For Job Seekers">
            <h3 className="text-indigo-400 font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              {["Browse Jobs", "Interview Preparation", "Career Resources", "Resume Builder", "Success Stories"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* For Employers */}
          <nav aria-label="For Employers">
            <h3 className="text-indigo-400 font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              {["Post a Job", "AI Interview Setup", "Talent Search", "Pricing Plans", "Enterprise Solutions"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-indigo-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Press", "Careers", "Contact Us"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} JobsIndiaAI. All rights reserved.</p>
          <div className="space-x-6">
            <Link to="/" className="hover:text-indigo-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-indigo-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-indigo-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
