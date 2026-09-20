import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Portrait() {
  return (
    <div className="relative aspect-square w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[#CBC7FF]"
      >
        {/* The photo is sized and offset (in % of the circle) so the crop matches the design:
            tighter on the face, wall only above the head, no window. */}
        <img
          src={portrait}
          alt="Portrait of Trisha"
          className="absolute left-[-18.6%] top-[-57.8%] w-[131.7%] max-w-none"
        />
      </motion.div>
    </div>
  );
}