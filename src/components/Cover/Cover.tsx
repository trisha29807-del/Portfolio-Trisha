import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuickInfo } from "./QuickInfo";

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
      className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-day-bg text-day-ink dark:bg-night-bg dark:text-night-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#253B91]/35 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-[-7rem] h-[28rem] w-[28rem] rounded-full bg-[#6370FF]/20 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-12rem] left-[42%] h-[30rem] w-[30rem] rounded-full bg-[#355FFF]/10 blur-3xl" />

      <div className="container-editorial relative flex min-h-[calc(100vh-76px)] flex-col justify-between py-10 sm:py-14 lg:py-16">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative z-10">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.05}
              variants={fadeUp}
              className="mb-5 font-serif text-lg italic text-day-burgundy/90 dark:text-night-burgundy/90"
            >
              Computer Science Engineering student at IGDTUW
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.12}
              variants={fadeUp}
              className="font-sans text-[clamp(5rem,15vw,12rem)] font-black leading-[0.76] tracking-[-0.10em] text-day-ink dark:text-night-ink"
            >
              TRISHA
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.22}
              variants={fadeUp}
              className="mt-8 max-w-2xl font-serif text-[clamp(1.35rem,3vw,2.35rem)] leading-[1.2] text-day-ink/90 dark:text-night-ink/90"
            >
              Passionate about AI, ML and building solutions that create real
              impact.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-serif text-[clamp(1.35rem,2.8vw,2.1rem)] tracking-tight text-day-burgundy dark:text-night-burgundy"
            >
              <span>ENGINEER</span><span>/</span><span>LEARNER</span><span>/</span><span>BUILDER</span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#work" variant="primary" icon={<ArrowRight size={16} />}>
                Explore My Work
              </Button>
              <Button
                href="https://drive.google.com/file/d/1JD1s-Q_wNp6UQy0gHNjEXSBlgHfpulQm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<ArrowUpRight size={16} />}
              >
                Resume
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={fadeUp}
              className="mt-12 max-w-2xl border-t border-day-border pt-6 dark:border-night-border"
            >
              <QuickInfo />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 lg:items-end">
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.15}
              variants={fadeUp}
              className="grid grid-cols-1 gap-2 text-center font-serif text-[clamp(1.35rem,2.7vw,2rem)] leading-tight text-day-burgundy dark:text-night-burgundy lg:mr-10 lg:text-right"
            >
              <span>AI / ML</span>
              <span>FULL-STACK DEV</span>
              <span>ANDROID DEV</span>
            </motion.div>
            <div className="w-full max-w-[520px]">
              <Portrait />
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.65}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-day-border pt-5 text-[12px] tracking-[0.12em] uppercase text-day-muted dark:border-night-border dark:text-night-muted"
        >
          <span>CSE @ IGDTUW · 2025—2029 · NEW DELHI, INDIA</span>
          <span>BUILDING WITH CURIOSITY</span>
        </motion.div>
      </div>
    </section>
  );
}
