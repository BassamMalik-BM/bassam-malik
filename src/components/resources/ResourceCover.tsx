import { getCoverLayout } from "../../data/resources";
import type { Resource } from "../../data/resources";

type ResourceCoverProps = {
  resource: Resource;
};

export default function ResourceCover({
  resource,
}: ResourceCoverProps) {
  const layout = getCoverLayout(resource);
  const hasLightCover = Boolean(resource.coverLight);

  return (
    <div className="relative isolate overflow-hidden bg-[#091326] [container-type:inline-size]">
      {/* Decorative artwork; all text is rendered separately. */}
      <img
        src={resource.cover}
        alt=""
        loading="lazy"
        className="block h-auto w-full"
      />

      {resource.coverLight && (
        <img
          src={resource.coverLight}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain dark:hidden"
        />
      )}

      {/* Brand */}
      <p
        style={{
          top: layout.brandTop,
          left: layout.brandLeft,
          fontSize: layout.brandSize,
        }}
        className={`absolute m-0 font-bold leading-tight ${
          hasLightCover
            ? "text-blue-700 dark:text-cyan-400"
            : "text-cyan-400"
        }`}
      >
        Bassam Malik
      </p>

      {/* Title */}
      <h2
        style={{
          top: layout.titleTop,
          left: layout.titleLeft,
          width: layout.titleWidth,
          fontSize: layout.titleSize,
        }}
        className={`absolute m-0 font-extrabold leading-[1.12] tracking-tight ${
          hasLightCover
            ? "text-slate-950 dark:text-white"
            : "text-white"
        }`}
      >
        {resource.titleLines.map((line, index) => (
          <span
            key={`${index}-${line}`}
            className={
              index === resource.titleLines.length - 1
                ? "block bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent"
                : "block"
            }
          >
            {line}
            {index < resource.titleLines.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>

      {/* Description */}
      <p
        style={{
          top: layout.descriptionTop,
          left: layout.descriptionLeft,
          width: layout.descriptionWidth,
          fontSize: layout.descriptionSize,
        }}
        className={`absolute m-0 leading-[1.45] ${
          hasLightCover
            ? "text-slate-700 dark:text-slate-200"
            : "text-slate-200"
        }`}
      >
        {resource.description}
      </p>

      {/* Learning level */}
      <span
        style={{
          top: layout.levelTop,
          left: layout.levelLeft,
          width: layout.levelWidth,
          height: layout.levelHeight,
          fontSize: layout.levelSize,
        }}
        className={`absolute flex items-center justify-center font-semibold ${
          hasLightCover
            ? "text-emerald-700 dark:text-emerald-300"
            : "text-emerald-300"
        }`}
      >
        {resource.level}
      </span>

      {/* Website and slogan */}
      <div
        style={{
          top: layout.footerTop,
          height: layout.footerHeight,
          fontSize: layout.footerSize,
        }}
        className="absolute left-[5%] right-[5%] grid grid-cols-[38%_20%_20%_22%] items-center text-center font-semibold"
      >
        <a
          href="https://bassammalik.com"
          className={`whitespace-nowrap hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${
            hasLightCover
              ? "text-slate-950 dark:text-white"
              : "text-white"
          }`}
        >
          bassammalik.com
        </a>

        <span
          className={
            hasLightCover
              ? "text-blue-700 dark:text-blue-400"
              : "text-blue-400"
          }
        >
          Learn
        </span>

        <span
          className={
            hasLightCover
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-emerald-400"
          }
        >
          Trade
        </span>

        <span
          className={
            hasLightCover
              ? "text-blue-700 dark:text-blue-400"
              : "text-blue-400"
          }
        >
          Grow
        </span>
      </div>
    </div>
  );
}