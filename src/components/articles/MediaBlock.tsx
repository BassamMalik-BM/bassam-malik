type MediaBlockProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: "full" | "medium" | "small";
};

const widths = {
  full: "max-w-full",
  medium: "max-w-4xl mx-auto",
  small: "max-w-2xl mx-auto",
};

export default function MediaBlock({
  src,
  alt,
  caption,
  width = "full",
}: MediaBlockProps) {
  return (
    <figure className={`my-10 ${widths[width]}`}>
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-navy-900">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>

      {caption && (
        <figcaption className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}