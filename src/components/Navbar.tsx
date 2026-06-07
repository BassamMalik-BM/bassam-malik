import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Blogs", path: "/blogs" },
  { name: "Resources", path: "/resources" },
  { name: "Tools", path: "/tools" },
  { name: "Calculators", path: "/calculators" },
  { name: "Ebooks", path: "/ebooks" },
  { name: "Contact", path: "/contact" },
];

const learnDropdownLinks = [
  { name: "Learning Center", path: "/learn" },
  { name: "Categories", path: "/learn/categories" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  const dropdownLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300"
        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80">
      <nav
        className="container-page flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="bm-live-logo">
            <span>BM</span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLearnOpen((current) => !current)}
              className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
                isLearnOpen
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              Learn
              <ChevronDown
                size={15}
                className={`transition ${isLearnOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isLearnOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-navy-900">
                {learnDropdownLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={dropdownLinkClass}
                    onClick={() => setIsLearnOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label="Toggle light and dark theme"
            aria-pressed={isDark}
            className={`relative flex h-7 w-14 items-center rounded-full transition-all duration-300 ${
              isDark ? "bg-slate-800" : "bg-slate-200"
            }`}
          >
            <span
              className={`absolute left-1 h-5 w-5 rounded-full shadow-md transition-all duration-300 ${
                isDark
                  ? "translate-x-7 bg-slate-500"
                  : "translate-x-0 bg-white"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="container-page pb-5 lg:hidden">
          <div className="grid gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-premium dark:border-white/10 dark:bg-navy-900">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>

            <div className="rounded-2xl bg-slate-50 p-2 dark:bg-white/5">
              <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Learn
              </p>

              {learnDropdownLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}