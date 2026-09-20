import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar fixed to the top of the viewport that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-[#7FDFFF] via-[#B9B7FF] to-[#9CA6FF]"
    />
  );
}