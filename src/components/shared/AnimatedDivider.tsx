import { motion } from "framer-motion";

/** Thin divider that draws itself left-to-right as it enters the viewport. */
export function AnimatedDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-day-border dark:bg-night-border">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-0 bg-day-burgundy/50 dark:bg-night-burgundy/50"
      />
    </div>
  );
}
