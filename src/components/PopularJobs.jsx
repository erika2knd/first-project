'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPopularJobs = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/1",
          {
            params: {
              app_id: "b8f35ecd",
              app_key: "cd85429465467e2cc68f9dce4a604ce3",
              results_per_page: 9,
            },
          }
        );
        setJobs(response.data.results);
      } catch (error) {
        console.error("Failed to fetch popular jobs:", error);
      }
    };

    fetchPopularJobs();
  }, []);

  const visibleJobs = showAll ? jobs : jobs.slice(0, 3);

  return (
    <section className="bg-[#3A3557] bg-popular-pattern py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-20">
          Popular Job Posts
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap">
          {visibleJobs.map((job, index) => (
            <a
              key={index}
              href={job.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 sm:p-6 rounded-2xl w-full max-w-sm bg-white text-gray-900 shadow-lg transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9B3131] to-[#6B3636] opacity-0 group-hover:opacity-100 transition duration-300 z-0" />

              <div className="relative z-10 group-hover:text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                    <img src="/placeholder.png" alt={job.company.display_name} className="w-6 h-6" />
                  </div>
                  <span className="font-semibold group-hover:text-white">{job.company.display_name}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-white">{job.title}</h3>
                <p className="mb-4 text-sm group-hover:text-white">
                  {job.contract_time || "Unknown"} – {job.location.display_name}
                </p>

                <div className="flex gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition">
                    {job.category.label || "General"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition">
                    {job.salary_min && job.salary_max
                      ? `£${Math.round(job.salary_min)}–£${Math.round(job.salary_max)}`
                      : "N/A"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="text-white text-lg font-semibold underline underline-offset-4 hover:text-orange-500 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Collapse ↑" : "View All →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;




