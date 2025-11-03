import { useEffect, useMemo, useRef, useState, useCallback } from "react";

const AUTOPLAY_MS = 10000; // 10 seconds

const studyAbroadLarge01 =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761805555/Blue_And_White_Creative_Study_Abroad_In_Korea_Instagram_Post_1920_x_600_px_j3obas.png";
const vocationalLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761715673/Black_Professional_School_Admission_Banner_1920_x_600_px_fulwxy.svg";
const careerLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761715481/Blue_Professional_Business_Visa_Service_Promotion_Web_Banner_1920_x_600_px_sgebxp.svg";
const universitiesLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761627956/Blue_Simple_Education_Coaching_Banner_Landscape_1920_x_600_px_himbva.svg";
const appostileLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1762175348/Purple_and_Yellow_Shapes_Middle_School_Back_to_School_Banner_1920_x_600_px_i3l3c2.png";

const studyAbroadMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761897001/Black_Professional_School_Admission_Banner_1920_x_600_px_1080_x_1080_px_sj7q9g.svg";
const universitiesMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761897010/Blue_Professional_Business_Visa_Service_Promotion_Web_Banner_1920_x_600_px_1080_x_1080_px_albamu.svg";
const careerMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761897003/Purple_and_Yellow_Shapes_Middle_School_Back_to_School_Banner_1920_x_600_px_1080_x_1080_px_puml4q.svg";
const career =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761898214/Blue_And_White_Creative_Study_Abroad_In_Korea_Instagram_Post_1920_x_600_px_1080_x_1080_px_2_azrwlc.png";
const vocationalMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1762175503/Blue_Simple_Education_Coaching_Banner_Landscape_1920_x_600_px_1080_x_1080_px_qdxvcu.svg";

const MobileScreenBanners = [
  vocationalMobile,
  studyAbroadMobile,
  career,
  careerMobile,
  universitiesMobile,
];

const LargeScreenBanners = [
  universitiesLarge,
  vocationalLarge,
  studyAbroadLarge01,
  careerLarge,
  appostileLarge,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const [isLarge, setIsLarge] = useState(
    typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
  );

  const touchActive = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const SWIPE_THRESHOLD = 40;

  const banners = useMemo(
    () => (isLarge ? LargeScreenBanners : MobileScreenBanners),
    [isLarge]
  );

  // Detect screen size changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsLarge(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Clear existing timer
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Schedule next slide
  const scheduleNext = useCallback(() => {
    clearTimer();
    if (isHovering || touchActive.current) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, AUTOPLAY_MS);
  }, [banners.length, isHovering]);

  // Controls
  const nextBanner = useCallback(() => {
    clearTimer();
    setCurrent((prev) => (prev + 1) % banners.length);
    scheduleNext();
  }, [banners.length, scheduleNext]);

  const prevBanner = useCallback(() => {
    clearTimer();
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    scheduleNext();
  }, [banners.length, scheduleNext]);

  const gotoIndex = (i) => {
    clearTimer();
    setCurrent(i);
    scheduleNext();
  };

  // Autoplay start + cleanup
  useEffect(() => {
    scheduleNext();
    return () => clearTimer();
  }, [current, scheduleNext]);

  // Swipe gestures
  const onTouchStart = (e) => {
    if (!e.touches?.length) return;
    touchActive.current = true;
    clearTimer();
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    if (!e.touches?.length) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      dx < 0 ? nextBanner() : prevBanner();
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const onTouchEnd = () => {
    touchActive.current = false;
    scheduleNext();
  };

  return (
    <section
      className="relative w-full overflow-hidden h-[60vh] lg:h-[70vh]"
      onMouseEnter={() => {
        setIsHovering(true);
        clearTimer();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        scheduleNext();
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevBanner}
        aria-label="Previous"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={nextBanner}
        aria-label="Next"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => gotoIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
