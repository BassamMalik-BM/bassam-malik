// src/components/calculators/EmptyResult.tsx

type EmptyResultProps = {
  message?: string;
};

export default function EmptyResult({
  message = "Enter valid values to calculate the result.",
}: EmptyResultProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
        {message}
      </p>
    </div>
  );
}