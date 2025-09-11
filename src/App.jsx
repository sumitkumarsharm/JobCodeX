import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import Feature from "./pages/Feature";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Jobs from "./pages/Jobs";
import JobDetail from "./components/JobDetail";
import jobData from "./assets/jobData.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [allJobs, setAllJobs] = useState([]);

  const X_RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

  const getAllJob = async () => {
    const url =
      "https://jsearch.p.rapidapi.com/search?query=python&page=1&num_pages=1&country=in&date_posted=all";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.data);
      setAllJobs(result.data);
    } catch (error) {
      console.error(error);
    }
  };
 useEffect(() => {
    // getAllJob();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors`}
    >
      <Routes>
        <Route
          element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/features" element={<Feature darkMode={darkMode} />} />
          <Route
            path="/how-it-works"
            element={<HowItWorks darkMode={darkMode} />}
          />
          <Route path="/pricing" element={<Pricing darkMode={darkMode} />} />
          <Route path="/jobs" element={<Jobs darkMode={darkMode} />} />
            <Route path="/jobs/:id" element={<JobDetail jobs={jobData} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
