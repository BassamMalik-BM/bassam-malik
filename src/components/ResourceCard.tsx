import {
  ArrowRight,
  BookOpen,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  NotebookPen,
  BarChart3,
} from "lucide-react";
import type { Resource } from "../types";

type ResourceCardProps = {
  resource: Resource;
};

function getResourceIcon(title: string) {
  if (title.includes("Beginner")) return BookOpen;
  if (title.includes("Glossary")) return FileText;
  if (title.includes("Support")) return ShieldCheck;
  if (title.includes("Tools")) return BarChart3;
  if (title.includes("Risk")) return ClipboardCheck;
  if (title.includes("Journal")) return NotebookPen;
  return FileText;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const isComingSoon = resource.href === "#";
  const Icon = getResourceIcon(resource.title);

  return (
    <article className="premium-card group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300">
          <Icon size={30} />
        </div>

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {resource.type}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
        {resource.title}
      </h3>

      <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
        {resource.description}
      </p>

      <a
        href={resource.href}
        target={isComingSoon ? undefined : "_blank"}
        rel={isComingSoon ? undefined : "noreferrer"}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition ${
          isComingSoon
            ? "pointer-events-none bg-slate-200 text-slate-500 dark:bg-white/10 dark:text-slate-400"
            : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:-translate-y-1 hover:bg-blue-700"
        }`}
      >
        {resource.cta}
        {!isComingSoon && <ArrowRight size={18} />}
      </a>
    </article>
  );
}