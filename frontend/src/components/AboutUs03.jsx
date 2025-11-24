import React from "react";

const COLORS = {
  energeticFrom: "#FF8C00",
  energeticTo: "#FFC153",
  charcoal: "#31393C"
};

const AboutUs03 = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8F3ED] border-b border-[#D4D4D4] text-[#1A1A1A] py-16 lg:py-24">
      {/* Decorative energetic background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 300px at 10% 10%, rgba(255,140,0,0.08), transparent 20%), radial-gradient(500px 200px at 90% 90%, rgba(255,193,83,0.06), transparent 30%)"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-10 pt-12 pb-16">
        <div className="mx-auto max-w-4xl text-center">

          {/* Main Heading */}
          <h1
            className="inline-block text-3xl md:text-4xl font-bold tracking-tight mb-5 px-6 py-3 rounded-2xl text-white"
            style={{
              background: `linear-gradient(90deg, ${COLORS.energeticFrom}, ${COLORS.energeticTo})`,
              boxShadow: "0 10px 30px rgba(255,140,0,0.18)"
            }}
          >
            Beginning of a Transformative Era.
          </h1>

          {/* Year Badge */}
          <p className="mt-2 text-sm sm:text-base text-[#222] font-medium max-w-3xl mx-auto leading-relaxed">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2"
              style={{ background: "#FFF4E6", color: COLORS.charcoal }}
            >
              Est. 2005
            </span>
          </p>

          {/* Main Message Card */}
          <div
            className="mt-6 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#F1F1F1]"
            style={{ boxShadow: "0 12px 30px rgba(20,20,20,0.06)" }}
          >
            <p className="text-[#333] text-sm sm:text-base leading-relaxed">
              Established in 2005, our core activity lies in assisting students to make
              the right choice with regard to pursuing Distance Education, Online
              Education, Regular Education & Overseas Education. We support students 
              from start to finish — from form filling to obtaining the degree 
              certificate.
              <br /><br />
              We also assist candidates in getting education loans with flexible options,
              ensuring every student finds a program that matches their profile,
              ambition and budget.
            </p>

            {/* Subheading Without CTA */}
          
          </div>

          {/* Closing Statement */}
          <p className="mt-6 text-sm text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            We are committed to providing meaningful educational guidance that aligns
            with your goals, ensuring clarity, confidence and direction in your
            academic journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs03;
