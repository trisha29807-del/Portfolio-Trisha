import { motion } from "framer-motion";
import { experience, project } from "@/data/experience";

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 text-[#B9F0FF]">
            <span className="font-seasons text-sm">05</span>
            <span className="h-px w-14 bg-[#7C8EDB]" />
            <span className="font-curve-retro text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-[#7FDFFF]">
              EXPERIENCE
            </span>
          </div>
          <p className="mt-5 max-w-[38ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE]">
            Where learning became practice.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="mt-9 grid grid-cols-1 gap-8 border-t border-[#294777] pt-7 pb-4 lg:grid-cols-[240px_1fr] lg:gap-16"
        >
          <div className="relative pl-5">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[#7FDFFF]" />
            <span className="absolute left-[3px] top-4 bottom-0 w-px bg-[#7FDFFF]/25" />

            <span className="text-[12px] font-semibold tracking-[0.06em] text-[#B9B7FF] sm:text-[13px]">
              {experience.dateRange}
            </span>

            <h3 className="mt-2 max-w-[220px] font-seasons text-[1.2rem] leading-tight text-white sm:text-[1.3rem]">
              {experience.role}
            </h3>

            <p className="mt-3 text-[13px] text-white sm:text-[14px]">
              {experience.org}
            </p>
            <p className="mt-1 font-seasons text-[12px] italic text-[#AEBEDE] sm:text-[13px]">
              {experience.collaboration}
            </p>
            <p className="mt-2 text-[11px] italic text-[#AEBEDE] sm:text-[12px]">
              {experience.format}
            </p>
          </div>

          <div className="min-w-0 lg:pt-0.5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#7FDFFF]/50" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#B9B7FF] sm:text-[11px]">
                {project.name}
              </span>
            </div>

            <ul className="mt-5 grid max-w-[900px] gap-3">
              {project.bullets.map((b) => (
                <li
                  key={b.bold}
                  className="flex gap-3 text-[13px] leading-[1.55] text-white/85 sm:text-[14px]"
                >
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#7FDFFF]/75" />
                  <span>
                    {b.lead}{" "}
                    <strong className="font-semibold text-white">
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
