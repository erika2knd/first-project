import React from "react";

const PostJob = () => {
  return (
    <section
  className="relative py-24 bg-cover h-750px w-1024px"
  style={{ backgroundImage: "url('/Back.png')" }}
>
  <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
    
    {/* Левая колонка */}
    <div className="relative lg:-ml-12">
      <img
        src="/Chair.png"
        alt="Office"
        className="rounded-3xl shadow-xl w-full max-w-md translate-y-10" 
      />
    </div>

    {/* Правая колонка */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl text-gray-900 font-bold mb-4">
        Post a Job for <br /> UX Designer
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        create an account so you can get job information that suits you, and you can apply the salary your demand.
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

