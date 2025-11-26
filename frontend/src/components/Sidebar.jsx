import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { TRUSTWORTHY_GLOBAL } from "../constants/colors";

const COLORS = TRUSTWORTHY_GLOBAL;
const Sidebar = ({
  sidebarData,
  expandedItems,
  toggleExpand,
  handleItemClick,
  isLoading = false,
}) => {
  return (
    <aside className="w-full lg:w-72 h-full">
      <div className=" ring-1 ring-[#E5E7EB] overflow-hidden min-h-screen" >
        {/* Header */}
        <div className="bg-[#F8F3ED]">
          <div className="px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="text-sm sm:text-base font-bold tracking-wide text-center " >
              About DYNAMIC WORLD
            </h2>
          </div>
          <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${COLORS.secondary}80, ${COLORS.primaryLight}80, ${COLORS.secondary}80)` }} />
        </div>

        {/* Body */}
        <div className="p-2 sm:p-3 bg-[#F8F3ED]" >
          {isLoading ? (
            <div className="p-4 h-full">
              <div className="flex flex-col gap-3 animate-pulse">
                <div className="h-3.5 w-2/3 rounded bg-gray-200" />
                <div className="space-y-2">
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="h-3 w-3/4 rounded bg-gray-100" />
                  <div className="h-3 w-4/6 rounded bg-gray-100" />
                </div>
                <div className="h-3.5 w-1/2 rounded bg-gray-200 mt-2" />
                <div className="space-y-2">
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="h-3 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ) : sidebarData && sidebarData.length > 0 ? (
            <ul className="space-y-1">
              {sidebarData.map((section, index) => {
                const isOpen = !!expandedItems[index]; // keep existing API
                const items = Array.isArray(section.items) ? section.items : [];
                const panelId = `section-panel-${index}`;
                const buttonId = `section-button-${index}`;

                return (
                  <li
                    key={`${section.title}-${index}`}
                    className="rounded-lg border transition-all duration-200"
                    style={{ 
                      borderColor: isOpen ? COLORS.secondary : "#D1D5DB",
                      "--hover-border": COLORS.secondary
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = COLORS.secondary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isOpen ? COLORS.secondary : "#D1D5DB";
                    }}
                  >
                    <button
                      id={buttonId}
                      onClick={() => toggleExpand(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group w-full flex items-center justify-between gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg text-left transition-colors focus:outline-none focus-visible:ring-2"
                      style={{
                        backgroundColor: isOpen ? COLORS.primaryAccent : "transparent",
                        "--hover-bg": COLORS.secondaryAccent,
                        color: COLORS.text,
                        "--focus-ring": COLORS.primary
                      }}
                      onMouseEnter={(e) => {
                        if (!isOpen) e.currentTarget.style.backgroundColor = COLORS.secondaryAccent;
                      }}
                      onMouseLeave={(e) => {
                        if (!isOpen) e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <span className="text-sm sm:text-[15px] font-medium truncate" style={{ color: COLORS.text }}>
                        {section.title}
                      </span>

                      <span className="flex items-center gap-2 shrink-0">
                        {items.length > 0 && (
                          <img
                            src={section.url}
                            alt={section.url}
                            className="h-8 w-8"
                          />
                        )}
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 transition-transform" style={{ color: COLORS.primary }} />
                        ) : (
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ color: COLORS.text }} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="ml-2.5 pl-2.5 sm:ml-3 sm:pl-3 border-l pb-2"
                        style={{ borderColor: COLORS.secondary }}
                      >
                        {items.length === 0 ? (
                          <div className="px-2.5 py-2 text-xs" style={{ color: COLORS.textMuted }}>
                            No items
                          </div>
                        ) : (
                          items.map((item) => {
                            const canClick = Boolean(section.type);
                            const onClick = () =>
                              canClick
                                ? handleItemClick(item, section.type)
                                : undefined;

                            return (
                              <div key={`${section.title}::${item}`}>
                                <button
                                  onClick={onClick}
                                  disabled={!canClick}
                                  className="w-full text-left px-2.5 py-2 rounded-md text-[13px] sm:text-sm transition-colors truncate focus:outline-none focus-visible:ring-2"
                                  style={{
                                    color: canClick ? COLORS.text : COLORS.textMuted,
                                    cursor: canClick ? "pointer" : "not-allowed",
                                    "--hover-bg": COLORS.secondaryAccent,
                                    "--focus-ring": COLORS.primary
                                  }}
                                  onMouseEnter={(e) => {
                                    if (canClick) {
                                      e.currentTarget.style.backgroundColor = COLORS.secondaryAccent;
                                      e.currentTarget.style.color = COLORS.primary;
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (canClick) {
                                      e.currentTarget.style.backgroundColor = "transparent";
                                      e.currentTarget.style.color = COLORS.text;
                                    }
                                  }}
                                  title={item}
                                >
                                  {item}
                                </button>
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="">
                <a
                  href="https://studyabroad.dynamicworld.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md w-full bg-[#008080] hover:-translate-y-0.5 text-white"
                 
              
                >
                  Study Abroad
                
                </a>
              </li>
            </ul>
          ) : (
            <div className="p-4 text-center" style={{ color: COLORS.textMuted }}>
              <p className="text-sm">No data available</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
