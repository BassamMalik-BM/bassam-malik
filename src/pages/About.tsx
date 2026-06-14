import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";

export default function About() {
  return (
    <main className="section-padding">
      <div className="container-page">
        <Breadcrumbs />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            About Bassam Malik
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Trading education built for beginner learners
          </h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Bassam Malik is an educational platform created to help beginners
            understand trading, market structure, risk management, chart reading,
            and decision-making with more clarity. The goal is not to create hype
            or push unrealistic expectations. The goal is to provide simple,
            structured, and practical learning resources that help people make
            more informed decisions.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Beginner Friendly"
              text="Lessons are written in simple language so new learners can understand market concepts without feeling overwhelmed."
            />

            <FeatureCard
              title="Risk First"
              text="The website focuses on risk awareness, capital protection, journaling, patience, and responsible decision-making."
            />

            <FeatureCard
              title="Practical Learning"
              text="Blogs, tools, calculators, and resources are designed to help learners apply concepts in a more structured way."
            />
          </div>

          <section className="premium-card mt-12 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              Why This Website Exists
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Many beginners enter the market with excitement but without a clear
              plan. They may focus only on profits, fast results, or social media
              opinions while ignoring risk, emotions, and proper learning. Bassam
              Malik was created to make trading education easier to understand and
              more responsible for beginners.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              The content on this website focuses on education, not promises.
              You will find beginner guides, market explanations, trading tools,
              calculators, resources, and risk-focused lessons designed to support
              better learning habits.
            </p>
          </section>

          <section className="premium-card mt-8 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              Our Approach
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              The approach is simple: learn first, plan carefully, manage risk,
              and avoid emotional decisions. Markets can move quickly, and no
              educational content can remove risk completely. That is why this
              website encourages patience, journaling, realistic expectations,
              and independent research.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              All content on Bassam Malik is for educational purposes only. It
              should not be treated as financial advice, investment advice, or a
              guarantee of results.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="premium-card p-8">
      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}