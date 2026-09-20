import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { milestones } from "@/data/achievements";
import { AnimatedDivider } from "@/components/shared/AnimatedDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="achievements"
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
            06
          </span>
          <h2 className="mt-4 font-boldfat text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-white dark:text-white">
            Achievements
          </h2>
          <p className="mt-5 max-w-[42ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]">
            A few things I&rsquo;ve built, led, and kept showing up for.
          </p>
        </motion.div>

        <div className="mt-5 sm:mt-6">
          <AnimatedDivider />
        </div>

        {/* Numbered editorial timeline */}
        <div className="relative py-6 sm:py-8">
          <div className="absolute left-[3px] top-3 bottom-3 w-px bg-[#7FDFFF]/15 dark:bg-[#7FDFFF]/15" />

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <motion.div
                key={m.number}
                initial="hidden"
                whileInView="show"
                custom={0.1 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className={`group relative pl-10 ${
                  i > 0 ? "mt-5 border-t border-[#294777] pt-6 dark:border-[#294777] sm:mt-6 sm:pt-7" : ""
                }`}
              >
                <span
                  className={`absolute left-0 rounded-full bg-[#7FDFFF] transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-125 dark:bg-[#7FDFFF] ${
                    m.featured ? "top-2 h-2.5 w-2.5" : "top-1.5 h-2 w-2 opacity-70"
                  }`}
                />

                <div
                  className={`flex flex-col gap-6 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1 sm:flex-row sm:items-start sm:justify-between ${
                    m.featured ? "sm:gap-12" : "sm:gap-10"
                  }`}
                >
                  <div className={m.featured ? "border-l-2 border-[\#B9B7FF]/30 pl-6 dark:border-[\#B9B7FF]/30" : ""}>
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-seasons leading-none text-[#B9B7FF]/70 dark:text-[#B9B7FF]/70 ${
                          m.featured ? "text-[2.5rem]" : "text-[1.75rem]"
                        }`}
                      >
                        {m.number}
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
                        {m.eyebrow}
                      </span>
                    </div>

                    <h3
                      className={`mt-3 font-seasons leading-tight text-white dark:text-white ${
                        m.featured
                          ? "text-[clamp(1.75rem,3.2vw,2.5rem)]"
                          : "text-[clamp(1.25rem,2vw,1.5rem)]"
                      }`}
                    >
                      {m.title}
                    </h3>

                    <p
                      className={`mt-4 text-[#AEBEDE] dark:text-[#AEBEDE] ${
                        m.featured ? "max-w-lg text-[15px] leading-relaxed" : "max-w-md text-[14px] leading-relaxed"
                      }`}
                    >
                      {m.description}
                    </p>

                    {m.link && (
                      <a
                        href={m.link.href}
                        className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#B9B7FF] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:opacity-100 dark:text-[#B9B7FF]"
                      >
                        {m.link.label}
                        <span className="transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>

                  <span
                    className={`shrink-0 font-seasons text-[#AEBEDE]/70 transition-colors duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:text-[#B9B7FF] dark:text-[#AEBEDE]/70 dark:group-hover:text-[#B9B7FF] ${
                      m.featured ? "text-[15px]" : "text-[14px]"
                    } sm:text-right`}
                  >
                    {m.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
