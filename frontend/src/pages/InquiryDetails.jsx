import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "./ContectForm";
const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  red: "#DC2626",
  redDark: "#B91C1C",
};
export default function InquiryDetails({
  title = "Admission Inquiry Form",
  phone = "+917887881060",
  waPhone = "917887881060",
  hours = "Mon–Sun, 10:00 AM – 7:00 PM",
  RightForm = ContactForm,
}) {
  const waText = encodeURIComponent(
    "Hi, I’m interested in online admissions. Please guide me."
  );

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 sm:py-10 lg:py-12 px-2 md:px-6 flex items-center justify-center"
      style={{ color: COLORS.text }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
        {/* Left: Information & CTAs */}
        <section
          className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 bg-gray-700 text-white"
          // style={{ background: COLORS.brand }}
        >
          <div className="w-full max-w-prose text-center">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              style={{ color: COLORS.red }}
            >
              Get Expert Admission Guidance
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#2B2B2B]/90 leading-relaxed">
              Complete Your Education Online Anytime, Anywhere, and at Any Age!
              <br className="hidden sm:block" />
              Find{" "}
              <span className="font-semibold">
                50+ Online Universities
              </span>{" "}
              across India and secure your admission with expert help.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6 justify-center items-center">
              {/* Quick Call */}
              <a
                href={`tel:${phone}`}
                aria-label="Call counsellor"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-4 py-2 sm:py-2 rounded-xl  text-white font-semibold text-base sm:text-base shadow-md border border:bg-[#22c55e] hover:shadow-lg hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
                style={{
                  backgroundColor: COLORS.red,
                  border: `2px solid ${COLORS.red}`,
                  boxShadow: `0 4px 12px rgba(220,38,38,0.3)`,
                }}
              >
                <span className="inline-flex items-center justify-center rounded-full">
                  <Phone
                    size={22}
                    className="group-hover:rotate-12 transition-transform duration-200 "
                  />
                </span>
                Quick Call
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${waPhone}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-4 py-2 sm:py-2 rounded-xl  text-white font-semibold text-base sm:text-base shadow-md border border:bg-[#22c55e] hover:shadow-lg hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.52 3.48A11.898 11.898 0 0 0 12 0C5.375 0 0 5.375 0 12c0 2.12.55 4.18 1.6 6.02L.01 24l6.12-1.6A11.92 11.92 0 0 0 12 24c6.625 0 12-5.375 12-12 0-3.2-1.25-6.2-3.48-8.52z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.18 14.4c-.27-.13-1.6-.79-1.84-.88-.25-.09-.43.04-.61.29-.19.25-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.11-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.06-.13-.61-1.46-.83-2-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.71.33-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.85c.14.19 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.27.18 1.75.11.54-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"
                    fill="#FFFFFF"
                  />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="mt-5 sm:mt-6">
              <p className="text-xs sm:text-sm text-[#2B2B2B]/80 mt-1">
                {hours}
              </p>
            </div>
          </div>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}
