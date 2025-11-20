import React from "react";

const featureHighlights = [
  {
    title: "100+ University Alliances",
    description:
      "Curated partnerships that unlock global pathways for our learners.",
  },
  {
    title: "Career Guidance",
    description:
      "Dedicated mentors curate roadmaps, application timelines, and portfolio prep tailored to each learner’s aspirations.",
  },
];

const serviceHighlights = [
  {
    title: "Online University Admissions",
    description: "Admission assistance for UGC-approved online universities.",
  },
  {
    title: "Career Counseling",
    description: "24/7 personalised counseling and course selection guidance.",
  },
  {
    title: "Placement Support",
    description: "100% placement guidance with post-admission follow-through.",
  },
  {
    title: "Distance & Online Education",
    description: "Enrollment support for distance learning and online degree programmes.",
  },
  {
    title: "Medical (MBBS) Admissions",
    description: "Expert mentoring for MBBS admissions in India and abroad.",
  },
  {
    title: "Refund and Return Policy",
    description: "Transparent financial commitments with a defined refund process.",
  },
  {
    title: "Regular Admissions",
    description: "End-to-end guidance for on-campus universities across India.",
  },
  {
    title: "Vocational Courses",
    description: "Admission help, practical training roadmaps, and placement support for vocational programmes.",
  },
];

const AboutUs01 = () => {
  const whatsappNumber = "917887881060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-12 left-8 h-48 w-48 rounded-full bg-[#FFC067]/30 blur-3xl md:h-56 md:w-56" />
        <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-[#3E96F4]/30 blur-3xl md:h-64 md:w-64" />
        <div className="absolute top-1/2 right-1/3 h-24 w-56 rotate-12 rounded-full bg-purple-300/40 blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#FFC067] to-[#FFB84D] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#2B2B2B] shadow-md">
            About Dynamic World
          </span>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl lg:text-[2.9rem]">
            Empowering learners with modern, thoughtful learning journeys.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#2B2B2B] sm:text-base font-medium">
            We help ambitious students experience flexible, globally relevant education.
            Our mentors and product teams choreograph every touchpoint with empathy, design thinking,
            and data-backed outcomes from discovery to graduation.
          </p>

          <dl className="mt-10 grid w-full gap-5 sm:grid-cols-2">
            {featureHighlights.map((item, idx) => (
              <div
                key={item.title}
                className={`rounded-2xl border-2 p-5 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${
                  idx === 0 
                    ? "bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border-blue-300" 
                    : "bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 border-pink-300"
                }`}
              >
                <dt className={`text-sm font-semibold ${idx === 0 ? "text-blue-700" : "text-purple-700"}`}>
                  {item.title}
                </dt>
                <dd className="mt-2 text-sm text-[#2B2B2B] font-medium">{item.description}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <button
              onClick={() => {
                const missionSection = document.querySelector("#about-us-mission");
                if (missionSection) {
                  missionSection.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  window.location.href = "/about-us#mission";
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:from-blue-700 hover:to-indigo-700"
            >
              Explore our mission
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366]  px-6 py-3 text-sm font-semibold text-[#2B2B2B] shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:from-[#22c55e] hover:to-[#1da851]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-[#22c55e]"
              >
                <path d="M13.601 2.326A7.932 7.932 0 0 0 8.002.001C3.584.001.002 3.584.002 8.001a7.93 7.93 0 0 0 1.112 4.04L.11 15.89l3.923-1.01a7.931 7.931 0 0 0 3.969 1.074h.001c4.418 0 8.001-3.582 8.001-8 0-2.137-.832-4.146-2.334-5.628zM8.002 14.6c-1.373 0-2.718-.37-3.883-1.07l-.278-.166-2.325.599.62-2.267-.181-.292A6.597 6.597 0 0 1 1.4 8.001c0-3.634 2.967-6.6 6.601-6.6 1.76 0 3.416.687 4.66 1.931a6.548 6.548 0 0 1 1.94 4.669c0 3.634-2.967 6.6-6.6 6.6zm3.615-4.765c-.197-.099-1.17-.578-1.352-.644-.181-.066-.313-.099-.445.099-.132.197-.51.644-.625.776-.115.132-.23.149-.427.05-.197-.099-.832-.307-1.586-.98-.586-.522-.982-1.165-1.098-1.362-.115-.198-.012-.305.087-.404.089-.088.197-.23.296-.346.099-.115.132-.198.197-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.16-.384-.324-.33-.445-.335-.115-.005-.248-.006-.38-.006s-.347.05-.53.248c-.182.197-.695.68-.695 1.658 0 .978.712 1.922.812 2.051.099.132 1.402 2.144 3.4 3.004.476.205.847.327 1.136.418.477.152.911.131 1.254.08.383-.057 1.17-.478 1.336-.94.165-.462.165-.857.115-.94-.05-.082-.182-.132-.38-.23z" />
              </svg>
              Schedule 1:1 counselling
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-[0.25em]">
            What we provide
          </h2>
          <p className="mt-2 text-base text-[#2B2B2B] font-medium">
            End-to-end support designed for every learner, whether they pursue online,
            distance, medical, or vocational pathways.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {serviceHighlights.map((item, idx) => {
            const colors = [
              "from-blue-100 to-indigo-100 border-blue-300",
              "from-purple-100 to-pink-100 border-purple-300",
              "from-pink-100 to-orange-100 border-pink-300",
              "from-indigo-100 to-blue-100 border-indigo-300",
              "from-yellow-100 to-orange-100 border-yellow-300",
              "from-green-100 to-teal-100 border-green-300",
              "from-cyan-100 to-blue-100 border-cyan-300",
              "from-violet-100 to-purple-100 border-violet-300",
            ];
            const colorClass = colors[idx % colors.length];
            return (
              <li
                key={item.title}
                className={`rounded-xl border-2 bg-gradient-to-br ${colorClass} px-5 py-4 shadow-md hover:shadow-xl transition hover:-translate-y-0.5`}
              >
                <p className="text-sm font-semibold text-[#2B2B2B]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[#2B2B2B]/80 font-medium">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs01;