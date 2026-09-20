import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Portrait() {
  return (
    <div className="relative aspect-square w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full"
      >
        <motion.div
          aria-hidden="true"
          className="absolute -inset-7 rounded-full bg-[#9CA6FF]/18 blur-2xl"
          animate={{ scale: [0.96, 1.06, 0.96], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -inset-3 rounded-full border border-white/70"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-full border-[2px] border-[#D7D4FF] shadow-[0_0_34px_rgba(215,212,255,0.42),0_0_70px_rgba(92,111,255,0.22)]"
          animate={{ scale: [1, 1.025, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[#D7D4FF] bg-[#0A1640] p-0.5 shadow-[0_0_48px_rgba(133,145,255,0.34),0_0_100px_rgba(73,92,220,0.16)]">
          <img
            src={portrait}
            alt="Portrait of Trisha"
            className="h-full w-full rounded-full object-cover object-[center_38%] scale-[1.1]"
          />
        </div>
      </motion.div>
    </div>
  );
}
