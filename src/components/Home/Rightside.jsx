import React from "react";

const Rightside = ({ darkMode }) => {
  return (
    <div
      className={`moveContainer w-full max-h-[350px] mx-auto rounded-2xl shadow-2xl shadow-black/20 p-6 flex flex-col justify-center 
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
      `}
    >
      {/* Live Badge */}
      <div className="flex items-center gap-2 mb-5">
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span
          className={`uppercase text-xs font-semibold tracking-wide 
            ${darkMode ? "text-green-300" : "text-green-700"}
          `}
        >
          AI Interview · Live
        </span>
      </div>

      {/* Chat Section */}
      <div
        className={`rounded-xl shadow-inner p-5 mb-6 
          ${darkMode ? "bg-gray-700" : "bg-white"}
        `}
      >
        <p
          className={`mb-2 rounded-sm 
            ${darkMode ? "bg-gray-600 text-gray-200" : "bg-blue-50 text-gray-800"}
          `}
        >
          <span
            className={`font-semibold px-2 
              ${darkMode ? "text-indigo-300" : "text-indigo-700"}
            `}
          >
            AI Interviewer:
          </span>
          <span className="ml-1">
            Can you explain your approach to problem-solving?
          </span>
        </p>
        <p
          className={`rounded-sm px-2 
            ${darkMode ? "bg-gray-600 text-gray-300" : "bg-blue-50 text-gray-700"}
          `}
        >
          <span
            className={`font-semibold 
              ${darkMode ? "text-amber-300" : "text-amber-700"}
            `}
          >
            Candidate:
          </span>
          <span className="ml-1">
            I typically break down complex problems into smaller parts,
            prioritize them, and address each systematically to find efficient
            solutions.
          </span>
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center justify-between gap-2">
        <button className="flex flex-col font-semibold leading-4 text-sm items-start gap-0">
          Interview Progress
          <p>
            <span
              className={`text-xs 
                ${darkMode ? "text-gray-400" : "text-gray-300"}
              `}
            >
              3 min remaining
            </span>
          </p>
        </button>
        <button
          className={`flex gap-2 cursor-pointer text-sm justify-center items-center capitalize transition-all duration-300 ease-in-out font-semibold
            ${darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"}
          `}
        >
          continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              fill="currentColor"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Rightside;
