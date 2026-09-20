import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Portrait() {
  return (
    <div className="relative aspect-square w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[#D7D4FF] bg-[#0A1640] p-0.5 shadow-[0_0_45px_rgba(133,145,255,0.24)]"
      >
        <img src={portrait} alt="Portrait of Trisha" className="h-full w-full rounded-full object-cover object-center" />
      </motion.div>
    </div>
  );
}
