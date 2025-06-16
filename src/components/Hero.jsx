'use client';
import React, { useState } from "react";

const Hero = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (title.trim() || location.trim()) {
      onSearch(title, location);
    }
  };

  return (
    <section className="relative bg-white pt-10 sm:pt-16 pb-20 bg-hero-pattern overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Find & Apply For <br />
            Your <span className="text-orange-500">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.
          </p>

          {/* Search Form */}
          <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Job title or Keyword"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-600"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-600"
            />
            <button
              onClick={handleSearch}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <div className="absolute z-0 hidden sm:block">
            <div className="w-[480px] h-[480px] rounded-full bg-gray-300 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-gray-300 opacity-10"></div>
          </div>

          <div className="relative w-[250px] h-[350px] sm:w-[400px] sm:h-[500px] z-10">
            <img
              src="/mailn-girl.png"
              alt="Hero"
              className="absolute bottom-[-10px] sm:bottom-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px]"
            />

            {/* Icons */}
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Google mobile and desktop */}
              <div className="absolute top-[35%] left-[-20px] w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/google.png" className="w-5 h-5 sm:w-6 sm:h-6" alt="Google" />
              </div>

              {/* Slack mobile and desktop */}
              <div className="absolute top-[10%] right-[10px] w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/slack.png" className="w-5 h-5 sm:w-6 sm:h-6" alt="Slack" />
              </div>

              {/* PayPal desktop */}
              <div className="absolute bottom-[5%] right-[-30px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop hidden sm:flex">
                <img src="/paypal.png" className="w-6 h-6" alt="PayPal" />
              </div>

              {/* Placeholder desktop */}
              <div className="absolute top-[5%] left-[15%] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop hidden sm:flex">
                <img src="/placeholder.png" className="w-6 h-6" alt="Microphone" />
              </div>

              {/* Adam card sm+ */}
              <div className="absolute top-[50%] right-[-110px] w-[140px] bg-white rounded-2xl shadow-lg p-2 jump-loop hidden sm:block">
                <div className="w-full h-[80px] bg-yellow-400 rounded-lg overflow-hidden flex items-center justify-center ">
                  <img src="/adam.png" alt="Adam" className="h-full" />
                </div>
                <div className="mt-1 text-sm font-semibold text-black">Adam</div>
                <div className="text-xs text-black">Project Manager</div>
              </div>

              {/* Maliha card sm+ */}
              <div className="absolute bottom-[-10%] left-[-110px] w-[140px] bg-white rounded-2xl shadow-lg p-2 jump-loop hidden sm:block">
                <div className="w-full h-[80px] bg-purple-600 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src="/milaha.png" alt="Maliha" className="h-full" />
                </div>
                <div className="mt-1 text-sm font-semibold text-black">Maliha</div>
                <div className="text-xs text-black">UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




