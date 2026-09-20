import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { SkillCategory } from "@/data/skills";

interface SkillPanelProps {
  category: SkillCategory;
  icon: LucideIcon;
  delay?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

const tagFade = {
  hidden: { opacity: 0, y: 6 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function SkillPanel({ category, icon: Icon, delay = 0 }: SkillPanelProps) {
  const [activeContext, setActiveContext] = useState<string | null>(null);
  const isList = category.variant === "list";

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      custom={delay}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      onMouseLeave={() => setActiveContext(null)}
      className="group flex h-full flex-col rounded-lg border border-day-border bg-day-bg/60 p-6 transition-all duration-300 ease-editorial hover:-translate-y-[3px] hover:border-day-burgundy/40 hover:shadow-[0_16px_36px_-20px_rgba(122,22,38,0.22)] dark:border-night-border dark:bg-night-bg/40 dark:hover:border-night-burgundy/40 dark:hover:shadow-[0_16px_36px_-20px_rgba(199,73,92,0.22)]"
    >
      {/* header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-day-burgundy transition-[letter-spacing] duration-300 ease-editorial group-hover:tracking-[0.26em] dark:text-night-burgundy">
            {category.number} — {category.label}
          </span>
          <div className="mt-2 h-px w-6 bg-day-burgundy/50 dark:bg-night-burgundy/50" />
        </div>
        <Icon
          size={19}
          strokeWidth={1.5}
          className="shrink-0 text-day-ink/25 transition-colors duration-300 ease-editorial group-hover:text-day-burgundy/50 dark:text-night-ink/25 dark:group-hover:text-night-burgundy/50"
        />
      </div>

      {/* skills */}
      {isList ? (
        <div className="mt-5 flex flex-col">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={delay + 0.05 * i}
              variants={tagFade}
              onMouseEnter={() => skill.context && setActiveContext(skill.context)}
              className={`border-b border-day-border py-3 text-[14px] text-day-ink transition-colors duration-200 ease-editorial first:pt-0 last:border-b-0 dark:border-night-border dark:text-night-ink ${
                skill.context
                  ? "cursor-default hover:text-day-burgundy dark:hover:text-night-burgundy"
                  : ""
              }`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              custom={delay + 0.04 * i}
              variants={tagFade}
              onMouseEnter={() => skill.context && setActiveContext(skill.context)}
              className={`rounded-md border px-3.5 py-2 text-[13.5px] font-medium transition-all duration-200 ease-editorial ${
                skill.context
                  ? "cursor-default border-day-border text-day-ink hover:-translate-y-0.5 hover:border-day-burgundy/45 hover:bg-day-burgundy/[0.07] dark:border-night-border dark:text-night-ink dark:hover:border-night-burgundy/45 dark:hover:bg-night-burgundy/[0.09]"
                  : "border-day-border/70 text-day-ink/85 hover:-translate-y-0.5 hover:border-day-burgundy/30 hover:bg-day-burgundy/[0.04] dark:border-night-border/70 dark:text-night-ink/85 dark:hover:border-night-burgundy/30 dark:hover:bg-night-burgundy/[0.06]"
              }`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      )}

      {/* reserved context slot */}
      <AnimatePresence mode="wait">
        {activeContext && (
          <motion.div
            key={activeContext}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex items-center gap-2 rounded-md border border-day-border/70 bg-day-bg px-3 py-2 text-[12.5px] text-day-muted dark:border-night-border/70 dark:bg-night-bg dark:text-night-muted">
              <span className="h-1 w-1 shrink-0 rounded-full bg-day-burgundy dark:bg-night-burgundy" />
              {activeContext}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
