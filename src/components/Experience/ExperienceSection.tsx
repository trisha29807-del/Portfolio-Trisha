import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, MessageSquare, Eye, Sparkles } from "lucide-react";
import { experience, project, metadata } from "@/data/experience";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";
import { ProjectPreview } from "./ProjectPreview";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

const metaIcons = [Cpu, MessageSquare, Eye, Sparkles];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="experience"
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
          <h2 className="mt-4 font-boldfat text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-white dark:text-white">
            Experience
          </h2>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            Where learning became practice.
          </p>
        </motion.div>

        <div className="mt-3 sm:mt-4">
          <AnimatedDivider />
        </div>

        {/* Three-column editorial composition */}
        <div className="grid grid-cols-1 gap-8 py-5 sm:py-6 lg:grid-cols-[220px_1fr_240px] lg:gap-8">
          {/* LEFT — date / role / org, with a timeline marker */}
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.05}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[#7FDFFF] dark:bg-[#7FDFFF]" />
            <span className="absolute left-[3px] top-4 bottom-0 w-px bg-[#7FDFFF]/25 dark:bg-[#7FDFFF]/25" />

            <span className="text-[13px] font-semibold tracking-[0.06em] text-[#B9B7FF] dark:text-[#B9B7FF]">
              {experience.dateRange}
            </span>

            <h3 className="mt-3 font-seasons text-[1.5rem] leading-tight text-white dark:text-white">
              {experience.role}
            </h3>

            <div className="mt-4 h-px w-8 bg-day-border dark:bg-night-border" />

            <p className="mt-4 text-[15px] text-white dark:text-white">
              {experience.org}
            </p>
            <p className="mt-1 font-seasons text-[14px] italic text-[#AEBEDE] dark:text-[#AEBEDE]">
              {experience.collaboration}
            </p>

            <p className="mt-6 text-[13px] italic text-[#AEBEDE] dark:text-[#AEBEDE]">
              {experience.format}
            </p>
          </motion.div>

          {/* CENTER — project case study */}
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.12}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="group"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
              {project.label}
            </span>
            <h3 className="mt-3 font-seasons text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-white transition-colors duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:text-[#B9B7FF] dark:text-white dark:group-hover:text-[#B9B7FF]">
              {project.name}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
              {project.description}
            </p>

            <div className="mt-4 h-px w-full bg-day-border dark:bg-night-border" />

            <ul className="mt-4 flex flex-col gap-3">
              {project.bullets.map((b) => (
                <li
                  key={b.bold}
                  className="flex gap-3 text-[14.5px] leading-relaxed text-white/85 dark:text-white/85"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7FDFFF]/70 dark:bg-[#7FDFFF]/70" />
                  <span>
                    {b.lead}{" "}
                    <strong className="font-semibold text-white dark:text-white">
                      {b.bold}
                    </strong>{" "}
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <ProjectPreview />
            </div>
          </motion.div>

          {/* RIGHT — editorial metadata */}
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.18}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col"
          >
            {metadata.map((item, i) => {
              const Icon = metaIcons[i];
              return (
                <div
                  key={item.number}
                  className={`group/meta py-3 ${
                    i > 0 ? "border-t border-[#294777] dark:border-[#294777]" : "pt-0"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-seasons text-[1.75rem] leading-none text-[#B9B7FF] dark:text-[#B9B7FF]">
                      {item.number}
                    </span>
                    <div className="flex flex-1 items-start justify-between gap-2 pt-1">
                      <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white transition-[letter-spacing] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/meta:tracking-[0.18em] dark:text-white">
                        {item.label}
                      </span>
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-white/30 dark:text-white/30"
                      />
                    </div>
                  </div>
                  <div className="mt-2 pl-[2.6rem] text-[12.5px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
                    {item.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        initial="hidden"
        whileInView="show"
        custom={0.15}
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={fadeUp}
        className="container-editorial relative pb-4 pt-1 text-center sm:pb-5"
      >
        <p className="mx-auto max-w-xl font-seasons text-[clamp(1.1rem,2vw,1.45rem)] italic leading-relaxed text-white dark:text-white">
          Real-world problems. Real impact.
          <br />
          That&rsquo;s where growth happens.
        </p>
      </motion.div>
    </section>
  );
}
