type ToolStatProps = {
  label: string;
  value: string | number;
  description?: string;
};

export default function ToolStat({
  label,
  value,
  description,
}: ToolStatProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
        {value}
      </p>

      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}