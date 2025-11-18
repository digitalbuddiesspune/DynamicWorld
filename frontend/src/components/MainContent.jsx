import { lazy, Suspense } from "react";
import { CourseComponentsForCollege } from "../pages/CollegeAdmission";
import Country from "../pages/Country";
import DynamicWorldInfo from "../pages/DynamicWorldInfo";

import BussinessOpportunity from "../pages/BussinessOpportunity";
import RegularEducationUniversities from "../pages/RegularEducationDynamicUniversities";
import { CourseComponentsStudyAbroad } from "../pages/StudyAbroadSection";
import { CourseComponents } from "../pages/VocationalCourses"; // e.g. { DVOC: lazy(...), ... }
import RegularAdmissionSkeleton from "./RegularAdmissionSkeleton";
import UniversitySkeleton from "./UniversitySkeleton";
import VocationalSkeleton from "./VocationalSkeleton";
import Boards from "../pages/Boards";
// import CareerBrochurePage from "./CareerCounselling01";
const CareerBrochurePage = lazy(() => import("./CareerCounselling01"));
const normalizeKey = (s = "") => s.trim().toUpperCase();

const MainContent = ({
  selected,
  universityData,
  isLoading,
  error,
  countryData,
  regular,
}) => {
  const NAAC_BADGES = {
    "B++":
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761109743/BPlusPlus_jisyyb.webp",
    "A+": "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872144/A_plus_mdt6x3.webp",
    "A++":
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872145/A_plus_plus_krg1rs.webp",
    A: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760982674/Arank_qsd54h.webp",
  };

  // Global loading / error states from parent
  if (isLoading) {
    return <UniversitySkeleton />;
  }
  if (error) {
    return <p className="text-sm sm:text-base text-red-600">{error}</p>;
  }

  // Landing page when nothing selected yet
  if (!selected?.type) {
    return <DynamicWorldInfo />;
  }

  if (selected.type === "Career Guidance") {
    return (
      <Suspense fallback={<VocationalSkeleton />}>
        <CareerBrochurePage />
      </Suspense>
    );
  }
  if (selected.type === "Boards") {
    return (
      <Suspense fallback={<RegularAdmissionSkeleton />}>
        <Boards />
      </Suspense>
    );
  }

  // =========== Vocational Courses ===========
  if (selected.type === "Vocational Courses") {
    const key = normalizeKey(selected.item);
    const Comp = CourseComponents[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<VocationalSkeleton />}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "Regular Admission" && regular) {
    return <RegularEducationUniversities university={regular} />;
  }

  if (selected.type === "College Admission") {
    console.log(selected.item);
    const key = normalizeKey(selected.item);
    console.log(key);
    const Comp = CourseComponentsForCollege[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<RegularAdmissionSkeleton />}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "Attestation & Apostile") {
    console.log(selected.item);
    const key = normalizeKey(selected.item);
    console.log(key);
    const Comp = CourseComponentsStudyAbroad[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<RegularAdmissionSkeleton />}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "Bussiness Opportunity") {
    return (
      <Suspense fallback={<RegularAdmissionSkeleton />}>
        <BussinessOpportunity />
      </Suspense>
    );
  }
  // =========== Country Details ===========
  if (selected.type === "Study Abroad Countries" && countryData) {
    return <Country countryData={countryData} />;
  }

  // =========== Universities (Online / Distance) ===========
  // Some APIs return an array, others an object; normalize:
  const data = Array.isArray(universityData)
    ? universityData[0]
    : universityData;

  if (!data) {
    return (
      <p className="text-sm sm:text-base text-gray-600">
        Select a university to see details.
      </p>
    );
  }

  const {
    universityName = "",
    location = "",
    establish = "",
    shortDescription = "",
    about = [],
    onlineEducation = [],
    courses = [],
    images = [],
    universityRanking = [],
    accreditation = [],
    awards = [],
    description = "",
    website = "",
  } = data;
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 ">
      {/* University Header */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          {images?.[0] && (
            <div className="relative shrink-0">
              <img
                src={images[0]}
                alt={universityName}
                className="w-full lg:p-1 object-cover rounded-lg ring-1 ring-gray-200 shadow"
              />
            </div>
          )}
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              {universityName}
            </h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              {location} <span className="mx-2">•</span> Established:{" "}
              {establish}
            </p>

            {shortDescription && (
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      {accreditation?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              About the University
            </h2>
          </header>
          <p className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            {shortDescription}
          </p>

          <div>
            <h2 className="my-3  text-lg sm:text-xl font-semibold text-gray-800">
              Accreditation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              {accreditation.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="my-3  text-lg sm:text-xl font-semibold text-gray-800">
              Awards
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              {awards.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h2 className="my-3  text-lg sm:text-xl font-semibold text-gray-800">
              Website:{" "}
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm sm:text-base"
              >
                {website}
              </a>
            </h2>
          </div> */}
        </section>
      )}

      {/* Online Education */}
      {onlineEducation?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
             Education
            </h2>
          </header>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            {onlineEducation.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Courses Table */}
      {Array.isArray(courses) && courses.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4 flex items-center gap-3 ">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Programs
            </h2>
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm px-2.5 py-1 ring-1 ring-indigo-100">
              {courses.length} listed
            </span>
          </header>

          <div className="w-full overflow-x-auto rounded-lg ring-1 ring-gray-200 ">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-50 sticky top-0">
                <tr className="text-gray-700">
                  <th className="px-3 sm:px-4 py-3 font-semibold">Program</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">
                    Specialization
                  </th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Duration</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">
                    Eligibility
                  </th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Mode</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Fees</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {[...courses]
                  .sort(
                    (a, b) =>
                      (a.courseName || "").localeCompare(b.courseName || "") ||
                      (a.specialization || "").localeCompare(
                        b.specialization || ""
                      )
                  )
                  .map((c, idx) => {
                    const fees =
                      typeof c.fees === "number"
                        ? c.fees === 0
                          ? "—" // underscore display for 0
                          : new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              maximumFractionDigits: 0,
                            }).format(c.fees)
                        : c.fees ?? "—";

                    return (
                      <tr
                        key={`${c.courseName}-${c.specialization}-${idx}`}
                        className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50/50"
                      >
                        <td className="px-3 sm:px-4 py-3 text-gray-800">
                          {c.courseName || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-gray-700">
                          {c.specialization || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-gray-700">
                          {c.duration || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-gray-700">
                          {c.eligibility || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-gray-700">
                          {c.mode || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-gray-900 font-medium">
                          {fees || "—"}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Rankings */}
      {universityRanking?.length > 0 && (
        <>
          <section>
            {universityRanking
              .filter((item) => item.includes("NAAC") || item.includes("NBA"))
              .map((item, index) => {
                let badgeUrl = "";

                if (item.includes("A++")) badgeUrl = NAAC_BADGES["A++"];
                else if (item.includes("A+")) badgeUrl = NAAC_BADGES["A+"];
                else if (item.includes("A")) badgeUrl = NAAC_BADGES["A"];
                else if (item.includes("B++")) badgeUrl = NAAC_BADGES["B++"];

                return (
                  <div
                    key={index}
                    className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 mb-6 items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Accreditation Details
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700">
                        {item}
                      </p>
                    </div>
                    {badgeUrl && (
                      <img
                        src={badgeUrl}
                        alt="NAAC Accreditation Badge"
                        className="h-12 sm:h-16 object-contain mt-2"
                      />
                    )}
                  </div>
                );
              })}
          </section>

          <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
            <header className="mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                University Rankings
              </h2>
            </header>
            <ol className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              {universityRanking.map((rank, index) => (
                <li key={index} className="leading-relaxed">
                  {rank}
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </div>
  );
};

export default MainContent;
