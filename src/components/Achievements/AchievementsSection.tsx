import { motion } from "framer-motion";
import { milestones } from "@/data/achievements";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function AchievementsSection() {
  return (
    <section
      id="achievements"
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
            <span className="font-seasons text-sm">06</span>
            <span className="h-px w-14 bg-[#7C8EDB]" />
            <span className="font-curve-retro text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-[#7FDFFF]">
              ACHIEVEMENTS
            </span>
          </div>
          <p className="mt-5 max-w-[43ch] font-seasons text-[19px] italic leading-relaxed text-[#AEBEDE]">
            A few things I&rsquo;ve built, led, and kept showing up for.
          </p>
        </motion.div>

        <div className="mt-9">
          <div className="divide-y divide-[#294777] border-y border-[#294777]">
            {milestones.map((m, i) => (
              <motion.article
                key={m.number}
                initial="hidden"
                whileInView="show"
                custom={0.08 * i}
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={fadeUp}
                className="group grid grid-cols-[1fr_auto] gap-6 py-7 sm:grid-cols-[minmax(0,1fr)_100px] sm:gap-10 sm:py-8"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-seasons text-[1.8rem] leading-none text-[#B9B7FF]/75">
                      {m.number}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B9B7FF] sm:text-[11px]">
                      {m.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-2 font-seasons text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight text-white">
                    {m.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#AEBEDE] sm:text-[14px]">
                    {m.description}
                  </p>

                  {m.link && (
                    <a
                      href={m.link.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#7FDFFF] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      {m.link.label} →
                    </a>
                  )}
                </div>

                <span className="pt-1 text-right font-seasons text-[13px] text-[#AEBEDE]/75 sm:text-[14px]">
                  {m.year}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
