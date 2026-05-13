import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Shield, BarChart3, Repeat, Percent, Plus } from "lucide-react";
import { motion } from "framer-motion";

const calculators = [
  {
    title: "Trade Size Calculator",
    description: "Estimate trade size based on account balance, risk percentage, entry price, and stop level.",
    path: "/calculators/trade-size",
    icon: Shield,
  },
  {
    title: "Risk / Reward Calculator",
    description: "Compare possible risk and reward before making a trading decision.",
    path: "/calculators/risk-reward",
    icon: BarChart3,
  },
  {
    title: "Profit Calculator",
    description: "Estimate profit or loss after buying and selling crypto.",
    path: "/calculators/profit",
    icon: TrendingUp,
  },
  {
    title: "Compound Growth Calculator",
    description: "Understand how steady growth may affect a portfolio over time.",
    path: "/calculators/compound-growth",
    icon: Percent,
  },
  {
    title: "DCA Calculator",
    description: "Estimate results from regular crypto purchases over time.",
    path: "/calculators/dca",
    icon: Repeat,
  },
  {
    title: "Break-Even Calculator",
    description: "See how much growth is needed to recover from a loss.",
    path: "/calculators/break-even",
    icon: Plus,
  },
  {
    title: "Calculator",
    description: "Use a simple calculator for quick trading-related calculations.",
    path: "/calculators/calculator",
    icon: Calculator,
  },
];

export default function Calculators() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Trading Tools
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Crypto Trading Calculators
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Beginner-friendly tools to help you estimate risk, reward, profit, growth, and trade planning.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={item.path}
                  className="group block h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-300">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold text-emerald-500">
                    Open calculator →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}