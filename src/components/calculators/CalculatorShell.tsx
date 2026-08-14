// src/components/calculators/CalculatorShell.tsx

type CalculatorShellProps = {
  title: string;
  description: string;
  category?: string;
  children: React.ReactNode;
};

export default function CalculatorShell({
  title,
  description,
  category = "Calculator",
  children,
}: CalculatorShellProps) {
  return (
    <div>
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {category}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div className="mt-12">{children}</div>
    </div>
  );
}