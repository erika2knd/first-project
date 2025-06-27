'use client'
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white py-6 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">

        <a href="#" className="text-3xl font-bold text-[#1C1F35]">
          J<span className="text-[#EE4F3C]">O</span>BPLY
        </a>


        
        <nav className="hidden md:flex gap-8 text-gray-900 font-medium">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Service</a>
          <a href="#">Jobs</a>
        </nav>

        
        <button
          onClick={() => {
            const section = document.getElementById("post-job");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Post a Vacancy
        </button>

      </div>
    </header>
  );
};

export default Navbar;

