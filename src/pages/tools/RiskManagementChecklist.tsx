import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Before You Trade",
    items: [
      "I have a clear plan for this trade.",
      "I have identified support, resistance, and key levels.",
      "I know my entry, stop level, and target before entering.",
      "I am risking only a small percentage of my capital.",
      "I am not trading based on emotions.",
      "I have checked the market conditions and news.",
      "I am focused and not distracted.",
    ],
  },
  {
    title: "Position Sizing",
    items: [
      "I know how much capital I am willing to risk.",
      "I calculated my trade size before entering.",
      "My stop level distance is reasonable.",
      "This trade does not expose too much of my account.",
      "I can accept the loss and continue learning.",
    ],
  },
  {
    title: "During The Trade",
    items: [
      "I am following my original plan.",
      "I am not moving my stop level without reason.",
      "I am not overtrading.",
      "I am managing my emotions.",
      "I am focusing on the process, not only the outcome.",
    ],
  },
  {
    title: "After The Trade",
    items: [
      "I recorded this trade in my journal.",
      "I reviewed what went well.",
      "I reviewed what went wrong.",
      "I wrote down one lesson for next time.",
      "I accept the result and move forward.",
    ],
  },
];

const storageKey = "bassam-risk-management-checklist";

export default function RiskManagementChecklist() {
  const allItems = sections.flatMap((section) =>
    section.items.map((item) => `${section.title}-${item}`)
  );

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const completedCount = useMemo(() => {
    return allItems.filter((item) => checkedItems[item]).length;
  }, [allItems, checkedItems]);

  const progress = Math.round((completedCount / allItems.length) * 100);

  const toggleItem = (id: string) => {
    setCheckedItems((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
    setShowResetModal(false);
  };

  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/resources"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <section className="premium-card mb-8 overflow-hidden">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
                  Interactive Trading Tool
                </p>

                <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
                  Risk Management Checklist
                </h1>

                <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
                  Use this checklist before, during, and after a trading decision
                  to stay disciplined and protect your capital.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <ShieldCheck size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Progress
                    </p>
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">
                      {progress}% Complete
                    </p>
                  </div>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  {completedCount} of {allItems.length} items completed
                </p>
              </div>
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section, sectionIndex) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.08 }}
                className="premium-card"
              >
                <h2 className="mb-5 text-xl font-bold text-slate-950 dark:text-white">
                  {sectionIndex + 1}. {section.title}
                </h2>

                <div className="space-y-3">
                  {section.items.map((item) => {
                    const id = `${section.title}-${item}`;
                    const checked = Boolean(checkedItems[id]);

                    return (
                      <label
                        key={id}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                          checked
                            ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10"
                            : "border-slate-200 bg-slate-50 hover:border-blue-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleItem(id)}
                          className="mt-1 h-5 w-5 rounded border-slate-300 accent-emerald-500"
                        />

                        <span
                          className={`text-sm leading-6 ${
                            checked
                              ? "font-medium text-emerald-700 dark:text-emerald-300"
                              : "text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>

          <section className="premium-card mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Quick reminder
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                The goal is not to be perfect. The goal is to stay disciplined,
                manage risk, and keep improving.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowResetModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:-translate-y-1 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
            >
              <RotateCcw size={18} />
              Reset Checklist
            </button>
          </section>
        </motion.div>
      </div>

      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-950"
          >
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              Reset checklist?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Are you sure you want to clear all checked items? This action
              cannot be undone.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={resetChecklist}
                className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Reset
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}