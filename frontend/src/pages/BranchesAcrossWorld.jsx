import React from "react";
import { MapPin, Phone } from "lucide-react";

const BranchesWorld = () => {
  const branches = [
    {
      name: "Ahmedabad",
      location: "Suraj Complex (Drive-In Road)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788525/andra_pradesh_gk79mj.webp",
    },
    {
      name: "Raipur",
      location: "Ashirwad Tower (G.E. Road)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788538/raipur_upopy5.webp",
    },
    {
      name: "Chennai",
      location: "Anandha Building (Mamballam West)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788528/Chennai_yguqg7.webp",
    },
    {
      name: "Kerala",
      location: "Thangassery (Kollam)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788534/Kerala_bpglzg.webp",
    },
    {
      name: "Andhra Pradesh",
      location: "Annamaiah (Tirupati)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788525/andra_pradesh_gk79mj.webp",
    },
    {
      name: "Bangalore",
      location: "Opening Shortly",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788525/bangalore_oaxse9.webp",
    },
    {
      name: "Gurgaon",
      location: "Sector 39 (Gurgaon)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788532/Gurgaon_h9mqgc.webp",
    },
    {
      name: "Faridabad",
      location: "5M-116 NIT (Faridabad)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788531/Faridabad_micidl.webp",
    },
    {
      name: "Canada",
      location: "Toronto (ON)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788527/canada_ewhi0s.webp",
    },
    {
      name: "Oman",
      location: "AL Nahdah (Muscat)",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788536/Oman_zkxobn.webp",
    },
    {
      name: "Dubai",
      location: "Opening Shortly",
      img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760788530/dubai_qggssx.webp",
    },
  ];

  return (
    // Responsive Padding and Background
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 py-12 sm:py-16 px-4 text-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Adjusted text and spacing for better mobile flow */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Icon Box */}
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC067] via-[#FFB84D] to-[#FFD9A6] rounded-xl shadow-lg mx-auto mb-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B2B2B]" />
          </div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Branches Across The World
          </h2>
          {/* Subtitle */}
          <p className="text-[#2B2B2B] text-sm sm:text-base mb-4 font-medium">
            Connecting communities globally with excellence
          </p>
          {/* Helpline/Call to Action */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#FFC067] to-[#FFB84D] px-4 sm:px-6 py-2 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <Phone className="w-4 h-4 text-[#2B2B2B]" />
            <span className="text-[#2B2B2B] text-sm font-medium">
              Helpline:
            </span>
            <a
              href="tel:+917887881060"
              className="text-[#2B2B2B] font-bold text-sm sm:text-base hover:underline"
            >
              (+91) 788 788 1060
            </a>
          </div>
        </div>

        {/* Branch Cards Grid: Adjusted grid for better scaling 🔄 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 border-2 border-blue-200 rounded-lg overflow-hidden flex flex-col items-center p-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-purple-300"
            >
              {/* Image Container: Kept aspect ratio but made it responsive */}
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-md">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="max-h-14 sm:max-h-16 w-auto object-contain"
                />
              </div>

              {/* Content: Adjusted text sizes for optimal fit */}
              <div className="mt-2 text-center w-full">
                <h3 className="text-sm sm:text-base font-semibold text-[#2B2B2B] truncate">
                  {branch.name}
                </h3>
                {/* Location: Adjusted font and icon size */}
                <div className="flex justify-center items-center gap-1 mt-1 text-xs text-[#2B2B2B]/80">
                  <MapPin className="w-3 h-3 text-purple-600 flex-shrink-0" />
                  <p className="truncate px-1" title={branch.location}>
                    {branch.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-[#64748b] text-xs sm:text-sm">
            Expanding our reach to serve you better worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchesWorld;
