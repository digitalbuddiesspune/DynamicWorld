import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs05 = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-pink-600 via-indigo-600 to-blue-600 px-6 sm:px-10 md:px-16 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 mix-blend-multiply" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white text-center mb-10 max-w-4xl leading-snug drop-shadow-lg">
        Join us to make a difference in people's lives.
        </h1>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <NavLink
            to={"/career"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold text-[#0B0D17] shadow-[0_18px_48px_rgba(16,18,37,0.45)] transition-all duration-300 hover:scale-[1.06] hover:bg-white"
          >
            Our Careers
          </NavLink>
        </button>
      </div>
    </section>
  );
};

export default AboutUs05;
