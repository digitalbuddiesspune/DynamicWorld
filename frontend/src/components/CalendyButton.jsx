import { PhoneCall, Video } from "lucide-react";

const CalendyButton = () => {
  // Handle Call
  const handleQuickCall = () => {
    window.location.href = "tel:+917887881060";
  };

  // Handle WhatsApp Video Counselling
  const handleVideoCounselling = () => {
    window.open("https://wa.me/917887881060", "_blank");
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* Quick Call */}
      <button
        onClick={handleQuickCall}
        className="
    inline-flex items-center gap-2 rounded-2xl 
    px-4 py-2 text-sm sm:text-base font-semibold
     text-white
    bg-[#008080]  hover:shadow transform hover:-translate-y-0.5 transition-all duration-200 hover:cursor-pointer
  "
      >
        <PhoneCall className="h-5 w-5" /> Quick Call
      </button>

      <button
        onClick={handleVideoCounselling}
        className="
    inline-flex items-center gap-2 rounded-2xl 
    px-4 py-2 text-sm sm:text-base font-semibold
    border border-[#2B2B2B]/40 text-[#2B2B2B]
    bg-white/70 backdrop-blur
    hover:bg-[#F5F5F5] hover:shadow
    transform hover:-translate-y-0.5 transition-all duration-200 hover:cursor-pointer
  "
      >
        <Video className="h-5 w-5" /> Video Counselling
      </button>
    </div>
  );
};

export default CalendyButton;
