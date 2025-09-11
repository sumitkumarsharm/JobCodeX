import React, { useRef, useState } from "react";

const JobApplicationForm = ({ job }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    console.log(formData); // log the state
    // You can also do something else here like sending data to an API\
     setFormData({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

   if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl border border-gray-200 h-fit">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Apply for this Position
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Years of Experience *</label>
          <input
            type="number"
            name="experience"
            min="0"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Resume/CV *</label>
          <label
            htmlFor="resume"
            className="mt-1 flex items-center justify-center px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 text-gray-500 text-sm text-center"
          >
            Click to upload or drag and drop
            <br />
            <span className="text-xs">PDF, DOC, or DOCX (max. 10MB)</span>
          </label>
          <input
            id="resume"
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleChange}
            ref={fileInputRef}
            required
          />

          {/* Show uploaded file name with green check */}
          {formData.resume && (
            <div className="mt-2 flex items-center text-green-600 text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {formData.resume.name}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Cover Letter</label>
          <textarea
            name="coverLetter"
            rows="4"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>
        </div>

        <p className="text-xs text-gray-500">
          📅 Application closes on {job.job_posted_at || "N/A"}
        </p>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
