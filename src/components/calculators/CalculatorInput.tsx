// src/components/calculators/CalculatorInput.tsx

type CalculatorInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  placeholder?: string;
};

export default function CalculatorInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = "any",
  min = "0",
  placeholder,
}: CalculatorInputProps) {
  return (
    <label>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </span>

      <div className="relative mt-2">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {prefix}
          </span>
        )}

        <input
          type="number"
          min={min}
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={`
            w-full rounded-2xl border border-slate-200 bg-white/80 py-4
            text-slate-950 outline-none transition
            focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10
            dark:border-white/10 dark:bg-white/[0.03] dark:text-white
            dark:placeholder:text-slate-500
            ${prefix ? "pl-9" : "pl-4"}
            ${suffix ? "pr-10" : "pr-4"}
          `}
        />

        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}