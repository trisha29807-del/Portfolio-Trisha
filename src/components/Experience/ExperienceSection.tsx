import { motion } from "framer-motion";
import { experience, project } from "@/data/experience";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function ExperienceSection() {
  return (
    <section
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
            05
          </span>
          <h2 className="mt-4 font-mager text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-[#B9B7FF] dark:text-[#B9B7FF]">
            Experience
          </h2>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            Where learning became practice.
          </p>
        </motion.div>

        <div className="mt-5 sm:mt-6">
          <AnimatedDivider />
        </div>

        {/* Experience entry */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-8 py-5 sm:py-7 lg:grid-cols-[220px_1fr] lg:gap-12"
        >
          {/* Date / role / organization */}
          <div className="relative pl-5">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[#7FDFFF] dark:bg-[#7FDFFF]" />
            <span className="absolute left-[3px] top-4 bottom-0 w-px bg-[#7FDFFF]/25 dark:bg-[#7FDFFF]/25" />

            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.06em] text-[#B9B7FF] dark:text-[#B9B7FF]">
              {experience.dateRange}
            </span>

            <h3 className="mt-2 font-seasons text-[1.2rem] sm:text-[1.3rem] leading-tight text-white dark:text-white">
              {experience.role}
            </h3>

            <p className="mt-3 text-[13px] sm:text-[14px] text-white dark:text-white">
              {experience.org}
            </p>
            <p className="mt-1 font-seasons text-[12px] sm:text-[13px] italic text-[#AEBEDE] dark:text-[#AEBEDE]">
              {experience.collaboration}
            </p>
            <p className="mt-2 text-[11px] sm:text-[12px] italic text-[#AEBEDE] dark:text-[#AEBEDE]">
              {experience.format}
            </p>
          </div>

          {/* What I worked on */}
          <div>
            <span className="text-[10px] sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
              {project.name}
            </span>

            <ul className="mt-3 flex flex-col gap-2.5">
              {project.bullets.map((b) => (
                <li
                  key={b.bold}
                  className="flex gap-2.5 text-[13px] sm:text-[15px] leading-[1.5] text-white/85 dark:text-white/85"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
