import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ContinueLearningItem = {
  title: string;
  slug: string;
  readingTime: string;
};

type ContinueLearningProps = {
  lessons: ContinueLearningItem[];
};

export default function ContinueLearning({
  lessons,
}: ContinueLearningProps) {
  if (!lessons.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white/40 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-navy-900/40">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Continue Learning
      </h3>

      <div className="mt-6 divide-y divide-slate-200/70 dark:divide-white/10">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            to={`/learn/${lesson.slug}`}
            className="group flex items-center justify-between py-5 first:pt-0 last:pb-0"
          >
            <div className="min-w-0 pr-4">
              <h4 className="text-sm font-semibold leading-6 text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {lesson.title}
              </h4>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {lesson.readingTime}
              </p>
            </div>

            <ArrowRight
              size={16}
              className="shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}