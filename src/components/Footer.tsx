import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import { SiBinance } from "react-icons/si";

export default function Footer() {
  const quickLinks = [
    { name: "Start Here", path: "/start-here" },
    { name: "Learn", path: "/learn" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const trustLinks = [
    { name: "About the Author", path: "/author" },
    { name: "Sources", path: "/sources" },
    { name: "Editorial Policy", path: "/editorial-policy" },
    { name: "Risk Disclaimer", path: "/risk-disclaimer" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Cookies Policy", path: "/cookies-policy" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://whatsapp.com/channel/0029VbCHUF1FHWq1qeAZ2Y2c",
      glow:
        "hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]",
      color: "text-green-500",
    },
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
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/share/1B6PP4quka/",
      glow:
        "hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]",
      color: "text-blue-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/bassammalik_bm?igsh=MWVndzN5cGM5MHZpdA==",
      glow:
        "hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]",
      color: "text-pink-500",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr_0.9fr_0.9fr_1fr]">
          {/* BRAND */}
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
                  Learn | Trade | Grow
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Beginner-friendly crypto education focused on market structure,
              risk management, trading journals, and safer long-term decision-making.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
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

          {/* TRUST */}
          <div>
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
              Trust & Transparency
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              {trustLinks.map((link) => (
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

          {/* LEGAL */}
          <div>
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              {legalLinks.map((link) => (
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

          {/* SOCIAL */}
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
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Bassam Malik · Educational content only. Not financial advice.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built for beginners. Focused on clarity, discipline, and long-term growth.
          </p>
        </div>
      </div>
    </footer>
  );
}