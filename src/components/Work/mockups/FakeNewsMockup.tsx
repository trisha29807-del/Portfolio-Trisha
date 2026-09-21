import shapWaterfall from "@/assets/shap-waterfall.png";

/**
 * Front-of-card visual for the Fake News Detection project: a real SHAP waterfall
 * plot exported from the trained model, showing how individual words push an
 * article toward a "fake" prediction.
 */
export function FakeNewsMockup() {
  return (
    <div className="h-full w-full bg-white">
      <img
        src={shapWaterfall}
        alt="SHAP waterfall plot from the trained model, showing how individual words push a news article toward a fake prediction"
        className="h-full w-full object-contain"
      />
    </div>
  );
}