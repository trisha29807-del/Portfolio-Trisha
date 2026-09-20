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
      className="relative overflow-hidden bg-[#050D32] text-white transition-colors duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] dark:bg-[#050D32] dark:text-white"
    >
      <div className="container-editorial relative pt-2 sm:pt-3">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
          </span>
          <h2 className="mt-4 font-boldfat text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-white dark:text-white">
            Education
          </h2>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            Every engineer begins with curiosity.
          </p>
        </motion.div>

        <div className="mt-3 sm:mt-4">
          <AnimatedDivider />
        </div>

        {/* Main composition — degree left, university right */}
        <div className="grid grid-cols-1 gap-7 py-5 sm:py-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.1}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <div>
              <h3 className="font-seasons text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-white dark:text-white">
                Bachelor of Technology
              </h3>
              <p className="mt-1 font-seasons text-[clamp(1.15rem,2vw,1.5rem)] italic text-[#B9B7FF] dark:text-[#B9B7FF]">
                Computer Science Engineering
              </p>
              <p className="mt-2 text-[13px] tracking-wide text-[#AEBEDE] dark:text-[#AEBEDE]">
                2025 — 2029
              </p>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
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
              <h4 className="font-seasons text-[clamp(1.25rem,2.2vw,1.625rem)] leading-tight text-white dark:text-white">
                Indira Gandhi Delhi
                <br />
                Technical University for Women
              </h4>
              <p className="mt-3 text-[13px] tracking-wide text-[#AEBEDE] dark:text-[#AEBEDE]">
                New Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        <AnimatedDivider />

        {/* Academic Foundation */}
        <div className="py-4 sm:py-5">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]"
          >
            Academic Foundation
          </motion.span>

          <div className="mt-5 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject}
                initial="hidden"
                whileInView="show"
                custom={0.04 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className="group relative border-b border-[#294777] py-2.5 dark:border-[#294777] sm:py-3"
              >
                <span className="relative text-[15px] text-white dark:text-white">
                  {subject}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7FDFFF] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full dark:bg-[#7FDFFF]" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedDivider />

        {/* Academic Highlights */}
        <div className="py-6 sm:py-8">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]"
          >
            Academic Highlights
          </motion.span>

          <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden"
                whileInView="show"
                custom={0.1 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
              >
                <div className="font-seasons text-[clamp(3rem,7vw,5.5rem)] leading-none text-[#B9B7FF] dark:text-[#B9B7FF]">
                  {h.value}
                </div>
                <p className="mt-3 text-[14px] tracking-wide text-[#AEBEDE] dark:text-[#AEBEDE]">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedDivider />

        {/* Currently Exploring */}
        <div className="py-6 sm:py-8">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]"
          >
            Currently Exploring
          </motion.span>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {exploring.map((tag, i) => (
              <motion.span
                key={tag}
                initial="hidden"
                whileInView="show"
                custom={0.06 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className="rounded-md border border-[\#B9B7FF]/35 px-4 py-2 font-seasons text-[14px] text-white transition-colors duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-[#7FDFFF]/[0.06] dark:border-[\#B9B7FF]/40 dark:text-white dark:hover:bg-[#B9B7FF]/[0.08]"
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
        className="container-editorial relative pb-4 pt-1 text-center sm:pb-5"
      >
        <p className="mx-auto max-w-xl font-seasons text-[clamp(1.1rem,2vw,1.45rem)] italic leading-relaxed text-white dark:text-white">
          Learning in the classroom.
          <br />
          Building beyond it.
        </p>
      </motion.div>
    </section>
  );
}
