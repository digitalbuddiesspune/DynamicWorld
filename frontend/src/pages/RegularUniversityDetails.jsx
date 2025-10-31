// RegularUniversityDetails.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

const NAAC_BADGES = {
  "A+": "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872144/A_plus_mdt6x3.webp",
  "A++":
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872145/A_plus_plus_krg1rs.webp",
  A: "",
  "B++": "",
};

const formatINR = (n) => {
  if (n === 0 || n === null || n === undefined || Number.isNaN(Number(n)))
    return "—";
  if (typeof n === "number") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  }
  return n || "—";
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

const CourseRow = ({ c }) => {
  const fees =
    typeof c?.fees === "number"
      ? c.fees === 0
        ? "—"
        : formatINR(c.fees)
      : c?.fees ?? "—";
  return (
    <tr className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50/50">
      <td className="px-3 sm:px-4 py-3 text-gray-800">
        {c?.courseName || "—"}
      </td>
      <td className="px-3 sm:px-4 py-3 text-gray-700">
        {c?.specialization || "—"}
      </td>
      <td className="px-3 sm:px-4 py-3 text-gray-700">{c?.duration || "—"}</td>
      <td className="px-3 sm:px-4 py-3 text-gray-700">
        {c?.eligibility || "—"}
      </td>
      <td className="px-3 sm:px-4 py-3 text-gray-700">{c?.mode || "—"}</td>
      <td className="px-3 sm:px-4 py-3 text-gray-900 font-medium">{fees}</td>
    </tr>
  );
};

export default function RegularUniversityDetails() {
  const API = import.meta.env.VITE_BACKEND_API;
  const { slug } = useParams();

  // ✅ Hooks at top-level only
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(`${API}/regularUniversity/${slug}`);
      // Your backend shape: { success, data, message }
      setUniversity(data?.data ?? data ?? null);
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }, [API, slug]);

  useEffect(() => {
    if (!slug) return;
    fetchData();
  }, [fetchData, slug]);

  // 🔁 Derived values (safe useMemo)
  const {
    name,
    location,
    established,
    primary_focus,
    description,
    accreditation = [],
    awards = [],
    website,
    image, // single string
    images, // optional array
    courses = [],
    rankings,
  } = university ?? {};

  const title = useMemo(() => name || slug, [name, slug]);

  const imageArray = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    if (typeof image === "string" && image.trim()) return [image.trim()];
    return [];
  }, [images, image]);

  const sortedCourses = useMemo(() => {
    if (!Array.isArray(courses)) return [];
    return [...courses].sort(
      (a, b) =>
        (a?.courseName || "").localeCompare(b?.courseName || "") ||
        (a?.specialization || "").localeCompare(b?.specialization || "")
    );
  }, [courses]);

  const universityRanking = useMemo(() => {
    if (Array.isArray(rankings) && rankings.length) return rankings;
    return Array.isArray(awards) ? awards : [];
  }, [rankings, awards]);

  const naacLine = useMemo(() => {
    return (
      accreditation.find((item) => /NAAC|NBA/i.test(item)) ||
      universityRanking.find?.((item) => /NAAC|NBA/i.test(item)) ||
      ""
    );
  }, [accreditation, universityRanking]);

  const { naacGrade, badgeUrl } = useMemo(() => {
    const gradeMatch = (naacLine || "").match(/(A\+\+|A\+|A|B\+\+)/i);
    const grade = gradeMatch?.[1]?.toUpperCase();
    return { naacGrade: grade, badgeUrl: grade ? NAAC_BADGES[grade] : "" };
  }, [naacLine]);

  // ✅ Render (no hooks inside conditionals/loops)
  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDEEEB]">
        <header className="bg-[#3E96F4] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="h-7 w-64 bg-white/30 rounded animate-pulse" />
            <div className="mt-2 h-4 w-72 bg-white/20 rounded animate-pulse" />
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          <div className="h-40 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
          <div className="h-48 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
          <div className="h-72 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDEEEB] flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white ring-1 ring-red-200 text-red-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p className="mt-2 text-sm">{error}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={fetchData}
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-[#3E96F4] text-white"
              >
                Retry
              </button>
              <Link
                to="/services/regular-full-time-education"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-gray-300 text-[#31393C]"
              >
                Back to list
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!university) return null;

  return (
    <div className="min-h-screen bg-[#EDEEEB] text-[#31393C]">
      <header className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm opacity-95">
            <Link
              to="/services/regular-full-time-education"
              className="hover:underline"
            >
              Regular Education
            </Link>
            <span>/</span>
            <span className="truncate">{slug}</span>
          </nav>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h1>
        </div>
      </header>

      <main className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* University Header */}
          <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {imageArray[0] && (
                <div className="relative shrink-0">
                  <img
                    src={imageArray[0]}
                    alt={title}
                    className="w-48  lg:p-1 object-contain rounded-lg ring-1 ring-gray-200 shadow"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
                  {title}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  {location || "—"} <span className="mx-2">•</span> Established:{" "}
                  {established || "—"}
                </p>

                {description && (
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* About / Accreditation / Awards / Website */}
          {(accreditation.length > 0 || awards.length > 0 || website) && (
            <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
              <header className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  About the University
                </h2>
              </header>

              {description && (
                <p className="text-sm sm:text-base text-gray-700">
                  {description}
                </p>
              )}
              <div>
                <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">
                  Primary Focus
                </h3>
                <p>{primary_focus}</p>
              </div>

              {!!accreditation.length && (
                <div className="mt-4">
                  <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">
                    Accreditation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                    {accreditation.map((item, i) => (
                      <li key={`acc-${i}`} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!!awards.length && (
                <div className="mt-4">
                  <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">
                    Awards / Rankings
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                    {awards.map((item, i) => (
                      <li key={`awd-${i}`} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {badgeUrl && (
                <div className="mt-4">
                  <img
                    src={badgeUrl}
                    alt={`NAAC ${naacGrade} Badge`}
                    className="h-12 sm:h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              {website && (
                <div className="mt-4">
                  <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">
                    Website:{" "}
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline text-sm sm:text-base break-all"
                    >
                      {website}
                    </a>
                  </h3>
                </div>
              )}
            </section>
          )}

          {/* Programs */}
          {sortedCourses.length > 0 && (
            <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
              <header className="mb-3 sm:mb-4 flex items-center gap-3">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Programs
                </h2>
                <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm px-2.5 py-1 ring-1 ring-indigo-100">
                  {sortedCourses.length} listed
                </span>
              </header>

              <div className="w-full overflow-x-auto rounded-lg ring-1 ring-gray-200">
                <table className="min-w-full text-left text-sm sm:text-base">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr className="text-gray-700">
                      <th className="px-3 sm:px-4 py-3 font-semibold">
                        Program
                      </th>
                      <th className="px-3 sm:px-4 py-3 font-semibold">
                        Specialization
                      </th>
                      <th className="px-3 sm:px-4 py-3 font-semibold">
                        Duration
                      </th>
                      <th className="px-3 sm:px-4 py-3 font-semibold">
                        Eligibility
                      </th>
                      <th className="px-3 sm:px-4 py-3 font-semibold">Mode</th>
                      <th className="px-3 sm:px-4 py-3 font-semibold">Fees</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sortedCourses.map((c, idx) => (
                      <CourseRow
                        key={
                          c?.id ||
                          `${c?.courseName}-${c?.specialization}-${idx}`
                        }
                        c={c}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* NAAC/Rankings */}
          {universityRanking.length > 0 && (
            <>
              {universityRanking
                .filter((item) => /NAAC|NBA/i.test(item))
                .map((item, index) => {
                  const grade = (item.match(/A\+\+|A\+|A|B\+\+/i) ||
                    [])[0]?.toUpperCase();
                  const img = grade ? NAAC_BADGES[grade] : "";
                  return (
                    <div
                      key={`naac-${index}`}
                      className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 mb-6"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Accreditation Details
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        {item}
                      </p>
                      {img && (
                        <img
                          src={img}
                          alt="NAAC Accreditation Badge"
                          className="h-12 sm:h-16 object-contain mt-3"
                          loading="lazy"
                        />
                      )}
                    </div>
                  );
                })}

              <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
                <header className="mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    University Rankings
                  </h2>
                </header>
                <ol className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  {universityRanking.map((rank, index) => (
                    <li key={`rank-${index}`} className="leading-relaxed">
                      {rank}
                    </li>
                  ))}
                </ol>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
