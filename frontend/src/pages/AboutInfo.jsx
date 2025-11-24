import React from "react";
import { NavLink } from "react-router-dom";
import { TRUSTWORTHY_GLOBAL } from "../constants/colors";
import education from "../assets/education.png";
import school from "../assets/school.png";
import handshake from "../assets/handshake.png";
import free from "../assets/free.png";

const COLORS = TRUSTWORTHY_GLOBAL;

const AboutInfo = () => {
  const infoCards = [
    {
      id: 1,
      icon: education,
      title: "12,000+ Admissions",
      text: "Provided counseling services to over 100,000+ students.",
    },
    {
      id: 2,
      icon: school,
      title: "UGC Approved Universities",
      text: "We offer access to over 50+ UGC Approved Universities.",
    },
    {
      id: 3,
      icon: handshake,
      title: "24/7 Student Support",
      text: "Our expert counselors are available 24/7 for support.",
    },
    {
      id: 4,
      icon: free,
      title: "*FREE Career Counselling",
      text: "We ensure 100% placement support for students.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] px-6 lg:px-10 py-12 sm:py-16 lg:py-20 text-center flex flex-col justify-center items-center min-h-[60vh] sm:min-h-[70vh] lg:h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <h2
          className="text-lg sm:text-xl lg:text-4xl mb-6 lg:mb-10 font-medium capitalize"
          style={{ color: COLORS.text }}
        >
          Explore top online universities and find the perfect fit for your
          education needs!
        </h2>

        {/* Button */}

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-[#008080]"
            >
              <div className="flex justify-center items-center w-16 h-16 mb-4 bg-gray-200 rounded-full">
                <img src={card.icon} alt={card.title} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-white/90 leading-snug">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <NavLink
            to="/services/online-education"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 font-medium rounded-full shadow hover:shadow-lg transition-all duration-300 bg-[#008080] text-white hover:-translate-y-0.5 hover:bg-[#006666]"
          >
            All Universities
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
