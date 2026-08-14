import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  ClipboardCheck,
  NotebookTabs,
  PieChart,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { tools } from "../../data/tools";
import { calculators } from "../../data/calculators";

type ActiveTab = "tools" | "calculators";

const toolIcons: Record<string, React.ElementType> = {
  "trading-journal": NotebookTabs,
  "portfolio-manager": PieChart,
  "trading-checklist": ClipboardCheck,
  "risk-management-checklist": ShieldCheck,
};

const calculatorIcons: Record<string, React.ElementType> = {
  "position-size": Calculator,
  "risk-reward": ShieldCheck,
  "profit-loss": ClipboardCheck,
  dca: PieChart,
};

export default function ToolsCalculatorsPreview() {
  const [activeTab, setActiveTab] =
    useState<ActiveTab>("tools");

  const featuredTools = useMemo(
    () => tools.filter((tool) => tool.featured).slice(0, 3),
    [],
  );

  const featuredCalculators = useMemo(
    () =>
      calculators
        .filter((calculator) => calculator.featured)
        .slice(0, 3),
    [],
  );

  const items =
    activeTab === "tools"
      ? featuredTools
      : featuredCalculators;

  const sectionLink =
    activeTab === "tools"
      ? "/tools"
      : "/calculators";

  const sectionLabel =
    activeTab === "tools"
      ? "View all tools"
      : "View all calculators";

  return (
    <section className="py-12 sm:py-14">
      <div className="container-page">
        <div className="rounded-[2rem] border border-slate-200 bg-white/60 px-6 py-10 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:px-10 sm:py-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Practical Resources
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Turn learning into a process
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Organize your decisions with practical tools or switch to
              calculators when you need quick planning estimates.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-9 flex justify-center">
            <div className="flex items-end gap-8 border-b border-slate-200 dark:border-white/10">
              <TabButton
                active={activeTab === "tools"}
                label="Tools"
                icon={Wrench}
                onClick={() => setActiveTab("tools")}
              />

              <TabButton
                active={activeTab === "calculators"}
                label="Calculators"
                icon={Calculator}
                onClick={() =>
                  setActiveTab("calculators")
                }
              />
            </div>
          </div>

          {/* Cards */}
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {items.map((item, index) => {
              const Icon =
                activeTab === "tools"
                  ? toolIcons[item.slug] ?? Wrench
                  : calculatorIcons[item.slug] ??
                    Calculator;

              const href =
                activeTab === "tools"
                  ? `/tools/${item.slug}`
                  : `/calculators/${item.slug}`;

              return (
                <article
                  key={`${activeTab}-${item.slug}`}
                  className="relative flex min-h-[230px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/20"
                >
                  {index === 0 && (
                    <span className="absolute -top-3 left-6 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                      Featured
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={21} />
                    </div>

                    <Link
                      to={href}
                      aria-label={`Open ${item.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-blue-600 hover:text-white dark:bg-white/[0.05] dark:text-slate-300"
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/10">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Best for
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.bestFor}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-8 flex justify-end border-t border-slate-200 pt-6 dark:border-white/10">
            <Link
              to={sectionLink}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
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

function TabButton({
  active,
  label,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex min-w-[120px] flex-col items-center pb-4 transition ${
        active
          ? "text-blue-600 dark:text-blue-400"
          : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
      }`}
    >
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
          active
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
            : "bg-slate-100 text-slate-500 dark:bg-white/[0.05] dark:text-slate-400"
        }`}
      >
        <Icon size={24} />
      </span>

      <span className="mt-3 text-sm font-bold">
        {label}
      </span>

      {active && (
        <span className="absolute bottom-[-1px] h-0.5 w-full rounded-full bg-blue-600 dark:bg-blue-400" />
      )}
    </button>
  );
}