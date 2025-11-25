import CalendyButton from "./CalendyButton";

// --- UI tokens ---
const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
};

// --- Small UI atoms ---
const Pill = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
    style={{ backgroundColor: COLORS.chipBg, color: COLORS.text }}
  >
    <span
      className="h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: COLORS.brand }}
    />
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#3E96F4]"
        fill="currentColor"
        aria-hidden
      >
        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
      </svg>
    </span>
    <span className="text-sm text-gray-700">{children}</span>
  </li>
);

// --- Tags list ---
const COUNTRIES = [
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Europe",
  "Canada",
  "Dubai",
];

export default function ImmigrationHome() {
  return (
    <section className="w-full text-[#31393C] bg-[#F8F3ED] border-b border-gray-200">
      {/* HEADER */}
      <header className="relative overflow-hidden bg-[#008080] text-white">
        {/* Decorative gradient & pattern */}
        <div className="absolute inset-0 opacity-80" aria-hidden>
          <div
            className="absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(62,150,244,0) 70%)",
            }}
          />
          <div
            className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(62,150,244,0) 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trusted Immigration & Skilled Jobs</Pill>
              <Pill>Consultation • Visa • Placement</Pill>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
              Immigration Services
            </h1>
            <p className="max-w-3xl text-white/90 text-sm sm:text-base">
              Dynamic World specializes in skilled job placements and visa
              services across the world’s most sought‑after
              destinations—offering transparent processes, profile‑first
              shortlisting, and end‑to‑end guidance.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {COUNTRIES.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="">
          {/* LEFT: Content */}
          <div className="">
            {/* Intro card */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5 sm:p-6">
              <div className="space-y-4 text-[13px] sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                <p>
                  We proudly offer a wide range of skilled job opportunities
                  across some of the most sought‑after destinations in the
                  world, including the
                  <span className="font-semibold text-[#31393C]">
                    {" "}
                    United Kingdom, Australia, New Zealand, Europe, Canada
                  </span>{" "}
                  and
                  <span className="font-semibold text-[#31393C]"> Dubai</span>.
                  Our platform connects talented individuals with employers
                  seeking specialized expertise—ensuring a seamless pathway to
                  exciting careers abroad.
                </p>
                <p>
                  As a certified consultancy, we deliver genuine and reliable
                  processing for visas and placements. Whether you’re advancing
                  your profession or exploring new horizons, we guide and
                  support you at every step.
                </p>
                <p>
                  With years of experience and a proven approach, we help you
                  work, study, or settle abroad with confidence—prioritizing
                  your profile for higher success rates.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[#31393C]">
                Why choose Dynamic World?
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <Bullet>
                  Certified immigration guidance with transparent process
                </Bullet>
                <Bullet>Skilled job placements aligned to your profile</Bullet>
                <Bullet>
                  End‑to‑end visa documentation &amp; clear timelines
                </Bullet>
                <Bullet>
                  Profile‑first shortlisting for higher success rates
                </Bullet>
              </ul>

              {/* CTA row */}
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2.5">
                <CalendyButton />
              </div>
            </div>

            {/* Countries chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <Pill key={`bottom-${c}`}>{c}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
