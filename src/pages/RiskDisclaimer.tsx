import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  ShieldAlert,
  User,
} from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";

const sections = [
  {
    title: "Educational Purpose Only",
    icon: BookOpen,
    content:
      "Bassam Malik is a crypto education website created for learning purposes only. The content is designed to explain beginner-friendly crypto concepts including spot trading, risk management, chart basics, trading journals, and market education.",
  },
  {
    title: "Crypto Market Risk",
    icon: AlertTriangle,
    content:
      "Crypto assets are highly volatile. Prices can rise or fall quickly, and market conditions can change without warning. Any decision to buy or sell crypto assets carries risk and may result in loss.",
  },
  {
    title: "Not Financial Advice",
    icon: Briefcase,
    content:
      "Nothing on this website should be considered financial advice, investment advice, legal advice, tax advice, or a personal recommendation. Educational examples are shared to explain concepts only.",
  },
  {
    title: "Your Responsibility",
    icon: User,
    content:
      "You are responsible for your own decisions. Before buying or selling any crypto asset, consider your personal financial situation, do independent research, and avoid emotional decisions based only on online opinions or market excitement.",
  },
];

export default function RiskDisclaimer() {
  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
              Important Notice
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Risk Disclaimer
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Please read this carefully before using any educational content on
              Bassam Malik.
            </p>
          </div>

          {/* Main Warning Card */}
          <div className="premium-card mt-12 border border-amber-200 dark:border-amber-500/20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300">
                <ShieldAlert size={38} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                  Crypto involves serious risk
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Crypto markets are volatile and unpredictable. Educational
                  content can help improve understanding, but no content can
                  guarantee profits, prevent losses, or predict future market
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* Section Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="premium-card transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Reminder Box */}
          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-500/20 dark:bg-amber-500/10">
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={28}
                className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
              />

              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Educational Reminder
                </h3>

                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  Crypto trading involves risk. Only use money you can afford
                  to lose, avoid emotional decision-making, and always make
                  responsible buy and sell decisions based on your own research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}