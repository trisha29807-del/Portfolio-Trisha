import homeDashboard from "@/assets/foodbridge/home-dashboard.png";
import browseFood from "@/assets/foodbridge/browse-food.png";

/**
 * Real FoodBridge screenshots (Home Dashboard + Browse Food), taken directly
 * from the project's own documentation — not a fabricated UI mockup.
 */
export function FoodBridgeMockup() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 overflow-hidden bg-[#1c1210] px-6 py-5">
      <img
        src={homeDashboard}
        alt="FoodBridge home dashboard screen"
        className="h-[92%] w-auto rounded-xl border border-white/10 object-cover shadow-lg"
      />
      <img
        src={browseFood}
        alt="FoodBridge browse food screen"
        className="h-full w-auto translate-y-2 rounded-xl border border-white/10 object-cover shadow-lg"
      />
    </div>
  );
}
