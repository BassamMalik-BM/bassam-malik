type ChecklistItemProps = {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function ChecklistItem({
  id,
  label,
  description,
  checked,
  onChange,
}: ChecklistItemProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 bg-white/60 p-5 transition hover:border-blue-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />

      <div>
        <p
          className={`font-semibold ${
            checked
              ? "text-slate-400 line-through dark:text-slate-500"
              : "text-slate-950 dark:text-white"
          }`}
        >
          {label}
        </p>

        {description && (
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </label>
  );
}