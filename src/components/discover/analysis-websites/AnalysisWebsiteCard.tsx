import { Link } from "react-router-dom";
import type { AnalysisWebsiteData } from "../../../data/discover/analysis-websites";
import AnalysisWebsiteScore from "./AnalysisWebsiteScore";

interface AnalysisWebsiteCardProps {
  website: AnalysisWebsiteData;
}

export default function AnalysisWebsiteCard({
  website,
}: AnalysisWebsiteCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:p-8">
        <div className="flex min-w-0 flex-1 gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center">
            <img
              src={website.logo}
              alt={`${website.name} logo`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {website.name}
              </h2>

              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                {website.pricingModel}
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              {website.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                {website.category}
              </span>

              {website.supportedMarkets
                .slice(0, 3)
                .map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                  >
                    {market}
                  </span>
                ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-950 dark:text-white">
                Best for:
              </span>{" "}
              {website.bestFor.join(", ")}
            </p>
          </div>
        </div>

        <AnalysisWebsiteScore
          score={website.score.overall}
        />

        <div className="flex gap-3 sm:flex-row lg:flex-col">
          <a
            href={website.referralUrl ?? website.officialWebsite}
            target="_blank"
            rel={
              website.referralUrl
                ? "sponsored nofollow noopener noreferrer"
                : "nofollow noopener noreferrer"
            }
            className="flex-1 rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 dark:text-white dark:hover:bg-blue-500 lg:flex-none"
          >
            Visit Website
          </a>

          <Link
            to={`/discover/analysis-websites/${website.slug}`}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5 lg:flex-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}