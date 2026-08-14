// src/components/calculators/MainResult.tsx

type MainResultProps = {
  label: string;
  value: string;
};

export default function MainResult({
  label,
  value,
}: MainResultProps) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}