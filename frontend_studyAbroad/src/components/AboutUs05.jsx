import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs05 = () => {
  return (
    <section className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-gray-100 px-6 sm:px-10 md:px-16 py-16">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-800 text-center mb-10 max-w-4xl leading-snug">
        Join us to make a difference in people's lives.
      </h1>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <NavLink
          to={"/career"}
          className={
            "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-10 lg:py-4 text-base lg:text-lg rounded-xl font-bold shadow-xl transform transition-all duration-300 hover:scale-[1.03]"
          }
        >
          Our Careers
        </NavLink>
      </button>
    </section>
  );
};

export default AboutUs05;
