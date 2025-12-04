import {
  Award,
  Building2,
  Globe2,
  GraduationCap,
  Layers,
  Microscope,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const entityDefinitions = [
  {
    id: "countries",
    name: "Study Abroad Countries",
    description:
      "Manage information for countries featured on the study abroad portal.",
    endpoint: "/countries",
    path: "/countries",
    icon: Globe2,
    searchKeys: ["countryName", "description"],
    columns: [
      {
        label: "Country",
        render: (row) => row.countryName,
      },
      {
        label: "Highlight",
        render: (row) => row.description,
      },
      {
        label: "Universities",
        render: (row) => row.listOfUniversity?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt
            ? new Date(row.updatedAt).toLocaleDateString()
            : "—",
        align: "center",
      },
    ],
  },
  {
    id: "onlineUniversities",
    name: "Online Universities",
    description:
      "Track the universities available for online or distance education programs.",
    endpoint: "/onlineUniversitiesV2",
    path: "/online-universities",
    icon: GraduationCap,
    searchKeys: [
      "name",
      "universityName",
      "location",
      "description",
      "primary_focus",
      "accreditation",
    ],
    columns: [
      {
        label: "University",
        render: (row) => row.name ?? row.universityName,
      },
      {
        label: "Location",
        render: (row) => row.location,
      },
      {
        label: "Established",
        render: (row) => row.established ?? row.establish,
        align: "center",
      },
      {
        label: "Courses",
        render: (row) =>
          row.courses?.length ?? row.universityProgram?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "distanceUniversities",
    name: "Distance Universities",
    description:
      "Overview of universities offering distance education opportunities.",
    endpoint: "/getAllUniversitiesV2",
    path: "/distance-universities",
    icon: Building2,
    searchKeys: ["university", "location", "headline"],
    columns: [
      { label: "University", render: (row) => row.university ?? row.name },
      { label: "Location", render: (row) => row.location ?? row.city ?? "—" },
      {
        label: "Programs",
        render: (row) => row.programs?.length ?? row.courses?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "regularEducation",
    name: "Regular Education",
    description:
      "Institutions and courses curated for the regular education track.",
    endpoint: "/regular-list",
    path: "/regular-education",
    icon: Microscope,
    searchKeys: ["name", "universityName", "city", "state"],
    columns: [
      { label: "University", render: (row) => row.name ?? row.universityName },
      {
        label: "Programs",
        render: (row) => row.programs?.length ?? row.courses?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "skillCourses",
    name: "Skill Courses",
    description:
      "Programs and micro-credentials focused on skill development.",
    endpoint: "/skillCourses-programs",
    path: "/skill-courses",
    icon: Sparkles,
    searchKeys: ["universityName", "programName", "category"],
    columns: [
      {
        label: "University",
        render: (row) => row.universityName ?? row.provider ?? "—",
      },
      {
        label: "Courses",
        render: (row) => row.courses?.length ?? row.programs?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "dvocPrograms",
    name: "Diploma in Vocation (DVOC)",
    description:
      "Universities and institutes offering DVOC programmes with applied specialisations.",
    endpoint: "/dvoc-programs",
    path: "/dvoc-programs",
    icon: Layers,
    searchKeys: ["name", "universityName", "description", "accreditation"],
    columns: [
      {
        label: "University",
        render: (row) => row.universityName ?? row.name,
      },
      {
        label: "Summary",
        render: (row) => row.description ?? "—",
      },
      {
        label: "Courses",
        render: (row) => row.courses?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "bvocPrograms",
    name: "Bachelor of Vocation (BVOC)",
    description:
      "Undergraduate vocation focused universities and their BVOC course catalogue.",
    endpoint: "/bvoc-programs",
    path: "/bvoc-programs",
    icon: Award,
    searchKeys: ["name", "universityName", "description", "accreditation"],
    columns: [
      {
        label: "University",
        render: (row) => row.universityName ?? row.name,
      },
      {
        label: "Summary",
        render: (row) => row.description ?? "—",
      },
      {
        label: "Courses",
        render: (row) => row.courses?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "mvocPrograms",
    name: "Master of Vocation (MVOC)",
    description:
      "Postgraduate MVOC offerings with industry-aligned curriculum information.",
    endpoint: "/mvoc-programs",
    path: "/mvoc-programs",
    icon: ShieldCheck,
    searchKeys: ["name", "universityName", "description", "accreditation"],
    columns: [
      {
        label: "University",
        render: (row) => row.universityName ?? row.name,
      },
      {
        label: "Summary",
        render: (row) => row.description ?? "—",
      },
      {
        label: "Courses",
        render: (row) => row.courses?.length ?? 0,
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "mbbsIndia",
    name: "MBBS Colleges (India)",
    description:
      "Directory of MBBS colleges across India with essential admission details.",
    endpoint: "/getAllMBBS",
    path: "/mbbs-india",
    icon: Stethoscope,
    searchKeys: ["collegeName", "universityName", "state"],
    columns: [
      {
        label: "College",
        render: (row) =>
          row.collegeName ?? row.universityName ?? row.name ?? "—",
      },
      {
        label: "State",
        render: (row) => row.state ?? "—",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "—",
        align: "center",
      },
    ],
  },
  {
    id: "mbbsAbroad",
    name: "MBBS Abroad",
    description:
      "Partner universities and program highlights for MBBS abroad pathway.",
    endpoint: "/getMbbsInAbroad",
    path: "/mbbs-abroad",
    icon: Stethoscope,
    searchKeys: ["universityName", "country", "city"],
    columns: [
      { label: "University", render: (row) => row.universityName ?? row.name },
      { label: "Country", render: (row) => row.country ?? "—" },
      { label: "City", render: (row) => row.city ?? "—" },
      {
        label: "Tuition Fees",
        render: (row) => row.tuitionFee ?? row.fees ?? "—",
      },
    ],
  },
  {
    id: "news",
    name: "News",
    description:
      "Manage news items displayed in the promotion strip on the homepage.",
    endpoint: "/news",
    path: "/news",
    icon: Newspaper,
    searchKeys: ["newsTitle", "link"],
    columns: [
      {
        label: "Title",
        render: (row) => row.newsTitle ?? "—",
      },
      {
        label: "Link",
        render: (row) => row.link ?? "—",
      },
      {
        label: "Created",
        render: (row) =>
          row.createdAt
            ? new Date(row.createdAt).toLocaleDateString()
            : "—",
        align: "center",
      },
      {
        label: "Updated",
        render: (row) =>
          row.updatedAt
            ? new Date(row.updatedAt).toLocaleDateString()
            : "—",
        align: "center",
      },
    ],
  },
];

export const entityByPath = Object.fromEntries(
  entityDefinitions.map((entity) => [entity.path, entity])
);

