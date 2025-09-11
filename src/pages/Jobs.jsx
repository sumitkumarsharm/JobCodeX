import React, { useState } from "react";
import jobData from "../assets/jobData.js";
import JobCardCompact from "../components/JobCard";

const Jobs = () => {
  // const [selectedJob, setSelectedJob] = useState([]);
  // setSelectedJob(jobData);

  return (
    <div>
      <JobCardCompact jobs={jobData} />
    </div>
  );
};

export default Jobs;