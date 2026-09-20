import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, ExternalLink, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { TechPill } from "./TechPill";

interface ProjectRowProps {
  project: Project;
  mockup: ReactNode;
  /** Optional expanded/detailed breakdown — only a couple of projects have one. */
  detail?: ReactNode;
}

export function ProjectRow({ project, mockup, detail }: ProjectRowProps) {
  const isImageLeft = project.imageSide === "left";
  const [expanded, setExpanded] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  // tasteful, barely-there parallax — a few px of drift, not a slide
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  const primaryHref = project.primaryCta?.href ?? project.caseStudyUrl ?? "#";
  const primaryLabel = project.primaryCta?.label ?? "View Case Study";
  const primaryExternal = project.primaryCta?.external ?? false;
  const githubLabel = project.githubLabel ?? "GitHub";

  const mockupBlock = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      style={{ y: parallaxY }}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(20,10,8,0.35)] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
    >
      <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.02]">
        {mockup}
      </div>
    </motion.div>
  );

  const contentBlock = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
      className="relative flex flex-col justify-center"
    >
      {/* decorative oversized number, faded into the background, sitting on the row's outer margin */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-10 select-none font-seasons text-[7rem] leading-none text-white/[0.06] transition-opacity duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:text-white/[0.04] sm:text-[9rem] dark:text-white/[0.07] dark:group-hover:text-white/[0.05] ${
          isImageLeft ? "right-0 lg:-right-2" : "left-0 lg:-left-2"
        }`}
      >
        {project.number}
      </span>

      <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
        <span>Project {project.number}</span>
        <span className="h-1 w-1 rotate-45 bg-current opacity-60" />
        <span className="text-[#AEBEDE] dark:text-[#AEBEDE]">
          {project.category}
        </span>
      </div>

      <h3 className="mt-3 font-boldfat text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
        {project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/80 dark:text-white/80">
          {project.metrics.map((m, i) => (
            <span key={m.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="h-1 w-1 rotate-45 bg-[#7FDFFF]/50 dark:bg-[#7FDFFF]/50" />
              )}
              <span className="font-semibold text-[#B9B7FF] dark:text-[#B9B7FF]">
                {m.value}
              </span>
              <span className="text-[#AEBEDE] dark:text-[#AEBEDE]">
                {m.label}
              </span>
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {project.primaryCta?.action === "toggle-detail" ? (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 bg-[#7FDFFF] px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-[#7FDFFF] dark:text-night-bg dark:hover:shadow-[0_10px_24px_-8px_rgba(199,73,92,0.35)]"
          >
            {primaryLabel}
            <ArrowRight
              size={14}
              strokeWidth={1.75}
              className={`transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${expanded ? "rotate-90" : ""}`}
            />
          </button>
        ) : (
          <a
            href={primaryHref}
            {...(primaryExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 bg-[#7FDFFF] px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-[#7FDFFF] dark:text-night-bg dark:hover:shadow-[0_10px_24px_-8px_rgba(199,73,92,0.35)]"
          >
            {primaryLabel}
            <ArrowRight size={14} strokeWidth={1.75} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            {...(project.githubLabel ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 border border-white/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-white transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-px hover:bg-white hover:text-day-bg dark:border-white/60 dark:text-white dark:hover:bg-white dark:hover:text-night-bg"
          >
            {githubLabel}
            <Github size={14} strokeWidth={1.75} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-white transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-px hover:bg-white hover:text-day-bg dark:border-white/60 dark:text-white dark:hover:bg-white dark:hover:text-night-bg"
          >
            Live Demo
            <ExternalLink size={14} strokeWidth={1.75} />
          </a>
        )}
      </div>

      {detail && project.primaryCta?.action !== "toggle-detail" && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.08em] uppercase text-[#AEBEDE] transition-colors duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:text-[#B9B7FF] dark:text-[#AEBEDE] dark:hover:text-[#B9B7FF]"
          >
            {expanded ? "Hide Full Breakdown" : "Explore Full Breakdown"}
            <ChevronDown
              size={14}
              strokeWidth={1.75}
              className={`transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </motion.div>
  );

  return (
    <div
      ref={rowRef}
      id={project.slug}
      className="group scroll-mt-24 border-t border-[#294777] py-16 transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] first:border-t-0 hover:border-[\#B9B7FF]/25 dark:border-[#294777] dark:hover:border-[\#B9B7FF]/25 sm:py-20"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
            {mockupBlock}
          </div>
          <div className={isImageLeft ? "lg:order-2" : "lg:order-1"}>
            {contentBlock}
          </div>
        </div>

        {detail && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-12 border-t border-[#294777] pt-12 dark:border-[#294777]">
                  {detail}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
