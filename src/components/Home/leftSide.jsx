import React from "react";
import { Link } from "react-router-dom";

const LeftSide = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-gray-900"
      } TransitionContainer w-full max-w-xl mx-auto mt-8 px-4 flex flex-col items-start`}
    >
      {/* Notification Bar */}
      <div className="w-full flex items-start justify-start mb-4">
        <p
          className={`rounded-full px-4 py-1 text-xs font-semibold tracking-wide shadow-sm
            ${darkMode ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-700"}
          `}
        >
          India&apos;s first AI interview platform
        </p>
      </div>

      {/* Heading */}
      <h1
        className={`text-3xl sm:text-4xl font-extrabold mb-4 leading-tight 
          ${darkMode ? "text-white" : "text-gray-900"}
        `}
      >
        Find your <span className="text-indigo-600">perfect job</span> with{" "}
        <span className="text-indigo-600">AI interviews</span>
      </h1>

      {/* Subtitle */}
      <p
        className={`mb-6 text-base sm:text-lg 
          ${darkMode ? "text-gray-300" : "text-gray-600"}
        `}
      >
        We use cutting-edge AI technology to streamline the hiring process. Job seekers get faster responses, and employers find the perfect candidates more efficiently.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 w-full mb-5">
        <Link
          to="/jobs"
          className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition text-base"
        >
          Browse jobs
        </Link>
        <Link
          to="/post-job"
          className={`flex-1 inline-flex justify-center items-center px-4 py-2 font-semibold rounded-md shadow transition text-base
            ${darkMode 
              ? "bg-gray-800 text-indigo-300 border border-indigo-600 hover:bg-gray-700" 
              : "bg-white text-indigo-700 border border-indigo-600 hover:bg-indigo-50"}
          `}
        >
          Post job
        </Link>
      </div>

      {/* Social Proof */}
      <p
        className={`text-xs mt-2 
          ${darkMode ? "text-gray-400" : "text-gray-500"}
        `}
      >
        Join{" "}
        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-bold`}>
          10,000+
        </span>{" "}
        job seekers and{" "}
        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-bold`}>
          500+
        </span>{" "}
        companies already on our platform.
      </p>
    </div>
  );
};

export default LeftSide;
