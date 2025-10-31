// DynamicCountries.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import MainContent from "./MainData";
import RegularAdmissionSkeleton from "../components/RegularAdmissionSkeleton";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  bg: "#EDEEEB",
  white: "#FFFFFF",
};

/* ---------------- Skeletons ---------------- */
const SidebarSkeleton = () => (
  <aside className="w-full lg:w-72 bg-white shadow-md rounded-2xl border border-gray-100 p-4">
    <div className="h-9 rounded-md bg-gray-200 animate-pulse mb-4" />
    <div className="space-y-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="h-8 rounded-md bg-gray-200 animate-pulse" />
      ))}
    </div>
  </aside>
);

const MainSkeleton = () => (
  <section className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-4 md:p-6">
    <div className="h-8 w-2/3 rounded-md bg-gray-200 animate-pulse mb-4" />
    <div className="h-4 w-1/3 rounded-md bg-gray-200 animate-pulse mb-6" />
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-4 w-full rounded-md bg-gray-200 animate-pulse" />
      ))}
    </div>
  </section>
);

/* ---------------- Component ---------------- */
const DynamicCountries = () => {
  const API = import.meta.env.VITE_BACKEND_API;
  const [isListLoading, setIsListLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [error, setError] = useState(null);

  const [countries, setCountries] = useState([]); // strings for sidebar
  const [rawCountries, setRawCountries] = useState([]); // raw objects
  const [selectedName, setSelectedName] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const mainSectionRef = useRef(null);

  const scrollToMain = useCallback(() => {
    const target = mainSectionRef.current || document.getElementById("main-section");
    if (!target) return;
    const HEADER_OFFSET = 72;
    requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    });
  }, []);

  const getDisplayName = (item) =>
    (typeof item === "string" && item) ||
    item?.countryName ||
    item?.name ||
    item?.title ||
    "";

  const fetchCountryList = useCallback(async () => {
    if (!API) {
      setIsListLoading(false);
      setError("Backend API missing: set VITE_BACKEND_API in your env.");
      return;
    }
    setIsListLoading(true);
    setError(null);
    try {
      let list = [];
      try {
        const { data } = await axios.get(`${API}/countries`);
        list = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      } catch {
        const { data } = await axios.get(`${API}/country`);
        list = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      }

      setRawCountries(list);
      const displayList = list.map(getDisplayName).filter(Boolean).sort();
      setCountries(displayList);
      if (!selectedName && displayList.length) setSelectedName(displayList[0]);
    } catch (err) {
      setError(err?.message || "Failed to load countries.");
      setCountries([]);
      setRawCountries([]);
    } finally {
      setIsListLoading(false);
    }
  }, [API, selectedName]);

  const fetchCountryDetail = useCallback(
    async (name) => {
      if (!name || !API) return;
      setIsDetailLoading(true);
      setSelectedCountry(null);
      try {
        let detail = null;
        try {
          const { data } = await axios.get(`${API}/country`, {
            params: { countryName: name },
          });
          detail = data?.data || data;
        } catch {
          const slug = name.toLowerCase().replace(/\s+/g, "-");
          const { data } = await axios.get(`${API}/country/${slug}`);
          detail = data?.data || data;
        }

        if (!detail && rawCountries?.length) {
          detail = rawCountries.find(
            (c) => getDisplayName(c).toLowerCase() === name.toLowerCase()
          );
        }

        setSelectedCountry(detail || { countryName: name, description: "" });
      } catch (err) {
        setSelectedCountry({
          countryName: name,
          description: "",
          _error: err?.message,
        });
      } finally {
        setIsDetailLoading(false);
      }
    },
    [API, rawCountries]
  );

  useEffect(() => {
    fetchCountryList();
  }, [fetchCountryList]);

  useEffect(() => {
    if (selectedName) fetchCountryDetail(selectedName);
  }, [selectedName, fetchCountryDetail]);

  // Smooth-scroll when the *detail* is ready to view
  useEffect(() => {
    if (!isDetailLoading && selectedCountry) {
      scrollToMain();
    }
  }, [isDetailLoading, selectedCountry, scrollToMain]);

  const handleSelect = (name) => setSelectedName(name);

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <header className="sticky top-0 z-20" style={{ backgroundColor: COLORS.brand }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mb-2">
          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Study Abroad • Countries
          </h1>
        </div>
      </header>

      {/* Content container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        {/* Error banner (list fetch) */}
        {error && !countries.length && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left: Sidebar or skeleton */}
          {isListLoading ? (
            <SidebarSkeleton />
          ) : (
            <Sidebar
              isLoading={isListLoading}
              countries={countries}
              selected={selectedName}
              onSelect={handleSelect}
              error={error}
            />
          )}

          {/* Right: Main or skeleton */}
          <div id="main-section" ref={mainSectionRef} className="flex-1">
            {isDetailLoading || !selectedCountry ? (
              <RegularAdmissionSkeleton />
            ) : (
              <MainContent selectedCountry={selectedCountry} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DynamicCountries;
