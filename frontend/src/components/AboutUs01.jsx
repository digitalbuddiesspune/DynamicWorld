import React from "react";

const COLORS = { red: "#DC2626" };

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
    description:
      "Enrollment support for distance learning and online degree programmes.",
  },
  {
    title: "Medical (MBBS) Admissions",
    description: "Expert mentoring for MBBS admissions in India and abroad.",
  },
  {
    title: "Refund and Return Policy",
    description:
      "Transparent financial commitments with a defined refund process.",
  },
  {
    title: "Regular Admissions",
    description: "End-to-end guidance for on-campus universities across India.",
  },
  {
    title: "Vocational Courses",
    description:
      "Admission help, practical training roadmaps, and placement support for vocational programmes.",
  },
];

const AboutUs01 = () => {
  const whatsappNumber = "917887881060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative overflow-hidden  bg-[#F8F3ED] text-[#1A1A1A]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-12 left-8 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-black/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 h-24 w-56 rotate-12 rounded-full bg-black/5 blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#3e3e42] text-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] shadow-md">
            About Dynamic World
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-[2.9rem] leading-tight max-w-3xl" style={{color:COLORS.red}}>
            Empowering learners with modern, thoughtful learning journeys.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed sm:text-base font-medium text-[#2B2b2b]">
            We help ambitious students experience flexible, globally relevant
            education. Our mentors and product teams choreograph every
            touchpoint with empathy, design thinking, and data-backed outcomes
            from discovery to graduation.
          </p>

          <dl className="mt-10 grid w-full gap-5 sm:grid-cols-2">
            {featureHighlights.map((item, idx) => (
              <div
                key={item.title}
                className={`rounded-2xl border-2 p-5 bg-[#3e3e42] text-white  text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <dt className="text-sm font-semibold">{item.title}</dt>
                <dd className="mt-2 text-sm font-medium opacity-80">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <button
              onClick={() => {
                const missionSection =
                  document.querySelector("#about-us-mission");
                if (missionSection) {
                  missionSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                } else {
                  window.location.href = "/about-us#mission";
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#3e3e42] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:bg-black/80 hover:cursor-pointer"
            >
              Explore our mission
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2b2b] px-6 py-3 text-sm font-semibold text-[#25D366] shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:white/80 hover:text-white hover:cursor-pointer"
            >
              Schedule 1:1 counselling
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-white px-4 py-2 rounded-lg uppercase tracking-[0.25em] inline-block bg-[#3e3e42]">
            What we provide
          </h2>
          <p className="mt-2 text-base font-medium text-[#1A1A1A]">
            End-to-end support designed for every learner, whether they pursue
            online, distance, medical, or vocational pathways.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {serviceHighlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border-2 border-[#3e3e429f] bg-white px-5 py-4 shadow-md hover:shadow-xl transition hover:-translate-y-0.5"
            >
              <p className="text-sm font-semibold text-[#1A1A1A]">
                {item.title}
              </p>
              <p className="mt-1 text-sm font-normal text-[#3e3e429f]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs01;
