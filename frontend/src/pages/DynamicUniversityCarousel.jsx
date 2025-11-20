import React from "react";
import Slider from "react-slick";
import { UniversityLogos } from "./logos.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import online_education_banner from "../assets/online_education_banner.png";
import online_education_banner_mobile from "../assets/online_education_banner_mobile.png";

// Tailwind-friendly custom arrows (shown on md+)
const ArrowBase = ({ onClick, dir }) => (
  <button
    type="button"
    aria-label={dir === "prev" ? "Previous logos" : "Next logos"}
    onClick={onClick}
    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition
      ${dir === "prev" ? "left-2" : "right-2"}`}
  >
    <span className="text-gray-700 text-xl" aria-hidden>
      {dir === "prev" ? "❮" : "❯"}
    </span>
  </button>
);

const PrevArrow = (props) => <ArrowBase {...props} dir="prev" />;
const NextArrow = (props) => <ArrowBase {...props} dir="next" />;

export default function DynamicUniversityCarousel() {
 const settings = {
  // ✅ Mobile-first baseline
  mobileFirst: true,
  dots: false,
  infinite: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0, // continuous scroll
  cssEase: "linear",

  // 👉 Default for small screens
  slidesToShow: 5,       // ← your 2.5 on mobile
  slidesToScroll: 1,
  swipeToSlide: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  accessibility: true,
  arrows: false,           // hide arrows on mobile

  // Custom arrows (we'll enable them at md+)
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  // ✅ Now scale up with MIN-width breakpoints
  responsive: [
    {
      breakpoint: 480,     // ≥480px
      settings: {
        slidesToShow: 3,   // small phones in landscape / small tablets
      },
    },
    {
      breakpoint: 768,     // ≥768px (md)
      settings: {
        slidesToShow: 4,
        arrows: true,      // show arrows from md+
      },
    },
    {
      breakpoint: 1024,    // ≥1024px (lg)
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    },
    {
      breakpoint: 1280,    // ≥1280px (xl)
      settings: {
        slidesToShow: 6,
        arrows: true,
      },
    },
  ],
};

  return (
    <section
      className="w-full bg-gradient-to-b from-[#EEF1F4] to-[#EDEEEB] py-4 sm:py-6 lg:py-8" // ↓ reduced vertical padding
      aria-labelledby="uni-carousel-title"
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6">
        {" "}
        {/* ↓ tighter side padding */}
        {/* Heading */}
        <header className="text-center mb-4 sm:mb-6">
          <h1
            id="uni-carousel-title"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#2B2B2B]"
          >
            Top Online Universities
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#2B2B2B]">
            Trusted institutions offering UGC-approved online programs
          </p>
        </header>
        {/* Carousel with edge-fade */}
        <div className="">
          <Slider {...settings}>
            {UniversityLogos.map((logo, idx) => (
              <div className="flex" key={idx}>
                <img
                  loading="lazy"
                  src={logo.image}
                  alt={logo.name}
                  className="px-2"
                />
              </div>
            ))}
          </Slider>
        </div>
     
      </div>
    </section>
  );
}
