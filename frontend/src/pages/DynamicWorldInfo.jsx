import { Mail, Map, MapPin, Phone, Pin } from "lucide-react";
import React from "react";

// New theme (no blue)
// Primary accent: Emerald / Amber / Red
const THEME_COLORS = {
  // Accent colors
  emerald: "#10B981", // Primary green accent
  amber: "#F59E0B", // Secondary amber/accent (used for CTAs)
  red: "#DC2626", // Red for headings/accents

  // Greys and neutrals
  warmGrey: "#6B7280", // Medium warm grey for muted text
  slate: "#374151", // Dark slate for primary text

  // Light neutrals
  lightGrey: "#F3F4F6", // Very light grey background
  panelGrey: "#F8FAFC", // Slightly off-white panels

  // Black / white
  black: "#000000",
  white: "#FFFFFF",

  // Borders
  border: "#E6E7EA",

  // Muted text
  textMuted: "#6B7280",
};

export const dynamicWorldData = [
  {
    companyName: "DYNAMIC WORLD",
    website: "https://dynamicworld.in/",
    tagline: "",
    description:
      "Dynamic World is an educational consultancy platform offering access to 50+ online universities with 24/7 counseling, free career guidance, and 100% placement support. They specialize in distance and online education and are recognized for helping students enroll in UGC-approved programs across India.",
    achievements: {
      admissions: "12,000+ admissions completed",
      counseling: "100,000+ students counseled",
      universities: "50+ partnered online universities",
    },
    services: [
      {
        name: "Online University Admissions",
        details:
          "Provides admission assistance for UGC-approved online universities.",
      },
      {
        name: "Career Counseling",
        details: "24/7 personalized counseling and course selection guidance.",
      },
      {
        name: "Placement Support",
        details: "Offers 100% placement guidance and post-admission support.",
      },
      {
        name: "Distance & Online Education",
        details:
          "Helps students enroll in distance learning and online degree programs.",
      },
      {
        name: "Medical (MBBS) Admissions",
        details:
          "Guides students through MBBS course admissions in India and abroad.",
      },
      {
        name: "Refund and Return Policy",
        details:
          "Maintains financial transparency through a defined return and refund policy.",
      },
      {
        name: "Regular Admissions",
        details:
          "Facilitates admissions to top on-campus universities across India with complete application-to-enrollment support.",
      },
      {
        name: "Vocational Courses",
        details:
          "Supports skill-based learning pathways with admission assistance, practical training guidance, and industry-aligned placement support for vocational programs.",
      },
    ],
    headOffice: {
      city: "Pune",
      address:
        "Building No 506, 5th Floor, Sterling Centre, Opposite Arora Tower, Camp, Pune, Maharashtra",
      phone: "+91 9820401375",
      email: "Dynamicworld.edu@gmail.com",
    },
    branchOffices: [
      {
        city: "Mumbai",
        state: "Maharashtra",
        address:
          "Shop No. 8, First Floor, Neelkant Shopping Centre, Camalane, nr. P N Doshi Womens College Corner, Ghatkopar West, Mumbai, Maharashtra 400086",
      },

      {
        city: "Indore",
        state: "Madhya Pradesh",
        address:
          "Office No 617, Gham Plaza, AB Road, Near Industry House, Old Palasia, Indore 452006",
      },

      {
        city: "Surat",
        state: "Gujarat",
      },
    ],
    authorizedCounselors:
      "Authorized counselors and associates are spread across multiple cities in India and abroad.",
    socialLinks: {
      youtube: "https://www.youtube.com/channel/UCOZRvMEWHmEKvKemIuF1gdg",
      instagram: "https://www.instagram.com/dynamicworld.in/",
      linkedin: "https://in.linkedin.com/company/dynamic-world",
    },
    reviewPlatforms: [
      {
        platformName: "Just Dial",
        url: "https://www.justdial.com/Pune/Dynamic-World-Oppoto-Arora-Tower-Camp/020PXX20-XX20-210804145556-K7R4_BZDET",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      {
        platformName: "Pune — Google Reviews",
        url: "https://www.google.com/maps/place/Dynamic+World/@18.5180841,73.8766824,725m/data=!3m1!1e3!4m8!3m7!1s0x3bc2c1c9bbb1f6c5:0xbadcb0aacf08a6b8!8m2!3d18.518079!4d73.8792573!9m1!1b1!16s%2Fg%2F11rj8b3btk?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      {
        platformName: "Mumbai — Google Reviews",
        url: "https://www.google.com/maps/place/Dynamic+World/@19.0844916,72.8326851,11563m/data=!3m2!1e3!5s0x3be7c62d26003237:0x7f3ce0ef67080f95!4m12!1m2!2m1!1sDynamic+World+mumbai!3m8!1s0x3be7b86844b7d671:0xc7ad9b179d1fdab9!8m2!3d19.0844916!4d72.9047829!9m1!1b1!15sChREeW5hbWljIFdvcmxkIG11bWJhaVoWIhRkeW5hbWljIHdvcmxkIG11bWJhaZIBFmVkdWNhdGlvbmFsX2NvbnN1bHRhbnSqAV8KDS9nLzExZHhkZnJ2NDYQASoRIg1keW5hbWljIHdvcmxkIG11bWJhaeABAA!16s%2Fg%2F11dxdfrv46?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      {
        platformName: "Indore — Google Reviews",
        url: "https://www.google.com/maps/place/Dynamic+World+Education/@22.7288189,75.8853701,705m/data=!3m1!1e3!4m8!3m7!1s0x3962fdd039c282b1:0xa7774a39b49e2107!8m2!3d22.728814!4d75.887945!9m1!1b1!16s%2Fg%2F11v419ck5h?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
    ],
    foundedYear: "Empowering Students Since 2005",
    industry: "Your Trusted Partner in Higher Education",
  },
];

// Map shorthand to THEME_COLORS for readability
const C = THEME_COLORS;

const Chip = ({ children }) => {
  return (
    <span className="text-xs border px-2 py-1 rounded-full">{children}</span>
  );
};

const SectionCard = ({ title, subtitle, children, badge }) => (
  <section className="rounded-2xl shadow-sm overflow-hidden bg-white">
    <div className="px-4 sm:px-6 py-4 flex items-center justify-between border-b bg-[#0F8F8F] border-gray-200 ">
      <div className="">
        <h2 className="text-base sm:text-lg font-semibold text-white ">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm mt-0.5 text-white">{subtitle}</p>
        )}
      </div>
    </div>
    <div className="px-4 sm:px-6 py-5">{children}</div>
  </section>
);

const DynamicWorldInfo = () => {
  const data = dynamicWorldData[0];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-5 space-y-6 sm:space-y-8 pt-2 pb-5 bg-[#F8F3ED]">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl  shadow-md bg-[#008080]">
        <div className="relative px-5 sm:px-8 py-7 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="min-w-0">
              <h1 className="text-xl text-white sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                {data.companyName}{" "}
                <span className="text-lg sm:text-xl lg:text-2xl font-normal">
                  {" "}
                  - Education Experts Since 2005
                </span>
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] text-[#31393C] border border-[#E5E5E5]">
                  {data.industry}
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] text-[#31393C] border border-[#E5E5E5]">
                  Founded {data.foundedYear}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${data.headOffice.phone}`}
                className="
      text-sm font-medium rounded-lg px-4 py-2
      bg-[#FFFFFF] text-[#31393C]
      border border-[#E5E5E5]
      shadow-sm hover:shadow-md
      transition-all inline-flex items-center justify-center
      hover:-translate-y-0.5
    "
              >
                <Phone size={16} /> <span className="pl-1">Call</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  data.headOffice.email
                )}`}
                className="
      text-sm font-medium rounded-lg px-4 py-2
      bg-[#FFFFFF] text-[#31393C]
      border border-[#E5E5E5]
      shadow-sm hover:shadow-md
      transition-all inline-flex items-center justify-center
      hover:-translate-y-0.5
    "
              >
                {/* <Email size={18} /> Email */}
                <Mail size={16} /> <span className="pl-1">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ACHIEVEMENTS */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Admissions */}
        <div className="rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
          <div className="text-xs uppercase tracking-wide font-semibold text-[#6F7173]">
            Admissions
          </div>
          <div className="mt-1 text-lg font-semibold text-[#31393C]">
            {data.achievements.admissions}
          </div>
        </div>

        {/* Counseled */}
        <div className="rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
          <div className="text-xs uppercase tracking-wide font-semibold text-[#6F7173]">
            Counseled
          </div>
          <div className="mt-1 text-lg font-semibold text-[#31393C]">
            {data.achievements.counseling}
          </div>
        </div>

        {/* Universities */}
        <div className="rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
          <div className="text-xs uppercase tracking-wide font-semibold text-[#6F7173]">
            Universities
          </div>
          <div className="mt-1 text-lg font-semibold text-[#31393C]">
            {data.achievements.universities}
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <SectionCard title="About Dynamic World">
        <p className="text-sm sm:text-base leading-relaxed">
          {data.description}
        </p>
      </SectionCard>

      {/* SERVICES */}
      <SectionCard
        title="Services"
        subtitle="End-to-end support across admissions, counseling, and placements"
        badge={<Chip tone="red">{data.services.length} offerings</Chip>}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.services.map((service, i) => (
            <li
              key={i}
              className="group rounded-xl transition-all duration-200 cursor-pointer p-4 hover:-translate-y-1"
              style={{
                border: `1px solid ${C.border}`,
                backgroundColor: C.white,
                boxShadow: `0 2px 4px rgba(0,0,0,0.06)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.panelGrey;
                e.currentTarget.style.borderColor = C.red;
                e.currentTarget.style.boxShadow = `0 6px 18px rgba(220,38,38,0.15)`;
                const title = e.currentTarget.querySelector(".service-title");
                const details =
                  e.currentTarget.querySelector(".service-details");
                if (title) title.style.color = C.red;
                if (details) details.style.color = C.slate;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.white;
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.06)`;
                const title = e.currentTarget.querySelector(".service-title");
                const details =
                  e.currentTarget.querySelector(".service-details");
                if (title) title.style.color = C.slate;
                if (details) details.style.color = C.textMuted;
              }}
            >
              <div
                className="font-semibold service-title transition-colors"
                style={{ color: C.slate }}
              >
                {service.name}
              </div>
              <p
                className="mt-1 text-sm service-details transition-colors"
                style={{ color: C.textMuted }}
              >
                {service.details}
              </p>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* OFFICES (GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Head Office */}
        <SectionCard title="Head Office" subtitle={data.headOffice.city}>
          <div className="space-y-2 text-sm sm:text-base">
            <p style={{ color: C.slate }}>{data.headOffice.address}</p>
            <p style={{ color: C.textMuted }} className="flex justify-start items-center space-x-2">
              <MapPin size={16} /> <span className="pl-1">{data.headOffice.city}</span>
            </p>
            <p
              style={{ color: C.textMuted }}
              className="flex justify-start  items-center space-x-2"
            >
              {" "}
              <Phone size={16} /> <span className="pl-1">{data.headOffice.phone}</span>
            </p>
            <p
              style={{ color: C.textMuted }}
              className="flex justify-start  items-center space-x-2"
            >
              {" "}
              <Mail size={16} /> <span className="pl-1">{data.headOffice.email}</span>
            </p>
          </div>
        </SectionCard>

        {/* Branch Offices */}
        <SectionCard
          title="Branch Offices"
          subtitle="Across India"
          badge={
            <Chip tone="amber">{data.branchOffices.length} locations</Chip>
          }
        >
          <ul className="space-y-2 text-sm sm:text-base">
            {data.branchOffices.map((office, i) => (
              <li
                key={i}
                className="leading-relaxed"
                style={{ color: C.slate }}
              >
                <span className="font-medium">{office.city}</span>
                {office.state ? <span>, {office.state}</span> : null}
                {office.address ? <span> — {office.address}</span> : null}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Counselors & Social */}
        <SectionCard title="Authorized Counselors" subtitle="Availability">
          <p style={{ color: C.slate }}>{data.authorizedCounselors}</p>

          <div className="mt-4">
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: C.textMuted }}
            >
              Social Links
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={data.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: C.white,
                  color: C.slate,
                  border: `1px solid ${C.border}`,
                  boxShadow: `0 2px 4px rgba(0,0,0,0.06)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.red;
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.borderColor = C.red;
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(220,38,38,0.25)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.white;
                  e.currentTarget.style.color = C.slate;
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.06)`;
                }}
              >
                YouTube
              </a>
              <a
                href={data.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: C.white,
                  color: C.slate,
                  border: `1px solid ${C.border}`,
                  boxShadow: `0 2px 4px rgba(0,0,0,0.06)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.red;
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.borderColor = C.red;
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(220,38,38,0.25)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.white;
                  e.currentTarget.style.color = C.slate;
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.06)`;
                }}
              >
                Instagram
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: C.white,
                  color: C.slate,
                  border: `1px solid ${C.border}`,
                  boxShadow: `0 2px 4px rgba(0,0,0,0.06)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.red;
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.borderColor = C.red;
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(220,38,38,0.25)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.white;
                  e.currentTarget.style.color = C.slate;
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.06)`;
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* REVIEWS */}
      <SectionCard title="Reviews" subtitle="What learners are saying">
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {data.reviewPlatforms.map((item) => (
            <a
              key={item.platformName}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: C.white,
                color: C.slate,
                border: `1px solid ${C.border}`,
                boxShadow: `0 2px 4px rgba(0,0,0,0.08)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.red;
                e.currentTarget.style.color = C.white;
                e.currentTarget.style.borderColor = C.red;
                e.currentTarget.style.boxShadow = `0 6px 18px rgba(220,38,38,0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.white;
                e.currentTarget.style.color = C.slate;
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.08)`;
              }}
            >
              {item.platformName}
            </a>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default DynamicWorldInfo;
