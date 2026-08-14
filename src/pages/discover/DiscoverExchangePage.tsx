import { Link, useParams } from "react-router-dom";
import ExchangeScore from "../../components/discover/exchanges/ExchangeScore";
import { getExchangeBySlug } from "../../data/discover/exchanges";

export default function DiscoverExchangePage() {
  const { slug } = useParams<{ slug: string }>();

  const exchange = getExchangeBySlug(slug);

  if (!exchange) {
    return (
      <section className="py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Exchange Directory
        </p>

        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Exchange not found
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The exchange you are looking for does not exist or may have been
          removed.
        </p>

        <Link
          to="/discover/exchanges"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          View all exchanges
        </Link>
      </section>
    );
  }

  const scoreItems = [
    {
      label: "Security",
      score: exchange.score.security,
    },
    {
      label: "Fees",
      score: exchange.score.fees,
    },
    {
      label: "Beginner Friendly",
      score: exchange.score.beginnerFriendly,
    },
    {
      label: "Liquidity",
      score: exchange.score.liquidity,
    },
    {
      label: "Features",
      score: exchange.score.features,
    },
  ];

  return (
    <div className="space-y-16 text-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="grid gap-10 py-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0">
                <img
                  src={exchange.logo}
                  alt={`${exchange.name} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Exchange Profile
                </p>

                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                  {exchange.name}
                </h1>

                <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {exchange.tagline}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-4xl leading-8 text-slate-700 dark:text-slate-300">
              {exchange.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {exchange.referralUrl && (
                <a
                  href={exchange.referralUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
                >
                  Trade on {exchange.name}
                </a>
              )}

              <a
                href={exchange.officialWebsite}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Official Website
              </a>
            </div>
          </div>

          <ExchangeScore score={exchange.score.overall} />
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section
        aria-label="Affiliate disclosure"
        className="rounded-2xl border border-emerald-400/30 bg-emerald-50/70 p-5 dark:border-emerald-400/20 dark:bg-emerald-400/5"
      >
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
          Affiliate disclosure
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {exchange.affiliateDisclosure}
        </p>
      </section>

      {/* Best for */}
      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Best For
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Who should consider {exchange.name}?
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            This exchange may be suitable for users looking for the following
            features and trading conditions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exchange.bestFor.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                >
                  ✓
                </span>

                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Score breakdown */}
      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Score Breakdown
          </p>

          <h2 className="mt-3 text-3xl font-bold">Bassam Score</h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            The overall score is based on security, fees, beginner-friendliness,
            liquidity, and available features.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {scoreItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
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

      {/* Supported trading and products */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
          <h2 className="text-2xl font-bold">Supported trading</h2>

          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
            Trading options available on {exchange.name}.
          </p>

          <ul className="mt-6 space-y-4">
            {exchange.supportedTrading.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />

                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
          <h2 className="text-2xl font-bold">Supported products</h2>

          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
            Additional products and services provided by the exchange.
          </p>

          <ul className="mt-6 space-y-4">
            {exchange.supportedProducts.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />

                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pros and cons */}
      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Advantages and Limitations
          </p>

          <h2 className="mt-3 text-3xl font-bold">Pros and cons</h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-500/25 bg-emerald-50/70 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/5 sm:p-8">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
              Pros
            </h3>

            <ul className="mt-6 space-y-4">
              {exchange.pros.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-emerald-600 dark:text-emerald-400"
                  >
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              Cons
            </h3>

            <ul className="mt-6 space-y-4">
              {exchange.cons.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-slate-600 dark:text-slate-400"
                  >
                    —
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Costs
          </p>

          <h2 className="mt-3 text-3xl font-bold">Fees</h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Fees can change based on account level, payment method, market,
            network, and location. Always check the exchange directly before
            making a transaction.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]">
          {exchange.fees.map((fee, index) => (
            <div
              key={fee.label}
              className={`grid gap-4 p-6 sm:grid-cols-[220px_160px_1fr] sm:items-start ${
                index !== exchange.fees.length - 1
                  ? "border-b border-slate-200 dark:border-white/10"
                  : ""
              }`}
            >
              <h3 className="font-semibold text-slate-950 dark:text-white">
                {fee.label}
              </h3>

              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                {fee.value}
              </p>

              {fee.description && (
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {fee.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Account Protection
          </p>

          <h2 className="mt-3 text-3xl font-bold">Security features</h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Security tools can help protect an account, but users must still use
            strong passwords, enable two-factor authentication, and follow safe
            withdrawal practices.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exchange.securityFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Exchange information */}
      {(exchange.foundedYear ||
        exchange.headquarters ||
        exchange.availability?.length) && (
        <section>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Exchange Information
            </p>

            <h2 className="mt-3 text-3xl font-bold">Key details</h2>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exchange.foundedYear && (
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <dt className="text-sm text-slate-500">Founded</dt>

                <dd className="mt-2 font-semibold text-slate-950 dark:text-white">
                  {exchange.foundedYear}
                </dd>
              </div>
            )}

            {exchange.headquarters && (
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <dt className="text-sm text-slate-500">Headquarters</dt>

                <dd className="mt-2 font-semibold text-slate-950 dark:text-white">
                  {exchange.headquarters}
                </dd>
              </div>
            )}

            {!!exchange.availability?.length && (
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <dt className="text-sm text-slate-500">Availability</dt>

                <dd className="mt-2 space-y-1 font-semibold text-slate-950 dark:text-white">
                  {exchange.availability.map((item) => (
                    <span key={item} className="block">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </section>
      )}

      {/* Final CTA */}
      <section className="overflow-hidden rounded-3xl border border-blue-500/25 bg-blue-50/70 p-8 dark:border-blue-500/20 dark:bg-blue-500/10 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Visit {exchange.name}</h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-700 dark:text-slate-300">
              Review the exchange&apos;s current fees, supported products,
              regional availability, and account requirements before signing
              up.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {exchange.affiliateDisclosure}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {exchange.referralUrl && (
              <a
                href={exchange.referralUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
              >
                Trade on {exchange.name}
              </a>
            )}

            <a
              href={exchange.officialWebsite}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-white dark:border-white/10 dark:bg-slate-950/30 dark:text-white dark:hover:bg-slate-950/50"
            >
              Official Website
            </a>
          </div>
        </div>
      </section>

      {/* Updated date */}
      <footer className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Last updated:{" "}
          <time dateTime={exchange.updatedAt}>
            {new Date(`${exchange.updatedAt}T00:00:00`).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </time>
        </p>

        <Link
          to="/discover/exchanges"
          className="font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all exchanges
        </Link>
      </footer>
    </div>
  );
}