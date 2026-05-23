import {
  AlertTriangle,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  PauseCircle,
  ShieldCheck,
  Target,
  Tag,
  Timer,
} from "lucide-react";

const impatienceCosts = [
  {
    title: "Forcing a trade",
    text: "Entering when the setup is not clear just because you want to be active.",
    impact: "High",
  },
  {
    title: "Entering too early",
    text: "Buying before confirmation because you are afraid the move will leave without you.",
    impact: "High",
  },
  {
    title: "Exiting too quickly",
    text: "Closing too early because small profit feels safer than following the full plan.",
    impact: "Medium",
  },
  {
    title: "Boredom trading",
    text: "Opening trades because the market feels quiet, not because a quality setup exists.",
    impact: "Medium",
  },
];

const tradePhases = [
  {
    icon: Eye,
    title: "Before the trade",
    text: "Patience means waiting until the setup actually matches your plan.",
  },
  {
    icon: Target,
    title: "At entry",
    text: "Patience means avoiding rushed entries and waiting for clearer confirmation.",
  },
  {
    icon: Timer,
    title: "During the trade",
    text: "Patience means allowing the trade idea to develop without reacting to every small move.",
  },
  {
    icon: PauseCircle,
    title: "After the trade",
    text: "Patience means pausing, reviewing, and not immediately jumping into another decision.",
  },
];

const patientVsImpatient = [
  ["Impatient Trader", "Patient Trader"],
  [
    "Looks for any reason to enter.",
    "Waits for a setup that matches the written plan.",
  ],
  [
    "Checks the chart constantly.",
    "Uses planned review times or alerts to reduce emotional decisions.",
  ],
  [
    "Tries to recover quickly after a loss.",
    "Reviews the mistake and waits for the next real opportunity.",
  ],
  [
    "Feels quiet markets are wasted time.",
    "Understands that no trade can also be a responsible decision.",
  ],
];

const patiencePrinciples = [
  {
    title: "Trade the setup, not the screen",
    text: "The chart will always move, but not every move is worth your attention. Wait for your criteria.",
  },
  {
    title: "Accept that most days do not need action",
    text: "A quiet day is not a failure. Sometimes protecting your capital and focus is the best result.",
  },
  {
    title: "Use alerts instead of constant watching",
    text: "Alerts can help you step away from the screen and reduce emotional reactions.",
  },
  {
    title: "Journal the trades you avoided",
    text: "Write down moments where you wanted to trade but chose patience. This builds discipline.",
  },
  {
    title: "Measure process, not only outcome",
    text: "A lucky impatient trade is not a good habit. A patient decision is progress even if no trade happens.",
  },
];

const habits = [
  {
    icon: BookOpen,
    title: "Review your plan before charts",
    text: "Start the session by reading your rules so your mind looks for structure, not random movement.",
  },
  {
    icon: Timer,
    title: "Set fixed review times",
    text: "Avoid checking charts every few minutes. Planned review times can reduce stress and overthinking.",
  },
  {
    icon: FileText,
    title: "Write down missed trades",
    text: "If you skipped a trade, record why. This helps separate discipline from fear.",
  },
  {
    icon: PauseCircle,
    title: "Pause after wins and losses",
    text: "Strong emotions can appear after both outcomes. A short reset helps protect your next decision.",
  },
];

const checklist = [
  "Have I reviewed my trading plan before looking for entries?",
  "Does this setup match my written criteria?",
  "Am I entering because the setup is clear or because I feel impatient?",
  "Can I calmly accept the risk before entering?",
  "Have I avoided trading just because the market feels boring?",
  "Did I wait for confirmation instead of guessing early?",
  "After a trade, did I pause before making another decision?",
];

const faqs = [
  {
    question: "Why is patience important in crypto trading?",
    answer:
      "Patience helps beginners avoid rushed decisions, wait for clearer setups, and reduce emotional trading. It also helps protect focus and risk management.",
  },
  {
    question: "Does patience mean doing nothing all the time?",
    answer:
      "No. Patience means waiting for the right conditions. When the setup matches your plan, action can be appropriate. When it does not, waiting is part of the process.",
  },
  {
    question: "How can I stop forcing trades?",
    answer:
      "Use a checklist, write your setup criteria, and only enter when those criteria are met. If the reason is boredom, FOMO, or frustration, pause.",
  },
  {
    question: "Can patience help beginners avoid emotional mistakes?",
    answer:
      "Yes. Patience creates space between emotion and action. That space helps you review your plan instead of reacting quickly.",
  },
];

export default function PatienceTradingBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Trading Psychology
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 11 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        The Importance of Patience in Crypto Trading
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 23, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Patience • Discipline • Risk Management
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Patience is one of the most underrated skills in crypto trading. Many
        beginners think progress comes from taking more trades, but responsible
        trading often means waiting, reviewing, and only acting when the setup
        truly makes sense.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Idea
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Patience Is Not Doing Nothing
          </h2>

          <p>
            Patience in trading does not mean ignoring the market. It means
            waiting for the right conditions instead of forcing decisions. A
            patient trader watches, prepares, and acts only when the trade idea
            matches their plan.
          </p>

          <p className="mt-4">
            Beginners often feel pressure to be active because charts are always
            moving. But movement alone is not a reason to trade. A quiet decision
            can sometimes be more responsible than a rushed entry.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “The market does not reward activity. It rewards better decisions.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Why It Matters
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Why Patience Matters for Beginners
          </h2>

          <p>
            Crypto markets can move quickly, and this can make beginners feel
            like every opportunity must be taken immediately. This pressure often
            leads to emotional decisions such as chasing entries, exiting too
            early, or trading out of boredom.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <Target className="mb-4 text-blue-600 dark:text-blue-300" size={26} />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Better entries
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Waiting helps you avoid entering only because the market looks
                exciting.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <ShieldCheck
                className="mb-4 text-emerald-600 dark:text-emerald-300"
                size={26}
              />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Better risk control
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Patient decisions give you time to check risk before entering.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <Brain
                className="mb-4 text-blue-600 dark:text-blue-300"
                size={26}
              />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Better mindset
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Patience reduces emotional pressure and helps you think more
                clearly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Cost of Impatience
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            What Impatience Can Cost Traders
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="px-5 py-4 font-semibold">Behaviour</th>
                    <th className="px-5 py-4 font-semibold">What It Looks Like</th>
                    <th className="px-5 py-4 font-semibold">Impact</th>
                  </tr>
                </thead>

                <tbody>
                  {impatienceCosts.map((item) => (
                    <tr
                      key={item.title}
                      className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
                    >
                      <td className="px-5 py-4 font-semibold text-slate-950 dark:text-white">
                        {item.title}
                      </td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">
                        {item.text}
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                          {item.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-500/10">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-900 dark:text-amber-100">
              Important reminder: a trade that feels urgent should be reviewed
              carefully. Urgency is often emotion, not confirmation.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Trade Phases
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Patience at Every Stage of a Trade
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {tradePhases.map((item) => {
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
            05 · Patient vs Impatient
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Patient Trading Compared With Impatient Trading
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <tbody>
                  {patientVsImpatient.map((row, index) => (
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
            06 · Principles
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Principles of a Patient Trader
          </h2>

          <div className="space-y-4">
            {patiencePrinciples.map((item, index) => (
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
            07 · Daily Habits
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Daily Habits That Build Trading Patience
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {habits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
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
            08 · Checklist
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Patient Trader Checklist
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
            09 · FAQs
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner FAQs About Patience in Trading
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
            The Skill of Waiting Well
          </h2>

          <p className="leading-7 text-slate-300">
            Patience helps beginners avoid forced trades, emotional reactions,
            and unnecessary decisions. The goal is not to be inactive forever.
            The goal is to act only when the setup, risk, and plan are clear.
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