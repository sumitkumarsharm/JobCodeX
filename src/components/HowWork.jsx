import React from "react";

const HowWork = ({ darkMode }) => {
  return (
    <div>
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`} id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 max-w-xl mx-auto">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              How It Works
            </h2>
            <p
              className={`md:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Our streamlined process makes hiring and job hunting efficient and effective
            </p>
          </div>

          {/* Steps Container */}
          <div className="space-y-16">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex flex-col ${
                  step % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 items-center`}
              >
                {/* Step Content */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`border rounded-lg shadow-md p-6 relative ${
                      darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="absolute -top-5 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold"
                      style={step % 2 === 0 ? { right: "-20px" } : { left: "-20px" }}
                    >
                      {`0${step}`}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-4 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step === 1 && "Create Your Profile"}
                      {step === 2 && "AI Matching & Filtering"}
                      {step === 3 && "AI Interview Process"}
                      {step === 4 && "Assessment Reports"}
                    </h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
                      {step === 1 &&
                        "Job seekers complete their profile with skills, experience, and preferences. Employers create company profiles and job listings."}
                      {step === 2 &&
                        "Our AI algorithm matches candidates with relevant job opportunities based on multiple factors."}
                      {step === 3 &&
                        "Candidates participate in AI-led interviews that assess technical skills, problem-solving abilities, and cultural fit."}
                      {step === 4 &&
                        "Detailed reports are generated highlighting candidate strengths, areas for improvement, and overall fit."}
                    </p>

                    {/* Inner Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        className={`p-4 rounded-md shadow-sm ${
                          darkMode ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        <h4 className="text-sm font-medium text-indigo-500 mb-2">
                          For Job Seekers
                        </h4>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm`}>
                          {step === 1 && "Upload your resume and highlight your skills"}
                          {step === 2 && "Get matched with jobs that fit your profile"}
                          {step === 3 && "Complete AI interviews at your convenience"}
                          {step === 4 && "Get constructive feedback to improve your skills"}
                        </p>
                      </div>
                      <div
                        className={`p-4 rounded-md shadow-sm ${
                          darkMode ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        <h4 className="text-sm font-medium text-purple-500 mb-2">
                          For Employers
                        </h4>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm`}>
                          {step === 1 && "Create your company profile and job descriptions"}
                          {step === 2 && "Receive a curated list of qualified candidates"}
                          {step === 3 && "Review comprehensive interview recordings and analysis"}
                          {step === 4 && "Make data-driven hiring decisions"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Banner */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className={`h-48 w-full max-w-sm rounded-lg relative overflow-hidden flex items-center justify-center ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-200/30"
                    }`}
                  >
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 select-none">
                      {`Step 0${step}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWork;
