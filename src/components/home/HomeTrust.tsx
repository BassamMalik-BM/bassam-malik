import {
  BookOpen,
  Calculator,
  Gift,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    title: "Easy to Understand",
    description:
      "Beginner-friendly explanations without unnecessary complexity.",
    icon: BookOpen,
  },
  {
    title: "Free to Learn",
    description:
      "Educational articles and core learning resources are freely accessible.",
    icon: Gift,
  },
  {
    title: "Practical Tools",
    description:
      "Calculators and tools help you apply what you learn.",
    icon: Calculator,
  },
  {
    title: "No Hype",
    description:
      "Clear education without guaranteed profits or unrealistic promises.",
    icon: ShieldCheck,
  },
];

const stats = [
  {
    value: "40+",
    label: "Educational Articles",
  },
  {
    value: "8",
    label: "Practical Tools",
  },
  {
    value: "9",
    label: "Calculators",
  },
  {
    value: "3",
    label: "Discover Directories",
  },
];

export default function HomeTrust() {
  return (
    <section className="py-10 sm:py-12">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          {/* TRUST POINTS */}
          <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-white/10">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* STATS */}
          <div className="grid border-t border-slate-200 bg-slate-50/70 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/[0.02]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 py-6 text-center ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-slate-200 lg:dark:border-white/10"
                    : ""
                }`}
              >
                <p className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}