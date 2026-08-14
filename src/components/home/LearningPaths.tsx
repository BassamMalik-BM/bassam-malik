import {
  Bitcoin,
  Blocks,
  Brain,
  ChartCandlestick,
  CircleDollarSign,
  Landmark,
  ShieldCheck,
  WalletCards,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Cryptocurrency",
    description:
      "Start with the basics of cryptocurrency, coins, tokens, prices, and how crypto works.",
    href: "/learn/cryptocurrency",
    icon: CircleDollarSign,
  },
  {
    title: "Bitcoin",
    description:
      "Learn what Bitcoin is, why it was created, how it works, and why it matters.",
    href: "/learn/bitcoin",
    icon: Bitcoin,
  },
  {
    title: "Ethereum",
    description:
      "Understand Ethereum, smart contracts, applications, and what makes it different.",
    href: "/learn/ethereum",
    icon: Zap,
  },
  {
    title: "Blockchain",
    description:
      "Explore blockchain technology, Web3, DeFi, smart contracts, and related concepts.",
    href: "/learn/blockchain",
    icon: Blocks,
  },
  {
    title: "Wallets",
    description:
      "Understand crypto wallets, private keys, hot and cold storage, and safer custody.",
    href: "/learn/wallets",
    icon: WalletCards,
  },
  {
    title: "Exchanges",
    description:
      "Learn how crypto exchanges work, how orders are placed, and how to use them safely.",
    href: "/learn/exchanges",
    icon: Landmark,
  },
  {
    title: "Trading",
    description:
      "Learn spot trading, market orders, limit orders, trading plans, and basic execution.",
    href: "/learn/trading",
    icon: ChartCandlestick,
  },
  {
    title: "Technical Analysis",
    description:
      "Understand charts, trends, timeframes, indicators, and basic market analysis.",
    href: "/learn/technical-analysis",
    icon: ChartCandlestick,
  },
  {
    title: "Risk Management",
    description:
      "Learn position sizing, risk-to-reward, capital protection, and responsible planning.",
    href: "/learn/risk-management",
    icon: ShieldCheck,
  },
  {
    title: "Psychology",
    description:
      "Understand FOMO, emotional trading, revenge trading, discipline, and trading behavior.",
    href: "/learn/trading-psychology",
    icon: Brain,
  },
];

export default function LearningPaths() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Learning Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Explore topics at your own pace
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Browse beginner-friendly lessons by topic and focus on the areas
              you want to understand next.
            </p>
          </div>

          <Link
            to="/learn"
            className="inline-flex shrink-0 items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all lessons
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                to={category.href}
                aria-label={`Open ${category.title}`}
                className="group flex min-h-[185px] cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30 dark:hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}