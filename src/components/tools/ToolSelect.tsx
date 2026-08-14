type Option = {
  label: string;
  value: string;
};

type ToolSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function ToolSelect({
  label,
  value,
  onChange,
  options,
}: ToolSelectProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}