import { Link } from "react-router-dom";
import type { ExchangeData } from "../../../data/discover/exchanges";
import ExchangeScore from "./ExchangeScore";

interface ExchangeCardProps {
  exchange: ExchangeData;
}

export default function ExchangeCard({
  exchange,
}: ExchangeCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:p-8">
        <div className="flex min-w-0 flex-1 gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center">
            <img
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              {exchange.name}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              {exchange.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exchange.supportedTrading.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-950 dark:text-white">
                Best for:
              </span>{" "}
              {exchange.bestFor.join(", ")}
            </p>
          </div>
        </div>

        <ExchangeScore score={exchange.score.overall} />

        <div className="flex gap-3 sm:flex-row lg:flex-col">
          {exchange.referralUrl && (
            <a
              href={exchange.referralUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="flex-1 rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 dark:text-white dark:hover:bg-blue-500 lg:flex-none"
            >
              Trade Now
            </a>
          )}

          <Link
            to={`/discover/exchanges/${exchange.slug}`}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5 lg:flex-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}