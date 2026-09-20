import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Portrait } from "./Portrait";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function Cover() {
  return (
    <section id="cover" className="relative h-[clamp(620px,calc(100svh-50px),760px)] overflow-hidden bg-[#050D32] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#31578B]/55 blur-[2px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#9CA6FF]/55 blur-[2px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-[-7rem] h-80 w-80 rounded-full bg-[#193C72]/70 blur-[18px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[31%] top-[23%] h-64 w-64 rounded-full bg-[#2B4F86]/60 blur-[5px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[39%] bottom-[13%] h-48 w-48 rounded-full bg-[#284E88]/45 blur-[10px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] bottom-[-7rem] h-72 w-72 rounded-full bg-[#496CA5]/35 blur-[14px]" />

      <div className="mx-auto flex h-[clamp(620px,calc(100svh-50px),760px)] w-full max-w-[1440px] flex-col px-5 pb-6 sm:px-8 lg:px-12">
        <div className="relative h-full flex-1">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.05}
            variants={fadeUp}
            className="absolute left-[3%] top-[3.5%] z-10 flex w-auto flex-col items-start"
          >
            <span className="font-mager text-[clamp(.7rem,1vw,.95rem)] tracking-[0.22em] text-[#B9F0FF]">
              PORTFOLIO
            </span>
            <span className="mt-1 h-px w-12 bg-[#9CA6FF]/70" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="absolute left-[3%] top-[17%] z-10 w-[58%] text-center font-boldfat text-[clamp(4.4rem,10.5vw,10rem)] font-normal leading-[0.82] tracking-[-0.045em] text-white"
            style={{ textShadow: "8px 9px 0 #5552B8, 13px 14px 0 rgba(64,59,164,.38)" }}
          >
            TRISHA
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.18}
            variants={fadeUp}
            className="absolute right-[5%] top-[8%] z-20 flex flex-col gap-1 text-right font-mager text-[clamp(1rem,1.7vw,1.5rem)] leading-[1.25] tracking-[0.015em] text-[#C9C8FF]"
          >
            <span>AI / ML</span>
            <span>FULL-STACK DEV</span>
            <span>ANDROID DEV</span>
          </motion.div>

          <div className="absolute right-[6%] top-[26%] z-10 w-[min(29vw,410px)] min-w-[250px] md:right-[7%] lg:right-[8%] lg:top-[26%]">
            <Portrait />
          </div>

          <div className="absolute left-[3%] top-[42%] z-20 w-[54%] max-w-[700px] text-center">
            <motion.p initial="hidden" animate="show" custom={0.24} variants={fadeUp} className="font-seasons text-[clamp(1.05rem,1.7vw,1.6rem)] italic leading-tight text-[#B9F0FF]">
              Computer Science Engineering student at IGDTUW
            </motion.p>
            <motion.p initial="hidden" animate="show" custom={0.3} variants={fadeUp} className="mx-auto mt-2 max-w-[780px] font-seasons text-[clamp(1rem,1.6vw,1.5rem)] leading-[1.25] text-[#B9F0FF]">
              Passionate about AI, ML and building solutions that create real
              <br className="hidden sm:block" />
              impact.
            </motion.p>
            <motion.div initial="hidden" animate="show" custom={0.38} variants={fadeUp} className="mt-4 font-mager text-[clamp(1.05rem,1.65vw,1.55rem)] tracking-[0.01em] text-[#C9C8FF]">
              ENGINEER <span className="mx-1">|</span> LEARNER <span className="mx-1">|</span> BUILDER
            </motion.div>

            <motion.div initial="hidden" animate="show" custom={0.46} variants={fadeUp} className="mt-6 flex justify-center gap-5">
              <Button href="#work" variant="primary" icon={<ArrowRight size={17} />} className="min-w-[190px] bg-[#114879] px-5 py-3 font-seasons text-[clamp(.9rem,1.3vw,1.15rem)] tracking-normal text-white shadow-none hover:bg-[#185789] hover:shadow-none">
                Explore My Work
              </Button>
              <Button href="https://drive.google.com/file/d/1JD1s-Q_wNp6UQy0gHNjEXSBlgHfpulQm/view?usp=sharing" target="_blank" rel="noopener noreferrer" variant="secondary" icon={<ArrowUpRight size={17} />} className="min-w-[190px] border-2 border-[#31567B] bg-[#607888] px-5 py-3 font-seasons text-[clamp(.9rem,1.3vw,1.15rem)] tracking-normal text-white hover:border-[#31567B] hover:bg-[#6B8393] hover:text-white">
                Resume
              </Button>
            </motion.div>
          </div>

          <motion.p initial="hidden" animate="show" custom={0.58} variants={fadeUp} className="absolute bottom-[3%] left-[6%] z-20 font-seasons text-[clamp(.9rem,1.3vw,1.15rem)] text-[#91DFFF]">
            CSE @ IGDTUW · 2025—2029 · NEW DELHI, INDIA
          </motion.p>
        </div>
      </div>
    </section>
  );
}
