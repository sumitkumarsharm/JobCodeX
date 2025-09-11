import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Briefcase } from "lucide-react";
import JobApplicationForm from "./JobApplicationForm ";

export default function JobDetail({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((j) => j.job_id === id);

  if (!job) return <p className="text-center text-gray-500">Job not found</p>;

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE - Job Details */}
        <div className="col-span-2 bg-white p-8 shadow-lg rounded-2xl border border-gray-200">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {job.job_title}
              </h2>
              <p className="text-gray-600">{job.employer_name}</p>
            </div>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              {job.job_employment_type}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
            <p className="flex items-center gap-1">
              <MapPin size={16} /> {job.job_location}
            </p>
            <p className="flex items-center gap-1">
              <Clock size={16} /> {job.job_posted_at}
            </p>
            {job.job_is_remote && (
              <p className="flex items-center gap-1">
                <Briefcase size={16} /> Remote
              </p>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">
              About the Role
            </h3>
            <p className="text-gray-700 mt-2 whitespace-pre-line">
              {job.job_description}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Responsibilities
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
              <li>Design and build scalable applications</li>
              <li>Work with cross-functional teams</li>
              <li>Maintain and optimize performance</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Requirements
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
              <li>Proficiency in {job.job_title?.split(" ")[0]}</li>
              <li>3+ years of relevant experience</li>
              <li>Strong problem-solving skills</li>
            </ul>
          </div>

          {job.job_min_salary && job.job_max_salary && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Salary</h3>
              <p className="text-gray-800 font-medium">
                ₹{job.job_min_salary.toLocaleString()} - ₹
                {job.job_max_salary.toLocaleString()} per{" "}
                {job.job_salary_period?.toLowerCase()}
              </p>
            </div>
          )}

          <div className="flex justify-end mt-10">
            <Link
              to="/jobs"
              className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Back to Jobs
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Apply Form */}
       <JobApplicationForm job={job}/>
      </div>
    </div>
  );
}
