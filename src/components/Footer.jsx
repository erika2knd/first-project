import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-8 relative overflow-hidden">
      {/* Верхний декор */}
      <img
        src="/grey-dots.png"
        alt="Dots"
        className="absolute top-0 right-0 w-24 h-auto"
      />

      <div className="container mx-auto px-6 sm:px-8 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        {/* Logo and Contact */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-[#1C1F35]">
            J<span className="text-[#EE4F3C]">O</span>BPLY
          </h2>
          <p className="mb-2 text-sm">152 / 3 , Western Road, New York</p>
          <a
            href="tel:+9985695234"
            className="text-[#EE4F3C] text-sm block mb-4"
          >
            Call Us: +99–8569–5234
          </a>
          <div className="flex justify-center sm:justify-start space-x-4">
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="/twitter.svg"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* Explore */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Featured Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Recent Job Post
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Total Candidates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Link */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Useful Link</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE4F3C] transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Latest News */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Latest News</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <img
                src="/futer-1.png"
                alt="news1"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div className="text-sm text-left">
                <p className="leading-snug">
                  Understanding the Cybersecurity Landscape in 2021
                </p>
                <span className="text-[#EE4F3C] text-xs">21 June, 2021</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="/futer-2.png"
                alt="news2"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div className="text-sm text-left">
                <p className="leading-snug">
                  How to Design for Maximum Product Trust
                </p>
                <span className="text-[#EE4F3C] text-xs">21 June, 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний декор */}
      <img
        src="/grey-dots.png"
        alt="Dots"
        className="absolute bottom-0 left-0 w-[130px] h-auto"
      />

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-200 pt-6 px-4">
        © 2021, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;




