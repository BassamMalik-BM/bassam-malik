import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  ClipboardCheck,
  NotebookTabs,
  PieChart,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

type ActiveTab = "tools" | "calculators";

const toolItems = [
  {
    title: "Trading Journal",
    description:
      "Record completed trades, review decisions, and identify patterns in your trading behavior.",
    href: "/tools/trading-journal",
    icon: NotebookTabs,
    meta: "Review",
    value: "Past trades",
  },
  {
    title: "Portfolio Manager",
    description:
      "Organize assets you own and review portfolio allocation and overall structure.",
    href: "/tools/portfolio-manager",
    icon: PieChart,
    meta: "Track",
    value: "Holdings",
  },
  {
    title: "Risk Management Checklist",
    description:
      "Review important risk rules before committing capital to a trade.",
    href: "/tools/risk-management-checklist",
    icon: ShieldCheck,
    meta: "Protect",
    value: "Risk process",
  },
];

const calculatorItems = [
  {
    title: "Position Size",
    description:
      "Calculate position size using account balance, risk percentage, entry, and stop loss.",
    href: "/calculators/position-size",
    icon: Ruler,
    meta: "Calculate",
    value: "Trade size",
  },
  {
    title: "Risk / Reward",
    description:
      "Compare the potential risk and reward of a trade before entering.",
    href: "/calculators/risk-reward",
    icon: Calculator,
    meta: "Compare",
    value: "Risk vs reward",
  },
  {
    title: "Profit & Loss",
    description:
      "Estimate a trade's potential profit or loss from entry, exit, and position size.",
    href: "/calculators/profit-loss",
    icon: ClipboardCheck,
    meta: "Estimate",
    value: "Trade outcome",
  },
];

export default function ToolsCalculatorsPreview() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("tools");

  const items =
    activeTab === "tools"
      ? toolItems
      : calculatorItems;

  const sectionLink =
    activeTab === "tools"
      ? "/tools"
      : "/calculators";

  const sectionLabel =
    activeTab === "tools"
      ? "View all tools"
      : "View all calculators";

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50/80 via-white/70 to-emerald-50/70 px-6 py-10 shadow-sm dark:border-white/10 dark:from-blue-950/20 dark:via-slate-950/30 dark:to-emerald-950/20 sm:px-10 sm:py-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Practical Resources
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Plan, track, and calculate with clarity
            </h2>
          </div>

          {/* Tabs */}
          <div className="mt-9 flex justify-center">
            <div className="flex items-end gap-8 border-b border-slate-200 dark:border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("tools")}
                className={`relative flex min-w-[110px] flex-col items-center pb-4 transition ${
                  activeTab === "tools"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                    activeTab === "tools"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white text-blue-600 shadow-sm dark:bg-white/[0.05] dark:text-blue-400"
                  }`}
                >
                  <Wrench size={24} />
                </span>

                <span className="mt-3 text-sm font-bold">
                  Tools
                </span>

                {activeTab === "tools" && (
                  <span className="absolute bottom-[-1px] h-0.5 w-full rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("calculators")}
                className={`relative flex min-w-[110px] flex-col items-center pb-4 transition ${
                  activeTab === "calculators"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                    activeTab === "calculators"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white text-blue-600 shadow-sm dark:bg-white/[0.05] dark:text-blue-400"
                  }`}
                >
                  <Calculator size={24} />
                </span>

                <span className="mt-3 text-sm font-bold">
                  Calculators
                </span>

                {activeTab === "calculators" && (
                  <span className="absolute bottom-[-1px] h-0.5 w-full rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${activeTab}-${item.title}`}
                  className="relative flex min-h-[245px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/30"
                >

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={21} />
                    </div>

                    <Link
                      to={item.href}
                      aria-label={`Open ${item.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white dark:bg-white/[0.06] dark:text-slate-300"
                    >
                      <ArrowRight size={17} />
                    </Link>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {item.meta}
                      </span>

                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <p className="max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Tools help organize your process. Calculators help estimate
              specific values.
            </p>

            <Link
              to={sectionLink}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {sectionLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}