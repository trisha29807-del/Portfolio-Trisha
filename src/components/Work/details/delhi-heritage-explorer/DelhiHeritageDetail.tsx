import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  Send,
  Sparkles,
  Trophy,
  Flame,
  MapPin,
  Palette,
  Landmark,
  CheckCircle2,
  Smartphone,
  Database,
  Cpu,
} from "lucide-react";
import {
  dheHero,
  team,
  challenge,
  idea,
  heritageSpots,
  exploreDelhi,
  aiGuide,
  personalize,
  artisanConnect,
  underTheHood,
  hackathon,
  whatILearned,
  futureEnhancements,
} from "@/data/delhiHeritageExplorer";

const NAV_SECTIONS = [
  { id: "dhe-overview", label: "Overview" },
  { id: "dhe-challenge", label: "Challenge" },
  { id: "dhe-explore", label: "Experience" },
  { id: "dhe-ai-guide", label: "AI Guide" },
  { id: "dhe-personalize", label: "Personalization" },
  { id: "dhe-tech", label: "Tech" },
  { id: "dhe-hackathon", label: "Hackathon" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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
      <span className="h-px max-w-8 flex-1 bg-day-border dark:bg-night-border" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-day-burgundy dark:text-night-burgundy">
        {title}
      </span>
    </div>
  );
}

const categoryStyles: Record<string, string> = {
  Mughal: "border-day-burgundy/40 text-day-burgundy dark:border-night-burgundy/40 dark:text-night-burgundy",
  Ancient: "border-day-border text-day-ink/70 dark:border-night-border dark:text-night-ink/70",
  Colonial: "border-day-border text-day-ink/70 dark:border-night-border dark:text-night-ink/70",
  Culture: "border-day-border text-day-ink/70 dark:border-night-border dark:text-night-ink/70",
  Food: "border-day-border text-day-ink/70 dark:border-night-border dark:text-night-ink/70",
};

/** Faithful recreation of the real Explore directory UI — spot cards with category + metro info. */
function ExploreRecreation() {
  return (
    <div className="rounded-xl border border-day-border bg-day-bg p-5 dark:border-night-border dark:bg-night-bg">
      <div className="flex items-center gap-2 rounded-lg border border-day-border px-3 py-2 text-[13px] text-day-muted dark:border-night-border dark:text-night-muted">
        <Search size={14} strokeWidth={1.75} />
        Search heritage spots…
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["All", "Mughal", "Ancient", "Colonial", "Culture", "Food"].map((c, i) => (
          <span
            key={c}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
              i === 0
                ? "border-day-burgundy bg-day-burgundy text-day-bg dark:border-night-burgundy dark:bg-night-burgundy dark:text-night-bg"
                : "border-day-border text-day-muted dark:border-night-border dark:text-night-muted"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {heritageSpots.slice(0, 6).map((spot) => (
          <div
            key={spot.name}
            className="rounded-lg border border-day-border p-2.5 dark:border-night-border"
          >
            <span
              className={`inline-block rounded-full border px-2 py-0.5 text-[9px] font-medium ${categoryStyles[spot.category]}`}
            >
              {spot.category}
            </span>
            <div className="mt-1.5 text-[12.5px] font-medium text-day-ink dark:text-night-ink">
              {spot.name}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-[10.5px] text-day-muted dark:text-night-muted">
              <MapPin size={10} strokeWidth={1.75} />
              {spot.metro}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Faithful recreation of the AI Heritage Guide chat interface. */
function ChatRecreation() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-day-border bg-day-bg dark:border-night-border dark:bg-night-bg">
      <div className="flex items-center gap-2 border-b border-day-border px-4 py-3 dark:border-night-border">
        <Sparkles size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
        <span className="text-[13px] font-semibold text-day-ink dark:text-night-ink">AI Heritage Guide</span>
        <span className="ml-auto rounded-full border border-day-border px-2 py-0.5 text-[10px] text-day-muted dark:border-night-border dark:text-night-muted">
          EN
        </span>
      </div>
      <div className="flex-1 space-y-3 p-4">
        <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-day-surface px-3 py-2 text-[12.5px] leading-snug text-day-ink dark:bg-night-surface dark:text-night-ink">
          Namaste! I'm your AI Heritage Guide. Ask me anything about Delhi's monuments, history, or culture.
        </div>
        <div className="ml-auto max-w-[75%] rounded-lg rounded-tr-sm bg-day-burgundy px-3 py-2 text-[12.5px] text-day-bg dark:bg-night-burgundy dark:text-night-bg">
          Tell me about Humayun's Tomb
        </div>
        <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-day-surface px-3 py-2 text-[12.5px] leading-snug text-day-ink dark:bg-night-surface dark:text-night-ink">
          Humayun's Tomb is a UNESCO World Heritage Site and the final resting place of Emperor Humayun. Built in 1565 by his wife, it's a fine example of Mughal architecture…
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-day-border p-3 dark:border-night-border">
        <div className="flex-1 rounded-full border border-day-border px-3 py-1.5 text-[12px] text-day-muted dark:border-night-border dark:text-night-muted">
          Ask me anything…
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-day-burgundy text-day-bg dark:bg-night-burgundy dark:text-night-bg">
          <Send size={12} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

/** Faithful recreation of one Heritage Quiz question card. */
function QuizRecreation() {
  return (
    <div className="rounded-xl border border-day-border bg-day-bg p-5 dark:border-night-border dark:bg-night-bg">
      <div className="flex items-center justify-between text-[11px] text-day-muted dark:text-night-muted">
        <span>Question 3 of 11</span>
        <span className="flex items-center gap-1 text-day-burgundy dark:text-night-burgundy">
          <Flame size={12} strokeWidth={1.75} /> Streak: 2
        </span>
      </div>
      <p className="mt-3 text-[14.5px] font-medium text-day-ink dark:text-night-ink">
        Which Mughal emperor built the Red Fort?
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"].map((opt, i) => (
          <div
            key={opt}
            className={`rounded-lg border px-3 py-2 text-[13px] ${
              i === 1
                ? "border-day-burgundy bg-day-burgundy/[0.06] text-day-burgundy dark:border-night-burgundy dark:bg-night-burgundy/[0.08] dark:text-night-burgundy"
                : "border-day-border text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
            }`}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Faithful recreation of the Smart Recommendations output. */
function RecommendRecreation() {
  return (
    <div className="rounded-xl border border-day-border bg-day-bg p-5 dark:border-night-border dark:bg-night-bg">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-day-ink dark:text-night-ink">
        <Sparkles size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
        Your Mughal Delhi Morning
      </div>
      <p className="mt-1 text-[11.5px] text-day-muted dark:text-night-muted">
        3 hours · Old Delhi · Mughal &amp; Culture
      </p>
      <ol className="mt-3 flex flex-col gap-2">
        {["Jama Masjid", "Red Fort", "Chandni Chowk"].map((stop, i) => (
          <li key={stop} className="flex items-center gap-2.5 text-[13px] text-day-ink dark:text-night-ink">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-day-burgundy/40 text-[10px] text-day-burgundy dark:border-night-burgundy/40 dark:text-night-burgundy">
              {i + 1}
            </span>
            {stop}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Faithful recreation of an Artisan Connect listing. */
function ArtisanRecreation() {
  return (
    <div className="rounded-xl border border-day-border bg-day-bg p-5 dark:border-night-border dark:bg-night-bg">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-day-border text-day-burgundy dark:border-night-border dark:text-night-burgundy">
          <Palette size={16} strokeWidth={1.75} />
        </span>
        <div>
          <div className="text-[13.5px] font-semibold text-day-ink dark:text-night-ink">
            Zardozi Embroidery Artisan
          </div>
          <div className="text-[11.5px] text-day-muted dark:text-night-muted">Chandni Chowk · ★ 4.8</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["10:00 AM", "1:00 PM", "4:00 PM"].map((slot, i) => (
          <span
            key={slot}
            className={`rounded-md border px-2.5 py-1 text-[11.5px] ${
              i === 0
                ? "border-day-burgundy bg-day-burgundy text-day-bg dark:border-night-burgundy dark:bg-night-burgundy dark:text-night-bg"
                : "border-day-border text-day-ink/70 dark:border-night-border dark:text-night-ink/70"
            }`}
          >
            {slot}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DelhiHeritageDetail() {
  const [activeSection, setActiveSection] = useState(NAV_SECTIONS[0].id);

  useEffect(() => {
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="text-day-ink dark:text-night-ink">
      {/* A note on the visuals used throughout this case study */}
      <div className="mb-8 rounded-md border border-dashed border-day-border bg-day-surface/40 px-4 py-3 text-[12px] leading-relaxed text-day-muted dark:border-night-border dark:bg-night-surface/40 dark:text-night-muted">
        The screens below are faithful recreations built directly from the project's
        actual source code and copy — not photos of the live deployment, which this
        environment can't reach directly to screenshot.{" "}
        <a
          href={dheHero.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-day-border underline-offset-2 hover:text-day-burgundy dark:hover:text-night-burgundy"
        >
          See the real thing here.
        </a>
      </div>

      {/* Sticky project navigation */}
      <div className="sticky top-[52px] z-10 -mx-6 mb-10 overflow-x-auto border-b border-day-border bg-day-bg/95 px-6 py-3 backdrop-blur-sm dark:border-night-border dark:bg-night-bg/95">
        <div className="flex min-w-max gap-6">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className={`whitespace-nowrap text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 ease-editorial ${
                activeSection === s.id
                  ? "text-day-burgundy dark:text-night-burgundy"
                  : "text-day-muted hover:text-day-ink dark:text-night-muted dark:hover:text-night-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* 01 — OVERVIEW */}
      <section id="dhe-overview" className="scroll-mt-32 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="01" title="Overview" />
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="mt-8">
          <p className="max-w-2xl text-[15px] leading-relaxed text-day-muted dark:text-night-muted">
            {dheHero.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {dheHero.meta.map((m) => (
              <div key={m.label}>
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-day-burgundy dark:text-night-burgundy">
                  {m.label}
                </div>
                <div className="mt-1 text-[14px] text-day-ink dark:text-night-ink">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {dheHero.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-day-border px-3.5 py-1.5 text-[12px] font-medium text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={dheHero.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-editorial hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-night-burgundy dark:text-night-bg"
            >
              View Live Project
              <ExternalLink size={14} strokeWidth={1.75} />
            </a>
            <a
              href={dheHero.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-day-ink/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-ink transition-all duration-300 ease-editorial hover:-translate-y-px hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg"
            >
              View GitHub
              <Github size={14} strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <ExploreRecreation />
          <div className="h-[280px]">
            <ChatRecreation />
          </div>
        </motion.div>
      </section>

      {/* 02 — THE CHALLENGE */}
      <section id="dhe-challenge" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="02" title="The Challenge" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <h3 className="font-serif text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1] text-day-ink dark:text-night-ink">
              {challenge.statement}
            </h3>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <p className="text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {challenge.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {challenge.pillars.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-day-border px-3.5 py-1.5 text-[12px] font-medium text-day-ink/70 dark:border-night-border dark:text-night-ink/70"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 — THE IDEA */}
      <section id="dhe-idea" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="03" title="The Idea" />
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="mt-6 max-w-2xl">
          <p className="text-[15px] leading-relaxed text-day-muted dark:text-night-muted">{idea.body}</p>
          <div className="mt-6 flex flex-wrap gap-6">
            {idea.pillars.map((p) => (
              <span key={p} className="font-serif text-[18px] italic text-day-burgundy dark:text-night-burgundy">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 04 — EXPLORE DELHI */}
      <section id="dhe-explore" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="04" title="Explore Delhi" />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-4 font-serif text-[19px] italic text-day-burgundy dark:text-night-burgundy"
        >
          An interactive way to discover Delhi's heritage.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={fadeUp}>
            <ExploreRecreation />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {exploreDelhi.body}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {exploreDelhi.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-day-ink dark:text-night-ink">
                  <CheckCircle2 size={14} strokeWidth={1.75} className="shrink-0 text-day-burgundy dark:text-night-burgundy" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 05 — AI HERITAGE GUIDE */}
      <section id="dhe-ai-guide" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="05" title="Your AI Heritage Guide" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="h-[300px]">
            <ChatRecreation />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {aiGuide.body}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {aiGuide.features.map((f) => (
                <div key={f.title}>
                  <div className="text-[12.5px] font-semibold uppercase tracking-wide text-day-burgundy dark:text-night-burgundy">
                    {f.title}
                  </div>
                  <div className="text-[13.5px] text-day-muted dark:text-night-muted">{f.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 06 — DISCOVER + PERSONALIZE */}
      <section id="dhe-personalize" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="06" title="Discover + Personalize" />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted"
        >
          {personalize.body}
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={fadeUp}>
            <div className="mb-3 flex items-center gap-2">
              <Trophy size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              <span className="text-[13px] font-semibold text-day-ink dark:text-night-ink">
                {personalize.quiz.title}
              </span>
            </div>
            <p className="mb-4 text-[13.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {personalize.quiz.description}
            </p>
            <QuizRecreation />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={15} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />
              <span className="text-[13px] font-semibold text-day-ink dark:text-night-ink">
                {personalize.recommendations.title}
              </span>
            </div>
            <p className="mb-4 text-[13.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {personalize.recommendations.description}
            </p>
            <RecommendRecreation />
          </motion.div>
        </div>
      </section>

      {/* 07 — ARTISAN CONNECT */}
      <section id="dhe-artisans" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="07" title="Connect with Local Culture" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
              {artisanConnect.body}
            </p>
            <p className="mt-4 text-[12.5px] italic leading-relaxed text-day-muted/80 dark:text-night-muted/80">
              {artisanConnect.note}
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <ArtisanRecreation />
          </motion.div>
        </div>
      </section>

      {/* 09 — UNDER THE HOOD */}
      <section id="dhe-tech" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="09" title="Under the Hood" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {underTheHood.layers.map((l, i) => (
            <div key={l.label} className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-day-border px-4 py-2 text-[12.5px] font-medium text-day-ink dark:border-night-border dark:text-night-ink">
                {i === 0 && <Smartphone size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {i === 1 && <Palette size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {i === 2 && <Database size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {i === 3 && <Cpu size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {l.value}
              </span>
              {i < underTheHood.layers.length - 1 && (
                <span className="text-day-muted dark:text-night-muted">→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.15}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted"
        >
          {underTheHood.detail}
        </motion.p>
      </section>

      {/* 10 — RESPONSIVE (brief) */}
      <section id="dhe-responsive" className="scroll-mt-32 border-t border-day-border py-12 dark:border-night-border">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted"
        >
          The interface is built mobile-first, with a bottom tab bar (Home, Explore, Artisans,
          Guide, Quiz) — the layout Delhi Heritage Explorer was actually designed around,
          rather than a desktop site adapted down.
        </motion.p>
      </section>

      {/* 11 — HACKATHON MOMENT */}
      <section id="dhe-hackathon" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="11" title="Hackathon Journey" />
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="mt-8">
          <div className="font-serif text-[15px] italic text-day-burgundy dark:text-night-burgundy">
            {hackathon.event}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Landmark size={22} strokeWidth={1.5} className="text-day-burgundy dark:text-night-burgundy" />
            <span className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-day-ink dark:text-night-ink">
              {hackathon.result}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
            {hackathon.body}
          </p>
          <p className="mt-3 text-[12.5px] text-day-muted/80 dark:text-night-muted/80">
            Team: {team.join(" · ")}
          </p>
        </motion.div>
      </section>

      {/* 12 — WHAT I LEARNED */}
      <section id="dhe-learned" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="12" title="What I Learned" />
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 flex max-w-2xl flex-col gap-3"
        >
          {whatILearned.map((l) => (
            <li key={l} className="flex gap-2.5 text-[14.5px] leading-relaxed text-day-ink/85 dark:text-night-ink/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-day-burgundy/70 dark:bg-night-burgundy/70" />
              {l}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="mt-8 max-w-2xl rounded-md border border-dashed border-day-border p-5 dark:border-night-border"
        >
          <div className="text-[11px] font-semibold uppercase tracking-wide text-day-muted dark:text-night-muted">
            On the roadmap, not yet built
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-day-muted dark:text-night-muted">
            {futureEnhancements.join(" · ")}
          </p>
        </motion.div>
      </section>

      {/* 13 — FINAL CTA */}
      <div className="border-t border-day-border py-16 text-center dark:border-night-border">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-day-burgundy dark:text-night-burgundy"
        >
          Explore Delhi Heritage Explorer
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.05}
          variants={fadeUp}
          className="mt-3 font-serif text-[clamp(1.5rem,3vw,2rem)] italic text-day-ink dark:text-night-ink"
        >
          See the experience in action.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.12}
          variants={fadeUp}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={dheHero.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-editorial hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-night-burgundy dark:text-night-bg"
          >
            Live Project
            <ExternalLink size={14} strokeWidth={1.75} />
          </a>
          <a
            href={dheHero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-day-ink/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-ink transition-all duration-300 ease-editorial hover:-translate-y-px hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg"
          >
            GitHub
            <Github size={14} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
