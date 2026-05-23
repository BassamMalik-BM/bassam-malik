import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  PiggyBank,
  ShieldCheck,
  Tag,
  Target,
  Wallet,
} from "lucide-react";

const safetyRules = [
  {
    icon: PiggyBank,
    title: "Protect your essentials first",
    text: "Bills, food, rent, family needs, and emergency savings should never depend on a crypto decision.",
  },
  {
    icon: Wallet,
    title: "Use separate money",
    text: "Crypto trading money should be separate from money you need for real-life responsibilities.",
  },
  {
    icon: ShieldCheck,
    title: "Think in worst-case terms",
    text: "Before entering, ask yourself what would happen if this money disappeared completely.",
  },
];

const riskScenarios = [
  {
    title: "Emergency money",
    text: "Using emergency savings for crypto can create stress if life suddenly needs that money.",
  },
  {
    title: "Bills or rent money",
    text: "Money needed for monthly responsibilities should never be exposed to market uncertainty.",
  },
  {
    title: "Borrowed money",
    text: "Borrowing to trade creates pressure and can turn a market loss into a personal financial problem.",
  },
  {
    title: "Goal-specific savings",
    text: "Money saved for education, family, travel, or important purchases should stay protected.",
  },
];

const comparisonRows = [
  ["Risky Approach", "Safer Approach"],
  [
    "Using money needed for bills or emergencies",
    "Using only extra money after essentials are covered",
  ],
  [
    "Feeling panic during every price move",
    "Staying calmer because the amount is manageable",
  ],
  [
    "Trying to recover losses quickly",
    "Accepting risk and reviewing the decision calmly",
  ],
  [
    "Depending on the trade to fix financial problems",
    "Treating crypto trading as education and risk-managed practice",
  ],
];

const beforeYouTrade = [
  "Are my essential expenses already covered?",
  "Do I have emergency savings separate from crypto?",
  "Would losing this amount affect my daily life?",
  "Am I using money that belongs to a future goal?",
  "Am I trading because of pressure, FOMO, or social media?",
  "Is this amount small enough that I can think clearly?",
];

const responsibleHabits = [
  {
    title: "Start small while learning",
    text: "Beginners should focus on learning the process, not trying to make large decisions too early.",
  },
  {
    title: "Set a personal risk limit",
    text: "Decide in advance how much you are comfortable risking and do not increase it emotionally.",
  },
  {
    title: "Keep a trading journal",
    text: "Write down why you entered, how much you risked, and whether the decision was responsible.",
  },
  {
    title: "Separate learning from pressure",
    text: "Crypto education should build skill and discipline, not create stress around money you need.",
  },
];

const faqs = [
  {
    question: "What does “afford to lose” really mean?",
    answer:
      "It means the full loss of that money would not affect your bills, food, emergency needs, family responsibilities, or important savings goals.",
  },
  {
    question: "Can beginners start with a very small amount?",
    answer:
      "Yes. Starting small can help beginners learn how markets move without putting important money at risk.",
  },
  {
    question: "Why is emergency money not suitable for crypto trading?",
    answer:
      "Emergency money exists to protect you during real-life problems. Crypto markets can move sharply, so emergency funds should stay separate and safe.",
  },
  {
    question: "What should I do before putting money into crypto?",
    answer:
      "Learn the basics, understand risk, protect your essentials first, and only use money that would not harm your life if lost.",
  },
];

export default function AffordToLoseBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Risk Management
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 10 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Never Invest More Than You Can Afford to Lose in Crypto Trading
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 24, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Risk • Capital Safety • Beginner Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        “Never invest more than you can afford to lose” is not just a common
        warning. It is one of the most important rules for beginners in crypto
        trading. The goal is simple: protect your real life before taking market
        risk.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Rule
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What This Rule Actually Means
          </h2>

          <p>
            Many beginners hear this rule and think it simply means “be careful.”
            But the real meaning is stronger: only use money that would not harm
            your daily life if it was completely lost.
          </p>

          <p className="mt-4">
            This means your rent, food, bills, emergency savings, family needs,
            and important future goals should not depend on a crypto trade going
            well. Crypto markets can move quickly, and responsible traders
            prepare for risk before thinking about opportunity.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “If losing the money would change your life, it is not money you
              can afford to lose.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Capital Safety
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Foundation Comes Before the Market
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {safetyRules.map((item) => {
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

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-500/10">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-900 dark:text-amber-100">
              Important reminder: crypto trading should never put your basic
              financial stability under pressure.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Why It Matters
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Why Using Important Money Becomes Dangerous
          </h2>

          <p>
            When beginners use money they cannot afford to lose, every price move
            becomes stressful. This makes it harder to think clearly, follow a
            plan, or learn from mistakes.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {riskScenarios.map((item) => (
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
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Real-Life Thinking
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            A Simple Beginner Example
          </h2>

          <p>
            Imagine someone uses money meant for an emergency fund because they
            believe a coin will rise quickly. If the market drops, they are not
            only dealing with a trading loss. They are also dealing with stress
            because that money had a real-life purpose.
          </p>

          <p className="mt-4">
            Now compare that with someone who uses a small amount of extra money
            after their essentials are already covered. A loss is still
            disappointing, but it does not damage their daily life. That
            difference matters.
          </p>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <div className="mb-3 flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
              <ShieldCheck size={22} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Beginner Safety Principle
              </p>
            </div>

            <p className="m-0 text-sm leading-7 text-emerald-900 dark:text-emerald-100">
              The same market loss can feel very different depending on whether
              the money was truly extra or needed for real-life responsibilities.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Safer Comparison
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Risky Approach Compared With Safer Approach
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
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
            06 · Before You Trade
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Questions to Ask Before Using Money in Crypto
          </h2>

          <div className="space-y-3">
            {beforeYouTrade.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <HelpCircle
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
            07 · Responsible Habits
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Habits That Protect Beginners
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {responsibleHabits.map((item, index) => (
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
            08 · Checklist
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Capital Safety Checklist
          </h2>

          <div className="space-y-3">
            {[
              "My essential expenses are already protected.",
              "My emergency savings are separate from crypto.",
              "This money is not needed for bills, family needs, or important goals.",
              "I understand that crypto markets can move sharply.",
              "I am using a small enough amount to think clearly.",
              "I am not trading because of pressure, hype, or fear of missing out.",
              "I can accept the risk before entering.",
            ].map((item) => (
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
            Beginner FAQs About Affording to Lose
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
            <Target size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Reminder
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Protect Your Foundation First
          </h2>

          <p className="leading-7 text-slate-300">
            Crypto trading should never put your real-life stability at risk.
            Learn first, protect your essentials, and only use money that would
            not harm your life if lost. Responsible decisions are part of
            responsible education.
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