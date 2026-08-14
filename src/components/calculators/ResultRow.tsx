// src/components/calculators/ResultRow.tsx

type ResultRowProps = {
  label: string;
  value: string;
};

export default function ResultRow({
  label,
  value,
}: ResultRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0 dark:border-white/10">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>

      <span className="text-right font-bold text-slate-950 dark:text-white">
        {value}
      </span>
    </div>
  );
}