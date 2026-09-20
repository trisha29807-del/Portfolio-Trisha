import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
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
      className="relative overflow-hidden bg-day-bg text-day-ink transition-colors duration-700 ease-editorial dark:bg-night-bg dark:text-night-ink"
    >
      {/* oversized background numeral — subtle watermark, right side */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 select-none font-serif text-[22rem] leading-none text-day-ink/[0.035] dark:text-night-ink/[0.035] sm:text-[28rem]"
      >
        07
      </span>

      {/* minimal line-art pen — extremely subtle, never competes with the headline */}
      <PenMark className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-48 text-day-burgundy/15 dark:text-night-burgundy/20 lg:block" />

      <div className="container-editorial relative pt-20 sm:pt-28">
        <div className="flex gap-6 sm:gap-10">
          {/* left rail — number, vertical line, marker */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="relative flex w-6 shrink-0 flex-col items-center sm:w-8"
          >
            <span className="font-serif text-[15px] text-day-burgundy dark:text-night-burgundy">
              07
            </span>
            <span className="mt-6 h-2 w-2 rotate-45 border border-day-burgundy/50 dark:border-night-burgundy/50" />
            <span className="mt-6 w-px flex-1 bg-day-border dark:bg-night-border" />
          </motion.div>

          {/* main content */}
          <div className="min-w-0 flex-1 pb-24 sm:pb-32">
            <motion.span
              initial="hidden"
              whileInView="show"
              custom={0.05}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase text-day-burgundy dark:text-night-burgundy"
            >
              Contact
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="show"
              custom={0.1}
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mt-4 font-serif text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] text-day-ink dark:text-night-ink"
            >
              Let&rsquo;s build something
              <br />
              worth{" "}
              <em className="font-serif italic text-day-burgundy dark:text-night-burgundy">
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
              className="mt-6 max-w-md text-[15px] leading-relaxed text-day-muted dark:text-night-muted"
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
              className="mt-9"
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
              className="mt-16 flex flex-col border-t border-day-border pt-8 dark:border-night-border sm:mt-20 sm:flex-row sm:pt-10"
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* footer — closes the page */}
      <footer className="relative border-t border-day-border dark:border-night-border">
        <div className="container-editorial flex items-center justify-between py-6 text-[11px] tracking-[0.14em] uppercase text-day-muted dark:text-night-muted">
          <span>Designed &amp; Engineered by Trisha</span>
          <CompassStar className="h-4 w-4 text-day-ink/40 dark:text-night-ink/40" />
          <span>© 2026</span>
        </div>
      </footer>
    </section>
  );
}
