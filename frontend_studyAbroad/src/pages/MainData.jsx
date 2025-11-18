// MainContent.jsx
import {
  BookOpen,
  Briefcase,
  Clock,
  GraduationCap,
  Info,
  Users,
} from "lucide-react";
import { useEffect, useMemo } from "react";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

const toArr = (x) => (Array.isArray(x) ? x : []);
const nonEmpty = (x) => (Array.isArray(x) ? x.length > 0 : Boolean(x));

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

const Section = ({ icon: Icon, title, children, subtle = false }) => {
  if (!children) return null;
  return (
    <section
      className={`rounded-2xl ${
        subtle ? "bg-white" : "bg-white"
      } ring-1 ring-black/5 shadow-sm`}
    >
      <header className="flex items-center gap-2 border-b border-slate-100 px-5 py-3">
        {Icon ? <Icon className="h-4 w-4 text-[#3E96F4]" /> : null}
        <h2 className="text-base md:text-lg font-semibold text-[#31393C]">
          {title}
        </h2>
      </header>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
};

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-2 inline-block h-2 w-2 flex-none rounded-full"
      style={{ backgroundColor: COLORS.brand }}
    />
    <div className="text-sm md:text-[15px] leading-relaxed">{children}</div>
  </li>
);

const KeyPoint = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-3 text-sm md:text-[15px]">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
};

const SafeList = ({ items }) => {
  const list = toArr(items).filter(Boolean);
  if (!list.length) return null;
  return (
    <ul className="space-y-3">
      {list.map((item, i) => (
        <Bullet key={i}>
          {typeof item === "string" ? item : item?.text || JSON.stringify(item)}
        </Bullet>
      ))}
    </ul>
  );
};

const UniversitiesGrid = ({ items }) => {
  const list = toArr(items).filter(Boolean);
  if (!list.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
      {list.map((u, i) => {
        const name =
          typeof u === "string"
            ? u
            : u?.name || u?.universityName || u?.title || "—";
        const city = typeof u === "object" ? u?.city || u?.location : null;
        const website = typeof u === "object" ? u?.website : null;
        return (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 hover:shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[15px] font-semibold text-slate-800">
                  {name}
                </p>
                {city ? (
                  <p className="text-xs text-slate-500 mt-0.5">{city}</p>
                ) : null}
              </div>
              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-[#3E96F4] hover:underline"
                >
                  Visit
                </a>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const UpdatedMeta = ({ createdAt, updatedAt }) => {
  if (!createdAt && !updatedAt) return null;
  const fmt = (d) => {
    try {
      const dt = new Date(d);
      if (Number.isNaN(dt.getTime())) return null;
      return dt.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return null;
    }
  };
  const c = fmt(createdAt);
  const u = fmt(updatedAt);
  return (
    <div className="text-[11px] text-slate-500">
      {c ? <>Created: {c}</> : null}
      {c && u ? " • " : null}
      {u ? <>Updated: {u}</> : null}
    </div>
  );
};

const CTAs = () => (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href="tel:+917887881060"
      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow"
      style={{ backgroundColor: COLORS.brand }}
    >
      Quick Call
    </a>
    <a
      href="https://cal.com/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-slate-200 text-[#31393C] bg-white hover:bg-slate-50 transition"
    >
      Video Counselling
    </a>
  </div>
);

const MainContent = ({ selectedCountry }) => {
  const {
    countryName = "",
    name = "",
    description = "",
    imageUrl,
    education = [],
    listOfUniversity = [],
    educationSystem = [],
    tuitionFeesAndStudyCost = [],
    visaInformation = [],
    careerProspects = [],
    workRights = [],
    createdAt,
    updatedAt,
  } = selectedCountry || {};

  const title = countryName || name || "Country";
  const facts = useMemo(() => {
    const f = [];
    const uniCount = toArr(listOfUniversity).length;
    const edPts = toArr(education).length;
    const visaPts = toArr(visaInformation).length;
    if (uniCount) f.push(`${uniCount} Universities`);
    if (edPts) f.push(`${edPts} Education points`);
    if (visaPts) f.push(`${visaPts} Visa notes`);
    return f;
  }, [listOfUniversity, education, visaInformation]);
  return (
    <div className="w-full bg-white text-[#31393C]">
      {/* Hero / Title */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center gap-3">
            {imageUrl ? (
              <div className="rounded-2xl">
                <img
                  src={imageUrl}
                  alt={`${title} banner`}
                  className="h-20  object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}

            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {title}
            </h1>
          </div>
          {description ? (
            <p className="mt-1 max-w-3xl text-sm md:text-[15px] text-white/90">
              {description}
            </p>
          ) : null}
          {/* Chips */}
          {!!facts.length && (
            <div className="mt-3 flex flex-wrap gap-2">
              {facts.map((x, i) => (
                <Pill key={i}>{x}</Pill>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6">
        {/* Quick facts / meta + CTAs */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <KeyPoint label="Country" value={title} />
            </div>
            <CTAs />
          </div>
        </div>

        {/* Education */}
        {nonEmpty(education) && (
          <Section icon={GraduationCap} title="Education">
            <SafeList items={education} />
          </Section>
        )}

        {/* List of Universities */}
        {nonEmpty(listOfUniversity) && (
          <Section icon={Users} title="Top Universities">
            <UniversitiesGrid items={listOfUniversity} />
          </Section>
        )}

        {/* Education System */}
        {nonEmpty(educationSystem) && (
          <Section icon={BookOpen} title="Education System">
            <SafeList items={educationSystem} />
          </Section>
        )}

        {/* Tuition Fees & Study Cost */}
        {nonEmpty(tuitionFeesAndStudyCost) && (
          <Section icon={Clock} title="Tuition Fees & Study Cost">
            <SafeList items={tuitionFeesAndStudyCost} />
          </Section>
        )}

        {/* Visa Information */}
        {nonEmpty(visaInformation) && (
          <Section icon={Info} title="Visa Information">
            <SafeList items={visaInformation} />
          </Section>
        )}

        {/* Career Prospects */}
        {nonEmpty(careerProspects) && (
          <Section icon={Briefcase} title="Career Prospects">
            <SafeList items={careerProspects} />
          </Section>
        )}

        {/* Work Rights */}
        {nonEmpty(workRights) && (
          <Section icon={BookOpen} title="Work Rights">
            <SafeList items={workRights} />
          </Section>
        )}
      </div>
    </div>
  );
};

export default MainContent;
