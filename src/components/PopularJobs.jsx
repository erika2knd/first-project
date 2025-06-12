import React from "react";
import jobPosts from "../data/jobPostsData";

const PopularJobs = () => {
  return (
    <section className="bg-[#3A3557] bg-popular-pattern py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-20">Popular Job Posts</h2>

        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {jobPosts.map((job) => (
            <div
              key={job.id}
              className="group relative p-4 sm:p-6 rounded-2xl w-full max-w-sm bg-white text-gray-900 shadow-lg transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9B3131] to-[#6B3636] opacity-0 group-hover:opacity-100 transition duration-300 z-0" />
              {/* Avatars */}
              <div className="relative z-10 group-hover:text-white">
              <div className="absolute top-4 right-4 flex items-center space-x-[-10px] z-10">
                {job.avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`User ${index}`}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                  />
                ))}
                <div className="w-8 h-8 bg-white text-gray-700 text-xs font-semibold rounded-full border-2 border-white flex items-center justify-center shadow-md">
                  5+
                </div>
              </div>

              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                  <img src={job.logo} alt={job.company} className="w-6 h-6" />
                </div>
                <span className="font-semibold group-hover:text-white">{job.company}</span>
              </div>

              {/* Position and Location */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">{job.title}</h3>
              <p className="mb-4 text-sm group-hover:text-white">
                {job.time} – {job.location}
              </p>

              {/* Tags and Salary */}
              <div className="flex gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition">
                  Remote
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition">
                  Anywhere
                </span>
                <span className="ml-auto font-bold group-hover:text-white">{job.salary}</span>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* Button View All */}
        <div className="text-center mt-10">
          <button className="text-white text-lg font-semibold underline underline-offset-4 hover:text-orange-500 transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;



