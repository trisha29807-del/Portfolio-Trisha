import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import igdtuwLogo from "@/assets/igdtuw-logo.png";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";

const exploring = [
  "Artificial Intelligence",
  "Large Language Models",
  "React",
  "Full Stack Development",
  "Product Design",
  "UI/UX",
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
          <div className="flex items-center gap-4 text-[#B9F0FF]">
            <span className="font-seasons text-sm">03</span>
            <span className="h-px w-14 bg-[#7C8EDB]" />
            <span className="font-curve-retro text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-[#7FDFFF]">
              EDUCATION
            </span>
          </div>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            Every engineer begins with curiosity.
          </p>
        </motion.div>
        {/* Main composition — degree left, university right */}
        <div className="grid grid-cols-1 gap-12 py-6 sm:py-8 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.1}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-seasons text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-white dark:text-white">
                Bachelor of Technology
              </h3>
              <p className="mt-1 font-seasons text-[clamp(1.15rem,2vw,1.5rem)] italic text-[#B9B7FF] dark:text-[#B9B7FF]">
                Computer Science Engineering
              </p>
              <p className="mt-3 text-[13px] tracking-wide text-[#AEBEDE] dark:text-[#AEBEDE]">
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
              <p className="mt-2 text-[20px] font-semibold tracking-wide text-[#B9B7FF] dark:text-[#B9B7FF]">
                CGPA: 8.9/10
              </p>
            </div>
          </motion.div>
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

          <div className="mt-8 flex flex-wrap gap-3">
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
        className="container-editorial relative pb-6 pt-2 text-center sm:pb-5"
      >
        
      </motion.div>
    </section>
  );
}