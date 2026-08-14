import {
  BookOpen,
  SearchCheck,
  Languages,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const trustItems = [
  {
    title: "Beginner First",
    description:
      "Complex crypto topics explained in a simpler, structured way.",
    icon: BookOpen,
  },
  {
    title: "Research Based",
    description:
      "Content is built using reliable sources and official documentation.",
    icon: SearchCheck,
  },
  {
    title: "Clear Language",
    description:
      "Less jargon, clearer explanations, and no unnecessary complexity.",
    icon: Languages,
  },
  {
    title: "Risk Aware",
    description:
      "Risk management and responsible decision-making stay part of the learning.",
    icon: ShieldCheck,
  },
  {
    title: "No Hype",
    description:
      "No guaranteed profits, unrealistic promises, or pressure to trade.",
    icon: BadgeCheck,
  },
];

export default function HomeTrust() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Why Bassam Malik
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Built around responsible learning
          </h2>
        </div>

        {/* Trust cards */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex min-h-[220px] flex-col items-center rounded-2xl border border-slate-200 bg-white/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}