import React from "react";

const PostJob = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <img
        src="/Back.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-[480px] sm:h-[500px] md:h-[540px] lg:h-[560px] object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 pt-16 md:pt-20 pb-20">
        {/* Chair Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img src="/Chair.png" alt="Office Chair" className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-md z-10"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Post a Job for <br /> UX Designer
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
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






