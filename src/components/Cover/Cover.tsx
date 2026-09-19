import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VerticalTag } from "./VerticalTag";
import { Portrait } from "./Portrait";
import { QuickInfo } from "./QuickInfo";
import { CompassStar } from "./CompassStar";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function Cover() {
  return (
    <section
      id="cover"
      className="relative flex min-h-screen flex-col justify-between bg-day-bg text-day-ink dark:bg-night-bg dark:text-night-ink transition-colors duration-700 ease-editorial"
    >
      <div className="container-editorial flex flex-1 flex-col pt-8 sm:pt-10 lg:pt-12">
        {/* Editorial masthead detail */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col gap-1 border-b border-day-border pb-6 dark:border-night-border sm:pb-8"
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy">
            Issue 01
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-day-muted dark:text-night-muted">
            Editorial Portfolio · 2026 Edition
          </span>
        </motion.header>

        {/* Main content grid */}
        <div className="grid flex-1 grid-cols-1 gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_auto_minmax(360px,460px)] lg:gap-8 lg:py-16">
          {/* Left column — name, tagline, actions, quick info */}
          <div className="flex flex-col justify-between gap-12 lg:gap-10">
            <div>
              <motion.h1
                initial="hidden"
                animate="show"
                custom={0.15}
                variants={fadeUp}
                className="font-serif leading-[0.85] text-day-burgundy dark:text-night-burgundy text-[clamp(3.5rem,13vw,7.5rem)]"
              >
                TRISHA
              </motion.h1>

              <motion.div
                initial="hidden"
                animate="show"
                custom={0.25}
                variants={fadeUp}
                className="mt-8 h-px w-16 bg-day-ink/30 dark:bg-night-ink/30"
              />

              <motion.p
                initial="hidden"
                animate="show"
                custom={0.3}
                variants={fadeUp}
                className="mt-8 max-w-2xl font-serif text-[clamp(1.875rem,4.4vw,3.25rem)] leading-[1.15] tracking-[-0.01em] text-day-ink dark:text-night-ink"
              >
                Building intelligent products through{" "}
                <em className="font-serif italic text-day-burgundy dark:text-night-burgundy">
                  code
                </em>{" "}
                and{" "}
                <em className="font-serif italic text-day-burgundy dark:text-night-burgundy">
                  curiosity.
                </em>
              </motion.p>

              <motion.p
                initial="hidden"
                animate="show"
                custom={0.4}
                variants={fadeUp}
                className="mt-5 max-w-md text-[15px] leading-relaxed text-day-muted dark:text-night-muted"
              >
                Computer Science Engineering student at IGDTUW passionate
                about AI, Machine Learning and building solutions that create
                real impact.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                custom={0.5}
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button
                  href="#work"
                  variant="primary"
                  icon={<ArrowRight size={16} strokeWidth={1.75} />}
                >
                  Explore My Work
                </Button>
                <Button
                  href="https://drive.google.com/file/d/1JD1s-Q_wNp6UQy0gHNjEXSBlgHfpulQm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<ArrowUpRight size={16} strokeWidth={1.75} />}
                >
                  Resume
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.6}
              variants={fadeUp}
              className="border-t border-day-border pt-8 dark:border-night-border"
            >
              <QuickInfo />
            </motion.div>
          </div>

          {/* Divider column with vertical identity tag */}
          <VerticalTag words={["ENGINEER", "LEARNER", "BUILDER"]} />

          {/* Right column — portrait */}
          <div className="lg:pl-2">
            <Portrait />
          </div>
        </div>
      </div>

      {/* Utility footer bar */}
      <motion.footer
        initial="hidden"
        animate="show"
        custom={0.7}
        variants={fadeUp}
        className="border-t border-day-border dark:border-night-border"
      >
        <div className="container-editorial flex items-center justify-between py-5 text-[11px] tracking-[0.14em] uppercase text-day-muted dark:text-night-muted">
          <span>Designed &amp; Engineered by Trisha</span>
          <CompassStar className="h-4 w-4 text-day-ink/40 dark:text-night-ink/40" />
          <span>© 2026</span>
        </div>
      </motion.footer>
    </section>
  );
}
