export const experience = {
  dateRange: "JUN 2026 — JUL 2026",
  role: "ML & GenAI with Python Intern",
  org: "Anveshan Foundation",
  collaboration: "in collaboration with IGDTUW",
  format: "Remote",
};

export const project = {
  label: "Primary Project",
  name: "Fake News Detection",
  description:
    "A machine-learning and NLP-based fake news detection system, combining transformer-based text classification with SHAP explainability and LLM-generated plain-English explanations.",
  bullets: [
    {
      lead: "Built a",
      bold: "text classification pipeline",
      rest: "for fake news detection using the FakeNewsNet dataset.",
    },
    {
      lead: "Worked with",
      bold: "transformer-based models",
      rest: "such as BERT and DistilBERT for NLP-based classification.",
    },
    {
      lead: "Applied",
      bold: "SHAP",
      rest: "to generate feature-level explainability for individual predictions.",
    },
    {
      lead: "Used an",
      bold: "LLM",
      rest: "to translate SHAP feature attributions into plain-English explanations.",
    },
  ],
};

export interface MetaItem {
  number: string;
  label: string;
  lines: string[];
}

// Every line here restates a technology/concept explicitly given for this
// project — nothing invented (no architectures, metrics, or results).
export const metadata: MetaItem[] = [
  {
    number: "01",
    label: "Machine Learning",
    lines: ["FakeNewsNet · Text Classification", "scikit-learn · PyTorch"],
  },
  {
    number: "02",
    label: "NLP & Transformers",
    lines: ["BERT · DistilBERT", "Transformers Library"],
  },
  {
    number: "03",
    label: "Explainable AI",
    lines: ["SHAP · Feature Attribution", "Interpretability"],
  },
  {
    number: "04",
    label: "Generative AI",
    lines: ["LLM-Generated Explanations", "Plain-English Reasoning"],
  },
];
