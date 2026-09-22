import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollToTarget } from "@/lib/smoothScroll";
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
  { id: "fb-overview", label: "Overview" },
  { id: "fb-problem", label: "Problem" },
  { id: "fb-app", label: "The App" },
  { id: "fb-how", label: "How It Works" },
  { id: "fb-built", label: "What I Built" },
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
    scrollToTarget(id);
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

      <section id="fb-problem" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="02" title="The Problem" />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase">The Reality</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {problem.realityPoints.map((point) => (
                <li key={point} className="flex gap-2.5 text-[13.5px] leading-relaxed text-day-muted dark:text-night-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-day-burgundy/60 dark:bg-night-burgundy/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase">The Solution</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {problem.solutionPoints.map((point) => (
                <li key={point} className="flex gap-2.5 text-[13.5px] leading-relaxed text-day-muted dark:text-night-muted">
                  <span className="text-day-burgundy dark:text-night-burgundy">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="fb-app" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="03" title="The App" />
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {appScreens.slice(0, 4).map((screen, index) => (
            <motion.div key={screen.key} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.06 * index} variants={fadeUp}>
              <div className="overflow-hidden rounded-xl border border-day-border dark:border-night-border">
                <img src={screenImages[screen.key]} alt={`FoodBridge ${screen.label} screen`} className="w-full" />
              </div>
              <div className="mt-2 text-[10px] font-semibold tracking-[0.1em] uppercase text-day-burgundy dark:text-night-burgundy">{screen.label}</div>
              <p className="mt-1 text-[12px] leading-snug text-day-muted dark:text-night-muted">{screen.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="fb-how" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="04" title="How It Works" />
        <div className="mt-8 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {workflow.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-[11px] font-semibold tracking-[0.1em] text-day-burgundy dark:text-night-burgundy">{step.number}</div>
              <div className="mt-2 text-[13px] font-semibold">{step.label}</div>
              <p className="mt-1 text-[11.5px] leading-relaxed text-day-muted dark:text-night-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fb-built" className="scroll-mt-32 border-t border-day-border py-16 dark:border-night-border">
        <SectionLabel number="05" title="What I Built" />
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <p className="max-w-2xl text-[14px] leading-relaxed text-day-muted dark:text-night-muted">
            Built core parts of FoodBridge Connect, an Android application developed with Kotlin and Firebase to connect surplus food with people and organizations who can put it to use. I worked on the Android-side implementation, translating the product flow into functional screens and integrating Firebase-backed functionality.
          </p>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-day-burgundy dark:text-night-burgundy">Tech</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-day-border px-3 py-1.5 text-[11px] dark:border-night-border">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
