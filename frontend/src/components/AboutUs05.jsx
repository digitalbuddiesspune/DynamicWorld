import React from "react";
import { NavLink } from "react-router-dom";

const COLORS = { red: "#DC2626" };

const AboutUs05 = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center px-20" style={{ backgroundColor: "#313639" }}>
      <div className="absolute inset-0 bg-[#1a1a1a]/30 mix-blend-multiply" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold  text-white text-center mb-10 max-w-4xl leading-snug px-6 py-4 rounded-lg">
        Join us to make a difference in people's lives.
        </h1>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <NavLink
            to={"/career"}
              className="inline-flex items-center justify-center gap-2 rounded-full  px-6 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold  shadow-[0_18px_48px_rgba(43,43,43,0.45)] transition-all duration-300 hover:scale-[1.06] bg-white text-black "
          >
            Our Careers
          </NavLink>
        </button>
      </div>
    </section>
  );
};

export default AboutUs05;
