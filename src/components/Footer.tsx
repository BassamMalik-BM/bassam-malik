import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { SiBinance } from "react-icons/si";

export default function Footer() {
  const footerLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Risk Disclaimer", path: "/risk-disclaimer" },
    { name: "About", path: "/about" },
  ];

  const socialLinks = [
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/BassamMalik_BM",
      glow:
        "hover:border-black hover:shadow-[0_0_30px_rgba(0,0,0,0.35)] dark:hover:border-white dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
      color: "text-slate-700 dark:text-white",
    },
    {
      name: "Binance",
      icon: SiBinance,
      url: "https://app.binance.com/uni-qr/cpro/Square-Creator-063366329?l=en&r=J2UQ5OA7&uc=app_square_share_link&us=copylink",
      glow:
        "hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.45)]",
      color: "text-yellow-500",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-page py-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-lg font-bold text-white">
                BM
              </div>

              <div>
                <h2 className="font-bold text-slate-950 dark:text-white">
                  Bassam Malik
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Learn crypto trading with clarity and confidence.
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Beginner-friendly resources for learning market structure, risk
              management, trading journals, and safer decision-making in crypto
              markets.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
              Quick Links
            </h3>

            <div className="grid gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
              Social Media
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={`group flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 ${social.glow}`}
                  >
                    <Icon
                      size={22}
                      className={`transition duration-300 group-hover:scale-110 ${social.color}`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-200 bg-slate-50 py-6 dark:border-white/10 dark:bg-slate-900/60">
        <div className="container-page flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2026 Bassam Malik · Educational content only. Not financial
              advice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/privacy-policy"
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Privacy Policy
            </Link>

            <span className="hidden text-slate-300 dark:text-slate-600 sm:inline">
              |
            </span>

            <Link
              to="/terms-and-conditions"
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}