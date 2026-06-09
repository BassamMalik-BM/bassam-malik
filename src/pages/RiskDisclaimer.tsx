import AnimatedPage from "../components/AnimatedPage";
import Breadcrumbs from "../components/Breadcrumbs";

const sections = [
  {
    title: "Educational Purpose Only",
    content:
      "Bassam Malik is a trading education website created for learning purposes only. The content is designed to explain beginner-friendly trading concepts including risk management, chart basics, trading journals, and market education.",
  },
  {
    title: "Market Risk",
    content:
      "Financial markets are volatile. Prices can rise or fall quickly, and market conditions can change without warning. Any decision to buy or sell assets carries risk and may result in loss.",
  },
  {
    title: "Not Financial Advice",
    content:
      "Nothing on this website should be considered financial advice, investment advice, legal advice, tax advice, or a personal recommendation. Educational examples are shared to explain concepts only.",
  },
  {
    title: "Your Responsibility",
    content:
      "You are responsible for your own decisions. Before buying or selling any asset, consider your personal financial situation, do independent research, and avoid emotional decisions based only on online opinions or market excitement.",
  },
];

export default function RiskDisclaimer() {
  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Breadcrumbs />

          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              Important Notice
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Risk Disclaimer
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Please read this carefully before using any educational content on
              Bassam Malik.
            </p>

            <div className="premium-card mt-10 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Trading Involves Serious Risk
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Markets are volatile and unpredictable. Educational content can
                help improve understanding, but no content can guarantee profits,
                prevent losses, or predict future market performance.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="premium-card p-8 transition duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {section.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="premium-card mt-10 p-8">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Educational Reminder
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Trading involves risk. Only use money you can afford to lose,
                avoid emotional decision-making, and always make responsible
                buy and sell decisions based on your own research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}