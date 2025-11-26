import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const PromotionStrip = () => {
  const API = import.meta.env.VITE_BACKEND_API;
  const sessionKey = "promotionStripNews_v1";
  const [news, setNews] = useState([]); // array of news objects
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // prevent double-fetch in React 18 Strict Mode (dev)
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return; // already started fetch once
    const cached = sessionStorage.getItem(sessionKey);
    if (cached) {
      try {
        setNews(JSON.parse(cached));
        hasFetchedRef.current = true;
        return; // don't fetch
      } catch (e) {
        sessionStorage.removeItem(sessionKey);
      }
    }
    const controller = new AbortController();
    let cancelled = false;
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API}/news`, {
          signal: controller.signal,
        });
        // adapt to backend shape: prefer res.data.data, fallback to res.data
        const payload = res?.data?.data ?? res?.data ?? [];
        if (!cancelled) {
          setNews(payload);
          try {
            sessionStorage.setItem(sessionKey, JSON.stringify(payload));
          } catch {
            // ignore sessionStorage quota errors
          }
          hasFetchedRef.current = true;
        }
      } catch (err) {
        if (err.name === "CanceledError" || axios.isCancel?.(err)) {
          // aborted - ignore
        } else if (!cancelled) {
          setError(err.message ?? "Failed to fetch news");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchNews();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [API]);

  // Use the first news item for label/message/CTA as a simple example.
  const first = news && news.length > 0 ? news[0] : null;

  // 1. Get the original link and apply **.trim()** to remove leading/trailing whitespace
  const originalLink = first?.link ? String(first.link).trim() : null;

  // 2. Check if the link starts with a protocol and prepend 'https://' if it doesn't.
  const ctaHref = originalLink
    ? originalLink.startsWith("http://") || originalLink.startsWith("https://")
      ? originalLink
      : `https://${originalLink}`
    : "#"; // Fallback if no link exists

  const label = first?.category ?? "Updates";
  const message =
    first?.newsTitle ?? "Latest updates and admission support — check now.";

  return (
   <header className="w-full bg-[#008080] text- px-[1rem] sm:px-[1.5rem] py-[0.5rem] sm:py-[0.75rem] shadow-md">
  <div className="max-w-7xl mx-auto flex flex-col gap-[0.75rem] sm:flex-row sm:items-center sm:justify-between">
    
    {/* Left */}
    <div className="flex items-center gap-[0.75rem] text-white">
      <div className="flex flex-col">
        <h1 className="text-[0.875rem] sm:text-[1rem] font-semibold leading-tight">
          Dynamic World – Career Guidance Experts
        </h1>
        <p className="text-[0.625rem] sm:text-[0.75rem] font-medium">
          1:1 Counselling • Results Updates • Admission Support
        </p>
      </div>
    </div>

    {/* Center */}
    <a
      href={ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:ml-[0.75rem] text-[0.625rem] font-medium rounded-full lg:px-[0.75rem] py-[0.2rem] transition animate-pulse hover:animate-none"
    >
      <div className="flex-1 sm:px-[1rem]">
        <div className="flex items-center gap-[0.5rem] bg-[#D7E0DD]  border border-white/10 rounded-xl px-[0.75rem] py-[0.5rem] backdrop-blur-sm text-black">

          {/* LIVE */}
          <span className="inline-flex items-center gap-[0.25rem] text-[0.5625rem] sm:text-[0.625rem] font-semibold uppercase tracking-wide bg-red-500 rounded-full px-[0.5rem] py-[0.125rem]">
            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-white animate-pulse" />
            Live
          </span>

          {/* Message */}
          <p className="text-[0.625rem] sm:text-[0.75rem] line-clamp-2">
            {loading
              ? "Loading latest updates..."
              : error
              ? `Error: ${error}`
              : <span className="text-black">{message}</span>}
          </p>
        </div>
      </div>
    </a>

    {/* Actions */}
    <div className="hidden lg:flex sm:flex-row flex-col sm:items-center gap-[0.5rem] sm:gap-[0.75rem] w-full sm:w-auto">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917887881060?text=Hi%20Dynamic%20World%2C%20I%20want%20help%20with%20admissions%20and%20latest%20results."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white text-[0.75rem] sm:text-[0.875rem] px-[1rem] py-[0.5rem] rounded-xl flex items-center justify-center gap-[0.5rem] transition duration-200 hover:-translate-y-[0.125rem] shadow-sm w-full sm:w-auto"
      >
        <span>WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href="tel:+917887881060"
        className="text-white bg-blue-600 hover:bg-blue-700 text-[0.75rem] sm:text-[0.875rem] px-[1rem] py-[0.5rem] rounded-xl flex items-center justify-center gap-[0.5rem] transition duration-200 hover:-translate-y-[0.125rem] shadow-sm w-full sm:w-auto"
      >
        Call Now
      </a>
    </div>
  </div>
</header>

  );
};

export default PromotionStrip;
