import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import igdtuwLogo from "@/assets/igdtuw-logo.png";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";

const subjects = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
];

const exploring = [
  "Artificial Intelligence",
  "Large Language Models",
  "React",
  "Full Stack Development",
  "Product Design",
  "UI/UX",
];

const highlights = [
  { value: "94.4%", label: "Secondary School (Class X)" },
  { value: "93.8%", label: "Senior Secondary (Class XII)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // very subtle parallax drift on the oversized background numeral
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-day-bg text-day-ink transition-colors duration-700 ease-editorial dark:bg-night-bg dark:text-night-ink"
    >
      {/* oversized background typography — decorative, sub-4% opacity, never interferes with reading */}
      <motion.span
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-10 right-0 select-none font-serif text-[26rem] leading-none text-day-ink/[0.035] dark:text-night-ink/[0.035] sm:text-[34rem]"
      >
        03
      </motion.span>

      <div className="container-editorial relative pt-20 sm:pt-28">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy">
            03
          </span>
          <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-day-ink dark:text-night-ink">
            Education
          </h2>
          <p className="mt-5 max-w-[38ch] font-serif text-[19px] italic leading-relaxed text-day-muted dark:text-night-muted">
            Every engineer begins with curiosity.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16">
          <AnimatedDivider />
        </div>

        {/* Main composition — degree left, university right */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.1}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-day-ink dark:text-night-ink">
                Bachelor of Technology
              </h3>
              <p className="mt-1 font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic text-day-burgundy dark:text-night-burgundy">
                Computer Science Engineering
              </p>
              <p className="mt-3 text-[13px] tracking-wide text-day-muted dark:text-night-muted">
                2025 — 2029
              </p>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-day-muted dark:text-night-muted">
              I&rsquo;m currently in my second year, building strong
              computer-science fundamentals while translating ideas into
              real, working products — from AI systems to full-stack
              applications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.2}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex items-start gap-6"
          >
            <img
              src={igdtuwLogo}
              alt="IGDTUW crest"
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
            />
            <div className="pt-1">
              <h4 className="font-serif text-[clamp(1.25rem,2.2vw,1.625rem)] leading-tight text-day-ink dark:text-night-ink">
                Indira Gandhi Delhi
                <br />
                Technical University for Women
              </h4>
              <p className="mt-3 text-[13px] tracking-wide text-day-muted dark:text-night-muted">
                New Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        <AnimatedDivider />

        {/* Academic Foundation */}
        <div className="py-16 sm:py-20">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy"
          >
            Academic Foundation
          </motion.span>

          <div className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject}
                initial="hidden"
                whileInView="show"
                custom={0.04 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className="group relative border-b border-day-border py-4 dark:border-night-border sm:py-5"
              >
                <span className="relative text-[15px] text-day-ink dark:text-night-ink">
                  {subject}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-day-burgundy transition-all duration-300 ease-editorial group-hover:w-full dark:bg-night-burgundy" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedDivider />

        {/* Academic Highlights */}
        <div className="py-16 sm:py-20">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy"
          >
            Academic Highlights
          </motion.span>

          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden"
                whileInView="show"
                custom={0.1 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
              >
                <div className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-none text-day-burgundy dark:text-night-burgundy">
                  {h.value}
                </div>
                <p className="mt-3 text-[14px] tracking-wide text-day-muted dark:text-night-muted">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedDivider />

        {/* Currently Exploring */}
        <div className="py-16 sm:py-20">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy"
          >
            Currently Exploring
          </motion.span>

          <div className="mt-8 flex flex-wrap gap-3">
            {exploring.map((tag, i) => (
              <motion.span
                key={tag}
                initial="hidden"
                whileInView="show"
                custom={0.06 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className="rounded-md border border-day-burgundy/35 px-4 py-2 font-serif text-[14px] text-day-ink transition-colors duration-300 ease-editorial hover:bg-day-burgundy/[0.06] dark:border-night-burgundy/40 dark:text-night-ink dark:hover:bg-night-burgundy/[0.08]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial ending */}
      <motion.div
        initial="hidden"
        whileInView="show"
        custom={0.15}
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={fadeUp}
        className="container-editorial relative pb-24 pt-4 text-center sm:pb-32"
      >
        <p className="mx-auto max-w-xl font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] italic leading-relaxed text-day-ink dark:text-night-ink">
          Learning in the classroom.
          <br />
          Building beyond it.
        </p>
      </motion.div>
    </section>
  );
}
