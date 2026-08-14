type ArticleSectionProps = {
  id?: string;
  title: string;
  paragraphs?: string[];
  media?: {
    src: string;
    alt: string;
    width?: "full" | "medium" | "small";
  };
  paragraphsAfterMedia?: string[];
  bullets?: string[];
};

function renderBoldLabel(text: string) {
  const colonIndex = text.indexOf(":");

  if (colonIndex === -1) return text;

  const label = text.slice(0, colonIndex).trim();

  // Only bold short labels like "Blockchain:"
  if (label.length > 35) return text;

  const rest = text.slice(colonIndex + 1);

  return (
    <>
      <strong className="font-semibold text-slate-950 dark:text-white">
        {label}:
      </strong>
      {rest}
    </>
  );
}

export default function ArticleSection({
  id,
  title,
  paragraphs = [],
  media,
  paragraphsAfterMedia = [],
  bullets = [],
}: ArticleSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>

      {/* Intro Paragraphs */}
      {paragraphs.length > 0 && (
        <div className="mt-5 space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-8 text-slate-700 dark:text-slate-300"
            >
              {renderBoldLabel(paragraph)}
            </p>
          ))}
        </div>
      )}

      {/* Media */}
      {media && (
        <div
          className={`my-8 overflow-hidden rounded-2xl ${
            media.width === "small"
              ? "max-w-md"
              : media.width === "medium"
              ? "max-w-3xl"
              : "w-full"
          }`}
        >
          <img
            src={media.src}
            alt={media.alt}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Paragraphs After Media */}
      {paragraphsAfterMedia.length > 0 && (
        <div className="space-y-5">
          {paragraphsAfterMedia.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-8 text-slate-700 dark:text-slate-300"
            >
              {renderBoldLabel(paragraph)}
            </p>
          ))}
        </div>
      )}

      {/* Bullets */}
      {bullets.length > 0 && (
        <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
          {bullets.map((bullet, index) => (
            <li key={index}>{renderBoldLabel(bullet)}</li>
          ))}
        </ul>
      )}
    </section>
  );
}