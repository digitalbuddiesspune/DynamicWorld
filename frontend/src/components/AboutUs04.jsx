import React from "react";
import FounderImage from "../assets/FounderImage.jpg";

const COLORS = { red: "#DC2626" };

export default function AboutUs04() {
  return (
    <section className="bg-[#F8F3ED] border-b border-[#D4D4D4] text-[#111827] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="inline-block text-3xl sm:text-4xl lg:text-4xl font-bold text-white px-6 py-3 rounded-lg" style={{ backgroundColor: "#313639" }}>
            Founder's Message
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A personal note from our founder — vision, values, and what we promise to every student.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image / Profile Card */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <div className="relative h-[520px] lg:h-[600px]">
                <img
                  src={FounderImage}
                  alt="Vinod Chaurasia - Founder & CEO"
                  className="w-full h-full object-cover"
                />

                <div className="absolute left-6 bottom-6 bg-black/90 text-white rounded-xl p-4 shadow-lg backdrop-blur-sm">
                  <p className="text-lg font-semibold">Vinod Chaurasia</p>
                  <p className="text-xs uppercase tracking-wide text-gray-200">Founder &amp; CEO</p>
                </div>

                <div className="absolute right-6 top-6 bg-white/90 rounded-full p-2 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-black bg-white hover:bg-black hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
                Learn More
              </a>

              <a href="https://wa.me/919820401375" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-black text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .02 5.35.02 12c0 2.12.55 4.19 1.59 6.01L0 24l6.15-1.6a11.93 11.93 0 0 0 5.84 1.48h.01c6.63 0 12-5.35 12-12 0-3.19-1.24-6.19-3.48-8.52Z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Message Card */}
          <div className="order-1 lg:order-2">
            <div className="h-full bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-200 flex flex-col">
              <div className="mb-6">
                <svg className="w-14 h-14 text-[#2B2B2B]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-[#2B2B2B] text-base sm:text-lg lg:text-xl leading-relaxed font-medium flex-1">
                “As a founder, I wholeheartedly believe that education is the cornerstone of personal growth, the key to unlocking professional opportunities, a driving force behind the pursuit of ambitious goals, and the legacy we leave in our rapidly evolving world. It's my mission to enlighten individuals about the often underestimated significance of education and encourage a collective awakening to its pivotal role in our lives, unveiling the countless benefits it holds for all of us.”
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#2B2B2B] flex items-center justify-center text-white font-semibold">V</div>
                <div>
                  <p className="text-sm font-semibold text-black">Vinod Chaurasia</p>
                  <p className="text-xs text-gray-500">Founder & CEO</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-1 w-24 bg-[#2B2B2B] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
