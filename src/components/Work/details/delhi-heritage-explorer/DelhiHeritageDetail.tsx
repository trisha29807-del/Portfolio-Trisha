import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToTarget } from "@/lib/smoothScroll";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Trophy,
  MapPin,
  Palette,
  Landmark,
  Database,
  Cpu,
  Search,
} from "lucide-react";
import {
  dheHero,
  team,
  challenge,
  idea,
  exploreDelhi,
  heritageDetail,
  aiGuide,
  personalize,
  artisanConnect,
  underTheHood,
  hackathon,
  whatILearned,
  futureEnhancements,
  dheScreens,
} from "@/data/delhiHeritageExplorer";

const NAV_SECTIONS = [
  { id: "dhe-overview", label: "Overview" },
  { id: "dhe-problem", label: "Problem" },
  { id: "dhe-experience", label: "Experience" },
  { id: "dhe-tech", label: "Tech" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-[1.5rem] leading-none text-day-burgundy/70 dark:text-night-burgundy/70">
        {number}
      </span>
      <span className="h-px w-8 bg-day-border dark:bg-night-border" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-day-burgundy dark:text-night-burgundy">
        {title}
      </span>
    </div>
  );
}

function ProductScreenshot({
  src,
  label,
  title,
  caption,
  priority = false,
}: {
  src: string;
  label: string;
  title: string;
  caption: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-[2px] border border-day-border bg-day-surface shadow-[0_24px_60px_-36px_rgba(20,10,8,0.45)] dark:border-night-border dark:bg-night-surface dark:shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]">
        {!failed ? (
          <img
            src={src}
            alt={title}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            className="block h-auto w-full"
          />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center p-8 text-center">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-day-burgundy dark:text-night-burgundy">
                Screenshot asset
              </div>
              <p className="mt-2 font-serif text-xl text-day-ink dark:text-night-ink">
                {src}
              </p>
              <p className="mx-auto mt-2 max-w-md text-[12px] leading-relaxed text-day-muted dark:text-night-muted">
                Add the corresponding live-project screenshot to this path. The case study is intentionally wired to real product captures rather than recreated UI.
              </p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr]">
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-day-burgundy dark:text-night-burgundy">
          {label}
        </span>
        <div>
          <h4 className="font-serif text-[20px] leading-tight text-day-ink dark:text-night-ink">
            {title}
          </h4>
          <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-day-muted dark:text-night-muted">
            {caption}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function FeatureList({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="mt-7 grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <div key={item.title} className="border-t border-day-border pt-4 dark:border-night-border">
          <div className="flex items-center gap-2">
            <span className="font-serif text-[18px] text-day-burgundy dark:text-night-burgundy">
              0{index + 1}
            </span>
            <span className="text-[13px] font-semibold text-day-ink dark:text-night-ink">
              {item.title}
            </span>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-day-muted dark:text-night-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function DelhiHeritageDetail() {
  const [activeSection, setActiveSection] = useState(NAV_SECTIONS[0].id);

  useEffect(() => {
    const els = NAV_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    scrollToTarget(id);
  };

  return (
    <div className="text-day-ink dark:text-night-ink">
      <div className="sticky top-[52px] z-10 -mx-6 mb-12 overflow-x-auto border-b border-day-border bg-day-bg/95 px-6 py-3 backdrop-blur-sm dark:border-night-border dark:bg-night-bg/95">
        <div className="flex min-w-max gap-6">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className={
                "whitespace-nowrap text-[10px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 " +
                (activeSection === section.id
                  ? "text-day-burgundy dark:text-night-burgundy"
                  : "text-day-muted hover:text-day-ink dark:text-night-muted dark:hover:text-night-ink")
              }
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <section id="dhe-overview" className="scroll-mt-32 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="01" title="Overview" />
        </motion.div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="max-w-xl font-serif text-[clamp(1.2rem,1.8vw,1.45rem)] leading-[1.3] text-day-ink dark:text-night-ink"
            >
              An AI-powered platform for exploring Delhi's heritage, culture, and local experiences.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4"
            >
              {dheHero.meta.map((item) => (
                <div key={item.label}>
                  <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[12px] text-day-ink dark:text-night-ink">
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="mt-5 flex flex-wrap gap-2"
            >
              {dheHero.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-day-border px-2.5 py-1 text-[10px] font-medium text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.25}
              variants={fadeUp}
              className="mt-5 flex flex-wrap gap-2.5"
            >
              <a
                href={dheHero.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-day-burgundy px-4 py-2.5 text-[10px] font-medium tracking-[0.12em] uppercase text-day-bg dark:bg-night-burgundy dark:text-night-bg"
              >
                View Live Project <ExternalLink size={13} strokeWidth={1.75} />
              </a>
              <a
                href={dheHero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-day-ink/70 px-4 py-2.5 text-[10px] font-medium tracking-[0.12em] uppercase text-day-ink dark:border-night-ink/60 dark:text-night-ink"
              >
                View GitHub <Github size={13} strokeWidth={1.75} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
            className="mx-auto w-full max-w-[760px]"
          >
            <ProductScreenshot {...dheScreens.home} priority />
          </motion.div>
        </div>
      </section>

      <section id="dhe-problem" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="02" title="The Problem" />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-serif text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.1]">
            {challenge.statement}
          </motion.h3>
          <div>
            <p className="text-[14px] leading-relaxed text-day-muted dark:text-night-muted">{challenge.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {challenge.pillars.map((pillar) => (
                <span key={pillar} className="rounded-full border border-day-border px-3 py-1.5 text-[11px] dark:border-night-border">
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dhe-experience" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="03" title="The Experience" />
        <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
          A single product flow combining discovery, contextual place information, AI assistance and personalized exploration.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <ProductScreenshot {...dheScreens.explore} />
          <ProductScreenshot {...dheScreens.detail} />
          <ProductScreenshot {...dheScreens.guide} />
          <ProductScreenshot {...dheScreens.recommendations} />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="border-t border-day-border pt-4 dark:border-night-border">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">Explore</span>
            <p className="mt-2 text-[13px] text-day-muted dark:text-night-muted">{exploreDelhi.body}</p>
          </div>
          <div className="border-t border-day-border pt-4 dark:border-night-border">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">AI + Personalization</span>
            <p className="mt-2 text-[13px] text-day-muted dark:text-night-muted">{aiGuide.body}</p>
          </div>
          <div className="border-t border-day-border pt-4 dark:border-night-border">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">Recommendations</span>
            <p className="mt-2 text-[13px] text-day-muted dark:text-night-muted">{personalize.recommendations.description}</p>
          </div>
        </div>
      </section>

      <section id="dhe-tech" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="04" title="How I Built It" />
        <div className="mt-8 flex flex-wrap gap-3">
          {underTheHood.layers.map((layer) => (
            <span key={layer.label} className="rounded-full border border-day-border px-4 py-2 text-[12px] font-medium dark:border-night-border">
              {layer.value}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
          {underTheHood.detail}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Gemini"].map((tech) => (
            <span key={tech} className="rounded-full border border-day-border px-3 py-1.5 text-[11px] dark:border-night-border">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
