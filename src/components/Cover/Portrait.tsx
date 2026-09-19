import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

/**
 * This renders the final, untouched portrait asset exactly as supplied —
 * no color grading, background swap, or AI enhancement is applied here.
 * Only layout-level presentation (crop framing, corner radius, shadow,
 * and a soft ambient glow) is handled in this component.
 */
export function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full lg:aspect-[27/34]">
      {/* soft burgundy ambient glow, sitting behind the photo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(122,22,38,0.28),transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(199,73,92,0.24),transparent_72%)]"
      />

      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(60,20,20,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
      >
        <img
          src={portrait}
          alt="Editorial portrait of Trisha"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </motion.figure>
    </div>
  );
}
