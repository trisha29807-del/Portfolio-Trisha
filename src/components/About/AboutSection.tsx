import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Sparkles, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

const focus = [
  { icon: Code2, label: "BUILD", text: "Turning ideas into usable web, mobile and AI products." },
  { icon: Sparkles, label: "EXPLORE", text: "Learning AI/ML, GenAI and modern full-stack development." },
  { icon: Target, label: "IMPACT", text: "Building solutions around real problems, not just demos." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050D32] text-white">

      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-0 sm:px-10 sm:pt-10 sm:pb-0 lg:px-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15% 0px" }} variants={fadeUp}>
            <div className="flex items-center gap-4 text-[#B9F0FF]">
              <span className="font-seasons text-sm">01</span>
              <span className="h-px w-14 bg-[#7C8EDB]" />
              <span className="font-curve-retro text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] tracking-[0.04em] text-[#7FDFFF]">
                ABOUT ME
              </span>
            </div>

            <h2 className="mt-5 max-w-5xl font-boldfat text-[clamp(3.3rem,4vw,6.6rem)] leading-[0.82] tracking-[-0.04em] text-white">
              I BUILD
              <span className="block text-[#B9B7FF]">WITH PURPOSE.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" custom={0.12} viewport={{ once: true, margin: "-15% 0px" }} variants={fadeUp} className="lg:pb-3">
            <p className="font-seasons text-[clamp(1.05rem,1.7vw,1.45rem)] leading-[1.35] text-[#B9F0FF]">
              I’m Trisha — a Computer Science Engineering student at IGDTUW, passionate about AI/ML and building solutions that create real impact.
            </p>
            <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#B7C6E9]">
              I enjoy taking an idea from curiosity to implementation: understanding the problem, learning the technology behind it, and turning it into something people can actually use.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[#294777] bg-[#294777] md:grid-cols-3">
          {focus.map(({ icon: Icon, label, text }, i) => (
            <motion.article
              key={label}
              initial="hidden"
              whileInView="show"
              custom={0.08 * i}
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={fadeUp}
              className="group bg-[#07133A] p-5 transition-colors duration-300 hover:bg-[#0A1B4B] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <Icon size={22} strokeWidth={1.4} className="text-[#B9B7FF]" />
                <span className="font-seasons text-sm text-[#7FDFFF]">0{i + 1}</span>
              </div>
              <h3 className="mt-12 font-mager text-xl tracking-wide text-[#D2D0FF]">{label}</h3>
              <p className="mt-4 text-sm leading-6 text-[#AEBEDE]">{text}</p>
              <ArrowDownRight size={18} className="mt-8 text-[#6F88C0] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </motion.article>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-mager text-sm tracking-[0.14em] text-[#C9C8FF]">AI / ML</span>
          <span className="h-1 w-1 rounded-full bg-[#7FDFFF]" />
          <span className="font-mager text-sm tracking-[0.14em] text-[#C9C8FF]">FULL-STACK DEVELOPMENT</span>
          <span className="h-1 w-1 rounded-full bg-[#7FDFFF]" />
          <span className="font-mager text-sm tracking-[0.14em] text-[#C9C8FF]">ANDROID DEVELOPMENT</span>
        </motion.div>
      </div>
    </section>
  );
}