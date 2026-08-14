type EmptyToolStateProps = {
  title?: string;
  message?: string;
};

export default function EmptyToolState({
  title = "Nothing here yet",
  message = "Add your first item to start using this tool.",
}: EmptyToolStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center dark:border-white/15">
      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
        {message}
      </p>
    </div>
  );
}