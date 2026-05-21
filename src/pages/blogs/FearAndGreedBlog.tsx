import {
  AlertTriangle,
  Scale,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Eye,
  FileText,
  Flame,
  PauseCircle,
  ShieldCheck,
  Tag,
  TrendingDown,
} from "lucide-react";

const fearCards = [
  "Panic selling during normal market pullbacks.",
  "Avoiding every opportunity because one previous trade went wrong.",
  "Checking the chart too often and reacting to every red candle.",
  "Leaving a plan too early because the market feels uncomfortable.",
];

const greedCards = [
  "Buying only because a coin is moving fast.",
  "Expecting every trade to keep going higher.",
  "Ignoring risk because recent decisions worked well.",
  "Changing your plan because you want more than your original target.",
];

const fearGreedCycle = [
  {
    step: "01",
    title: "Fear appears after weakness",
    text: "Prices fall, news becomes negative, and beginners may feel pressure to sell quickly without reviewing the full picture.",
  },
  {
    step: "02",
    title: "Greed appears after strength",
    text: "Prices rise, social media gets louder, and beginners may feel pressure to buy without a proper plan.",
  },
  {
    step: "03",
    title: "The crowd becomes emotional",
    text: "Many people start reacting to the same feeling at the same time, which can make price movement feel even more intense.",
  },
  {
    step: "04",
    title: "Disciplined traders slow down",
    text: "Instead of reacting, they review risk, structure, and whether the decision matches their trading plan.",
  },
];

const controlFramework = [
  {
    title: "Write your plan before emotions show up",
    text: "A plan is easier to follow when it is created before the market becomes stressful or exciting.",
  },
  {
    title: "Use position sizes you can handle",
    text: "If a normal move makes you panic, your position may be too large for your current comfort level.",
  },
  {
    title: "Avoid chasing fast moves",
    text: "A strong move does not automatically mean a good entry. Waiting for a cleaner setup is often healthier for beginners.",
  },
  {
    title: "Take breaks after emotional moments",
    text: "Fear and greed both become stronger when you are tired, frustrated, or staring at charts for too long.",
  },
  {
    title: "Track emotions in your journal",
    text: "Writing down what you felt before and after a trade helps you notice patterns over time.",
  },
];

const mentalAnchors = [
  {
    label: "When fear says",
    situation: "Sell quickly before it gets worse",
    reminder:
      "Pause first. Check whether your original reason has actually changed or whether you are reacting to discomfort.",
  },
  {
    label: "When greed says",
    situation: "Buy now before you miss it",
    reminder:
      "There will always be another setup. A missed move is better than a rushed decision.",
  },
  {
    label: "When fear says",
    situation: "You should never trade again",
    reminder:
      "One mistake is feedback. Review it, write it down, and improve the process.",
  },
  {
    label: "When greed says",
    situation: "This trade cannot go wrong",
    reminder:
      "Confidence is useful, but risk still matters. Stay humble and follow your plan.",
  },
];

const checklist = [
  "Have I written my reason for this trade?",
  "Am I calm enough to make a clear decision?",
  "Am I buying because of analysis or because of excitement?",
  "Am I selling because my plan changed or because I feel afraid?",
  "Is my position size small enough to stay patient?",
  "Have I accepted that missing a move is normal?",
  "Did I record my emotions in my trading journal?",
];

const faqs = [
  {
    question: "What is fear and greed in crypto trading?",
    answer:
      "Fear and greed are emotional reactions to market movement. Fear usually appears when prices fall, while greed often appears when prices rise quickly and people feel they may miss an opportunity.",
  },
  {
    question: "Is the Fear & Greed Index enough to make trading decisions?",
    answer:
      "No. It can help you understand market sentiment, but it should not be used alone. Beginners should combine sentiment awareness with chart structure, risk management, and their own plan.",
  },
  {
    question: "How can beginners control FOMO?",
    answer:
      "Beginners can control FOMO by waiting for planned setups, avoiding decisions based only on social media, and accepting that not every market move needs to be traded.",
  },
  {
    question: "Can greed affect even careful traders?",
    answer:
      "Yes. Greed can appear after a few good decisions or during fast market movement. That is why clear limits, journaling, and patience matter.",
  },
];

export default function FearAndGreedBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Trading Psychology
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 10 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        How to Control Fear & Greed in Crypto Trading
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 22, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Psychology • Discipline • Risk Management
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Fear and greed are two of the strongest emotions in crypto trading.
        Fear can make beginners sell too quickly, while greed can make them buy
        too late or ignore risk. Learning how these emotions work can help you
        make calmer, more disciplined decisions.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Idea
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Why Fear and Greed Matter
          </h2>

          <p>
            Markets are not moved by charts alone. They are also influenced by
            human behaviour. When prices fall, many beginners feel fear. When
            prices rise quickly, many beginners feel greed or FOMO. These
            emotional reactions can make the market feel more urgent than it
            really is.
          </p>

          <p className="mt-4">
            The problem is not that traders feel emotions. Emotions are normal.
            The problem begins when emotions replace planning, patience, and
            risk awareness.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “Fear and greed both feel logical in the moment. That is why a
              written plan is so important.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Fear vs Greed
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            How Fear and Greed Affect Beginners
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                <TrendingDown size={24} />
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                Fear
              </span>

              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                Fear makes traders freeze or exit too quickly
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Fear usually appears during drops, uncertainty, or after a loss.
                It can make beginners abandon a plan, panic sell, or avoid
                learning from normal market movement.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-400/20 dark:bg-amber-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                <Flame size={24} />
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                Greed
              </span>

              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                Greed makes traders rush or expect too much
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Greed usually appears after fast price movement, social media
                excitement, or a few good decisions. It can make beginners chase
                entries, ignore risk, or keep changing their plan.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-500/10">
            <Scale
              size={20}
              className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The goal is not to remove fear or greed completely. The goal is to
              stay balanced enough to follow your plan.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Fear Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Common Mistakes Caused by Fear
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {fearCards.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <TrendingDown
                  size={20}
                  className="mt-1 shrink-0 text-blue-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Greed Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Common Mistakes Caused by Greed
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {greedCards.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <Flame
                  size={20}
                  className="mt-1 shrink-0 text-amber-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · The Cycle
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Fear and Greed Cycle
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {fearGreedCycle.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-3xl font-black text-blue-600 dark:text-blue-300">
                  {item.step}
                </span>

                <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
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
            06 · Sentiment Tool
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What About the Fear & Greed Index?
          </h2>

          <p>
            The Crypto Fear & Greed Index is a sentiment tool that attempts to
            show whether the broader market is feeling fearful, neutral, or
            greedy. It can be useful for awareness, but it should not be treated
            as a complete trading strategy.
          </p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="m-0 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Example Sentiment Scale
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                  Extreme Fear → Neutral → Extreme Greed
                </h3>
              </div>

              <Compass className="text-emerald-500" size={30} />
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-500">
              <div className="ml-[50%] h-3 w-1 bg-slate-950 dark:bg-white" />
            </div>

            <div className="mt-3 flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>Fear</span>
              <span>Balanced</span>
              <span>Greed</span>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <div className="mb-3 flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <Eye size={22} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Important Note
              </p>
            </div>

            <p className="m-0 text-sm leading-7 text-blue-900 dark:text-blue-100">
              Use the index as a question, not an answer. Ask: “Is the market
              emotional right now?” Then return to your own plan, risk rules,
              and chart reading process.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · Control Framework
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            How Beginners Can Control Fear and Greed
          </h2>

          <p>
            Fear and greed become easier to manage when you move decisions away
            from the heat of the moment and into a clear process.
          </p>

          <div className="mt-6 space-y-4">
            {controlFramework.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            08 · Mental Anchors
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Simple Reminders for Emotional Moments
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {mentalAnchors.map((item) => (
              <div
                key={item.situation}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  {item.label}
                </span>

                <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                  “{item.situation}”
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.reminder}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            09 · Checklist
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Fear and Greed Checklist for Beginners
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

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            10 · FAQs
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner FAQs About Fear and Greed
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
            Stay Balanced When the Market Gets Loud
          </h2>

          <p className="leading-7 text-slate-300">
            Fear and greed will always be part of crypto trading because markets
            are shaped by people. The goal is not to remove emotion completely.
            The goal is to recognize emotion early, slow down, and return to
            your plan before making a decision.
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