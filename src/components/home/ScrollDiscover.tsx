import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Building2,
  ChartNoAxesCombined,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const discoverItems = [
  {
    number: "01",
    title: "Crypto Exchanges",
    shortTitle: "Exchanges",
    description:
      "Compare cryptocurrency exchanges using structured information about fees, security, supported products, usability, and other important factors.",
    href: "/discover/exchanges",
    action: "Explore Exchanges",
    icon: Building2,
    points: ["Exchange scores", "Pros & cons", "Platform details"],
  },
  {
    number: "02",
    title: "Crypto Books",
    shortTitle: "Books",
    description:
      "Explore books about Bitcoin, cryptocurrency, investing, money, and financial psychology with beginner-friendly evaluations.",
    href: "/discover/books",
    action: "Explore Books",
    icon: BookOpen,
    points: ["Book scores", "Difficulty levels", "Who should read"],
  },
  {
    number: "03",
    title: "Analysis Websites",
    shortTitle: "Analysis",
    description:
      "Discover charting, market-data, research, and analytics platforms that can support deeper market research.",
    href: "/discover/analysis-websites",
    action: "Explore Websites",
    icon: ChartNoAxesCombined,
    points: ["Platform reviews", "Research features", "Best use cases"],
  },
];

export default function ScrollDiscover() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeItem = discoverItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <>
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <section className="hidden py-14 sm:py-16 lg:block">
        <div className="container-page">
          {/* HEADER */}
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Discover
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Research before you choose.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Explore structured directories for platforms, books, and
              research resources.
            </p>
          </div>

          {/* MAIN CONTAINER */}
          <div className="grid min-h-[460px] grid-cols-[0.65fr_1.35fr] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
            {/* =================================================
                LEFT NAVIGATION
            ================================================= */}

            <div className="flex flex-col justify-between border-r border-slate-200 p-8 dark:border-white/10 xl:p-10">
              <div>
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Explore directories
                </p>

                <div className="space-y-2">
                  {discoverItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = activeIndex === index;

                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition duration-300 ${
                          active
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-white"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                            active
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500 dark:bg-white/[0.05] dark:text-slate-400"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <div>
                          <span className="block text-xs font-bold opacity-60">
                            {item.number}
                          </span>

                          <span className="mt-0.5 block font-bold">
                            {item.shortTitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link
                to="/discover"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Discover
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* =================================================
                CHANGING CONTENT
            ================================================= */}

            <div className="relative flex items-center overflow-hidden p-10 xl:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.href}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -12,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                      <ActiveIcon size={28} />
                    </div>

                    <span className="text-6xl font-bold tracking-tight text-slate-100 dark:text-white/[0.05]">
                      {activeItem.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 dark:text-white xl:text-5xl">
                    {activeItem.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    {activeItem.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {activeItem.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={activeItem.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 dark:hover:bg-blue-500"
                  >
                    {activeItem.action}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* DOTS */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {discoverItems.map((item, index) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${item.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE / TABLET
      ===================================================== */}

      <section className="py-14 sm:py-16 lg:hidden">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Discover
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Research before you choose.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Explore structured directories for platforms, books, and research
            resources.
          </p>

          <div className="mt-8 grid gap-4">
            {discoverItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400/40 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                        {item.action}

                        <ArrowRight
                          size={15}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}