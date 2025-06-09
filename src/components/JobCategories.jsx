import React from "react";
import categories from "../data/categoriesData";

const JobCategories = () => {
  return (
    <section className="pt-20 pb-32 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Job Categories</h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md transition-transform duration-300 hover:rotate-6 hover:-translate-y-1 ${cat.isOrangeBg ? "bg-[#EE4F3C]" : "bg-white"}`}
              >
                <img src={cat.icon} alt={cat.title} className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.vacancies} Job Vacancy</p>
            </div>
          ))}
        </div>
        

        {/*  "Get Start New Job" */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side */}
          <div className="lg:w-1/2">
            
            <h3 className="text-4xl font-bold mb-4">Get Start New Job</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              create an account so you can get job information that suits you,
              and you can apply the salary your demand.
            </p>
            <button className="bg-[#EE4F3C] text-white px-6 py-3 rounded-md hover:bg-[#d94433] transition">
              Create an Account
            </button>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex items-end justify-center gap-4 relative">
            <img src="/ellipse.png" alt="Ellipse" className="absolute right-[15px] bottom-[-30px] w-[90px] h-120px]"/>
            <img src="/Group415.png" alt="People" className="w-full max-w-md z-10"/>
            <img src="/Vector-1.svg" alt="Decoration line top" className="absolute top-[0px] right-[54px] w-[240px] z-0"/>
            <img src="/Vector-2.svg" alt="Decoration line bottom" className="absolute bottom-[-10px] left-[29px] w-[240px] z-0"/> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;

