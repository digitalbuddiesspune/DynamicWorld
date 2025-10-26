import React from "react";
import { CheckSquare, ArrowRight } from "lucide-react";

// --- Reusable Component: Action Button ---
const ActionButton = ({ text, type = "primary" }) => {
  const primaryClasses = `bg-[#3E96F4] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/50`;
  const classes = type === "primary" ? primaryClasses : "";

  return (
    <button
      className={`
        flex items-center justify-center space-x-2 
        px-6 py-3 sm:px-8 sm:py-4 rounded-xl 
        font-medium text-base sm:text-lg md:text-xl 
        transition-all duration-200 ease-in-out
        transform hover:scale-[1.02] active:scale-[0.98] w-full
        ${classes}
      `}
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
    </button>
  );
};

// --- Reusable Component: Feature Checkbox ---
const FeatureItem = ({ text }) => (
  <div className="flex items-start text-[#31393C] text-sm sm:text-base py-1">
    <CheckSquare
      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5"
      style={{ color: "#3E96F4" }}
    />
    <span className="font-medium">{text}</span>
  </div>
);

// --- Reusable Component: Stat Card ---
const StatCard = ({ count, description }) => (
  <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center">
    <div
      className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-2
      "
      style={{ backgroundColor: "#3E96F4", color: "#ffffff" }}
    >
      {count}
    </div>
    <p className="text-xs sm:text-sm md:text-base font-medium leading-tight text-[#31393C]">
      {description}
    </p>
  </div>
);

// --- Main Business Partner Component ---
export const BussinessPartner01 = () => {
  const courses = [
    { label: "BA", value: "BCom" },
    { label: "MBA", value: "MCA" },
    { label: "BTech", value: "BEd" },
    { label: "BBA", value: "MSc" },
    { label: "BCA", value: "MCom" },
    { label: "LLB", value: "DPHarm" },
    { label: "BPharm", value: "PH.D" },
    { label: "BSc", value: "MA" },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#EDEEEB]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 text-sm lg:text-base">
        {/* === SECTION 1 === */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 bg-white">
          <div className="relative p-6 sm:p-10 md:p-14 lg:p-16">
            {/* bg image + soft overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://placehold.co/1200x400/CCC7BF/FFFFFF?text=Image+Placeholder')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/60 to-transparent" />

            <div className="relative max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 text-[#31393C]">
                Become Our{" "}
                <span className="text-[#3E96F4]">Business Partner</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-5 text-[#31393C]">
                Or Just Refer & Earn And Start Earning In Lakhs
              </p>

              <div className="inline-block rounded-2xl bg-white shadow-xl border border-gray-200 px-4 sm:px-5 md:px-6 py-3">
                <span className="font-semibold text-[#3E96F4]">
                  Earn 10,000/- to 50,000/-
                </span>
                <p className="mt-1 text-gray-700">Per Admission.</p>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 2 === */}
        <div className="rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 mb-8 bg-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#31393C]">
            Business in Education Sector
          </h2>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            <div className="space-y-2">
              <FeatureItem text="Online Education" />
              <FeatureItem text="Distance Education" />
              <FeatureItem text="Regular Education" />
              <FeatureItem text="Overseas Education" />
            </div>
            <div className="space-y-2">
              <FeatureItem text="College Admissions" />
              <FeatureItem text="Immigration & Visa Services" />
              <FeatureItem text="Attestation & Apostille Services" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-gray-200 py-6 mb-8">
            <StatCard
              count="1000+"
              description="Graduation, Post-Graduation, Diploma & Certificate Courses"
            />
            <StatCard
              count="100+"
              description="UGC Entitled Top Ranked Universities of India"
            />
            <StatCard
              count="4000+"
              description="Top Ranked Universities across the world"
            />
          </div>

          {/* Courses mini-table */}
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="p-3 text-center font-semibold text-white bg-[#3E96F4]">
              X - XII Science | Commerce | Arts
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 divide-x divide-gray-200 bg-gray-50 text-[#31393C]">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-2 text-center hover:bg-white transition-colors"
                >
                  <p className="font-semibold">{course.label}</p>
                  <p className="opacity-80">{course.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BussinessPartner02 = () => {
  return (
    <div className="min-h-screen font-sans bg-[#EDEEEB]">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 text-[#3E96F4]">
            Become our Business Partner
          </h2>

          {/* ✅ Points List */}
          <ul className="space-y-4 text-gray-700 mb-8 text-sm lg:text-base leading-relaxed">
            {[
              "Get access to 100+ UGC Entitled Top Ranked Universities of India.",
              "Get access to 4000+ Top Ranked Universities across the world.",
              "Become the Expert Guide for admissions in Top Colleges across India & abroad for Medical, Engineering, Management & more.",
              "Get Training & Marketing Support.",
              "Get Complete Counselling Material. Get 24*7 Counselling Support.",
              "Do it Full Time, Part Time or Just Refer & Earn (without Investment).",
              "By partnering with DYNAMIC WORLD, you will not only help the candidate to find the right path but also enjoy our highest incentives.",
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl font-medium mr-2 -mt-1 text-[#3E96F4]">
                  •
                </span>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            ))}
          </ul>

          {/* ✅ Why DW Section */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-10 mb-3 text-gray-800">
            Why DYNAMIC WORLD?
          </h3>

          <div className="text-sm lg:text-base text-gray-600 space-y-2 mb-6 leading-relaxed">
            <p>Almost 20 years of Experience & Goodwill.</p>
            <p>DYNAMIC WORLD has enrolled 10,000+ Candidates, Since 2005.</p>
            <p>
              DYNAMIC WORLD is an Authorised Admission Partner of 100+ UGC
              Approved Top Ranked Universities.
            </p>
            <p>
              DYNAMIC WORLD is an Authorised Admission Partner of 4000+ Top
              Ranked International Universities Across the World.
            </p>
          </div>

          {/* ✅ CTA Button */}
          <a
            href=" https://wa.me/919820401375
"
            className="px-5 py-2.5 bg-[#3E96F4] text-white rounded-2xl font-medium hover:scale-105 hover:bg-[#2c7ddd] transition duration-300 ease-in-out"
          >
            Partner With Us <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
