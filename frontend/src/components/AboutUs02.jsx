import React, { useMemo, useRef, useState } from "react";

const COLORS = { red: "#DC2626" };

const AboutUs02 = () => {
  const slides = useMemo(
    () => [
      {
        title: "Mission",
        accent: "#2B2B2B",
        iconColor: "#FFFFFF",
        panelBg: "#D4D4D4",
        headingClass: "text-[#2B2B2B]",
        bodyClass: "text-[#2B2B2B]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/target_nfb7jb.png"
            alt="Mission icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text: "Empower learners of all ages to unlock their full potential through accessible, high-quality educational courses.",
      },
      {
        title: "Vision",
        accent: "#2B2B2B",
        iconColor: "#FFFFFF",
        panelBg: "#D4D4D4",
        headingClass: "text-[#2B2B2B]",
        bodyClass: "text-[#2B2B2B]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/vision_jfwwme.png"
            alt="Vision icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text: "We aspire to be the go-to destination for learners seeking knowledge, skills, and inspiration.",
      },
      {
        title: "Values",
        accent: "#2B2B2B",
        iconColor: "#FFFFFF",
        panelBg: "#D4D4D4",
        headingClass: "text-[#2B2B2B]",
        bodyClass: "text-[#2B2B2B]",
        icon: (
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762766002/authenticity_llobou.png"
            alt="Values icon"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ),
        text: "Providing access to education for all, breaking down barriers, and ensuring inclusive learning for diverse communities.",
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

  const handlePrev = () =>
    scrollToIndex((active - 1 + slides.length) % slides.length);
  const handleNext = () => scrollToIndex((active + 1) % slides.length);

  return (
    <section
      id="about-us-mission"
      className="w-full bg-[#F8F3ED] border-b border-[#D4D4D4] text-[#2B2B2B]"
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Heading (optional minimal) */}
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-white px-4 py-2 rounded-lg tracking-[0.18em] uppercase bg-[#3e3e42]">
            What drives us
          </h2>
          {/* Controls visible on sm- only (mobile). Hidden on md+ where grid is shown. */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              aria-label="Previous"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border-2 border-[#D4D4D4] bg-[#D4D4D4] text-[#2B2B2B] hover:bg-[#B3B3B3] shadow-md"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={handleNext}
              className="h-9 w-9 rounded-full border-2 border-[#D4D4D4] bg-[#D4D4D4] text-[#2B2B2B] hover:bg-[#B3B3B3] shadow-md"
            >
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
                <div className="mx-1 rounded-2xl p-6 shadow-lg bg-[#D4D4D4]">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    {slide.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${slide.headingClass}`}>
                    {slide.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${slide.bodyClass}`}
                  >
                    {slide.text}
                  </p>
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
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === active ? "bg-[#2B2B2B] w-8" : "bg-[#D4D4D4]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {slides.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-8 shadow-xl bg-[#D4D4D4]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e1e1e]">
                {s.icon}
              </div>
              <h3 className={`text-lg font-semibold ${s.headingClass}`}>
                {s.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${s.bodyClass}`}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs02;
