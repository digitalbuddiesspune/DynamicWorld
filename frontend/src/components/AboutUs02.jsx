import React, { useMemo, useRef, useState } from "react";

const AboutUs02 = () => {
  const slides = useMemo(
    () => [
      {
        title: "Mission",
        accent: "#FF6B6B",
        iconColor: "#FFFFFF",
        panelBg: "#FFE3E3",
        headingClass: "text-[#1A1F3B]",
        bodyClass: "text-[#414866]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/target_nfb7jb.png"
            alt="Mission icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text:
          "Empower learners of all ages to unlock their full potential through accessible, high-quality educational courses.",
      },
      {
        title: "Vision",
        accent: "#4C6EF5",
        iconColor: "#FFFFFF",
        panelBg: "#E0E7FF",
        headingClass: "text-[#1A1F3B]",
        bodyClass: "text-[#414866]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/vision_jfwwme.png"
            alt="Vision icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text:
          "We aspire to be the go-to destination for learners seeking knowledge, skills, and inspiration.",
      },
      {
        title: "Values",
        accent: "#2EC4B6",
        iconColor: "#0B0D17",
        panelBg: "#CCF5EE",
        headingClass: "text-[#0B0D17]",
        bodyClass: "text-[#225E59]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/authenticity_llobou.png"
            alt="Values icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text:
          "Providing access to education for all, breaking down barriers, and ensuring inclusive learning for diverse communities.",
      },
    ],
    []
  );

  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index) => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const width = container.clientWidth;
    container.scrollTo({ left: width * index, behavior: "smooth" });
    setActive(index);
  };

  const handlePrev = () => scrollToIndex((active - 1 + slides.length) % slides.length);
  const handleNext = () => scrollToIndex((active + 1) % slides.length);

  return (
    <section id="about-us-mission" className="w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Heading (optional minimal) */}
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-[0.18em] uppercase">
            What drives us
          </h2>
          {/* Controls visible on sm- only (mobile). Hidden on md+ where grid is shown. */}
          <div className="flex items-center gap-2 sm:hidden">
            <button aria-label="Previous" onClick={handlePrev} className="h-9 w-9 rounded-full border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 shadow-md">
              ‹
            </button>
            <button aria-label="Next" onClick={handleNext} className="h-9 w-9 rounded-full border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 shadow-md">
              ›
            </button>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
            onScroll={(e) => {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / el.clientWidth);
              if (idx !== active) setActive(idx);
            }}
          >
            {slides.map((slide) => (
              <div key={slide.title} className="min-w-full snap-start px-1">
                <div
                  className="mx-1 rounded-2xl p-6 shadow-lg"
                  style={{ backgroundColor: slide.panelBg }}
                >
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: slide.accent, color: slide.iconColor }}
                  >
                    {slide.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${slide.headingClass}`}>{slide.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${slide.bodyClass}`}>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === active ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8" : "bg-purple-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {slides.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-8 shadow-xl"
              style={{ backgroundColor: s.panelBg }}
            >
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: s.accent, color: s.iconColor }}
              >
                {s.icon}
              </div>
              <h3 className={`text-lg font-semibold ${s.headingClass}`}>{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${s.bodyClass}`}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs02;
