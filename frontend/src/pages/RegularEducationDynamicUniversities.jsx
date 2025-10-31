import React, { useMemo } from "react";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

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

const H2 = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
    {children}
  </h2>
);

const Section = ({ children }) => (
  <section className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5 md:p-6">
    {children}
  </section>
);

const Row = ({ label, value }) => (
  <div className="py-2">
    <div className="col-span-12 sm:col-span-4 text-xs font-medium text-gray-500">
      {label}
    </div>
    <div className="col-span-12 sm:col-span-8 text-sm md:text-base text-gray-800">
      {value || "—"}
    </div>
  </div>
);

const SafeLink = ({ href, children }) => {
  if (!href) return <span className="text-gray-500">—</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-medium text-[#3E96F4] hover:underline"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="-mr-0.5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7v8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};

// --- Helpers ---
function currencyFormat(n) {
  if (!n || n <= 0) return "—";
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `₹${Number(n).toLocaleString("en-IN")}`;
  }
}

// Extract the *best* NAAC grade present (priority: A++ > A+ > A > B++)
function parseNaacGrade(accreditation = []) {
  if (!accreditation.length) return null;
  const txt = accreditation.join(" ").toUpperCase();
  if (txt.includes("A++")) return "A++";
  if (txt.includes("A+")) return "A+";
  // Use regex to avoid matching e.g., "A+"
  if (/(^|\s)A(\s|$|[^+])/i.test(txt)) return "A";
  if (txt.includes("B++")) return "B++";
  return null;
}

const RankBadge = ({ grade }) => {
  if (!grade)
    return <span className="text-sm text-gray-600">No NAAC grade found.</span>;
  const src = NAAC_BADGES[grade];
  if (src) {
    return (
      <img
        src={src}
        alt={`NAAC ${grade} badge`}
        className="h-10 w-auto rounded-md ring-1 ring-gray-200 bg-white object-contain"
      />
    );
  }
};

// --- Main Component ---
const RegularEducationUniversities = ({ university }) => {
  const {
    name,
    image,
    location,
    established,
    primary_focus,
    description,
    accreditation = [],
    awards = [],
    website,
    courses = [],
  } = university || {};

  const NAAC_BADGES = {
    "A++":
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872145/A_plus_plus_krg1rs.webp",
    "A+": "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872144/A_plus_mdt6x3.webp",
    // "A":  "https://.../A.webp",
    // "B++": "https://.../B_plus_plus.webp",
    // "B+":  "https://.../B_plus.webp",
    // "B":   "https://.../B.webp",
  };

  const badge = accreditation.filter((item) => {
    return (
      item.includes("A++") ||
      item.includes("A+") ||
      item.includes("A ") ||
      item.includes("B") ||
      item.includes("B+") ||
      item.includes("B++") ||
      item.includes("NAAC")
    );
  });

  const uniqueCourses = useMemo(() => {
    const map = new Map();
    for (const c of courses || []) {
      const key =
        c?.id ||
        `${c?.courseName || ""}::${c?.specialization || ""}`.toLowerCase();
      if (!map.has(key)) map.set(key, c);
    }
    return Array.from(map.values()).sort((a, b) => {
      const an = (a.courseName || "").localeCompare(b.courseName || "");
      if (an !== 0) return an;
      return (a.specialization || "").localeCompare(b.specialization || "");
    });
  }, [courses]);

  const naacGrade = parseNaacGrade(accreditation);

  return (
    <div
      className="min-h-screen font-sans p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8"
      style={{ color: COLORS.text }}
    >
      <header className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row  items-center text-center gap-4">
            <div>
              <img
                src={image}
                alt={name || "University"}
                className="h-20 lg:w-48 rounded-2xl bg-white object-contain ring-1 ring-gray-200"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {name || "University"}
              </h1>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                {location && <Pill>{location}</Pill>}
                {established && <Pill>Established {established}</Pill>}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl space-y-5">
        {/* ===== About + Accreditation + Awards + Website (Single Section) ===== */}
        <Section>
          <div className="space-y-5">
            <H2>About the University</H2>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {description || "—"}
            </p>

            <div className="">
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  Accreditation & Approvals
                </div>
                {accreditation?.length ? (
                  <ul className="flex flex-wrap gap-2">
                    {accreditation.map((item, idx) => (
                      <li key={idx} className="whitespace-normal">
                        <Pill>{item}</Pill>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-gray-600">
                    No accreditation details available.
                  </div>
                )}
              </div>

              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-4 mt-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  Website
                </div>
                <div className="text-sm">
                  <SafeLink href={website}>{website || "—"}</SafeLink>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Awards & Recognition
              </div>
              {awards?.length ? (
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-800">
                  {awards.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-gray-600">No awards listed.</div>
              )}
            </div>
          </div>
        </Section>

        {/* ===== Primary Focus ===== */}
        <Section>
          <H2>Primary Focus</H2>
          <div className="">
            <Row value={primary_focus}></Row>
          </div>
        </Section>

        {/* ===== Programs / Courses ===== */}
        <Section>
          <div className="flex items-center justify-between">
            <H2>Programs Offered</H2>
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs md:text-sm px-2.5 py-1 ring-1 ring-indigo-100">
              {uniqueCourses.length} listed
            </span>
          </div>

          {uniqueCourses.length > 0 ? (
            <div className="mt-4 w-full overflow-x-auto rounded-lg ring-1 ring-gray-200">
              <table className="min-w-full text-left text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr className="text-gray-700">
                    <th className="px-3 md:px-4 py-3 font-semibold">Program</th>
                    <th className="px-3 md:px-4 py-3 font-semibold">
                      Specialization
                    </th>
                    <th className="px-3 md:px-4 py-3 font-semibold">
                      Eligibility
                    </th>
                    <th className="px-3 md:px-4 py-3 font-semibold">Mode</th>
                    <th className="px-3 md:px-4 py-3 font-semibold">Fees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {uniqueCourses.map((c) => (
                    <tr
                      key={c.id || `${c.courseName}-${c.specialization}`}
                      className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50/50"
                    >
                      <td className="px-3 md:px-4 py-3 text-gray-900">
                        {c.courseName || "—"}
                      </td>
                      <td className="px-3 md:px-4 py-3 text-gray-700">
                        {c.specialization || "—"}
                      </td>
                      <td className="px-3 md:px-4 py-3 text-gray-700">
                        {c.eligibility || "—"}
                      </td>
                      <td className="px-3 md:px-4 py-3 text-gray-700">
                        {c.mode || "—"}
                      </td>
                      <td className="px-3 md:px-4 py-3 text-gray-900">
                        {currencyFormat(c.fees)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-600">No programs listed.</p>
          )}
        </Section>
      </main>
    </div>
  );
};

export default RegularEducationUniversities;
