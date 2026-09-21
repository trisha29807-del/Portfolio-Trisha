import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

/**
 * One continuous "bokeh" layer behind the whole page.
 *
 * Circles are placed down the full height of the page (nothing is clipped at a
 * section edge) and move in three gentle ways:
 *   1. drift   – each circle wanders along its own slow, looping path
 *   2. pulse   – it slowly grows/shrinks and brightens/dims
 *   3. parallax – as you scroll, circles shift at different speeds, giving depth
 * All of it is transform/opacity only, so it stays smooth. Visitors with
 * "reduce motion" turned on get still circles.
 */

type Disc = {
  side: "left" | "right";
  x: string; // distance from that side; negative = bleeds off-screen
  y: string | number; // distance from the top of the page
  size: number; // px
  color: string;
  blur: number; // px
  anchor?: number; // page-Y at which the parallax offset is zero
};

/** The hero's own circles. Anchor 450 = they sit exactly in place when the page loads. */
const HERO_DISCS: Disc[] = [
  { side: "left", x: "-7rem", y: "-7rem", size: 288, color: "rgba(49,87,139,.55)", blur: 2, anchor: 450 },
  { side: "right", x: "-5rem", y: "-7rem", size: 288, color: "rgba(156,166,255,.55)", blur: 2, anchor: 450 },
  { side: "left", x: "-5rem", y: "calc(var(--hero-h) - 13rem)", size: 320, color: "rgba(25,60,114,.70)", blur: 18, anchor: 450 },
  { side: "right", x: "31%", y: "calc(var(--hero-h) * .23)", size: 256, color: "rgba(43,79,134,.60)", blur: 5, anchor: 450 },
  { side: "right", x: "39%", y: "calc(var(--hero-h) * .87 - 12rem)", size: 192, color: "rgba(40,78,136,.45)", blur: 10, anchor: 450 },
  { side: "right", x: "-8rem", y: "calc(var(--hero-h) - 11rem)", size: 288, color: "rgba(73,108,165,.35)", blur: 14, anchor: 450 },
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

  // Scroll parallax: publish the viewport-centre page position as a CSS variable.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty("--sy", String(Math.round(window.scrollY + window.innerHeight / 2)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const discs = useMemo(() => {
    const all: Disc[] = [...HERO_DISCS];
    const cycles = Math.ceil((height - START) / CYCLE);
    for (let c = 0; c < cycles; c++) {
      const flip = c % 2 === 1;
      for (const d of PATTERN) {
        const y = START + c * CYCLE + d.y + (flip ? 60 : 0);
        if (y > height) continue;
        all.push({ ...d, y, anchor: y + d.size / 2, side: flip ? (d.side === "left" ? "right" : "left") : d.side });
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
      {discs.map((d, i) => {
        // deterministic per-circle variation, so every circle moves differently
        const k = 0.05 + (((i * 29) % 17) / 17) * 0.16; // parallax strength
        return (
          <span
            key={i}
            className="bokeh-wrap"
            style={
              {
                top: d.y,
                [d.side]: d.x,
                width: d.size,
                height: d.size,
                "--a": d.anchor,
                "--k": i % 5 === 0 ? -k * 0.6 : k, // every 5th circle moves the other way
              } as CSSProperties
            }
          >
            <span
              className="bokeh-disc"
              style={
                {
                  background: d.color,
                  filter: `blur(${d.blur}px)`,
                  "--dx": `${(((i * 37) % 29) - 14) * 4}px`,
                  "--dy": `${(((i * 53) % 37) - 18) * 3}px`,
                  "--dur": `${16 + ((i * 7) % 15)}s`,
                  "--omin": 0.6 + ((i * 11) % 5) * 0.06,
                  animationDelay: `${-((i * 5.3) % 20)}s`,
                } as CSSProperties
              }
            />
          </span>
        );
      })}
    </div>
  );
}