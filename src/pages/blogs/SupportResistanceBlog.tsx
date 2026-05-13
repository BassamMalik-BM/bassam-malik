import {
  AlertTriangle,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Layers3,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const mistakes = [
  {
    title: "Treating levels like exact lines",
    text: "Support and resistance are usually zones, not perfect prices. Markets rarely stop at one exact number.",
  },
  {
    title: "Buying directly into resistance",
    text: "Beginners sometimes buy after price already moved heavily into a resistance area.",
  },
  {
    title: "Ignoring confirmation",
    text: "Price touching a level does not automatically mean reversal. Context matters.",
  },
  {
    title: "Forgetting risk management",
    text: "Even strong support and resistance areas can fail. Always have a plan.",
  },
];

const beginnerTips = [
  "Start with higher timeframes before zooming into smaller charts.",
  "Treat levels as areas, not exact prices.",
  "Combine support and resistance with patience and risk management.",
  "Do not buy or sell emotionally just because price touched a level.",
];

export default function SupportResistanceBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Chart Basics
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 5 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Are Support and Resistance Levels?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 13, 2026
        </span>

        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Charts • Market Basics • Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Support and resistance are two of the most important concepts in chart
        reading. They help traders understand areas where price has reacted in
        the past and where market behavior may change again.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Support
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is Support?
          </h2>

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
            <TrendingUp size={28} />
          </div>

          <p>
            Support is an area where price previously found buying interest.
            Think of it as a zone where price slowed down or bounced in the
            past.
          </p>

          <p className="mt-4">
            For beginners, support can help answer an important question:
            <strong> “Am I buying after a big move, or near an area where price
            previously reacted?”</strong>
          </p>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <p className="text-sm leading-7 text-emerald-900 dark:text-emerald-200">
              Example: If Bitcoin repeatedly reacted near a similar price area,
              many traders may start watching that zone again.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Resistance
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is Resistance?
          </h2>

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300">
            <TrendingDown size={28} />
          </div>

          <p>
            Resistance is the opposite idea. It is an area where price
            previously struggled to move higher and selling pressure appeared.
          </p>

          <p className="mt-4">
            Beginners often make the mistake of buying directly into resistance
            after price already moved strongly upward. Waiting for patience and
            confirmation can sometimes be more helpful than rushing.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “Support and resistance are not magic lines. They are areas that
            help create structure and better decisions.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Why These Levels Matter
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Why Beginners Should Learn This
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "Better Structure",
                text: "Levels help you avoid random decisions and think more carefully.",
              },
              {
                icon: BarChart3,
                title: "Market Context",
                text: "You begin to understand where price previously reacted.",
              },
              {
                icon: AlertTriangle,
                title: "Avoid Emotional Buying",
                text: "Knowing key areas can reduce FOMO decisions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Common Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div
                key={mistake.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                  0{index + 1}
                </p>

                <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                  {mistake.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {mistake.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Getting Started
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            A Simple Way to Begin
          </h2>

          <div className="space-y-3">
            {beginnerTips.map((tip) => (
              <div
                key={tip}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-emerald-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Want to Learn More?
          </h2>

          <p className="text-slate-300 leading-7">
            This blog gives only a beginner-friendly introduction. If you want
            a deeper understanding of support and resistance — including how to
            identify stronger zones and avoid common mistakes — check the free
            Support & Resistance Guide in our Resources section.
          </p>
        </section>
      </div>
    </article>
  );
}