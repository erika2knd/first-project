import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Левая часть */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Find & Apply For <br />
            Your <span className="text-orange-500">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.
          </p>

          {/* Поисковая форма */}
          <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Job title or Keyword"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Правая часть */}
        <div className="lg:w-1/2 relative">
          <img
            src="/assets/satisfied-lovely-woman-holds-modern-cell-phone 1.png"
            alt="Hero"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
          {/* Тут позже добавим иконки и карточки (Google, Maliha, и т.д.) */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

