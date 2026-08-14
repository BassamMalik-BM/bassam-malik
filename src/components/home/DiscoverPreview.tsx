import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChartNoAxesCombined,
} from "lucide-react";

const discoverItems = [
  {
    title: "Crypto Exchanges",
    description:
      "Compare exchanges based on security, fees, liquidity, products, and beginner-friendliness.",
    href: "/discover/exchanges",
    label: "Explore Exchanges",
    icon: Building2,
  },
  {
    title: "Crypto Books",
    description:
      "Explore books about Bitcoin, cryptocurrency, investing, money, and financial psychology.",
    href: "/discover/books",
    label: "Explore Books",
    icon: BookOpen,
  },
  {
    title: "Analysis Websites",
    description:
      "Discover charting, market-data, research, and cryptocurrency analysis platforms.",
    href: "/discover/analysis-websites",
    label: "Explore Websites",
    icon: ChartNoAxesCombined,
  },
];

export default function DiscoverPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Discover
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Compare useful crypto resources
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Explore structured directories for exchanges, books, and
              analysis platforms without mixing recommendations into the Learn
              section.
            </p>
          </div>

          <Link
            to="/discover"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Visit Discover
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {discoverItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon size={23} />
                  </div>

                  <ArrowRight
                    size={18}
                    className="mt-1 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                <Link
                  to={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {item.label}
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}