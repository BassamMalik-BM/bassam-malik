import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Resources', path: '/resources' },
  { name: 'Risk Disclaimer', path: '/risk-disclaimer' },
  { name: "Calculators", path: "/calculators" },
  { name: "Ebooks", path: "/ebooks" },
  { name: 'Contact', path: '/contact' },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <NavLink
        to="/"
        className="flex items-center"
        onClick={() => setIsOpen(false)}
                     >
       <div className="bm-live-logo">
       <span>BM</span>
        </div>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
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
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:border-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            aria-label="Toggle light and dark theme"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
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
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setIsOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
