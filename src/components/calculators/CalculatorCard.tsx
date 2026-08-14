// src/components/calculators/CalculatorCard.tsx

type CalculatorCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function CalculatorCard({
  title,
  description,
  children,
}: CalculatorCardProps) {
  return (
    <div className="premium-card p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}

      <div className="mt-8">{children}</div>
    </div>
  );
}