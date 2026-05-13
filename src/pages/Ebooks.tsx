import { motion } from "framer-motion";
import { BookOpen, Lock, ShieldCheck, BarChart3 } from "lucide-react";

const ebooks = [
  {
    title: "Beginner Crypto Guide",
    description:
      "A structured beginner-friendly ebook for understanding crypto markets, risk, and responsible learning.",
    icon: BookOpen,
  },
  {
    title: "Risk Management Mastery",
    description:
      "A practical guide focused on protecting capital, planning decisions, and avoiding emotional mistakes.",
    icon: ShieldCheck,
  },
  {
    title: "Chart Reading Basics",
    description:
      "A simple guide to candles, trends, support, resistance, and basic market structure.",
    icon: BarChart3,
  },
];

export default function Ebooks() {
  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Premium Learning
          </p>

          <h1 className="text-4xl font-bold text-slate-950 dark:text-white md:text-5xl">
            Ebooks Coming Soon
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Premium crypto education ebooks are being prepared to help beginners
            learn with more structure, clarity, and confidence.
          </p>
        </motion.section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((ebook, index) => {
            const Icon = ebook.icon;

            return (
              <motion.article
                key={ebook.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="premium-card group flex h-full flex-col transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <Icon size={30} />
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Lock size={13} />
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                  {ebook.title}
                </h2>

                <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {ebook.description}
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-6 cursor-not-allowed rounded-2xl bg-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-400"
                >
                  Launching Soon
                </button>
              </motion.article>
            );
          })}
        </section>
      </div>
    </main>
  );
}