type ToolCardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function ToolCard({
  title,
  description,
  children,
  className = "",
}: ToolCardProps) {
  return (
    <section
      className={`premium-card p-6 sm:p-8 ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}

      <div className={title || description ? "mt-8" : ""}>
        {children}
      </div>
    </section>
  );
}