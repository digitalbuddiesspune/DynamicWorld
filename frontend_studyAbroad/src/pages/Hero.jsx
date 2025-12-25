import React from "react";

const Hero = () => {
  const mobileUrl =
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764256883/studyAbroad_ayku52.png";

  const largeScreen =
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764092033/StudyAbroad_b7xuen.svg";

  return (
    <div className="w-full border-t border-gray-100">
      {/* Mobile Banner */}
      <img
        src={mobileUrl}
        alt="Study Abroad Mobile Banner"
        className="block md:hidden w-full object-cover"
      />

      {/* Laptop / Desktop Banner */}
      <img
        src={largeScreen}
        alt="Study Abroad Desktop Banner"
        className="hidden md:block w-full object-cover"
      />
    </div>
  );
};

export default Hero;
