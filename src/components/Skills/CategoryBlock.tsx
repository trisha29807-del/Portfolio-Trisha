import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";
import { SkillTerm } from "./SkillTerm";

interface CategoryBlockProps {
  category: SkillCategory;
  delay?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function CategoryBlock({ category, delay = 0 }: CategoryBlockProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      custom={delay}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
    >
      <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-day-burgundy dark:text-night-burgundy">
        {category.number} — {category.label}
      </span>
      <p className="mt-4 max-w-md text-[15px] leading-[2] text-day-ink dark:text-night-ink">
        {category.skills.map((skill, i) => (
          <span key={skill.name}>
            <SkillTerm skill={skill} />
            {i < category.skills.length - 1 && (
              <span className="mx-2 text-day-muted/60 dark:text-night-muted/60">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </motion.div>
  );
}
