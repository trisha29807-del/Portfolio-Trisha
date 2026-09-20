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
      className="relative overflow-hidden bg-day-bg text-day-ink transition-colors duration-700 ease-editorial dark:bg-night-bg dark:text-night-ink"
    >
      {/* oversized background numeral, centered/integrated like Education & Skills */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 top-[10%] flex justify-end pr-4 sm:pr-12"
      >
        <span className="select-none font-serif text-[22rem] leading-none text-day-ink/[0.035] dark:text-night-ink/[0.035] sm:text-[28rem]">
          05
        </span>
      </motion.div>

      <div className="container-editorial relative pt-20 sm:pt-28">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy">
            05
          </span>
          <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-day-ink dark:text-night-ink">
            Experience
          </h2>
          <p className="mt-5 max-w-[38ch] font-serif text-[19px] italic leading-relaxed text-day-muted dark:text-night-muted">
            Where learning became practice.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16">
          <AnimatedDivider />
        </div>

        {/* Three-column editorial composition */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:py-20 lg:grid-cols-[240px_1fr_260px] lg:gap-12">
          {/* LEFT — date / role / org, with a timeline marker */}
          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.05}
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-day-burgundy dark:bg-night-burgundy" />
            <span className="absolute left-[3px] top-4 bottom-0 w-px bg-day-burgundy/25 dark:bg-night-burgundy/25" />

            <span className="text-[13px] font-semibold tracking-[0.06em] text-day-burgundy dark:text-night-burgundy">
              {experience.dateRange}
            </span>

            <h3 className="mt-3 font-serif text-[1.5rem] leading-tight text-day-ink dark:text-night-ink">
              {experience.role}
            </h3>

            <div className="mt-4 h-px w-8 bg-day-border dark:bg-night-border" />

            <p className="mt-4 text-[15px] text-day-ink dark:text-night-ink">
              {experience.org}
            </p>
            <p className="mt-1 font-serif text-[14px] italic text-day-muted dark:text-night-muted">
              {experience.collaboration}
            </p>

            <p className="mt-6 text-[13px] italic text-day-muted dark:text-night-muted">
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
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-day-burgundy dark:text-night-burgundy">
              {project.label}
            </span>
            <h3 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-day-ink transition-colors duration-300 ease-editorial group-hover:text-day-burgundy dark:text-night-ink dark:group-hover:text-night-burgundy">
              {project.name}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-day-muted dark:text-night-muted">
              {project.description}
            </p>

            <div className="mt-6 h-px w-full bg-day-border dark:bg-night-border" />

            <ul className="mt-6 flex flex-col gap-4">
              {project.bullets.map((b) => (
                <li
                  key={b.bold}
                  className="flex gap-3 text-[14.5px] leading-relaxed text-day-ink/85 dark:text-night-ink/85"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-day-burgundy/70 dark:bg-night-burgundy/70" />
                  <span>
                    {b.lead}{" "}
                    <strong className="font-semibold text-day-ink dark:text-night-ink">
                      {b.bold}
                    </strong>{" "}
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
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
                  className={`group/meta py-5 ${
                    i > 0 ? "border-t border-day-border dark:border-night-border" : "pt-0"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-[1.75rem] leading-none text-day-burgundy dark:text-night-burgundy">
                      {item.number}
                    </span>
                    <div className="flex flex-1 items-start justify-between gap-2 pt-1">
                      <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-day-ink transition-[letter-spacing] duration-300 ease-editorial group-hover/meta:tracking-[0.18em] dark:text-night-ink">
                        {item.label}
                      </span>
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-day-ink/30 dark:text-night-ink/30"
                      />
                    </div>
                  </div>
                  <div className="mt-2 pl-[2.6rem] text-[12.5px] leading-relaxed text-day-muted dark:text-night-muted">
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
        className="container-editorial relative pb-24 pt-4 text-center sm:pb-32"
      >
        <p className="mx-auto max-w-xl font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] italic leading-relaxed text-day-ink dark:text-night-ink">
          Real-world problems. Real impact.
          <br />
          That&rsquo;s where growth happens.
        </p>
      </motion.div>
    </section>
  );
}
