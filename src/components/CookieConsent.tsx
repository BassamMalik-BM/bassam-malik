import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, Settings, X } from "lucide-react";

type CookieChoice = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [choice, setChoice] = useState<CookieChoice>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("cookie-consent") as CookieChoice;

    if (!savedChoice) {
      setShowBanner(true);
    } else {
      setChoice(savedChoice);
    }
  }, []);

  const saveChoice = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", value);
    setChoice(value);
    setShowBanner(false);
    setShowManage(false);
  };

  if (!showBanner || choice) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-navy-900">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              <Cookie size={24} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                Manage cookie preferences
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Bassam Malik uses cookies and similar technologies to support
                basic website functionality, remember preferences, improve page
                performance, and understand general website usage.
              </p>

              {showManage && (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                  <p className="font-semibold text-slate-950 dark:text-white">
                    Cookie options
                  </p>

                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="font-semibold">Essential cookies</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        Required for basic website functionality and cannot be
                        disabled from this banner.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Analytics and performance</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        Helps understand general usage, page performance, and
                        which educational resources are useful.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <Link
                  to="/cookies-policy"
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300"
                >
                  Cookies Policy
                </Link>

                <Link
                  to="/privacy-policy"
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3 md:justify-end">
            <button
              type="button"
              onClick={() => setShowManage(!showManage)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <Settings size={16} />
              Manage
            </button>

            <button
              type="button"
              onClick={() => saveChoice("rejected")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
            >
              Reject
            </button>

            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Accept
            </button>

            <button
              type="button"
              onClick={() => setShowBanner(false)}
              aria-label="Close cookie banner"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}