'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

const JobResults = ({ title, location }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title && !location) return;

    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/1",
          {
            params: {
              app_id: "b8f35ecd",
              app_key: "cd85429465467e2cc68f9dce4a604ce3",
              results_per_page: 9,
              what: title || undefined,
              where: location || undefined,
            },
          }
        );
        setJobs(response.data.results);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [title, location]);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Search Results
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white h-28 rounded-xl shadow-sm" />
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group relative bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">{job.location.display_name}</p>
                {job.salary_min && (
                  <p className="text-sm text-gray-700 mt-1">
                    💰 {Math.floor(job.salary_min)} – {Math.floor(job.salary_max)} {job.salary_currency}
                  </p>
                )}
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-orange-500 hover:underline"
                >
                  View Job →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No jobs found. Try another search 🔎</p>
        )}
      </div>
    </section>
  );
};

export default JobResults;




