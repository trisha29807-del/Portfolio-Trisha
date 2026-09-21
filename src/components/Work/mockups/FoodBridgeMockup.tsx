import homeDashboard from "@/assets/foodbridge/home-dashboard.png";
import browseFood from "@/assets/foodbridge/browse-food.png";

/** A screenshot inside a slim phone bezel, with a soft drop shadow. */
function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-[1.6rem] bg-[#0a0f14] p-[5px] shadow-[0_30px_55px_-14px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12)] ${className}`}
    >
      <img src={src} alt={alt} className="block h-full w-auto rounded-[1.2rem] object-cover" />
    </div>
  );
}

/**
 * Real FoodBridge screenshots (Home Dashboard + Browse Food), taken directly
 * from the project's own documentation — not a fabricated UI mockup.
 * Shown on a green-to-navy gradient that echoes the app's colours.
 */
export function FoodBridgeMockup() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center gap-5 overflow-hidden px-6 py-5"
      style={{
        background:
          "radial-gradient(ellipse 60% 70% at 18% 12%, rgba(76,175,80,0.38) 0%, transparent 62%), radial-gradient(ellipse 45% 55% at 92% 96%, rgba(255,152,0,0.16) 0%, transparent 62%), linear-gradient(135deg, #0d3b2e 0%, #0b2f52 55%, #0a1f4d 100%)",
      }}
    >
      {/* soft circles, echoing the rest of the page */}
      <div aria-hidden="true" className="absolute -left-12 -top-14 h-52 w-52 rounded-full bg-[#7CD67F]/20 blur-2xl" />
      <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-[#FFB04A]/[0.13] blur-2xl" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl" />

      <Phone src={homeDashboard} alt="FoodBridge home dashboard screen" className="relative z-10 h-[86%] -translate-y-1.5" />
      <Phone src={browseFood} alt="FoodBridge browse food screen" className="relative z-10 h-[86%] translate-y-3" />
    </div>
  );
}