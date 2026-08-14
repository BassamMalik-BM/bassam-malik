interface AnalysisWebsiteScoreProps {
  score: number;
  label?: string;
}

export default function AnalysisWebsiteScore({
  score,
  label = "Bassam Score",
}: AnalysisWebsiteScoreProps) {
  return (
    <div className="flex min-w-28 flex-col items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-50 px-5 py-4 dark:border-blue-500/20 dark:bg-blue-500/10">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        {label}
      </span>

      <div className="mt-1">
        <span className="text-3xl font-bold text-slate-950 dark:text-white">
          {score.toFixed(1)}
        </span>

        <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
          /10
        </span>
      </div>
    </div>
  );
}