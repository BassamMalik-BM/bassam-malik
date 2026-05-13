import {
  AlertTriangle,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Scale,
  ShieldCheck,
  Tag,
  Target,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Position Sizing",
    text: "Never risk more than a small percentage of your total capital on one decision. Consistent sizing helps protect your account from one bad outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Stop-Level Discipline",
    text: "A stop level is a planned exit point that limits downside. Decide it before entering and avoid changing it emotionally.",
  },
  {
    icon: Scale,
    title: "Risk / Reward Ratio",
    text: "Compare possible risk and reward before entering. A clear risk-to-reward plan helps you avoid random decisions.",
  },
  {
    icon: BarChart3,
    title: "Diversification",
    text: "Do not place all capital into one asset, one idea, or one market condition. Diversification can reduce the impact of one poor decision.",
  },
  {
    icon: Brain,
    title: "Emotional Discipline",
    text: "Rules only work when you follow them during fear, greed, and uncertainty. Discipline protects you when emotions are loud.",
  },
];

const mistakes = [
  {
    title: "Moving Stop Levels Without Reason",
    text: "Changing a planned exit emotionally can turn a small loss into a much larger one.",
    level: "Critical",
  },
  {
    title: "Risking Too Much on One Trade",
    text: "A single decision should never be large enough to damage your whole learning journey.",
    level: "Critical",
  },
  {
    title: "Revenge Trading After Losses",
    text: "Trying to immediately recover a loss often leads to rushed and emotional decisions.",
    level: "Critical",
  },
  {
    title: "No Position Sizing Rule",
    text: "Random trade sizing makes results harder to control and harder to review.",
    level: "High",
  },
  {
    title: "Ignoring Market Correlation",
    text: "Holding multiple assets that all move together may still expose you to the same market risk.",
    level: "High",
  },
  {
    title: "Not Tracking Trade History",
    text: "Without a journal, it becomes difficult to notice repeated mistakes and improve.",
    level: "Moderate",
  },
];

const checklist = [
  "Have I defined my exact stop level before buying?",
  "Does this decision risk only a small percentage of my capital?",
  "Is the possible reward worth the possible risk?",
  "Am I making this decision based on logic instead of FOMO?",
  "Do I know when I will sell for profit or exit for loss?",
  "Can I accept this loss without emotional pressure?",
  "Will I record this decision in my trading journal?",
];

const stats = [
  { value: "1–2%", label: "common max risk per trade" },
  { value: "100%", label: "gain needed after a 50% loss" },
  { value: "1:2", label: "example minimum risk/reward plan" },
];

export default function RiskManagementBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Risk Management
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 9 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Why Risk Management Matters
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 15, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Risk • Discipline • Crypto Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Most beginners focus only on finding entries. Responsible traders focus
        on planning risk, protecting capital, and knowing what to do when the
        market does not move as expected.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Foundation
          </p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Exactly Is Risk Management?
          </h2>
          <p>
            Risk management is the process of identifying, measuring, and
            controlling possible losses before making a trading decision. It is
            what separates planned decision-making from emotional speculation.
          </p>
          <p className="mt-4">
            Before every trade, risk management helps answer three questions:
            how much could I lose, where is my exit plan, and is the possible
            reward worth the risk?
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “It is not only about being right. It is about limiting damage when
            you are wrong.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · The Math
          </p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            The Asymmetry of Loss
          </h2>
          <p>
            Losses are harder to recover from than many beginners expect. A 10%
            loss needs about an 11.1% gain to recover. A 25% loss needs about a
            33.3% gain. A 50% loss needs a 100% gain just to return to the
            original value.
          </p>

          <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Recovery Example
            </p>
            <div className="space-y-3 font-mono text-sm">
              <p>
                <span className="text-red-300">-10%</span> loss requires{" "}
                <span className="text-emerald-300">+11.1%</span> gain
              </p>
              <p>
                <span className="text-red-300">-25%</span> loss requires{" "}
                <span className="text-emerald-300">+33.3%</span> gain
              </p>
              <p>
                <span className="text-red-300">-50%</span> loss requires{" "}
                <span className="text-emerald-300">+100%</span> gain
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Core Principles
          </p>
          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Five Pillars of Risk Management
          </h2>

          <div className="grid gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Framework
          </p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            The Risk Hierarchy
          </h2>
          <p>
            Not all risks are equal. The first goal is to prevent account-ending
            mistakes. After that, traders can focus on reducing drawdowns,
            managing volatility, and improving consistency.
          </p>

          <div className="mt-6 space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            {[
              ["Prevent", "Catastrophic losses"],
              ["Reduce", "Large drawdowns"],
              ["Manage", "Normal volatility"],
              ["Review", "Repeated behavior mistakes"],
            ].map(([label, text]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-white/5"
              >
                <span className="font-semibold text-slate-950 dark:text-white">
                  {label}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Mistakes
          </p>
          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Most Costly Risk Mistakes
          </h2>

          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div
                key={mistake.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                      {mistake.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                    {mistake.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {mistake.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Action Plan
          </p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Your Pre-Trade Risk Checklist
          </h2>

          <div className="mt-5 space-y-3">
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
            <AlertTriangle size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Word
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Survive First. Grow Second.
          </h2>

          <p className="text-slate-300">
            A trader with capital still has options. Protecting your account is
            not a limitation — it is the foundation that allows you to keep
            learning, reviewing, and improving over time.
          </p>
        </section>
      </div>
    </article>
  );
}