import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  { id: "dhe-challenge", label: "Challenge" },
  { id: "dhe-idea", label: "Idea" },
  { id: "dhe-explore", label: "Explore" },
  { id: "dhe-detail", label: "Place Detail" },
  { id: "dhe-ai-guide", label: "AI Guide" },
  { id: "dhe-recommendations", label: "Recommendations" },
  { id: "dhe-quiz", label: "Quiz" },
  { id: "dhe-artisans", label: "Artisans" },
  { id: "dhe-tech", label: "Tech" },
  { id: "dhe-hackathon", label: "Hackathon" },
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
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            <p className="max-w-2xl font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] text-day-ink dark:text-night-ink">
              {dheHero.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.18}
            variants={fadeUp}
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-1">
              {dheHero.meta.map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[13px] text-day-ink dark:text-night-ink">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="mt-7 flex flex-wrap gap-2"
        >
          {dheHero.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-day-border px-3.5 py-1.5 text-[11px] font-medium text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
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
          className="mt-7 flex flex-wrap gap-3"
        >
          <a
            href={dheHero.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all hover:-translate-y-px dark:bg-night-burgundy dark:text-night-bg"
          >
            View Live Project <ExternalLink size={14} strokeWidth={1.75} />
          </a>
          <a
            href={dheHero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-day-ink/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-ink transition-all hover:-translate-y-px hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg"
          >
            View GitHub <Github size={14} strokeWidth={1.75} />
          </a>
        </motion.div>

        <ProductScreenshot {...dheScreens.home} priority />
      </section>

      <section id="dhe-challenge" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="02" title="The Challenge" />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]"
          >
            {challenge.statement}
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            <p className="text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {challenge.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {challenge.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-day-border px-3.5 py-1.5 text-[11px] font-medium dark:border-night-border"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="dhe-idea" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="03" title="The Idea" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <p className="max-w-2xl text-[15px] leading-relaxed text-day-muted dark:text-night-muted">
            {idea.body}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2">
            {idea.pillars.map((pillar, index) => (
              <div
                key={pillar}
                className="border-t border-day-border pt-3 dark:border-night-border"
              >
                <span className="font-serif text-[22px] text-day-burgundy dark:text-night-burgundy">
                  0{index + 1}
                </span>
                <div className="mt-1 text-[12px] font-medium">{pillar}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dhe-explore" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="04" title="Explore Delhi" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Search size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              A visual directory for Delhi's heritage
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {exploreDelhi.body}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {exploreDelhi.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-day-burgundy/70 dark:bg-night-burgundy/70" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ProductScreenshot {...dheScreens.explore} />
        </div>
      </section>

      <section id="dhe-detail" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="05" title="Place Detail" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
              From discovery to context.
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {heritageDetail.body}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {heritageDetail.points.map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-[12.5px]">
                  <MapPin size={14} strokeWidth={1.7} className="text-day-burgundy dark:text-night-burgundy" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <ProductScreenshot {...dheScreens.detail} />
        </div>
      </section>

      <section id="dhe-ai-guide" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="06" title="AI Heritage Guide" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Sparkles size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              Ask Delhi anything.
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {aiGuide.body}
            </p>
            <FeatureList items={aiGuide.features} />
          </div>
          <ProductScreenshot {...dheScreens.guide} />
        </div>
      </section>

      <section id="dhe-recommendations" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="07" title="Smart Recommendations" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
              Personalized trails, not just places.
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {personalize.recommendations.description}
            </p>
            <div className="mt-6 rounded-sm border border-day-border p-4 dark:border-night-border">
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">
                Flow
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
                {["Choose an area", "Generate Trail", "Personalized route"].map((step, index) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="rounded-full border border-day-border px-3 py-1.5 dark:border-night-border">
                      {step}
                    </span>
                    {index < 2 && <ArrowRight size={12} />}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ProductScreenshot {...dheScreens.recommendations} />
        </div>
      </section>

      <section id="dhe-quiz" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="08" title="Heritage Quiz" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Trophy size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              Turn heritage into something you can play with.
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {personalize.quiz.description}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["XP", "Daily Challenge", "Badges", "Streaks"].map((item) => (
                <div key={item} className="border-t border-day-border pt-3 dark:border-night-border">
                  <span className="text-[12px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <ProductScreenshot {...dheScreens.quiz} />
        </div>
      </section>

      <section id="dhe-artisans" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="09" title="Connect with Local Culture" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Palette size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              Heritage doesn't end at monuments.
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {artisanConnect.body}
            </p>
            <p className="mt-4 text-[12.5px] italic leading-relaxed text-day-muted/80 dark:text-night-muted/80">
              {artisanConnect.note}
            </p>
          </div>
          <ProductScreenshot {...dheScreens.artisans} />
        </div>
      </section>

      <section id="dhe-tech" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="10" title="Under the Hood" />
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            {underTheHood.layers.map((layer, index) => (
              <div key={layer.label} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-day-border px-4 py-2 text-[12px] font-medium dark:border-night-border">
                  {index === 0 && <Landmark size={14} className="text-day-burgundy dark:text-night-burgundy" />}
                  {index === 1 && <Palette size={14} className="text-day-burgundy dark:text-night-burgundy" />}
                  {index === 2 && <Database size={14} className="text-day-burgundy dark:text-night-burgundy" />}
                  {index === 3 && <Cpu size={14} className="text-day-burgundy dark:text-night-burgundy" />}
                  {layer.value}
                </span>
                {index < underTheHood.layers.length - 1 && (
                  <span className="text-day-muted dark:text-night-muted">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
            {underTheHood.detail}
          </p>
        </div>
      </section>

      <section id="dhe-hackathon" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="11" title="Hackathon Journey" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="text-[12px] italic text-day-burgundy dark:text-night-burgundy">
              {hackathon.event}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Landmark size={24} strokeWidth={1.5} className="text-day-burgundy dark:text-night-burgundy" />
              <span className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none">
                {hackathon.result}
              </span>
            </div>
          </div>
          <div>
            <p className="max-w-2xl text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
              {hackathon.body}
            </p>
            <p className="mt-4 text-[12px] text-day-muted/80 dark:text-night-muted/80">
              Team: {team.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section id="dhe-learned" className="border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="12" title="What I Learned" />
        <ul className="mt-7 grid gap-4 sm:grid-cols-3">
          {whatILearned.map((learning, index) => (
            <li
              key={learning}
              className="border-t border-day-border pt-4 text-[13px] leading-relaxed text-day-ink/85 dark:border-night-border dark:text-night-ink/85"
            >
              <span className="font-serif text-[22px] text-day-burgundy dark:text-night-burgundy">
                0{index + 1}
              </span>
              <p className="mt-2">{learning}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-3xl border border-dashed border-day-border p-5 dark:border-night-border">
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-day-muted dark:text-night-muted">
            On the roadmap, not yet built
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-day-muted dark:text-night-muted">
            {futureEnhancements.join(" · ")}
          </p>
        </div>
      </section>

      <div className="border-t border-day-border py-16 text-center dark:border-night-border">
        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-day-burgundy dark:text-night-burgundy">
          Delhi Heritage Explorer
        </div>
        <p className="mt-3 font-serif text-[clamp(1.5rem,3vw,2rem)] italic">
          See the experience in action.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={dheHero.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg dark:bg-night-burgundy dark:text-night-bg"
          >
            Live Project <ExternalLink size={14} strokeWidth={1.75} />
          </a>
          <a
            href={dheHero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-day-ink/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-ink hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg"
          >
            GitHub <Github size={14} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </div>
  );
}
