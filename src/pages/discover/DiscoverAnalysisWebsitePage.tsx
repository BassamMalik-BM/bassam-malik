import { Link, useParams } from "react-router-dom";
import AnalysisWebsiteScore from "../../components/discover/analysis-websites/AnalysisWebsiteScore";
import { getAnalysisWebsiteBySlug } from "../../data/discover/analysis-websites";

export default function DiscoverAnalysisWebsitePage() {
  const { slug } = useParams<{ slug: string }>();
  const website = getAnalysisWebsiteBySlug(slug);

  if (!website) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
          Analysis website not found
        </h1>

        <Link
          to="/discover/analysis-websites"
          className="mt-8 inline-block font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all analysis websites
        </Link>
      </section>
    );
  }

  const scoreItems = [
    {
      label: "Beginner Friendly",
      score: website.score.beginnerFriendly,
    },
    {
      label: "Data Quality",
      score: website.score.dataQuality,
    },
    {
      label: "Usability",
      score: website.score.usability,
    },
    {
      label: "Features",
      score: website.score.features,
    },
    {
      label: "Value",
      score: website.score.value,
    },
  ];

  const destinationUrl =
    website.referralUrl ?? website.officialWebsite;

  return (
    <div className="space-y-14 text-slate-950 dark:text-white">
      {/* Hero */}
      <section>
        <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center">
            <img
              src={website.logo}
              alt={`${website.name} logo`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {website.category}
              </p>

              <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {website.pricingModel}
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              {website.name}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {website.tagline}
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-400">
              {website.description}
            </p>
          </div>

          <AnalysisWebsiteScore score={website.score.overall} />
        </div>
      </section>

      {/* Affiliate disclosure */}
      {website.affiliateDisclosure && (
        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-50/70 p-5 dark:border-emerald-400/20 dark:bg-emerald-400/5">
          <p className="font-semibold text-emerald-600 dark:text-emerald-300">
            Affiliate disclosure
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {website.affiliateDisclosure}
          </p>
        </section>
      )}

      {/* Score breakdown */}
      <section>
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
          Score breakdown
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {scoreItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
            >
              <div className="flex justify-between gap-4">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>

                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {item.score.toFixed(1)}
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{
                    width: `${Math.min(
                      Math.max(item.score * 10, 0),
                      100,
                    )}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {item.score.toFixed(1)} out of 10
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features and markets */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Key features
          </h2>

          <ul className="mt-6 space-y-4">
            {website.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="text-emerald-600 dark:text-emerald-400">
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Supported markets
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {website.supportedMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-500/25 bg-emerald-50/70 p-8 dark:border-emerald-500/20 dark:bg-emerald-500/5">
          <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            Pros
          </h2>

          <ul className="mt-6 space-y-4">
            {website.pros.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="text-emerald-600 dark:text-emerald-400">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/60 p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
            Cons
          </h2>

          <ul className="mt-6 space-y-4">
            {website.cons.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="text-slate-600 dark:text-slate-400">
                  —
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      {website.pricingPlans?.length ? (
        <section>
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Pricing
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {website.pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
              >
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 font-semibold text-emerald-600 dark:text-emerald-400">
                  {plan.price}
                </p>

                {plan.description && (
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="rounded-3xl border border-blue-500/25 bg-blue-50/70 p-8 dark:border-blue-500/20 dark:bg-blue-500/10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
              Visit {website.name}
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Review the platform&apos;s current features, plans, limits, and
              availability before creating an account.
            </p>
          </div>

          <a
            href={destinationUrl}
            target="_blank"
            rel={
              website.referralUrl
                ? "sponsored nofollow noopener noreferrer"
                : "nofollow noopener noreferrer"
            }
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
          >
            Visit Website
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Last updated:{" "}
          <time dateTime={website.updatedAt}>
            {new Date(
              `${website.updatedAt}T00:00:00`,
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>

        <Link
          to="/discover/analysis-websites"
          className="font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all analysis websites
        </Link>
      </footer>
    </div>
  );
}