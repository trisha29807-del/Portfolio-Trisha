import { FileText, Cpu, ShieldQuestion, BarChart3, Sparkles } from "lucide-react";

/**
 * A workflow diagram of the actual implemented pipeline — not a fabricated
 * dashboard. Each stage reflects a real, verified component of the project
 * (research paper + repository): tokenized text in, DistilBERT classification,
 * a real/fake prediction, SHAP/LIME attribution, then a Gemini-generated
 * plain-English explanation of that attribution.
 */
const stages = [
  { icon: FileText, label: "News Text", caption: "Raw article input" },
  { icon: Cpu, label: "DistilBERT Classification", caption: "Fine-tuned transformer encoder" },
  { icon: ShieldQuestion, label: "Real / Fake Prediction", caption: "Binary classification + confidence" },
  { icon: BarChart3, label: "SHAP / LIME Explainability", caption: "Feature attribution" },
  { icon: Sparkles, label: "Generative AI Explanation", caption: "Gemini · plain-English summary" },
];

export function FakeNewsMockup() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-0 bg-[#1c1210] px-6 py-6 text-[#f1e6da] sm:px-8">
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c7495c]/50 text-[#c7495c]">
              <stage.icon size={14} strokeWidth={1.75} />
            </span>
            {i < stages.length - 1 && (
              <span className="my-0.5 h-6 w-px bg-[#c7495c]/25 sm:h-7" />
            )}
          </div>
          <div className="pt-1 pb-2">
            <div className="text-[13px] font-medium leading-tight text-[#f1e6da]">
              {stage.label}
            </div>
            <div className="mt-0.5 text-[11px] text-[#f1e6da]/45">
              {stage.caption}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
