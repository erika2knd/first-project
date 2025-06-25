'use client';
import React from "react";
import categories from "../data/categoriesData";
import { useRouter } from "next/navigation";

const JobCategories = () => {
  const router = useRouter();

const handleCategoryClick = (title) => {
  router.push(`/?title=${encodeURIComponent(title)}`);
};

    
  
  return (
    <section className="pt-20 pb-32 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Job Categories</h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.title)}
              className="cursor-pointer bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              <div
                className="group bg-white w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md transition-all duration-300 hover:bg-[#EE4F3C]"
              >
                <img src={cat.icon} alt={cat.title} className="w-8 h-8 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.vacancies} Job Vacancy</p>
            </div>
          ))}
        </div>
        

       {/* "Get Start New Job" */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
  
  {/* Left Side */}
  <div className="lg:w-1/2">
    <h3 className="text-3xl sm:text-4xl font-bold mb-4">Get Start New Job</h3>
    <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
      create an account so you can get job information that suits you,
      and you can apply the salary your demand.
    </p>
    <button className="bg-[#EE4F3C] text-white px-6 py-3 rounded-md hover:bg-[#d94433] transition">
      Create an Account
    </button>
  </div>

  {/* Right Side */}
<div className="relative lg:w-1/2 flex justify-center items-end">
  <div className="relative w-full max-w-xs sm:max-w-md">
    {/* Картинка с людьми */}
    <img
      src="/Group415.png"
      alt="People"
      className="w-full z-10 relative"
    />

    {/* Декор внутри того же контейнера */}
    <img
      src="/ellipse.png"
      alt="Ellipse"
      className="absolute right-0 bottom-[-20px] w-[90px]"
    />
    <img
      src="/Vector-1.svg"
      alt="Line Top"
      className="absolute top-[-5px] right-[-26px] w-[180px] sm:w-[210px]"
    />
    <img
      src="/Vector-2.svg"
      alt="Line Bottom"
      className="absolute bottom-[-10px] left-[-30px] w-[180px] sm:w-[210px]"
    />
  </div>
</div>

</div>

        </div>
    </section>
  );
};


export default JobCategories;

