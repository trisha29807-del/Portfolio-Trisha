import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  ClipboardList,
  Search,
  HandHeart,
  MessageCircle,
  PackageCheck,
  Smartphone,
  ShieldCheck,
  Database,
  Github,
  CheckCircle2,
} from "lucide-react";
import {
  foodbridgeHero,
  problem,
  workflow,
  roles,
  appScreens,
  underTheHood,
  features,
  techStack,
} from "@/data/foodbridge";

import homeDashboard from "@/assets/foodbridge/home-dashboard.png";
import donateFood from "@/assets/foodbridge/donate-food.png";
import browseFood from "@/assets/foodbridge/browse-food.png";
import cartImg from "@/assets/foodbridge/cart.png";
import chatImg from "@/assets/foodbridge/chat.png";
import myOrders from "@/assets/foodbridge/my-orders.png";
import firebaseConsole from "@/assets/foodbridge/firebase-console.png";

const screenImages: Record<string, string> = {
  browse: browseFood,
  donate: donateFood,
  cart: cartImg,
  chat: chatImg,
  orders: myOrders,
};

const workflowIcons = [UserPlus, ClipboardList, Search, HandHeart, MessageCircle, PackageCheck];

const NAV_SECTIONS = [
  { id: "fb-overview", label: "01 Overview" },
  { id: "fb-problem", label: "02 Problem" },
  { id: "fb-how", label: "03 How It Works" },
  { id: "fb-app", label: "04 The App" },
  { id: "fb-hood", label: "05 Under the Hood" },
  { id: "fb-features", label: "06 Features" },
  { id: "fb-built", label: "07 What I Built" },
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
      <span className="h-px flex-1 max-w-8 bg-day-border dark:bg-night-border" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-day-burgundy dark:text-night-burgundy">
        {title}
      </span>
    </div>
  );
}

export function FoodBridgeDetail() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={containerRef} className="text-day-ink dark:text-night-ink">
      {/* Sticky project navigation — sits below the global navbar, never above it */}
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
      <section id="fb-overview" className="scroll-mt-32 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="01" title="Overview" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-day-ink dark:text-night-ink">
              {foodbridgeHero.title}
            </h3>
            <p className="mt-3 font-serif text-[17px] italic text-day-burgundy dark:text-night-burgundy">
              {foodbridgeHero.subtitle}
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-day-muted dark:text-night-muted">
              {foodbridgeHero.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {foodbridgeHero.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-day-border px-3.5 py-1.5 text-[12px] font-medium text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={foodbridgeHero.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-editorial hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-night-burgundy dark:text-night-bg"
            >
              View on GitHub
              <Github size={14} strokeWidth={1.75} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="flex items-end justify-center gap-4"
          >
            <img
              src={homeDashboard}
              alt="FoodBridge home dashboard screen"
              className="w-[46%] rounded-2xl border border-day-border shadow-xl dark:border-night-border"
            />
            <img
              src={browseFood}
              alt="FoodBridge browse food screen"
              className="w-[46%] translate-y-4 rounded-2xl border border-day-border shadow-xl dark:border-night-border"
            />
          </motion.div>
        </div>
      </section>

      {/* 02 — THE PROBLEM */}
      <section id="fb-problem" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="02" title="The Problem" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <h4 className="text-[13px] font-semibold uppercase tracking-wide text-day-ink dark:text-night-ink">
              The Reality
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {problem.realityPoints.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-day-burgundy/60 dark:bg-night-burgundy/60" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px] italic text-day-muted/70 dark:text-night-muted/70">
              As stated in the project's problem statement documentation.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp}>
            <h4 className="text-[13px] font-semibold uppercase tracking-wide text-day-ink dark:text-night-ink">
              The Bridge
            </h4>
            <div className="mt-4 flex items-center justify-between gap-2 text-center">
              <div className="flex-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-day-border text-[11px] font-semibold text-day-ink dark:border-night-border dark:text-night-ink">
                  Surplus
                  <br />
                  Food
                </div>
              </div>
              <span className="text-day-burgundy dark:text-night-burgundy">→</span>
              <div className="flex-1">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-day-burgundy/50 font-serif text-[11px] font-semibold text-day-burgundy dark:border-night-burgundy/50 dark:text-night-burgundy">
                  Food
                  <br />
                  Bridge
                </div>
              </div>
              <span className="text-day-burgundy dark:text-night-burgundy">→</span>
              <div className="flex-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-day-border text-[11px] font-semibold text-day-ink dark:border-night-border dark:text-night-ink">
                  People
                  <br />
                  in Need
                </div>
              </div>
            </div>

            <h4 className="mt-8 text-[13px] font-semibold uppercase tracking-wide text-day-ink dark:text-night-ink">
              The Solution
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {problem.solutionPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[14.5px] text-day-ink dark:text-night-ink">
                  <CheckCircle2 size={15} strokeWidth={1.75} className="shrink-0 text-day-burgundy dark:text-night-burgundy" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 03 — HOW IT WORKS */}
      <section id="fb-how" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="03" title="How It Works" />
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {workflow.map((step, i) => {
            const Icon = workflowIcons[i];
            return (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.05 * i}
                variants={fadeUp}
                className="group text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-day-border text-day-burgundy transition-colors duration-300 ease-editorial group-hover:border-day-burgundy/50 dark:border-night-border dark:text-night-burgundy">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="mt-3 text-[11px] font-semibold tracking-[0.1em] text-day-burgundy dark:text-night-burgundy">
                  {step.number}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-day-ink dark:text-night-ink">
                  {step.label}
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-day-muted dark:text-night-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 04 — THE APP */}
      <section id="fb-app" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="04" title="The App" />
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {appScreens.map((screen, i) => (
            <motion.div
              key={screen.key}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.06 * i}
              variants={fadeUp}
              className="group"
            >
              <div className="overflow-hidden rounded-xl border border-day-border shadow-md transition-transform duration-500 ease-editorial group-hover:scale-[1.02] dark:border-night-border">
                <img
                  src={screenImages[screen.key]}
                  alt={`FoodBridge ${screen.label} screen`}
                  className="w-full"
                />
              </div>
              <div className="mt-3 text-[11px] font-semibold tracking-[0.1em] text-day-burgundy dark:text-night-burgundy">
                {screen.number} — {screen.label.toUpperCase()}
              </div>
              <p className="mt-1 text-[12.5px] leading-snug text-day-muted dark:text-night-muted">
                {screen.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 05 — UNDER THE HOOD */}
      <section id="fb-hood" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="05" title="Under the Hood" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {underTheHood.pipeline.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-day-border px-4 py-2 text-[12.5px] font-medium text-day-ink dark:border-night-border dark:text-night-ink">
                {i === 0 && <Smartphone size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {i === 1 && <ShieldCheck size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {i >= 2 && <Database size={14} strokeWidth={1.75} className="text-day-burgundy dark:text-night-burgundy" />}
                {step}
              </span>
              {i < underTheHood.pipeline.length - 1 && (
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
          This isn't a static UI prototype — it's an implemented Android app backed by a
          real Firebase project. Below is the actual Firestore collection structure, taken
          directly from the project's own database console.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 overflow-hidden rounded-lg border border-day-border dark:border-night-border"
        >
          <img src={firebaseConsole} alt="Real Firestore console showing the FoodBridge database collections" className="w-full" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {underTheHood.collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.03 * i}
              variants={fadeUp}
              className="border-b border-day-border pb-3 dark:border-night-border"
            >
              <code className="text-[13px] font-semibold text-day-ink dark:text-night-ink">
                {c.name}
              </code>
              <div className="text-[12.5px] text-day-muted dark:text-night-muted">{c.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-day-border px-3.5 py-1.5 text-[12px] font-medium text-day-ink/80 dark:border-night-border dark:text-night-ink/80"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 06 — KEY FEATURES */}
      <section id="fb-features" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="06" title="Key Features" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.05 * i}
              variants={fadeUp}
              className="border-l-2 border-day-border pl-4 transition-colors duration-300 ease-editorial hover:border-day-burgundy/50 dark:border-night-border dark:hover:border-night-burgundy/50"
            >
              <div className="text-[14px] font-semibold text-day-ink dark:text-night-ink">
                {f.title}
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-day-muted dark:text-night-muted">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h4 className="text-[13px] font-semibold uppercase tracking-wide text-day-ink dark:text-night-ink">
            User Roles
          </h4>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {roles.map((r, i) => (
              <motion.div
                key={r.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.05 * i}
                variants={fadeUp}
              >
                <div className="text-[13.5px] font-semibold text-day-burgundy dark:text-night-burgundy">
                  {r.name}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-day-muted dark:text-night-muted">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — WHAT I BUILT */}
      <section id="fb-built" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel number="07" title="What I Built" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl rounded-lg border border-dashed border-day-border p-6 dark:border-night-border"
        >
          <p className="text-[14.5px] leading-relaxed text-day-muted dark:text-night-muted">
            FoodBridge was built as a team project for IGDTUW's Mobile Application
            Development course, developed together with three teammates using Kotlin and
            Firebase. The submitted project documentation doesn't break down individual
            contributions by team member, so this section is left open rather than
            guessing at a specific role.
          </p>
          <p className="mt-4 text-[13px] italic text-day-ink/70 dark:text-night-ink/70">
            — Placeholder: add the specific screens, features, or parts of the codebase
            you personally implemented here.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <div className="border-t border-day-border py-16 text-center dark:border-night-border">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-day-ink dark:text-night-ink"
        >
          Food should reach people,
          <br />
          not landfills.
        </motion.p>
        <motion.a
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          href={foodbridgeHero.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-editorial hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-night-burgundy dark:text-night-bg"
        >
          View on GitHub
          <Github size={14} strokeWidth={1.75} />
        </motion.a>
      </div>
    </div>
  );
}
