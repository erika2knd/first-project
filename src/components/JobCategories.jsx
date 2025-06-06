import React from "react";

const GetStartedBlock = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текст слева */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get Start New Job
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Create an account so you can get job information that suits you,
              and you can apply the salary your demand.
            </p>
            <button className="bg-[#EE4F3C] text-white px-6 py-3 rounded-md hover:bg-[#d94433] transition">
              Create an Account
            </button>
          </div>

          {/* Images  */}
          <div className="relative flex justify-center items-end h-[700px]">
            {/* Left form */}
            <div className="relative w-1/2 h-full">
              <img
                src="/Rectangle-66.png"
                alt="bg-yellow"
                className="absolute bottom-0 w-full h-full object-contain z-0"
              />
              <img
                src="/img-1.png"
                alt="Adam"
                className="absolute bottom-0 w-full h-full object-contain z-10"
              />
            </div>

            {/* Правая форма */}
            <div className="relative w-1/2 h-full">
              <img
                src="/Rec-6.png"
                alt="bg-orange"
                className="absolute bottom-0 w-full h-full object-contain z-0"
              />
              <img
                src="/img-2.png"
                alt="Maliha"
                className="absolute bottom-0 w-full h-full object-contain z-10"
              />
            </div>

            {/* SVG */}
            <img
              src="/Vector-1.svg"
              alt="line-orange"
              className="absolute top-[10%] right-0 w-[160px] z-20 animate-draw"
            />
            <img
              src="/Vector-2.svg"
              alt="line-yellow"
              className="absolute bottom-0 left-0 w-[160px] z-20 animate-draw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedBlock;

