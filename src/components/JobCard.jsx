import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

export default function JobList({ jobs }) {
  return (
    <div className="w-full flex justify-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition flex flex-col"
            >
              <h2 className="text-lg font-bold text-gray-900">
                {job.job_title}
              </h2>
              <p className="text-gray-600">{job.employer_name}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                <p className="flex items-center gap-1">
                  <MapPin size={16} /> {job.job_location}
                </p>
                <p className="flex items-center gap-1">
                  <Clock size={16} /> {job.job_posted_at}
                </p>
              </div>

              <Link
                to={`/jobs/${job.job_id}`}
                className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
