import {
  AlertTriangle,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Gauge,
  ShieldCheck,
  Tag,
  TrendingDown,
  TrendingUp,
  Waves,
} from "lucide-react";

const causes = [
  ["Market Size", "Crypto markets are smaller than traditional markets, so large buying or selling can move prices faster."],
  ["Speculation", "Many crypto prices move based on future expectations, narratives, and market excitement."],
  ["News Sensitivity", "Regulation, exchange news, security issues, and major announcements can quickly change sentiment."],
  ["24/7 Trading", "Crypto markets do not close, so price movement can happen overnight, on weekends, and during holidays."],
  ["Thin Liquidity", "Some coins have fewer buyers and sellers, which can cause bigger jumps between price levels."],
  ["Whale Activity", "Large holders can affect price when they move or sell large amounts."],
  ["Market Emotions", "Fear and greed can spread quickly, especially when prices move sharply."],
  ["Regulatory Uncertainty", "Changing rules in different countries can create sudden uncertainty."],
  ["Cycle Behavior", "Crypto often moves through strong hype cycles followed by deep corrections."],
];

const measurements = [
  {
    title: "Historical Volatility",
    tag: "Past Movement",
    text: "Looks at how much price moved in the past. It helps show how unstable or calm the market has recently been.",
  },
  {
    title: "Implied Volatility",
    tag: "Expected Movement",
    text: "Represents what the market expects future price movement may look like. Higher implied volatility means bigger moves are expected.",
  },
  {
    title: "Bitcoin Volatility Index",
    tag: "Market Fear",
    text: "A volatility index can help show when the market expects stronger Bitcoin price movement.",
  },
  {
    title: "Average True Range",
    tag: "Daily Range",
    text: "ATR measures how much price usually moves within a period and can help traders understand normal movement ranges.",
  },
];

const psychology = [
  ["FOMO Buying", "Buying only because price is rising fast can lead to emotional decisions."],
  ["Panic Selling", "Sharp drops can make beginners sell without reviewing their plan."],
  ["Revenge Trading", "Trying to recover a loss immediately can lead to rushed decisions."],
  ["Overconfidence", "A few wins can make beginners take bigger risks than planned."],
  ["Anchoring", "Holding onto an old price can stop people from seeing the current market clearly."],
  ["Loss Aversion", "Losses feel painful, which can make people avoid making rational decisions."],
];

const strategies = [
  {
    title: "Use Smaller Position Sizes",
    text: "In volatile markets, smaller positions can reduce emotional pressure and help you follow your plan.",
  },
  {
    title: "Plan Before Buying",
    text: "Know why you are buying, where your invalidation area is, and when you may sell before entering.",
  },
  {
    title: "Avoid Emotional Entries",
    text: "Do not buy only because price is moving fast or people online are excited.",
  },
  {
    title: "Keep Stablecoin Reserves",
    text: "Keeping some funds aside can help you stay calm and avoid feeling fully trapped during sharp drops.",
  },
  {
    title: "Review Your Decisions",
    text: "Use a trading journal to track how volatility affects your emotions, timing, and risk decisions.",
  },
];

const checklist = [
  "Can I handle this position dropping without panic?",
  "Am I buying because of a plan, not FOMO?",
  "Have I decided when I would sell for profit or exit for loss?",
  "Is my position size small enough to stay calm?",
  "Do I understand that crypto prices can move sharply?",
  "Have I avoided using money I cannot afford to lose?",
  "Will I record this decision in my trading journal?",
  "Am I prepared emotionally if price moves against me?",
];

export default function CryptoVolatilityBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Market Concepts
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 8 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Is Crypto Volatility?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 18, 2026
        </span>

        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Volatility • Risk • Beginner Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Crypto volatility means prices can move sharply in a short period of
        time. It can create opportunity, but it also creates serious risk for
        beginners who do not have a plan.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Fast Moves", "Crypto prices can change quickly."],
          ["Higher Risk", "Large swings can create large losses."],
          ["Better Planning", "Volatility requires discipline."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {title}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Definition
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Does Volatility Mean?
          </h2>

          <p>
            Volatility is a way to describe how much and how quickly an asset
            price moves. A low-volatility asset usually moves slowly. A
            high-volatility asset can move sharply up or down in a short time.
          </p>

          <p className="mt-4">
            In simple words, crypto is volatile because price can change fast.
            That movement can feel exciting when price goes up, but stressful
            when price falls.
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Two Sides
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Rocket and the Crash
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 dark:bg-black/10 dark:text-emerald-300">
                <TrendingUp size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Upside Volatility
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Crypto can rise quickly during strong market periods. This is
                why many people are attracted to it.
              </p>
            </div>

            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 dark:border-red-500/20 dark:bg-red-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-600 dark:bg-black/10 dark:text-red-300">
                <TrendingDown size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Downside Volatility
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                The same movement can work in reverse. Prices can fall quickly,
                especially when fear spreads.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “Volatility is not automatically good or bad. It simply means the
            market is moving strongly.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Causes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Why Is Crypto So Volatile?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {causes.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                  0{index + 1}
                </p>

                <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Measurement
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            How Volatility Is Measured
          </h2>

          <p>
            Volatility is not only a feeling. Traders and analysts use different
            tools to understand how strongly price has moved or may move.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {measurements.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  <Gauge size={24} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                  {item.tag}
                </p>

                <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Comparison
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Crypto vs Traditional Assets
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-5">
              {[
                ["Bonds", "Low", "w-1/6"],
                ["Gold", "Medium", "w-1/4"],
                ["S&P 500", "Medium", "w-1/3"],
                ["Bitcoin", "High", "w-3/4"],
                ["Ethereum", "Higher", "w-5/6"],
                ["Small Altcoins", "Extreme", "w-full"],
              ].map(([asset, label, width]) => (
                <div key={asset}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-semibold text-slate-950 dark:text-white">
                      {asset}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 ${width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Psychology
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Psychology of Volatility
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {psychology.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                  <Brain size={24} />
                </div>

                <h3 className="font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · Strategy
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            How Beginners Can Navigate Volatility
          </h2>

          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">
                      {strategy.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {strategy.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            08 · Numbers
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Volatility by the Numbers
          </h2>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["62%", "example BTC annualized volatility range"],
              ["-80%+", "possible bear market drawdowns"],
              ["4×", "often more volatile than major stock indexes"],
              ["24/7", "markets stay open all the time"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                  {value}
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <p className="text-sm leading-7 text-emerald-900 dark:text-emerald-200">
              As crypto markets grow, liquidity improves, and more institutions
              enter the space, Bitcoin volatility has generally become lower
              than in its earliest years. Still, crypto remains much more
              volatile than many traditional assets.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            09 · Checklist
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Volatility Survival Checklist
          </h2>

          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-emerald-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <ShieldCheck size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Thought
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Volatility Is the Price of Admission
          </h2>

          <p className="leading-7 text-slate-300">
            Volatility is not the enemy. Ignoring volatility, reacting
            emotionally, and using poor risk management are the real problems.
            If you understand the risk, size your decisions carefully, and plan
            before buying, volatility becomes something you can manage more
            responsibly.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <div className="flex gap-3">
              <AlertTriangle
                size={22}
                className="mt-1 shrink-0 text-emerald-300"
              />
              <p className="m-0 text-sm leading-7 text-slate-300">
                Volatility means risk and opportunity exist together. Accept
                it, plan for it, and never let one fast market move control your
                decisions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}