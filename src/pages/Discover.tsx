import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChartNoAxesCombined,
} from "lucide-react";

import { exchanges } from "../data/discover/exchanges";
import { books } from "../data/discover/books";
import { analysisWebsites } from "../data/discover/analysis-websites";

const discoverSections = [
  {
    title: "Crypto Exchanges",
    description:
      "Compare cryptocurrency exchanges based on fees, security, liquidity, supported products, and beginner-friendliness.",
    href: "/discover/exchanges",
    label: "Explore Exchanges",
    icon: Building2,
    tags: ["Security", "Fees", "Beginner Friendly"],
    bestFor: "Choosing the right exchange",
    getCount: () => exchanges.length,
    countLabel: "Exchanges",
  },
  {
    title: "Crypto Books",
    description:
      "Discover cryptocurrency books based on difficulty, readability, practical value, depth, and beginner suitability.",
    href: "/discover/books",
    label: "Explore Books",
    icon: BookOpen,
    tags: ["Beginner", "Investing", "Education"],
    bestFor: "Building strong crypto foundations",
    getCount: () => books.length,
    countLabel: "Books",
  },
  {
    title: "Analysis Websites",
    description:
      "Explore charting, market-data, research, and analysis platforms for cryptocurrency and financial markets.",
    href: "/discover/analysis-websites",
    label: "Explore Websites",
    icon: ChartNoAxesCombined,
    tags: ["Charts", "Research", "Market Data"],
    bestFor: "Research and market analysis",
    getCount: () => analysisWebsites.length,
    countLabel: "Websites",
  },
];

export default function Discover() {
  return (
    <div>
      {/* Header */}
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Discover
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Find trusted crypto platforms, books, and analysis resources
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Browse structured directories designed to help beginners compare
          cryptocurrency exchanges, educational books, and market-analysis
          websites.
        </p>
      </div>

      {/* Directory Cards */}
      <section className="mt-12">
        <div className="space-y-6">
          {discoverSections.map((section) => {
            const Icon = section.icon;
            const count = section.getCount();

            return (
              <article
                key={section.href}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:border-blue-500/25 hover:shadow-md sm:p-8 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/25"
              >
                {/* subtle decoration */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/5" />

                <div className="relative grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)_220px] lg:items-center">
                  {/* Icon */}
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-100 bg-blue-50 text-blue-600 sm:h-28 sm:w-28 dark:border-blue-500/10 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon
                      size={42}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                      {section.title}
                    </h2>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                      {section.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {section.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Best for:
                      </span>{" "}
                      {section.bestFor}
                    </p>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-col gap-5 lg:items-end">
                    {/* Count */}
                    <div className="text-left lg:text-right">
                      <p className="text-3xl font-bold text-slate-950 dark:text-white">
                        {count}
                      </p>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {section.countLabel}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      to={section.href}
                      className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
                    >
                      {section.label}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}