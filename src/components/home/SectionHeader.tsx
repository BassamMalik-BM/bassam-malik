interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <header className={alignment}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>

      <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
        {description}
      </p>
    </header>
  );
}