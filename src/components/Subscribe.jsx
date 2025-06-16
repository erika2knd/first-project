import React from "react";

const Subscribe = () => {
  return (
    <section className="relative pt-40 pb-20 bg-white overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Back-2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative z-10 -mt-55 px-4 sm:px-6">
        <div className="relative bg-[#EE4F3C] rounded-2xl px-4 sm:px-6 md:px-10 py-10 sm:py-12 text-white max-w-4xl w-full mx-auto shadow-xl">
          {/* Decorative elements */}
          <img
            src="/white-dots.png"
            alt="dots"
            className="absolute bottom-0 left-0 w-20 h-auto"
          />
          <img
            src="/Decorwhite.png"
            alt="decor"
            className="absolute top-0 right-0 w-32 sm:w-40 md:w-56"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-6">
              Subscribe to get <br /> update vacancy post
            </h2>

            <form className="relative w-full">
              <input
                type="email"
                placeholder="infomail856@gmail.com"
                className="w-full py-3 pl-4 pr-32 rounded-md text-black text-sm bg-white outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 bg-[#EE4F3C] text-white rounded-md flex items-center gap-1 text-sm border border-white"
              >
                Subscribe
                <img src="/ion_paper-plane.png" alt="send" className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

