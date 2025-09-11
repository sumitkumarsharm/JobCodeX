import React from "react";
import FeaturesCards from "../components/FeatureCards";

const Feature = ({ darkMode }) => {
  return (
    <section
      className={`mx-auto ${
        darkMode ? "bg-gray-800" : "bg-indigo-50"
      } transition-colors duration-300`}
    >
      <div className="px-6 py-12 sm:py-16">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Powerful Features
        </h1>
        <p
          className={`max-w-3xl mx-auto text-center mb-8 sm:text-lg ${
            darkMode ? "text-gray-300" : "text-gray-900"
          }`}
        >
          Our platform offers innovative solutions to common hiring challenges,
          saving time and resources while improving outcomes.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-8 flex-wrap max-w-7xl mx-auto">
          <FeaturesCards darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Feature;
