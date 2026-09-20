import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CompassStar } from "@/components/Cover/CompassStar";
import { contact } from "@/data/contact";
import { ContactRoute } from "./ContactRoute";
import { PenMark } from "./PenMark";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050D32] text-white transition-colors duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] dark:bg-[#050D32] dark:text-white"
    >
      {/* oversized background numeral — subtle watermark, right side */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 select-none font-seasons text-[22rem] leading-none text-white/[0.035] dark:text-white/[0.035] sm:text-[28rem]"
      >
        07
      </span>

      {/* minimal line-art pen — extremely subtle, never competes with the headline */}
      <PenMark className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-48 text-[#B9B7FF]/15 dark:text-[#B9B7FF]/20 lg:block" />

      <div className="container-editorial relative py-4 sm:py-5">
        <div className="flex gap-6 sm:gap-10">
          {/* left rail — number, vertical line, marker */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="relative flex w-6 shrink-0 flex-col items-center sm:w-8"
          >
            <span className="font-seasons text-[15px] text-[#B9B7FF] dark:text-[#B9B7FF]">
              07
            </span>
            <span className="mt-6 h-2 w-2 rotate-45 border border-[\#B9B7FF]/50 dark:border-[\#B9B7FF]/50" />
            <span className="mt-6 w-px flex-1 bg-day-border dark:bg-night-border" />
          </motion.div>

          {/* main content */}
          <div className="min-w-0 flex-1 pb-6 sm:pb-7">
            <motion.span
              initial="hidden"
              whileInView="show"
              custom={0.05}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]"
            >
              Contact
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="show"
              custom={0.1}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mt-3 font-boldfat text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[1.08] text-white dark:text-white"
            >
              Let&rsquo;s build something
              <br />
              worth{" "}
              <em className="font-seasons italic text-[#B9B7FF] dark:text-[#B9B7FF]">
                talking
              </em>{" "}
              about.
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              custom={0.18}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mt-4 max-w-md text-[14px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE]"
            >
              Open to opportunities, collaborations, interesting ideas, and
              conversations around technology.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              custom={0.26}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mt-5"
            >
              <Button
                href={`mailto:${contact.email}`}
                variant="primary"
                icon={<ArrowRight size={16} strokeWidth={1.75} />}
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              custom={0.34}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[#294777] pt-5 dark:border-[#294777] sm:mt-7 sm:grid-cols-4 sm:gap-x-5 sm:pt-5"
            >
              <ContactRoute
                icon={Mail}
                label="Email"
                value={contact.email}
                copyValue={contact.email}
              />
              <ContactRoute
                icon={Linkedin}
                label="LinkedIn"
                value={contact.linkedin.display}
                href={contact.linkedin.url}
              />
              <ContactRoute
                icon={Github}
                label="GitHub"
                value={contact.github.display}
                href={contact.github.url}
              />
              <ContactRoute
                icon={Code2}
                label="LeetCode"
                value={contact.leetcode.display}
                href={contact.leetcode.url}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* footer — closes the page */}
      <footer className="relative border-t border-[#294777] dark:border-[#294777]">
        <div className="container-editorial flex items-center justify-between py-5 text-[10px] tracking-[0.14em] uppercase text-[#AEBEDE] dark:text-[#AEBEDE]">
          <span>Designed &amp; Engineered by Trisha</span>
          <CompassStar className="h-4 w-4 text-white/40 dark:text-white/40" />
          <span>© 2026</span>
        </div>
      </footer>
    </section>
  );
}
