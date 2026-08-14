type ToolSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function ToolSection({
  title,
  description,
  children,
}: ToolSectionProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}