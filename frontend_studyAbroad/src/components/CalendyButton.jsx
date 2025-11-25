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
        className="inline-flex items-center justify-center rounded-2xl bg-[#008080] px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#006666] gap-1 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
      >
        <PhoneCall className="h-5 w-5" aria-hidden /> Quick Call
      </button>
      <button
        onClick={handleVideoCounselling}
        className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#31393C] ring-1 ring-gray-200 bg-white hover:bg-gray-50 gap-1 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
      >
        <Video className="h-5 w-5" aria-hidden /> Video Counselling
      </button>
    </div>
  );
};

export default CalendyButton;
