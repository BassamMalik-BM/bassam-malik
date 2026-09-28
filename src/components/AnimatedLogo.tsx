import { useEffect, useId, useRef } from "react";

// Each surface keeps the same nine cubic segments throughout the unfold.
// Coordinates below are traced from the supplied 1600 × 1600 logo.
const trace = (points: number[]) => points.map((value) => value * 56 / 1600);
const BLUE_FRONT = trace([
  875,138, 892,129,915,129,936,141,
  1000,180,1080,228,1152,272, 1166,280,1166,291,1152,301,
  1000,396,784,530,604,641, 410,761,259,850,291,947,
  274,931,263,907,264,881, 264,816,264,753,264,696,
  264,578,326,479,417,416, 565,324,740,217,875,138,
]);
const BLUE_FOLD = trace([
  604,641, 542,713,520,778,534,849,
  551,936,622,1001,732,1038, 687,1067,643,1095,600,1121,
  584,1130,568,1128,550,1118, 475,1073,395,1024,327,981,
  308,969,298,959,291,947, 259,850,410,761,604,641,
  604,641,604,641,604,641, 604,641,604,641,604,641,
]);
const GREEN_FOLD = trace([
  823,595, 935,507,1064,502,1182,568,
  1226,592,1272,618,1310,640, 1350,671,1305,749,1256,801,
  1184,882,1089,961,987,1024, 1060,961,1089,879,1072,802,
  1048,699,957,631,823,595, 823,595,823,595,823,595,
  823,595,823,595,823,595, 823,595,823,595,823,595,
]);
const GREEN_FRONT = trace([
  1310,640, 1335,654,1350,683,1350,713,
  1350,788,1350,866,1350,944, 1350,1056,1285,1150,1182,1213,
  1050,1295,910,1381,783,1460, 765,1472,746,1470,730,1461,
  660,1420,601,1383,536,1343, 519,1333,519,1314,536,1302,
  670,1218,860,1100,987,1024, 1175,907,1388,708,1310,640,
]);

// Broad elliptical ends give the open straps a gently wrapped silhouette.
// Keep nine cubic segments so the original unfold and reversal stay identical.
function strip(x: number, y: number, width: number, height: number): number[] {
  const right = x + width;
  const bottom = y + height;
  const curl = 13;
  const bend = 4;
  return [
    x + curl, y,
    x + width / 3, y, x + width * 2 / 3, y, right - curl, y,
    right - 3, y, right, y + 1.5, right, y + bend,
    right, y + bend, right, bottom - bend, right, bottom - bend,
    right, bottom - 1.5, right - 3, bottom, right - curl, bottom,
    right - width / 3, bottom, x + width / 3, bottom, x + curl, bottom,
    x + 3, bottom, x, bottom - 1.5, x, bottom - bend,
    x, bottom - bend, x, y + bend, x, y + bend,
    x, y + 1.5, x + 3, y, x + curl, y,
    x + curl, y, x + curl, y, x + curl, y,
  ];
}

const surfaces = [
  { from: BLUE_FOLD, to: strip(9.25, 9, 155.75, 17), fill: "blueFold" },
  { from: BLUE_FRONT, to: strip(9.25, 7, 155.75, 17), fill: "blue" },
  { from: GREEN_FOLD, to: strip(9.25, 32, 155.75, 17), fill: "greenFold" },
  { from: GREEN_FRONT, to: strip(9.25, 30, 155.75, 17), fill: "green" },
];

function pathAt(from: number[], to: number[], progress: number): string {
  const p = from.map((value, index) => value + (to[index] - value) * progress);
  return `M ${p[0]} ${p[1]} C ${p.slice(2).join(" ")} Z`;
}

/** Decorative mark: its enclosing home link supplies the accessible name. */
export default function AnimatedLogo() {
  const id = `bm-${useId().replace(/:/g, "")}`;
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = root.current;
    const link = host?.closest("a");
    const nav = link?.closest("nav");
    if (!host || !link || !nav) return;

    const media = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const paths = Array.from(host.querySelectorAll<SVGPathElement>("[data-ribbon]"));
    const textReveal = host.querySelector<SVGRectElement>("[data-text-reveal]");
    const finishes = Array.from(host.querySelectorAll<SVGPathElement>("[data-finish]"));
    let progress = 0;
    let frame = 0;
    let hovered = false;
    let focused = false;
    let disposed = false;

    const paint = (value: number) => {
      paths.forEach((path, index) => {
        const surface = surfaces[index];
        path.setAttribute("d", pathAt(surface.from, surface.to, value));
      });
      finishes.forEach((path) => {
        const surface = surfaces[Number(path.dataset.finish)];
        path.setAttribute("d", pathAt(surface.from, surface.to, value));
        // Surface lighting emerges with the flattening; the resting mark is untouched.
        path.setAttribute("opacity", String(value ** 4));
      });
      // Text is physically clipped from left to right late in the unfold.
      const reveal = Math.max(0, Math.min(1, (value - 0.65) / 0.35));
      textReveal?.setAttribute("width", String(156 * reveal));
    };

    const hasRoom = () => {
      const left = link.getBoundingClientRect().left;
      let boundary = Math.min(nav.getBoundingClientRect().right, window.innerWidth);
      for (const child of Array.from(nav.children)) {
        if (child === link || child.contains(link)) continue;
        const box = child.getBoundingClientRect();
        if (box.width && box.height && box.left >= left) {
          boundary = Math.min(boundary, box.left);
        }
      }
      return left + 176 + 16 <= boundary;
    };

    const update = () => {
      cancelAnimationFrame(frame);
      if (!media.matches || !hasRoom()) {
        progress = 0;
        paint(0);
        return;
      }
      const target = hovered || focused ? 1 : 0;
      const start = progress;
      const distance = Math.abs(target - start);
      if (distance < 0.0001) return;
      const duration = 650 * distance;
      const started = performance.now();
      const tick = (now: number) => {
        const time = Math.min(1, (now - started) / duration);
        // Monotonic quintic easing: no overshoot or bounce.
        const eased = time * time * time * (time * (time * 6 - 15) + 10);
        progress = start + (target - start) * eased;
        paint(progress);
        if (time < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = true;
      update();
    };
    const leave = () => { hovered = false; update(); };
    const focus = () => { focused = link.matches(":focus-visible"); update(); };
    const blur = () => { focused = false; update(); };

    link.addEventListener("pointerenter", enter);
    link.addEventListener("pointerleave", leave);
    link.addEventListener("pointercancel", leave);
    link.addEventListener("focus", focus);
    link.addEventListener("blur", blur);
    media.addEventListener("change", update);
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    Array.from(nav.children).forEach((child) => observer.observe(child));
    void document.fonts.ready.then(() => { if (!disposed) update(); });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
      link.removeEventListener("pointerenter", enter);
      link.removeEventListener("pointerleave", leave);
      link.removeEventListener("pointercancel", leave);
      link.removeEventListener("focus", focus);
      link.removeEventListener("blur", blur);
    };
  }, []);

  return (
    <span ref={root} style={{ position: "relative", display: "block", width: 56, height: 56, flexShrink: 0 }}>
      <svg
        width="176" height="56" viewBox="0 0 176 56"
        aria-hidden="true" focusable="false"
        style={{ position: "absolute", inset: "0 auto auto 0", overflow: "visible", pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id={`${id}-blue`} x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#0048F5" />
            <stop offset="0.65" stopColor="#005BFF" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id={`${id}-blueFold`} x1="0" y1="0" x2="0.8" y2="1">
            <stop stopColor="#001B75" />
            <stop offset="1" stopColor="#0055FF" />
          </linearGradient>
          <linearGradient id={`${id}-green`} x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#00BDA1" />
            <stop offset="0.7" stopColor="#00CCAE" />
            <stop offset="1" stopColor="#00DAB5" />
          </linearGradient>
          <linearGradient id={`${id}-greenFold`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00CBA9" />
            <stop offset="0.3" stopColor="#10B981" />
            <stop offset="1" stopColor="#005D4D" />
          </linearGradient>
          <linearGradient id={`${id}-satin`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="white" stopOpacity="0.28" />
            <stop offset="0.45" stopColor="white" stopOpacity="0.07" />
            <stop offset="0.55" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#001B35" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id={`${id}-ends`} x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#001B35" stopOpacity="0.25" />
            <stop offset="0.07" stopColor="white" stopOpacity="0.12" />
            <stop offset="0.18" stopColor="white" stopOpacity="0" />
            <stop offset="0.82" stopColor="white" stopOpacity="0" />
            <stop offset="0.93" stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="#001B35" stopOpacity="0.25" />
          </linearGradient>
          <clipPath id={`${id}-reveal`}>
            <rect data-text-reveal="" x="9.25" y="7" width="0" height="41" />
          </clipPath>
        </defs>
        {surfaces.map((surface) => (
          <path
            key={surface.fill} data-ribbon=""
            d={pathAt(surface.from, surface.to, 0)}
            fill={`url(#${id}-${surface.fill})`}
            style={{ pointerEvents: "visiblePainted" }}
          />
        ))}
        {[1, 3].flatMap((index) =>
          ["satin", "ends"].map((finish) => (
            <path
              key={`${index}-${finish}`} data-finish={index}
              d={pathAt(surfaces[index].from, surfaces[index].to, 0)}
              fill={`url(#${id}-${finish})`} opacity="0"
              style={{ pointerEvents: "none" }}
            />
          )),
        )}
        <g
          clipPath={`url(#${id}-reveal)`} fill="white"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="10" fontWeight="650" letterSpacing="2.5" textAnchor="middle"
        >
          <text x="88.375" y="16" dominantBaseline="central">BASSAM</text>
          <text x="88.375" y="39" dominantBaseline="central">MALIK</text>
        </g>
      </svg>
    </span>
  );
}