import React, { useEffect, useState } from "react";
import axios from "axios";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const getCountryCode = (countryName) => {
  return countries.getAlpha2Code(countryName, "en")?.toLowerCase();
};

const JobResults = ({ title, location }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [countryError, setCountryError] = useState(""); // 👈 добавлено состояние ошибки

  useEffect(() => {
    if (!title && !location) return;

    const countryCode = getCountryCode(location);
    if (!countryCode) {
      setCountryError("We couldn't recognize the country. Please try another one.");
      setJobs([]);
      return;
    }

    setCountryError(""); // сброс ошибки, если всё ок

    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.adzuna.com/v1/api/jobs/${countryCode}/search/${page}`,
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
  }, [title, location, page]);

  if (!title && !location) return null;

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <img
        src="/Back-2.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Search Results
        </h2>

        {countryError && (
          <div className="text-center text-red-500 font-medium mb-6">
            {countryError}
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-600 animate-pulse">
            Loading jobs...
          </div>
        ) : jobs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 text-gray-900 transition-all duration-300 hover:from-[#9B3131] hover:to-[#6B3636] hover:bg-gradient-to-r hover:text-white"
                >
                  <h3 className="text-lg font-semibold mb-1 leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-sm mb-1 text-gray-600 hover:text-white">
                    {job.location.display_name}
                  </p>
                  {job.salary_min && job.salary_max && (
                    <p className="text-sm font-medium mb-1">
                      £{Math.round(job.salary_min)} – £{Math.round(job.salary_max)}
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

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className={`px-4 py-2 text-gray-600 rounded border text-sm ${
                  page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">Page {page}</span>

              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={jobs.length < 10}
                className={`px-4 py-2 text-gray-600 rounded border text-sm ${
                  jobs.length < 10 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          !countryError && (
            <div className="text-center text-gray-500 mt-10">
              <p>No jobs found. Try another search.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default JobResults;




