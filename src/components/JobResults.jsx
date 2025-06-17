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
              results_per_page: 10,
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

  if (!title && !location) return null;

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <img
        src="/Back-2.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Search Results
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 text-gray-900 transition-all duration-300 hover:from-[#9B3131] hover:to-[#6B3636] hover:bg-gradient-to-r hover:text-white animate-fade-in-up opacity-0"
              >
                <h3 className="text-lg font-semibold mb-1 leading-snug">
                  {job.title}
                </h3>
                <p className="text-sm mb-1 text-gray-600 hover:text-white">
                  {job.location.display_name}
                </p>
                {job.salary_min && job.salary_max && (
                  <p className="text-sm font-medium mb-1">
                    {job.salary_currency} {Math.round(job.salary_min)} – {Math.round(job.salary_max)}
                  </p>
                )}
                {job.contract_time && (
                  <p className="text-sm mb-1 capitalize">
                    {job.contract_time}
                  </p>
                )}
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline hover:no-underline"
                >
                  View Job
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No jobs found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
};

export default JobResults;







