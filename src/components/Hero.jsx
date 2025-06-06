import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 bg-hero-pattern overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Find & Apply For <br />
            Your <span className="text-orange-500">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.
          </p>

          {/* Search Form */}
          <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Job title or Keyword"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-600"
            />
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-600"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Правая часть */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Фоновые круги */}
          <div className="absolute z-0">
            <div className="w-[480px] h-[480px] rounded-full bg-gray-300 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-gray-300 opacity-10"></div>
          </div>

          {/* Контент */}
          <div className="relative w-[400px] h-[500px] z-10">
            {/* Девушка */}
            <img
              src="/mailn-girl.png"
              alt="Hero"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px]"
            />

            {/* Иконки и карточки */}
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Google */}
              <div className="absolute top-[35%] left-[-30px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/google.png" className="w-6 h-6" alt="Google" />
              </div>

              {/* Slack */}
              <div className="absolute top-[10%] right-[-30px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/slack.png" className="w-6 h-6" alt="Slack" />
              </div>

              {/* PayPal */}
              <div className="absolute bottom-[5%] right-[-30px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/paypal.png" className="w-6 h-6" alt="PayPal" />
              </div>

              {/* Placeholder */}
              <div className="absolute top-[5%] left-[15%] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center jump-loop">
                <img src="/placeholder.png" className="w-6 h-6" alt="Microphone" />
              </div>

              {/* Adam */}
              <div className="absolute top-[50%] right-[-110px] w-[140px] bg-white rounded-2xl shadow-lg p-2 jump-loop">
                <div className="w-full h-[80px] bg-yellow-400 rounded-lg overflow-hidden flex items-center justify-center ">
                  <img src="/adam.png" alt="Adam" className="h-full" />
                </div>
                <div className="mt-1 text-sm font-semibold text-black">Adam</div>
                <div className="text-xs text-black">Project Manager</div>
              </div>

              {/* Maliha */}
              <div className="absolute bottom-[-10%] left-[-110px] w-[140px] bg-white rounded-2xl shadow-lg p-2 jump-loop">
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


