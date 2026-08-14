import AnimatedPage from "../components/AnimatedPage";

const sections = [
  {
    title: "Educational Purpose Only",
    content:
      "Bassam Malik is a trading education website created for learning purposes only. The content is designed to explain beginner-friendly trading concepts including risk management, chart basics, trading journals, market structure, cryptocurrency education, and safer decision-making.",
  },
  {
    title: "Market Risk",
    content:
      "Financial and cryptocurrency markets are volatile. Prices can rise or fall quickly, liquidity can change, and market conditions may shift without warning. Any decision to buy, sell, or hold an asset carries risk and may result in partial or total financial loss.",
  },
  {
    title: "Not Financial Advice",
    content:
      "Nothing on this website should be considered financial advice, investment advice, legal advice, tax advice, or a personal recommendation. Articles, calculators, tools, scores, examples, and educational resources are provided only to explain concepts and help users understand how markets work.",
  },
  {
    title: "Your Responsibility",
    content:
      "You are responsible for your own decisions. Before buying, selling, or using any financial product, consider your personal financial situation, risk tolerance, and level of experience. You should conduct independent research and avoid making decisions based only on online opinions, social media, hype, or short-term market excitement.",
  },
  {
    title: "No Guaranteed Results",
    content:
      "Past performance, historical examples, technical analysis, educational scenarios, or market observations do not guarantee future results. No strategy, indicator, trading method, or educational resource can eliminate risk or guarantee profitable outcomes.",
  },
  {
    title: "Tools and Calculators",
    content:
      "Calculators, planners, checklists, and other tools available on Bassam Malik are intended for educational and planning purposes only. Their results are estimates and may not include real trading fees, spreads, slippage, taxes, funding costs, exchange rules, liquidity conditions, or other market factors.",
  },
  {
    title: "Third-Party Platforms",
    content:
      "Bassam Malik may reference or link to cryptocurrency exchanges, analysis platforms, books, websites, and other third-party services. These services operate independently and may involve their own risks, fees, terms, availability restrictions, and security practices. Always review third-party information before using any external platform.",
  },
  {
    title: "Security and Custody Risk",
    content:
      "Cryptocurrency users may face additional risks involving wallets, exchanges, phishing, account security, private keys, scams, smart contracts, and custody. Users are responsible for protecting their accounts, devices, passwords, recovery phrases, and other sensitive information.",
  },
];

export default function RiskDisclaimer() {
  return (
    <AnimatedPage>
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          Important Notice
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Risk Disclaimer
        </h1>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Please read this carefully before using any educational content,
          tools, calculators, directories, or other resources available on
          Bassam Malik.
        </p>

        <div className="premium-card mt-10 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Trading and Investing Involve Serious Risk
          </h2>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Financial and cryptocurrency markets can be highly volatile and
            unpredictable. Educational content may help improve understanding
            and decision-making, but no article, tool, strategy, indicator, or
            analysis can guarantee profits, prevent losses, or accurately
            predict future market performance.
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

        <div className="premium-card mt-10 p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
            Educational Reminder
          </h3>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Always make decisions based on your own research, financial
            situation, and risk tolerance. Avoid risking money you cannot
            afford to lose, use appropriate risk management, protect your
            accounts and wallets, and consider seeking guidance from a
            qualified financial, legal, or tax professional when necessary.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}