import { motion } from "framer-motion";

/** Subtle section accent — not a full-width page separator. */
export function AnimatedDivider() {
  return (
    <div className="relative mx-auto h-px w-20 overflow-hidden bg-transparent" aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-0 bg-[#9CA6FF]/35"
      />
    </div>
  );
}
