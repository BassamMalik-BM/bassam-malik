import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Tools",
    path: "/tools",
  },
  {
    name: "Calculators",
    path: "/calculators",
  },
  {
    name: "Ebooks",
    path: "/ebooks",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const learnDropdownLinks = [
  {
    name: "Learning Center",
    description: "Browse all crypto articles",
    path: "/learn",
  },
  {
    name: "Categories",
    description: "Explore articles by topic",
    path: "/learn/categories",
  },
];

const discoverDropdownLinks = [
  {
    name: "Crypto Exchanges",
    description: "Compare exchanges, features, scores, and fees",
    path: "/discover/exchanges",
  },
  {
    name: "Crypto Books",
    description: "Explore books for learning about cryptocurrency",
    path: "/discover/books",
  },
  {
    name: "Analysis Websites",
    description: "Discover charting, research, and market-data platforms",
    path: "/discover/analysis-websites",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsLearnOpen(false);
        setIsDiscoverOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeNavigation = () => {
    setIsOpen(false);
    setIsLearnOpen(false);
    setIsDiscoverOpen(false);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 dark:text-slate-950"
        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
    }`;

  const desktopDropdownParentClass = (
    isActive: boolean,
    isDropdownOpen: boolean,
  ) =>
    `flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive || isDropdownOpen
        ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 dark:text-slate-950"
        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
    }`;

  const dropdownItemClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl p-4 transition ${
      isActive
        ? "bg-blue-50 dark:bg-blue-600/10"
        : "hover:bg-slate-50 dark:hover:bg-white/5"
    }`;

  const mobileSubLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-3 py-3 transition ${
      isActive
        ? "bg-blue-50 text-blue-700 dark:bg-blue-600/10 dark:text-blue-300"
        : "text-slate-700 hover:bg-white hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80">
      <nav
        className="container-page flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
          onClick={closeNavigation}
          aria-label="Bassam Malik home"
        >
          <div className="bm-live-logo">
            <span>BM</span>
          </div>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          {/* Learn dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setIsLearnOpen(true);
              setIsDiscoverOpen(false);
            }}
            onMouseLeave={() => setIsLearnOpen(false)}
          >
            <NavLink
              to="/learn"
              className={({ isActive }) =>
                desktopDropdownParentClass(isActive, isLearnOpen)
              }
              onFocus={() => {
                setIsLearnOpen(true);
                setIsDiscoverOpen(false);
              }}
              onClick={() => setIsDiscoverOpen(false)}
            >
              Learn

              <ChevronDown
                size={15}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  isLearnOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>

            {isLearnOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-navy-900">
                  {learnDropdownLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeNavigation}
                      className={dropdownItemClass}
                    >
                      {({ isActive }) => (
                        <>
                          <p
                            className={`font-semibold ${
                              isActive
                                ? "text-blue-700 dark:text-blue-300"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {link.name}
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
                            {link.description}
                          </p>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Discover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setIsDiscoverOpen(true);
              setIsLearnOpen(false);
            }}
            onMouseLeave={() => setIsDiscoverOpen(false)}
          >
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                desktopDropdownParentClass(isActive, isDiscoverOpen)
              }
              onFocus={() => {
                setIsDiscoverOpen(true);
                setIsLearnOpen(false);
              }}
              onClick={() => setIsLearnOpen(false)}
            >
              Discover

              <ChevronDown
                size={15}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  isDiscoverOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>

            {isDiscoverOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-navy-900">
                  {discoverDropdownLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeNavigation}
                      className={dropdownItemClass}
                    >
                      {({ isActive }) => (
                        <>
                          <p
                            className={`font-semibold ${
                              isActive
                                ? "text-blue-700 dark:text-blue-300"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {link.name}
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
                            {link.description}
                          </p>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Theme and mobile controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label="Toggle light and dark theme"
            aria-pressed={isDark}
            className={`relative flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-navy-950 ${
              isDark ? "bg-slate-800" : "bg-slate-200"
            }`}
          >
            <span
              className={`absolute left-1 h-5 w-5 rounded-full shadow-md transition-all duration-300 ${
                isDark
                  ? "translate-x-7 bg-blue-400"
                  : "translate-x-0 bg-white"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:border-blue-600/40 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-blue-400 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="container-page pb-5 lg:hidden">
          <div className="grid gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-premium dark:border-white/10 dark:bg-navy-900">
            <NavLink
              to="/"
              end
              className={linkClass}
              onClick={closeNavigation}
            >
              Home
            </NavLink>

            {/* Mobile Learn section */}
            <div className="rounded-2xl bg-slate-50 p-2 dark:bg-white/5">
              <NavLink
                to="/learn"
                onClick={closeNavigation}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
                    isActive
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  }`
                }
              >
                Learn
              </NavLink>

              <div className="mt-1 grid gap-1">
                {learnDropdownLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={mobileSubLinkClass}
                    onClick={closeNavigation}
                  >
                    <div className="font-medium">{link.name}</div>

                    <div className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                      {link.description}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Discover section */}
            <div className="rounded-2xl bg-slate-50 p-2 dark:bg-white/5">
              <NavLink
                to="/discover"
                onClick={closeNavigation}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
                    isActive
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  }`
                }
              >
                Discover
              </NavLink>

              <div className="mt-1 grid gap-1">
                {discoverDropdownLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={mobileSubLinkClass}
                    onClick={closeNavigation}
                  >
                    <div className="font-medium">{link.name}</div>

                    <div className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                      {link.description}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={closeNavigation}
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