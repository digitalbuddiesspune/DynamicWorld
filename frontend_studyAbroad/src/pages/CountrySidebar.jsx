// CountrySidebar.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

const SkeletonItem = () => (
  <div className="animate-pulse">
    <div className="h-9 rounded-lg bg-gray-100" />
  </div>
);

const CountrySidebar = ({
  isLoading = false,
  countries = [], // array of strings
  selected = null, // string
  onSelect = () => {},
  error = null,
  title = "Countries",
}) => {
  const [query, setQuery] = useState("");
  const listRef = useRef(null);

  // Filter countries by query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c?.toLowerCase().includes(q));
  }, [countries, query]);

  // Parent controls default selection; do not auto-select here

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!filtered.length) return;
      const idx = Math.max(0, filtered.findIndex((c) => c === selected));
      if (e.key === "ArrowDown") {
        const next = filtered[(idx + 1) % filtered.length];
        onSelect(next);
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
        onSelect(prev);
        e.preventDefault();
      } else if (e.key === "Enter") {
        if (selected) onSelect(selected);
      }
    },
    [filtered, selected, onSelect]
  );

  // Scroll selected into view (within the list only)
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector('[data-selected="true"]');
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [selected, filtered]);

  return (
    <aside
      className="w-full lg:w-1/4 bg-white border border-gray-200 "
      style={{ color: COLORS.text }}
      onKeyDown={handleKeyDown}
    >
      {/* Header */}
      <div
        className="py-4 px-5 font-semibold text-base tracking-wide flex items-center justify-between"
        style={{ backgroundColor: COLORS.brand, color: COLORS.white }}
      >
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 12h20M12 2c-3 4-3 16 0 20M12 2c3 4 3 16 0 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{title}</span>
        </div>
        <span className="text-xs opacity-90">{isLoading ? "…" : filtered.length}</span>
      </div>

      {/* Search */}
      <div className="p-3">
        <label htmlFor="country-search" className="sr-only">
          Search countries
        </label>
        <div className="relative">
          <input
            id="country-search"
            type="text"
            placeholder="Search country…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {query ? (
            <button
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          ) : (
            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mx-3 mb-3 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
          {error}
        </div>
      )}

      {/* List */}
      <div ref={listRef} className="px-3 pb-3 space-y-2">
        {/* Loading skeletons */}
        {isLoading && (
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonItem key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-200 p-6 text-center text-sm text-gray-500">
            No countries found
          </div>
        )}

        {/* Items */}
        {!isLoading &&
          filtered.map((name) => {
            const isActive = selected && name === selected;
            return (
              <button
                key={name}
                type="button"
                data-selected={isActive ? "true" : "false"}
                onClick={() => onSelect(name)}
                className={`w-full text-left px-3 py-2 rounded-lg border transition
                  ${
                    isActive
                      ? "border-blue-200 bg-blue-50"
                      : "border-transparent hover:bg-gray-50"
                  }
                `}
                style={isActive ? { boxShadow: "inset 0 0 0 1px #bfdbfe" } : {}}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: isActive ? COLORS.brand : COLORS.chipBg,
                    }}
                  />
                  <span className="text-sm">{name}</span>
                </div>
              </button>
            );
          })}
      </div>
    </aside>
  );
};

export default CountrySidebar;


