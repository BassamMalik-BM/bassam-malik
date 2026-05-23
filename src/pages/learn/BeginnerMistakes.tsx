import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Frown,
  ShieldAlert,
  Tag,
  TrendingUp,
} from "lucide-react";

const mistakes = [
  {
    title: "Entering Without a Plan",
    text: "Many beginners buy simply because price is moving. Without a plan, emotions usually take control during volatility.",
    icon: AlertTriangle,
  },
  {
    title: "Following Hype and FOMO",
    text: "Buying only because social media is excited often leads to emotional decisions instead of structured learning.",
    icon: TrendingUp,
  },
  {
    title: "Ignoring Risk Management",
    text: "Risk management matters more than trying to be right every time. One poor decision should never damage your whole journey.",
    icon: ShieldAlert,
  },
  {
    title: "Overtrading",
    text: "Some beginners feel they always need to be active. In reality, patience is often a stronger decision.",
    icon: Frown,
  },
  {
    title: "Skipping Education",
    text: "Trying to trade before learning chart basics, risk management, and market behavior can become expensive.",
    icon: BookOpen,
  },
];

const checklist = [
  "Learn before risking serious money.",
  "Create a simple buy and sell plan.",
  "Avoid emotional decisions after hype.",
  "Risk only what you can afford to lose.",
  "Review mistakes instead of hiding from them.",
  "Focus on consistency over quick results.",
];

export default function BeginnerMistakesBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Beginner Guide
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 6 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Common Mistakes Beginners Make in Crypto
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 12, 2026
        </span>

        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Beginner • Psychology • Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Almost every beginner makes mistakes in crypto — and that is normal.
        The goal is not perfection. The goal is learning faster, protecting
        capital, and avoiding repeated emotional decisions.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Reality Check
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Mistakes Are Part of Learning
          </h2>

          <p>
            Most beginners enter crypto with excitement, curiosity, and high
            expectations. That excitement is normal, but it can sometimes lead
            to rushed decisions.
          </p>

          <p className="mt-4">
            The truth is simple: almost every experienced trader made mistakes
            in the beginning. What matters is whether those mistakes become
            lessons or repeated habits.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “The goal is not avoiding every mistake. The goal is avoiding the
            same mistake repeatedly.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Common Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Mistakes Beginners Often Make
          </h2>

          <div className="space-y-5">
            {mistakes.map((mistake, index) => {
              const Icon = mistake.icon;

              return (
                <div
                  key={mistake.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                        0{index + 1}
                      </p>

                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {mistake.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {mistake.text}
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
            03 · Emotional Decisions
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Why Emotions Cause Problems
          </h2>

          <p>
            Fear and excitement are common in crypto because prices can move
            quickly. Some beginners buy after a big move because they fear
            missing out. Others panic sell after a drop because they feel
            uncertain.
          </p>

          <p className="mt-4">
            Emotions are normal. The important thing is learning how to slow
            down, follow a plan, and avoid rushed decisions.
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · A Better Approach
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner Checklist
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
          <h2 className="mb-4 text-2xl font-bold text-white">
            Final Thoughts
          </h2>

          <p className="leading-7 text-slate-300">
            Becoming better in crypto is usually less about finding shortcuts
            and more about building good habits. Small improvements, patience,
            and consistent learning often matter more than trying to move too
            fast.
          </p>
        </section>
      </div>
    </article>
  );
}