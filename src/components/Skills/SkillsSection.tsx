import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, BrainCircuit, Code2, Layers, Smartphone, Palette } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";
import { SkillPanel } from "./SkillPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

const icons = [Globe, BrainCircuit, Code2, Layers, Smartphone, Palette];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#050D32] text-white transition-colors duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] dark:bg-[#050D32] dark:text-white"
    >
      {/* oversized background typography — centered behind the panel grid, integrated rather than corner-cropped */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 top-[22%] flex justify-center"
      >
        <span className="select-none font-seasons text-[30rem] leading-none text-white/[0.04] dark:text-white/[0.04] sm:text-[38rem]">
          04
        </span>
      </motion.div>

      <div className="container-editorial relative pt-7 sm:pt-9">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
            04
          </span>
          <h2 className="mt-4 font-boldfat text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-white dark:text-white">
            Skills
          </h2>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            The tools behind what I build.
          </p>
        </motion.div>

        <div className="mt-5 sm:mt-6">
          <AnimatedDivider />
        </div>

        {/* Panel grid — 3x2 desktop, 2x3 tablet, 1x6 mobile.
            items-start lets each panel keep its own natural height, so
            AI & ML (more tags) and the CS list panel read taller than
            their neighbours instead of being stretched to match. */}
        <div className="grid grid-cols-1 items-start gap-5 py-9 sm:grid-cols-2 sm:py-12 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillPanel
              key={category.number}
              category={category}
              icon={icons[i]}
              delay={0.08 * i}
            />
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        initial="hidden"
        whileInView="show"
        custom={0.15}
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={fadeUp}
        className="container-editorial relative pb-6 pt-2 text-center sm:pb-8"
      >
        <p className="mx-auto max-w-xl font-seasons text-[clamp(1.25rem,2.4vw,1.75rem)] italic leading-relaxed text-white dark:text-white">
          Tools matter.
          <br />
          What you build with them matters more.
        </p>
      </motion.div>
    </section>
  );
}
