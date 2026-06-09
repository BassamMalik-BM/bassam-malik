import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { calculators } from '../data/calculators';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Calculators() {
  return (
    <main className="section-padding bg-slate-50 dark:bg-navy-950">
      <section className="container-page">
        <Breadcrumbs />
        {/* Heading Section */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Calculators
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950 dark:text-white md:text-6xl">
            Crypto Trading Calculators
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Beginner-friendly tools to help you estimate risk,
            reward, profit, growth, and trade planning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  className="group premium-card flex h-full flex-col transition duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={30} />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500">
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