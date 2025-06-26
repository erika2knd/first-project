'use client';

import React, { useState } from "react";
import FeedbackData from "../data/FeedbackData";

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 pb-40 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-900 font-bold text-left mb-12 leading-snug">
          Great Feedback <br /> From Candidates
        </h2>

        {/* Feedback Cards */}
        <div className="flex gap-8 overflow-x-auto pb-2 scroll-smooth hide-scrollbar">
          {FeedbackData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-white min-w-[340px] max-w-[340px] p-6 rounded-2x1 shadow transition-all duration-300 flex-shrink-0 h-[320px] flex flex-col justify-between cursor-pointer hover:shadow-xl ${
                index === activeIndex ? "scale-105  shadow-lg" : ""
              }`}
            >
              <div className="text-3xl text-[#EE4F3C] mb-4">“</div>
              <p className="text-gray-900 mb-6">{item.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-black text-sm mb-0.5">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                  <div className="flex text-[#EE4F3C] mt-1">
                    {Array(item.stars).fill(0).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {FeedbackData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#EE4F3C] animate-ping-slow"
                  : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Feedback;


