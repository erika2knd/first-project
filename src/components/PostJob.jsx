'use client';
import React, { useState } from "react";

const PostJob = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job posted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        title: "",
        company: "",
        location: "",
        description: "",
      });
      setShowForm(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="post-job" className="relative overflow-hidden bg-white">
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
          <img
            src="/Chair.png"
            alt="Office Chair"
            className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-md z-10"
          />
        </div>

        {/* Text & Form */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Post a Job for <br /> UX Designer
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
            create an account so you can get job information that suits you,
            and you can apply the salary your demand.
          </p>

          {!showForm ? (
            <button
              className="bg-[#EE4F3C] text-white px-6 py-3 rounded-md hover:bg-[#d94433] transition"
              onClick={handleFormToggle}
            >
              Post a Job
            </button>
          ) : submitted ? (
            <p className="text-green-600 font-semibold">Job successfully posted!</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6 border mt-4 text-left max-w-md mx-auto lg:mx-0"
            >
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-black">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-black">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-black">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-black">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 text-black"
                  rows="3"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-[#EE4F3C] text-white px-6 py-2 rounded hover:bg-[#d94433] transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleFormToggle}
                  className="text-gray-500 underline hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostJob;








