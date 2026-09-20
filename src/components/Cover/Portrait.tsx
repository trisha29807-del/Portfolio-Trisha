import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(104,116,255,0.32),transparent_68%)] blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full overflow-hidden rounded-full border-2 border-day-burgundy/80 p-2 shadow-[0_0_80px_rgba(86,103,255,0.22)] dark:border-night-burgundy/80"
      >
        <div className="h-full w-full overflow-hidden rounded-full">
          <img
            src={portrait}
            alt="Portrait of Trisha"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </motion.div>
      <span className="absolute -right-2 top-10 h-3 w-3 rounded-full bg-day-burgundy shadow-[0_0_20px_rgba(185,181,255,0.9)]" />
      <span className="absolute -left-3 bottom-20 h-2.5 w-2.5 rounded-full bg-[#6EA8FF] shadow-[0_0_18px_rgba(110,168,255,0.8)]" />
    </div>
  );
}
