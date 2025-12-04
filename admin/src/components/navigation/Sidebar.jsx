import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Sidebar = ({ links, isOpen, onClose }) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-72 transform bg-slate-900 text-slate-100 transition-transform duration-200 ease-in-out lg:static lg:translate-x-0",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 lg:hidden">
          <span className="text-lg font-semibold tracking-tight">
            Dynamic World Admin
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-slate-200 hover:bg-slate-800"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="hidden items-center px-6 py-6 lg:flex">
          <Menu className="mr-2 h-5 w-5 text-slate-400" />
          <span className="text-lg font-semibold tracking-tight">
            Dynamic World Admin
          </span>
        </div>
        <nav className="mt-4 space-y-1 px-3 pb-6 lg:px-4">
          <SidebarLink to="/" label="Dashboard" />
          <div className="mt-6 space-y-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Collections
            </p>
            {links.map((link) => (
              <SidebarLink
                key={link.id}
                to={link.path}
                label={link.name}
                icon={link.icon}
                onNavigate={onClose}
              />
            ))}
          </div>
        </nav>
      </div>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
};

const SidebarLink = ({ to, label, icon: Icon, onNavigate }) => (
  <NavLink
    to={to}
    onClick={onNavigate}
    end={to === "/"}
    className={({ isActive }) =>
      clsx(
        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
        isActive
          ? "bg-slate-800 text-white shadow-sm"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      )
    }
  >
    {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
    <span>{label}</span>
  </NavLink>
);

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Sidebar.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onNavigate: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: null,
  onNavigate: undefined,
};

export default Sidebar;
