import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const DynamicWorldPortal = () => {
  const [selected, setSelected] = useState({ type: null, item: null });
  const [expandedItems, setExpandedItems] = useState({});
  const [onlineUniversity, setOnlineUniversity] = useState([]);
  const [distanceUniversity, setDistanceUniversity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [universityData, setUniversityData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [regularList, setRegularList] = useState([]);
  const [regularData, setRegularData] = useState(null);

  const api = import.meta.env.VITE_BACKEND_API || "https://dummyapi.io";

  // Track/cancel in-flight request when user clicks quickly
  const reqAbortRef = useRef(null);

  // 🔽 main section ref for smooth scroll
  const mainSectionRef = useRef(null);

  const dedupe = (arr) => Array.from(new Set(arr.filter(Boolean))).sort();
  const tidy = (s) => (typeof s === "string" ? s.trim() : s);

  // fetch online universities
  const handleApi01 = useCallback(async () => {
    try {
      const res = await axios.get(`${api}/onlineUniversitiesV2`);
      const universities = res.data?.data || [];

      // Deduplicate and tidy
      const cleaned = dedupe(universities.map((u) => tidy(u.universityName)));

      // Define your preferred order
      const order = [
        "DY Patil University, Navi Mumbai",
        "Dr. DY Patil Vidyapeeth, Pune",
        "NMIMS University",
        "KJ Somaiya",
        "Pune Institute of Business Management",
        "Welingkar Institute of Management",
        "OP Jindal Global University",
        "Vivekanand Global University",
        "VIT University",
        "IIT School of Distance Education",
        "Amity Online",
        "Parul University",
        "Amrita University",
        "Alliance University Bangalore",
        "Loyola Institute of Business Administration",
        "Management Development Institute Murshidabad",
        "Institute of Management Technology, Ghaziabad",
        "International Management Institute Kolkata",
        "Mangalayatan University",
        "Yenepoya University",
        "Lovely Professional University",
        "Manav Rachna University (MRU)",
        "Chandigarh University",
        "Sharda University",
        "Bharathidasan University",
        "Suresh Gyan Vihar University",
        "Sikkim Manipal University",
        "Manipal University Jaipur",
        "Manipal Academy of Higher Education",
        "Bharath University",
        "Dr. MGR University",
        "Mats University",
        "Mizoram University",
        "Aligarh Muslim University",
        "Jamia Hamdard University",
        "Uttaranchal University",
        "Kurukshetra University",
        "KL University",
        "Vignan University",
        "Chitkara University",
        "UPES University",
        "Kalinga Institute of Industrial Technology",
        "Shoolini University",
        "Maharishi Makrandeshwar University",
        "Andhra University",
        "Centurion University",
        "Hindustan University",
        "GLA University",
      ];

      // Sort according to the defined order
      const sorted = cleaned.sort((a, b) => {
        const idxA = order.indexOf(a);
        const idxB = order.indexOf(b);

        // If not found, push to the end (retain unknowns at bottom)
        if (idxA === -1 && idxB === -1) return 0;
        if (idxA === -1) return 1;
        if (idxB === -1) return -1;
        return idxA - idxB;
      });

      setOnlineUniversity(sorted);
    } catch (e) {
      console.error("Error fetching online universities:", e);
      setOnlineUniversity([]);
    }
  }, [api]);

  // fetch distance universities
  const handleApi02 = useCallback(async () => {
    try {
      const res = await axios.get(`${api}/getAllUniversitiesV2`);
      const universities = res.data?.data || [];

      // Clean and deduplicate
      const cleaned = dedupe(universities.map((u) => tidy(u.universityName)));

      // Define your manual order
      const order = [
        "Subharti University",
        "Mangalayatan University",
        "Suresh Gyan Vihar University",
        "Mumbai University",
        "Savitribai Phule Pune University",
        "AISECT University",
        "Tilak Maharashtra Vidyapeeth",
        "Dr. CV Raman University-Bihar",
        "Dr. CV Raman University-MP",
        "Dr. CV Raman University-Chattisgarh",
        "Rabindranath Tagore University",
        "MATS University",
      ];

      // Sort according to custom order
      const sorted = cleaned.sort((a, b) => {
        const idxA = order.indexOf(a);
        const idxB = order.indexOf(b);

        if (idxA === -1 && idxB === -1) return 0; // both not found
        if (idxA === -1) return 1; // A not found → move down
        if (idxB === -1) return -1; // B not found → move up
        return idxA - idxB; // preserve defined order
      });

      setDistanceUniversity(sorted);
    } catch (e) {
      console.error("Error fetching distance universities:", e);
      setDistanceUniversity([]);
    }
  }, [api]);

  const handleApi04 = useCallback(async () => {
    try {
      const { data } = await axios.get(`${api}/regular-list`);
      const universities = data?.data || [];

      // Clean and deduplicate
      const cleaned = dedupe(universities.map((c) => tidy(c.name)));

      // Define your manual order
      const order = [
        "Mumbai University",
        "Transstadia Institute (Mumbai)",
        "N.L. Dalmia Institute of Mngt",
        "PILLAI college of engineering",
        "Chhatrapati Shivaji Maharaj University",
        "Dr. DY Patil Institute of Engineering",
        "MIT-WPU",
        "Bharati Vidyapeeth College",
        "Ajeenkya DY Patil University",
        "Sinhgad College of Engineering",
        "MIT AOE",
        "Pimpri Chinchwad College of Engineering",
        "Balaji Institute of Modern Management",
        "Dr. DY Patil Institute of Engineering",
        "MIT ADT",
        "Pune Institute of Management",
        "AI Universal University",
        "Arham International Institute",
        "Navsahyadri Group of Institutes",
        "IOMS Group of Institute",
        "Raisoni University",
        "Parul University",
        "Dr A.P.J Abdul Kalam University",
        "Oriental University",
        "Yenepoya (Deemed to be University)",

        "S-VYASA University",
        "NIAT",
        "Dr. Preeti Global University",
        "Harsha Institute of Nursing",

        "SAGE University Indore",
        "SGT University",
        "SMT Laxmi Devi Group Of Institute",
        "Rosy Royal Institute of Bangalore",
      ];

      // Sort according to defined order
      const sorted = cleaned.sort((a, b) => {
        const idxA = order.indexOf(a);
        const idxB = order.indexOf(b);

        // If not found, move unknown universities to the bottom
        if (idxA === -1 && idxB === -1) return 0;
        if (idxA === -1) return 1;
        if (idxB === -1) return -1;
        return idxA - idxB;
      });

      setRegularList(sorted);
    } catch (error) {
      console.error("Error fetching regular universities:", error);
      setRegularList([]);
    }
  }, [api]);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([handleApi01(), handleApi02(), handleApi04()]);
      } catch (e) {
        console.error("Error bootstrapping data:", e);
      } finally {
        setIsLoading(false);
      }
    })();

    // cleanup any in-flight request on unmount
    return () => {
      if (reqAbortRef.current) {
        reqAbortRef.current.abort();
      }
    };
  }, [handleApi01, handleApi02, handleApi04]);

  const vocationCourses = useMemo(
    () => ["DVOC", "BVOC", "MVOC", "DIPLOMA", "SKILL COURSE", "UPGRAD"],
    []
  );

  const collegeAdmission = useMemo(
    () => [
      "MBBS",
      "MBBS Abroad",
      "Engineering",
      "Management",
      "Pharmacy",
      "Law",
      "Teaching",
      "PHD",
    ],
    []
  );
  const boards = useMemo(() => ["Boards"], []);

  const studyAbroad = useMemo(() => ["Attestation & Apostile"], []);
  const bussinessOp = useMemo(() => ["Bussiness opportunity"]);

  const sidebarData = useMemo(
    () => [
      {
        title: "Career Guidance",
        type: "Career Guidance",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760779898/careerGuidance_ajhz4v.png",
        items: ["Career Counseling"],
      },
      {
        title: "Online Universities",
        type: "Online University",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761723100/online-learning_lws70x.png",
        items: onlineUniversity,
      },
      {
        title: "Distance University",
        type: "Distance University",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761722971/webinar_ft8hqx.png",
        items: distanceUniversity,
      },
      {
        title: "Boards",
        type: "Boards",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761469887/director_dzinrx.png",
        items: boards,
      },
      {
        title: "Vocational Courses",
        type: "Vocational Courses",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760779898/vocationalCourses_zeervr.png",
        items: vocationCourses,
      },
      {
        title: "Regular Admission",
        type: "Regular Admission",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761470147/paper_uaztxt.png",
        items: regularList,
      },
      {
        title: "College Admission",
        type: "College Admission",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761470047/education_an7uhw.png",
        items: collegeAdmission,
      },
      {
        title: "Home & Online Tuition",
        type: "Home & Online Tuition",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764152306/people_fltdux.png",
        items: ["Home & Online Tuition"],
      },
      {
        title: "Attestation & Apostile",
        type: "Attestation & Apostile",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1762177440/approval-granted_mvxbyj.png",
        items: studyAbroad,
      },

      {
        title: "Bussiness Opportunity",
        type: "Bussiness Opportunity",
        url: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761470515/integrity_h0ae1y.png",
        items: bussinessOp,
      },
    ],
    [
      onlineUniversity,
      distanceUniversity,
      vocationCourses,
      regularList,
      collegeAdmission,
      studyAbroad,
      countriesList,
    ]
  );

  const toggleExpand = useCallback((index) => {
    setExpandedItems((prev) => {
      // If the clicked section is already open, close it (allow closing)
      if (prev[index]) {
        return {};
      }
      // Otherwise, close all sections and open only the clicked one
      return { [index]: true };
    });
  }, []);

  const scrollToMain = useCallback(() => {
    const target =
      mainSectionRef.current || document.getElementById("main-section");
    if (!target) return;

    const HEADER_OFFSET = 72; // adjust to your sticky header height if needed

    // Wait two frames so any sidebar expand/collapse & data loads can reflow first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: absoluteTop, behavior: "smooth" });
      });
    });
  }, []);

  const handleItemClick = useCallback(
    async (item, type) => {
      setSelected({ type, item });
      setError(null);

      // (Optional) On small screens, collapse all sections to avoid pushing content mid-scroll
      if (window.matchMedia("(max-width: 1023px)").matches) {
        setExpandedItems({});
      }

      // Schedule scroll immediately — our scrollToMain waits for layout to settle
      scrollToMain();

      // Cancel previous request if any
      if (reqAbortRef.current) reqAbortRef.current.abort();
      reqAbortRef.current = null;

      switch (type) {
        case "Online University":
        case "Distance University": {
          try {
            setIsLoading(true);
            const controller = new AbortController();
            reqAbortRef.current = controller;

            const endpoint =
              type === "Online University"
                ? "onlineUniversityV2"
                : "distanceUniversityV2";
            const { data } = await axios.get(`${api}/${endpoint}`, {
              params: { universityName: tidy(item) },
              signal: controller.signal,
            });

            setUniversityData(data?.data ?? null);
          } catch (e) {
            if (e?.name !== "CanceledError" && e?.code !== "ERR_CANCELED") {
              setError("Failed to fetch university data.");
              setUniversityData(null);
            }
          } finally {
            setIsLoading(false);
          }
          break;
        }
        case "Regular Admission": {
          try {
            setIsLoading(true);
            const controller = new AbortController();
            reqAbortRef.current = controller;
            const { data } = await axios.get(`${api}/regular`, {
              params: { universityName: tidy(item) },
              signal: controller.signal,
            });
            setRegularData(data?.data ?? null);
          } catch (e) {
            if (e?.name !== "CanceledError" && e?.code !== "ERR_CANCELED") {
              setError("Failed to fetch university data.");
              setRegularData(null);
            }
          } finally {
            setIsLoading(false);
          }
          break;
        }
        case "Study Abroad Countries": {
          try {
            setIsLoading(true);
            const controller = new AbortController();
            reqAbortRef.current = controller;

            const { data } = await axios.get(`${api}/country`, {
              params: { countryName: tidy(item) },
              signal: controller.signal,
            });

            setCountryData(data?.data ?? null);
          } catch (e) {
            if (e?.name !== "CanceledError" && e?.code !== "ERR_CANCELED") {
              console.error(e);
              setError("Failed to fetch university data.");
              setUniversityData(null);
            }
          } finally {
            setIsLoading(false);
          }
          break; // prevent fall-through
        }

        default: {
          setUniversityData(null);
          break;
        }
      }
    },
    [api, scrollToMain]
  );

  return (
    <div className="flex flex-col lg:flex-row space-y-5 parent">
      <div className=" lg:sticky lg:top-0  lg:h-[calc(100vh-4.5rem)] lg:overflow-y-auto pt-2 ">
        <Sidebar
          sidebarData={sidebarData}
          expandedItems={expandedItems}
          setExpandedItems={setExpandedItems}
          onlineUniversity={onlineUniversity}
          distanceUniversity={distanceUniversity}
          toggleExpand={toggleExpand}
          handleItemClick={handleItemClick}
          isLoading={isLoading}
        />
      </div>

      {/* 🔽 main section gets id + ref; scroll-mt offsets sticky headers on browsers that honor it */}
      <div
        id="main-section"
        ref={mainSectionRef}
        className="flex-1 bg-white shadow lg:ml-4 rounded-lg scroll-mt-24 lg:scroll-mt-0"
      >
        <MainContent
          selected={selected}
          universityData={universityData}
          isLoading={isLoading}
          error={error}
          countryData={countryData}
          regular={regularData}
        />
      </div>
    </div>
  );
};

export default DynamicWorldPortal;
