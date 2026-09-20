import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuickInfo } from "./QuickInfo";
import { Portrait } from "./Portrait";

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
      <div aria-hidden="true" className="pointer-events-none absolute -left-[14rem] top-[7%] h-[30rem] w-[30rem] rounded-full border border-white/10 bg-white/[0.045] blur-[1px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[13rem] -top-[10rem] h-[42rem] w-[42rem] rounded-full bg-white/[0.055] blur-[2px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[17%] top-[7%] h-[18rem] w-[18rem] rounded-full bg-[#B9B5FF]/[0.08] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[16rem] left-[34%] h-[38rem] w-[38rem] rounded-full border border-white/[0.07] bg-white/[0.025] blur-[2px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[10%] right-[8%] h-24 w-24 rounded-full bg-[#6EA8FF]/[0.14] blur-2xl" />

      <div className="container-editorial relative flex min-h-[calc(100vh-76px)] flex-col justify-between py-10 sm:py-14 lg:py-16">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative z-10">
            <motion.p initial="hidden" animate="show" custom={0.05} variants={fadeUp} className="mb-5 font-seasons text-[clamp(1.15rem,2.2vw,1.8rem)] leading-[1.15] text-day-burgundy/90 dark:text-night-burgundy/90">
              Computer Science Engineering student at IGDTUW
            </motion.p>

            <motion.h1 initial="hidden" animate="show" custom={0.12} variants={fadeUp} className="font-boldfat text-[clamp(5.6rem,15vw,13rem)] font-normal leading-[0.72] tracking-[-0.055em] sm:whitespace-nowrap text-day-ink dark:text-night-ink">
              TRISHA
            </motion.h1>

            <motion.p initial="hidden" animate="show" custom={0.22} variants={fadeUp} className="mt-8 max-w-2xl font-seasons text-[clamp(1.2rem,2.45vw,2rem)] leading-[1.22] text-day-ink/90 dark:text-night-ink/90">
              Passionate about AI, ML and building solutions that create real impact.
            </motion.p>

            <motion.div initial="hidden" animate="show" custom={0.3} variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mager text-[clamp(1.15rem,2.25vw,1.85rem)] tracking-[0.045em] text-day-burgundy dark:text-night-burgundy">
              <span>ENGINEER</span><span>/</span><span>LEARNER</span><span>/</span><span>BUILDER</span>
            </motion.div>

            <motion.div initial="hidden" animate="show" custom={0.4} variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
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

            <motion.div initial="hidden" animate="show" custom={0.5} variants={fadeUp} className="mt-12 max-w-2xl border-t border-day-border pt-6 dark:border-night-border">
              <QuickInfo />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-7 lg:items-end">
            <motion.div initial="hidden" animate="show" custom={0.15} variants={fadeUp} className="grid grid-cols-1 gap-1.5 text-center font-mager text-[clamp(1.15rem,2.2vw,1.8rem)] leading-tight tracking-[0.06em] text-day-burgundy dark:text-night-burgundy lg:mr-10 lg:text-right">
              <span>AI / ML</span>
              <span>FULL-STACK DEV</span>
              <span>ANDROID DEV</span>
            </motion.div>
            <div className="w-full max-w-[500px]">
              <Portrait />
            </div>
          </div>
        </div>

        <motion.div initial="hidden" animate="show" custom={0.65} variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-day-border pt-5 text-[12px] tracking-[0.12em] uppercase text-day-muted dark:border-night-border dark:text-night-muted">
          <span>CSE @ IGDTUW · 2025—2029 · NEW DELHI, INDIA</span>
          <span>BUILDING WITH CURIOSITY</span>
        </motion.div>
      </div>
    </section>
  );
}
