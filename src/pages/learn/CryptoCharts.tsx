import {
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  Tag,
  TrendingDown,
  TrendingUp,
  Waves,
} from "lucide-react";

const concepts = [
  {
    title: "Candles",
    text: "Candles show opening, closing, highest, and lowest price during a time period.",
    icon: BarChart3,
  },
  {
    title: "Trend Direction",
    text: "Price can generally move upward, downward, or sideways over time.",
    icon: TrendingUp,
  },
  {
    title: "Volume",
    text: "Volume shows how active the market is and can help add context to price movement.",
    icon: Waves,
  },
  {
    title: "Key Levels",
    text: "Support and resistance areas help traders understand where price previously reacted.",
    icon: Eye,
  },
];

const mistakes = [
  "Trying to learn everything at once.",
  "Switching timeframes too often.",
  "Treating charts like predictions instead of planning tools.",
  "Ignoring risk management while focusing only on entries.",
];

const beginnerTips = [
  "Start with simple charts before using many indicators.",
  "Focus on trend direction first.",
  "Learn support and resistance gradually.",
  "Use charts to build structure, not certainty.",
];

export default function CryptoChartsBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Market Concepts
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 5 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        How to Read Crypto Charts
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 14, 2026
        </span>

        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Charts • Beginner • Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Crypto charts may look confusing at first, but beginners do not need to
        learn everything immediately. The goal is to understand the basics and
        slowly become more comfortable with market structure.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Why Charts Matter
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Why Do Traders Look at Charts?
          </h2>

          <p>
            Charts help people understand how price has moved over time. They
            are not crystal balls or guarantees. Instead, they are tools that
            help organize decisions more carefully.
          </p>

          <p className="mt-4">
            A chart can help answer questions like: Is price generally moving
            up or down? Is the market active? Has price reacted around this
            area before?
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “Charts are planning tools — not prediction machines.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Key Concepts
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Four Simple Things to Learn First
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {concepts.map((concept) => {
              const Icon = concept.icon;

              return (
                <div
                  key={concept.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {concept.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {concept.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Trend Direction
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Understanding Market Direction
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 dark:bg-black/10 dark:text-emerald-300">
                <TrendingUp size={24} />
              </div>

              <h3 className="font-bold text-slate-950 dark:text-white">
                Uptrend
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Price generally moves upward over time.
              </p>
            </div>

            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 dark:border-red-500/20 dark:bg-red-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-600 dark:bg-black/10 dark:text-red-300">
                <TrendingDown size={24} />
              </div>

              <h3 className="font-bold text-slate-950 dark:text-white">
                Downtrend
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Price generally moves downward over time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Beginner Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Mistakes to Avoid
          </h2>

          <div className="space-y-3">
            {mistakes.map((mistake, index) => (
              <div
                key={mistake}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  0{index + 1}
                </span>

                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {mistake}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Keep It Simple
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            A Better Way to Start
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

          <p className="leading-7 text-slate-300">
            This is only a beginner-friendly introduction to chart reading. If
            you want deeper learning on candlestick basics, chart structure,
            support and resistance, and beginner-friendly tools, check the free
            Resources section on the website.
          </p>
        </section>
      </div>
    </article>
  );
}