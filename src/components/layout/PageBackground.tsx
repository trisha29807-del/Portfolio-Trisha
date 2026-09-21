import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

/**
 * One continuous "bokeh" layer behind the whole page.
 *
 * It replaces the glow circles that used to live inside individual sections
 * (they were clipped at each section's edge, which made hard horizontal seams).
 * Here the circles are placed down the full height of the page, so the hero's
 * look carries on uniformly from top to bottom with nothing cut off.
 */

type Disc = {
  side: "left" | "right";
  x: string; // distance from that side; negative = bleeds off-screen
  y: string | number; // distance from the top of the page
  size: number; // px
  color: string;
  blur: number; // px
};

/** The hero's own circles, same size/colour/blur/position as before. */
const HERO_DISCS: Disc[] = [
  { side: "left", x: "-7rem", y: "-7rem", size: 288, color: "rgba(49,87,139,.55)", blur: 2 },
  { side: "right", x: "-5rem", y: "-7rem", size: 288, color: "rgba(156,166,255,.55)", blur: 2 },
  { side: "left", x: "-5rem", y: "calc(var(--hero-h) - 13rem)", size: 320, color: "rgba(25,60,114,.70)", blur: 18 },
  { side: "right", x: "31%", y: "calc(var(--hero-h) * .23)", size: 256, color: "rgba(43,79,134,.60)", blur: 5 },
  { side: "right", x: "39%", y: "calc(var(--hero-h) * .87 - 12rem)", size: 192, color: "rgba(40,78,136,.45)", blur: 10 },
  { side: "right", x: "-8rem", y: "calc(var(--hero-h) - 11rem)", size: 288, color: "rgba(73,108,165,.35)", blur: 14 },
];

/** Pattern that continues below the hero. Repeats every CYCLE px (mirrored on alternate repeats). */
const CYCLE = 2400;
const START = 760;
const PATTERN: (Omit<Disc, "y"> & { y: number })[] = [
  { side: "left", x: "-8rem", y: 120, size: 300, color: "rgba(30,75,130,.38)", blur: 12 },
  { side: "right", x: "-6rem", y: 380, size: 260, color: "rgba(105,119,200,.24)", blur: 14 },
  { side: "right", x: "34%", y: 700, size: 220, color: "rgba(43,79,134,.34)", blur: 8 },
  { side: "left", x: "-5rem", y: 1000, size: 340, color: "rgba(49,87,139,.36)", blur: 10 },
  { side: "right", x: "-8rem", y: 1300, size: 300, color: "rgba(156,166,255,.28)", blur: 6 },
  { side: "left", x: "28%", y: 1560, size: 200, color: "rgba(40,78,136,.38)", blur: 10 },
  { side: "right", x: "-5rem", y: 1840, size: 320, color: "rgba(25,60,114,.55)", blur: 16 },
  { side: "left", x: "-7rem", y: 2100, size: 260, color: "rgba(73,108,165,.28)", blur: 14 },
];

export function PageBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(9000);
  const [scale, setScale] = useState(1);

  // Follow the page height (it grows when a case study opens) and width, in coarse
  // steps so the layer isn't re-rendered for every few pixels of layout change.
  // Circles shrink a little on narrow screens so they stay in proportion.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setHeight(Math.ceil(el.offsetHeight / 400) * 400);
      setScale(Math.round(Math.min(1, Math.max(0.6, el.offsetWidth / 1100)) * 20) / 20);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const discs = useMemo(() => {
    const all: Disc[] = [...HERO_DISCS];
    const cycles = Math.ceil((height - START) / CYCLE);
    for (let c = 0; c < cycles; c++) {
      const flip = c % 2 === 1;
      for (const d of PATTERN) {
        const y = START + c * CYCLE + d.y + (flip ? 60 : 0);
        if (y > height) continue;
        all.push({ ...d, y, side: flip ? (d.side === "left" ? "right" : "left") : d.side });
      }
    }
    return all.map((d) => ({ ...d, size: Math.round(d.size * scale) }));
  }, [height, scale]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ ["--hero-h" as string]: "clamp(600px, calc(100svh - 100px), 700px)" } as CSSProperties}
    >
      {discs.map((d, i) => (
        <span
          key={i}
          className="bokeh-disc"
          style={
            {
              top: d.y,
              [d.side]: d.x,
              width: d.size,
              height: d.size,
              background: d.color,
              filter: `blur(${d.blur}px)`,
              // slow, desynchronised drift (deterministic per disc)
              "--dx": `${((i * 37) % 29) - 14}px`,
              "--dy": `${((i * 53) % 37) - 18}px`,
              "--dur": `${18 + ((i * 7) % 10)}s`,
              animationDelay: `${-((i * 5.3) % 20)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}