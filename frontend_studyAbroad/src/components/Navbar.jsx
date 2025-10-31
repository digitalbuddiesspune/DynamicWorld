import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/immigration", label: "Immigration" },
  { to: "/visa-services", label: "Visa Services" },
  { to: "/about-us", label: "About Us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const linkClass = ({ isActive }) =>
    `relative text-[15px] font-medium transition-colors duration-200
     after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
     after:bg-[#3E96F4] after:transition-all after:duration-300 hover:after:w-full
     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4] focus-visible:rounded
     ${isActive ? "text-[#3E96F4] after:w-full" : "text-[#31393C] hover:text-[#3E96F4]"}`;

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside the panel (on backdrop)
  const onBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" aria-label="Dynamic World Home">
            <img
              src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761564627/Dynamic-World-Study-Abroad-Logo_n8nhxn.svg"
              alt="Dynamic World Logo"
              className="w-28 lg:w-36 transition-transform hover:scale-105 duration-300 ease-in-out cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 font-medium">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="h-10 w-10 grid place-items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4]"
          >
            <img
              src={
                menuOpen
                  ? "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761566378/close_lzcya5.png"
                  : "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761566387/menu_l3evdc.png"
              }
              alt=""
              className="h-6 w-6 pointer-events-none"
            />
          </button>
        </div>
      </div>

      {/* Mobile Overlay + Panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden"
          onMouseDown={onBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Panel */}
          <div
            ref={panelRef}
            className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl p-6 flex flex-col gap-6"
          >
            {/* Header row with logo + close */}
            <div className="flex items-center justify-between">
              <NavLink to="/" onClick={closeMenu} className="shrink-0">
                <img
                  src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761564627/Dynamic-World-Study-Abroad-Logo_n8nhxn.svg"
                  alt="Dynamic World Logo"
                  className="w-28 transition-transform hover:scale-[1.02]"
                />
              </NavLink>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="h-10 w-10 grid place-items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4]"
              >
                <img
                  src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761566378/close_lzcya5.png"
                  alt=""
                  className="h-6 w-6 pointer-events-none"
                />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-[15px] font-medium transition
                      ${isActive ? "text-[#3E96F4] bg-[#EDEEEB]" : "text-[#31393C] hover:bg-gray-50 hover:text-[#3E96F4]"}`
                    }
                    onClick={closeMenu}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Optional CTA row (add later if needed) */}
            {/* <div className="mt-auto flex gap-3">
              <a href="tel:+917887881060" className="flex-1 text-center rounded-lg bg-[#3E96F4] text-white py-2.5 font-semibold">
                Quick Call
              </a>
              <a href="https://wa.me/917887881060" className="flex-1 text-center rounded-lg border border-[#3E96F4] text-[#3E96F4] py-2.5 font-semibold">
                WhatsApp
              </a>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
