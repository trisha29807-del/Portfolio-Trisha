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
        {/* Soft glow that gently breathes around the boundary */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 rounded-full shadow-[0_0_38px_10px_rgba(156,166,255,0.42),0_0_90px_26px_rgba(92,111,255,0.24)]"
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.03, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Photo + thin lavender border */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[#CBC7FF] shadow-[0_0_22px_rgba(203,199,255,0.45)]">
          {/* Sized and offset (in % of the circle) so the crop is tight on the face:
              wall only above the head, no window. */}
          <img
            src={portrait}
            alt="Portrait of Trisha"
            className="absolute left-[-18.6%] top-[-57.8%] w-[131.7%] max-w-none"
          />
        </div>
      </motion.div>
    </div>
  );
}