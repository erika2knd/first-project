import React from "react";

const PostJob = () => {
  return (
    <section className="relative py-20 overflow-visible bg-white">
      {/* Background */}
      <img
        src="/Back.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-[560px] object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Chair Image */}
        <div className="relative">
          <img
            src="/Chair.png"
            alt="Office Chair"
            className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-md mx-auto relative z-10 md:-mb-8 lg:-mb-16"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Post a Job for <br /> UX Designer
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
            create an account so you can get job information that suits you,
            and you can apply the salary your demand.
          </p>
          <button className="bg-[#EE4F3C] text-white px-6 py-3 rounded-md hover:bg-[#d94433] transition">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostJob;





