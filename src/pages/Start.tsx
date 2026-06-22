import { Link } from "react-router-dom";
import {
  BookOpen,
  ShieldCheck,
  Wallet,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Understand what Bitcoin is",
    description:
      "Start by learning why Bitcoin exists, how it works, and why it matters in the bigger financial world.",
    icon: BookOpen,
    link: "/learn/what-is-bitcoin",
  },
  {
    title: "Learn how wallets work",
    description:
      "Understand private keys, public keys, and how to store crypto safely before buying anything.",
    icon: Wallet,
    link: "/learn/how-crypto-wallets-work",
  },
  {
    title: "Study market basics",
    description:
      "Learn market capitalization, volatility, liquidity, and how price moves in crypto markets.",
    icon: BarChart3,
    link: "/learn/market-capitalization-in-crypto",
  },
  {
    title: "Build risk management habits",
    description:
      "Risk management is one of the most important parts of long-term survival in crypto.",
    icon: ShieldCheck,
    link: "/learn/risk-management",
  },
];

const mistakes = [
  "Buying without understanding",
  "Following hype blindly",
  "Ignoring risk management",
  "Overtrading emotionally",
  "Investing money you cannot afford to lose",
];

export default function Start() {
  return (
    <main className="container-page section-padding">
      {/* HERO */}
      <section className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
          Start Here
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-6xl">
          New to crypto? Start here first.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page is designed for complete beginners. If crypto feels
          confusing, overwhelming, or too fast, this is the best place to build
          your foundation step by step.
        </p>
      </section>

      {/* STEPS */}
      <section className="mt-20">
        <h2 className="mb-10 text-3xl font-bold text-slate-950 dark:text-white">
          Your beginner roadmap
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Link
                key={step.title}
                to={step.link}
                className="premium-card group transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={22} />
                </div>

                <div className="mb-3 text-sm font-bold text-blue-600 dark:text-blue-300">
                  Step {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
                  Read now <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHAT TO AVOID */}
      <section className="mt-20">
        <div className="premium-card">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Common beginner mistakes to avoid
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 dark:border-white/10"
              >
                <CheckCircle2
                  size={18}
                  className="text-red-500"
                />

                <span className="text-slate-700 dark:text-slate-300">
                  {mistake}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-20">
        <div className="rounded-[2rem] border border-blue-500/10 bg-white/80 p-10 text-center shadow-xl backdrop-blur dark:bg-white/[0.04]">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Build your crypto knowledge the right way
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            Crypto rewards patience, education, and discipline. The goal is not
            to rush. The goal is to understand before you act.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Learning <ArrowRight size={17} />
            </Link>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:text-white"
            >
              Read Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}