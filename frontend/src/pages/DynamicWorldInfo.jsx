import React from "react";

export const dynamicWorldData = [
  {
    companyName: "Dynamic World",
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
          "Shop No 4, Neelkanth Apartment, Opp. Ganpatrao, Near Hirasen Women College Corner, Shahupuri (W), Mumbai 400078",
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
        platformName: "Google Review Of Pune Office",
        url: "https://www.google.com/maps/place/Dynamic+World/@18.5180841,73.8766824,725m/data=!3m1!1e3!4m8!3m7!1s0x3bc2c1c9bbb1f6c5:0xbadcb0aacf08a6b8!8m2!3d18.518079!4d73.8792573!9m1!1b1!16s%2Fg%2F11rj8b3btk?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      {
        platformName: "Google Review Of Mumbai Office",
        url: "https://www.google.com/maps/place/Dynamic+World/@19.0844916,72.8326851,11563m/data=!3m2!1e3!5s0x3be7c62d26003237:0x7f3ce0ef67080f95!4m12!1m2!2m1!1sDynamic+World+mumbai!3m8!1s0x3be7b86844b7d671:0xc7ad9b179d1fdab9!8m2!3d19.0844916!4d72.9047829!9m1!1b1!15sChREeW5hbWljIFdvcmxkIG11bWJhaVoWIhRkeW5hbWljIHdvcmxkIG11bWJhaZIBFmVkdWNhdGlvbmFsX2NvbnN1bHRhbnSqAV8KDS9nLzExZHhkZnJ2NDYQASoRIg1keW5hbWljIHdvcmxkKAAyHxABIhstxyh5JL1z86bkaSNvCdqubygWuOIFlgMDESoyGBACIhRkeW5hbWljIHdvcmxkIG11bWJhaeABAA!16s%2Fg%2F11dxdfrv46?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      {
        platformName: "Google Review Of Indore Office",
        url: "https://www.google.com/maps/place/Dynamic+World+Education/@22.7288189,75.8853701,705m/data=!3m1!1e3!4m8!3m7!1s0x3962fdd039c282b1:0xa7774a39b49e2107!8m2!3d22.728814!4d75.887945!9m1!1b1!16s%2Fg%2F11v419ck5h?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
    ],
    foundedYear: 2005,
    industry: "Education and Career Counseling",
  },
];

// ---------- Styling constants (only styles changed — content untouched) ----------
const COLORS = {
  headerAccent: "#FFC067", // user requested
  headerAccentMid: "#FFB84D",
  headerGlow: "#FFD9A6",
  primary: "#3E96F4",
  text: "#2B2B2B",
  muted: "#6B7280",
  cardBg: "rgba(255, 255, 255, 0.9)",
};

const Chip = ({ children, tone = "indigo" }) => {
  // simple tone mapping to premium shades
  const toneMap = {
    indigo: { bg: "#EEF2FF", color: "#3730A3" },
    violet: { bg: "#F5EEFF", color: "#6D28D9" },
    gold: { bg: "#FFF6EB", color: "#A16207" },
  };
  const t = toneMap[tone] || toneMap.indigo;
  return (
    <span
      style={{ backgroundColor: t.bg, color: t.color }}
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1`}
    >
      {children}
    </span>
  );
};

const SectionCard = ({ title, subtitle, children, badge }) => (
  <section
    className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
    style={{ backgroundColor: COLORS.cardBg }}
  >
    <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <div>
        <h2
          className="text-base sm:text-lg font-semibold"
          style={{ color: COLORS["text"] }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-xs sm:text-sm mt-0.5"
            style={{ color: COLORS.muted }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {/* {badge} */}
    </div>
    <div className="px-4 sm:px-6 py-5">{children}</div>
  </section>
);

const LinkButton = ({ href, children, variant = "primary" }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles = {
    primary: {
      backgroundColor: COLORS.primary,
      color: "#FFFFFF",
      boxShadow: "0 6px 18px rgba(62,150,244,0.18)",
    },
    soft: {
      backgroundColor: "rgba(255,192,103,0.12)",
      color: "#7A4A06",
      border: `1px solid rgba(255,192,103,0.18)`,
    },
    outline: {
      backgroundColor: "transparent",
      color: COLORS.text,
      border: "1px solid rgba(44,44,44,0.08)",
    },
  };

  const style = styles[variant] || styles.primary;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={base}
      style={style}
    >
      {children}
    </a>
  );
};

const DynamicWorldInfo = () => {
  const data = dynamicWorldData[0];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-5 space-y-6  sm:space-y-8 pb-5 ">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl shadow-lg my-2 bg-[#FFC067]">
        <div className="absolute inset-0 opacity-12" />
        <div className="relative px-5 sm:px-8 py-7 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="min-w-0">
              <h1
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                style={{ color: COLORS.text }}
              >
                {data.companyName}{" "}
                <span className="text-lg sm:text-xl lg:text-2xl text-[#2B2B2B]">
                  {" "}
                  - Education Experts Since 2005
                </span>
              </h1>
              <p
                className="mt-1.5 text-sm sm:text-base"
                style={{ color: "rgba(43,43,43,0.85)" }}
              >
                {data.tagline}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Chip> {data.industry} </Chip>
                <Chip tone="gold"> Founded {data.foundedYear} </Chip>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* <LinkButton href="tel:+917887881060" variant="soft">
                📞 Call
              </LinkButton> */}
              <a
                href={`tel:${data.headOffice.phone}`}
                className="bg-transparent hover:bg-black/80 text-sm font-medium rounded-lg px-4 py-2 shadow-md text-[#2B2B2B] border border-black/80 transition-colors inline-flex items-center justify-center hover:text-white"
                style={{
                  boxShadow: "0 6px 18px rgba(62,150,244,0.18)",
                }}
              >
                Call 📞
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  data.headOffice.email
                )}`}
                className="bg-transparent hover:bg-black/80 text-sm font-medium rounded-lg px-4 py-2 shadow-md text-[#2B2B2B] border border-black/80 transition-colors inline-flex items-center justify-center hover:text-white"
                style={{
                  boxShadow: "0 6px 18px rgba(62,150,244,0.18)",
                }}
              >
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(0,0,0,0.06)",
                border: "1px solid rgba(62,150,244,0.06)",
              }}
            >
              <div className="text-xs uppercase tracking-wide text-[#2B2B2B] font-semibold">
                Admissions
              </div>
              <div
                className="mt-1 text-lg font-semibold"
                style={{ color: COLORS["text"] }}
              >
                {data.achievements.admissions}
              </div>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(0,0,0,0.06)",
                border: "1px solid rgba(62,150,244,0.06)",
              }}
            >
              <div className="text-xs uppercase tracking-wide text-[#2B2B2B] font-semibold">
                Counseled
              </div>
              <div
                className="mt-1 text-lg font-semibold"
                style={{ color: COLORS["text"] }}
              >
                {data.achievements.counseling}
              </div>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(0,0,0,0.06)",
                border: "1px solid rgba(62,150,244,0.06)",
              }}
            >
              <div className="text-xs uppercase tracking-wide text-[#2B2B2B] font-semibold">
                Universities
              </div>
              <div
                className="mt-1 text-lg font-semibold"
                style={{ color: COLORS["text"] }}
              >
                {data.achievements.universities}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <SectionCard title="About Dynamic World">
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.text }}
        >
          {data.description}
        </p>
      </SectionCard>

      {/* SERVICES */}
      <SectionCard
        title="Services"
        subtitle="End-to-end support across admissions, counseling, and placements"
        badge={<Chip tone="violet">{data.services.length} offerings</Chip>}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.services.map((service, i) => (
            <li
              key={i}
              className="group rounded-xl transition-colors p-4"
              style={{
                border: "1px solid rgba(43,43,43,0.06)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,249,240,0.95))",
              }}
            >
              <div
                className="font-semibold group-hover:text-opacity-95"
                style={{ color: COLORS.text }}
              >
                {service.name}
              </div>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(43,43,43,0.8)" }}
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
            <p style={{ color: COLORS.text }}>{data.headOffice.address}</p>
            <p style={{ color: "rgba(43,43,43,0.85)" }}>
              📍 {data.headOffice.city}
            </p>
            <p style={{ color: "rgba(43,43,43,0.85)" }}>
              📞 {data.headOffice.phone}
            </p>
            <p style={{ color: "rgba(43,43,43,0.85)" }}>
              ✉️ {data.headOffice.email}
            </p>
          </div>
        </SectionCard>

        {/* Branch Offices */}
        <SectionCard
          title="Branch Offices"
          subtitle="Across India"
          badge={<Chip>{data.branchOffices.length} locations</Chip>}
        >
          <ul className="space-y-2 text-sm sm:text-base">
            {data.branchOffices.map((office, i) => (
              <li
                key={i}
                className="leading-relaxed"
                style={{ color: COLORS.text }}
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
          <p style={{ color: COLORS.text }}>{data.authorizedCounselors}</p>

          <div className="mt-4">
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: COLORS.muted }}
            >
              Social Links
            </div>
            <div className="flex flex-wrap gap-2">
              <LinkButton href={data.socialLinks.youtube} variant="outline">
                YouTube
              </LinkButton>
              <LinkButton href={data.socialLinks.instagram} variant="outline">
                Instagram
              </LinkButton>
              <LinkButton href={data.socialLinks.linkedin} variant="outline">
                LinkedIn
              </LinkButton>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* REVIEWS */}
      <SectionCard title="Reviews" subtitle="What learners are saying">
        <div className="space-y-3 flex flex-wrap gap-2 lg:gap-5 ">
          {data.reviewPlatforms.map((item) => (
            <div className="" key={item.platformName}>
              <LinkButton href={item.url} variant="soft">
                {item.platformName}
              </LinkButton>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* META */}
      <SectionCard title="Additional Info">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div
            className="rounded-xl p-4"
            style={{
              border: "1px solid rgba(43,43,43,0.06)",
              background: "rgba(255,255,255,0.96)",
            }}
          >
            <div
              className="text-xs uppercase tracking-wide"
              style={{ color: COLORS.muted }}
            >
              Industry
            </div>
            <div className="mt-1 font-semibold" style={{ color: COLORS.text }}>
              {data.industry}
            </div>
          </div>
          <div
            className="rounded-xl p-4"
            style={{
              border: "1px solid rgba(43,43,43,0.06)",
              background: "rgba(255,255,255,0.96)",
            }}
          >
            <div
              className="text-xs uppercase tracking-wide"
              style={{ color: COLORS.muted }}
            >
              Founded
            </div>
            <div className="mt-1 font-semibold" style={{ color: COLORS.text }}>
              {data.foundedYear}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default DynamicWorldInfo;
