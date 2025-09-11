import React from "react";

const features = [

  {
    title: "AI-Driven Interviews",
    description:
      "Our AI conducts initial screening interviews, evaluating technical skills and soft skills to identify top candidates.",
    icon: (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>),
  },
    {
    title: " Smart Candidate Matching",
    description:
      "Our platform automatically matches candidates with job postings based on skills, experience, and cultural fit.",
    icon: ( <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>),
  },
   {
    title: "Comprehensive Reports",
    description:
      "  Get detailed assessment reports highlighting candidate strengths, areas for growth, and fit for specific roles.",
    icon: (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                   strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>),
  },
   {
    title: "Screen Recording",
    description:
      " Capture screen recordings during technical assessments to evaluate problem-solving approaches and coding skills.",
    icon: (     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>),
  },
 {
    title: "Time-Saving",
    description:
      " Reduce hiring time by 70% with automated first-round interviews that can be conducted 24/7 without scheduling hassles.",
    icon: (  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>),
  },
   {
    title: "Feedback For All",
    description:
      "  Provide constructive feedback to all candidates, not just those who advance, improving the overall candidate experience.",
    icon: ( <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>),
  },
  
];

export default function FeaturesCards({darkMode}) {
  return (
   <section className="py-16" id="features">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((card, index) => (
        <div
          key={index}
          className={`rounded-lg border p-6 shadow-sm hover:shadow-md transition-all ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div
            className={`mb-4 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {card.icon}
          </div>
          <h3
            className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {card.title}
          </h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
