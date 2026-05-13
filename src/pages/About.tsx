import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            About Bassam Malik
          </p>

          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
            Crypto trading education built for beginners
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Bassam Malik Education is created to help beginners understand crypto
            trading concepts with clarity, structure, and responsible risk awareness.
            The goal is not to create hype, but to provide useful learning resources
            that help people make more informed decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<BookOpen />}
              title="Beginner Friendly"
              text="Simple explanations of market structure, chart reading, trading journals, and common beginner mistakes."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Risk First"
              text="The website focuses on risk management, planning, and safer decision-making before any trading action."
            />

            <FeatureCard
              icon={<BarChart3 />}
              title="Practical Tools"
              text="Calculators and resources are designed to support learning, planning, and better trading habits."
            />
          </div>

          <section className="premium-card mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              Our approach
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Crypto markets can be volatile and emotional, especially for beginners.
              This website encourages education, patience, journaling, and risk
              awareness instead of rushing into decisions. All content is for
              educational purposes only and should not be treated as financial advice.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="premium-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}