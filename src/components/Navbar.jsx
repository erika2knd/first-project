import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white py-6 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <div className="text-2xl font-extrabold">
          <span className="text-blue-900">JOB</span>
          <span className="text-orange-500">PLY</span>
        </div>

        
        <nav className="hidden md:flex gap-8 text-gray-900 font-medium">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Service</a>
          <a href="#">Jobs</a>
        </nav>

        
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          Post a Vacancy
        </button>
      </div>
    </header>
  );
};

export default Navbar;

