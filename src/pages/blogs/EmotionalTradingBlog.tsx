import {
  AlertTriangle,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Eye,
  FileText,
  Flame,
  HeartPulse,
  PauseCircle,
  ShieldCheck,
  Tag,
  TrendingDown,
} from "lucide-react";

const emotionalTriggers = [
  {
    icon: Flame,
    title: "FOMO",
    text: "Buying only because the market is moving fast or everyone is talking about the same coin.",
  },
  {
    icon: TrendingDown,
    title: "Panic",
    text: "Selling quickly during a price drop without checking whether the move fits your original plan.",
  },
  {
    icon: HeartPulse,
    title: "Greed",
    text: "Ignoring risk because you want a bigger result, even when the trade already reached a sensible target.",
  },
  {
    icon: Brain,
    title: "Frustration",
    text: "Entering another trade immediately after a loss because you want to recover quickly.",
  },
];

const dangerPoints = [
  {
    title: "You stop following your plan",
    text: "A trading plan only works if you actually follow it. Emotional decisions often push beginners away from their own rules.",
  },
  {
    title: "You enter late",
    text: "Many emotional trades happen after a move has already started. This can create poor entries and higher risk.",
  },
  {
    title: "You increase mistakes",
    text: "Fast emotional decisions usually skip important checks like support, resistance, trend, risk, and market conditions.",
  },
  {
    title: "You damage confidence",
    text: "Repeated emotional losses can make beginners doubt themselves and feel stressed whenever the market moves.",
  },
];

const controlSteps = [
  "Write your reason for entering before taking the trade.",
  "Decide your risk before the trade starts.",
  "Avoid buying only because a coin is trending online.",
  "Take a break after a stressful loss.",
  "Use a trading journal to track emotional mistakes.",
];

const comparisonRows = [
  ["Emotional Trading", "Planned Trading"],
  ["Reacting quickly to price movement", "Waiting for a setup that matches your rules"],
  ["Buying because of hype or fear", "Checking the chart, risk, and reason first"],
  ["Changing decisions every few minutes", "Following a clear entry and exit plan"],
  ["Trying to recover losses immediately", "Pausing, reviewing, and learning from mistakes"],
];

const faqs = [
  {
    question: "Is it possible to remove emotions completely from trading?",
    answer:
      "No. Emotions are normal. The goal is not to remove them completely, but to build a process that helps you make better decisions even when emotions are present.",
  },
  {
    question: "Why do beginners struggle with emotional trading?",
    answer:
      "Beginners often react strongly to fast price movement because they are still learning how market cycles, risk, and chart structure work.",
  },
  {
    question: "Can a trading journal help with emotions?",
    answer:
      "Yes. A journal helps you notice patterns in your behavior, such as buying from FOMO, selling from panic, or trading again after frustration.",
  },
  {
    question: "What should I do after an emotional loss?",
    answer:
      "Take a break, review what happened, and avoid entering another trade immediately. The goal is to learn, not to rush into recovery.",
  },
];

export default function EmotionalTradingBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Trading Psychology
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 7 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Why Emotional Trading Can Be Dangerous in Crypto Trading
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 20, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Psychology • Risk Management • Beginner Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Emotional trading happens when fear, greed, panic, or frustration starts
        controlling your decisions. In crypto trading, where prices can move
        quickly, this can lead beginners to buy too late, sell too early, or
        ignore their own risk rules.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Idea
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is Emotional Trading?
          </h2>

          <p>
            Emotional trading means making decisions because of how you feel in
            the moment instead of following a clear plan. A beginner may buy
            because the market looks exciting, sell because a red candle creates
            fear, or enter another trade after a loss because they feel
            frustrated.
          </p>

          <p className="mt-4">
            The market can make every move feel urgent. But good decision-making
            usually requires patience, structure, and risk awareness. When
            emotions become louder than the plan, trading can quickly become
            stressful.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “The goal is not to trade without emotions. The goal is to avoid
              letting emotions make the decision for you.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Common Triggers
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Emotions That Often Lead to Bad Decisions
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {emotionalTriggers.map((item) => {
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
            03 · Why It Becomes Risky
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Why Emotional Trading Can Be Dangerous
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {dangerPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-500/10">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-900 dark:text-amber-100">
              Important reminder: a fast-moving market does not mean you need to
              react instantly. Sometimes waiting is the more disciplined choice.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Emotional vs Planned
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Emotional Trading Compared With Planned Trading
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.join("-")}
                      className={
                        index === 0
                          ? "bg-slate-950 text-white"
                          : "border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
                      }
                    >
                      <td className="w-1/2 px-5 py-4 font-semibold">
                        {row[0]}
                      </td>
                      <td className="w-1/2 px-5 py-4 font-semibold">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Beginner Example
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            A Simple Example of Emotional Trading
          </h2>

          <p>
            Imagine a beginner sees a coin moving up quickly. They buy without
            checking the chart, without deciding risk, and without knowing where
            they would exit. A few minutes later, the price pulls back. Because
            the entry was emotional, the pullback feels scary, so they sell at a
            loss.
          </p>

          <p className="mt-4">
            Later, the price recovers. Now the trader feels frustrated and enters
            again without a proper setup. This cycle can repeat because the
            trader is reacting emotionally instead of using a structured process.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <Eye className="mb-4 text-blue-600 dark:text-blue-300" size={26} />
              <h3 className="font-bold text-slate-950 dark:text-white">
                First mistake
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Entering only because the chart looks exciting.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <Compass
                className="mb-4 text-emerald-600 dark:text-emerald-300"
                size={26}
              />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Missing part
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                No clear plan, no risk limit, and no reasoned exit.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <PauseCircle
                className="mb-4 text-blue-600 dark:text-blue-300"
                size={26}
              />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Better action
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Pause, review the setup, and only act if it matches your plan.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · How to Improve
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            How Beginners Can Reduce Emotional Trading
          </h2>

          <p>
            You do not need to become emotionless. You need a process that helps
            you slow down and think clearly before making decisions.
          </p>

          <div className="mt-6 space-y-3">
            {controlSteps.map((item) => (
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

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <div className="mb-3 flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
              <FileText size={22} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Beginner Tip
              </p>
            </div>

            <p className="m-0 text-sm leading-7 text-emerald-900 dark:text-emerald-100">
              A trading journal can help you see whether your decisions are
              based on a plan or based on emotion. Over time, this makes it
              easier to improve.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · FAQs
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner FAQs About Emotional Trading
          </h2>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {item.question}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <ShieldCheck size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Reminder
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Trade With a Plan, Not With Pressure
          </h2>

          <p className="leading-7 text-slate-300">
            Emotional trading can make beginners chase price movement, ignore
            risk, and make decisions they would not make with a calm mind. A
            clear plan, controlled risk, patience, and journaling can help you
            build better habits over time.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-100">
              Educational content only. Not financial advice. Always do your own
              research and make responsible decisions.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}