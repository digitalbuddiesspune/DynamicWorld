import React from "react";

const Hero = () => {
  const mobileUrl =
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761898214/Blue_And_White_Creative_Study_Abroad_In_Korea_Instagram_Post_1920_x_600_px_1080_x_1080_px_2_azrwlc.png";

  const largeScreen =
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761805555/Blue_And_White_Creative_Study_Abroad_In_Korea_Instagram_Post_1920_x_600_px_j3obas.png";

  return (
    <div className="w-full">
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
