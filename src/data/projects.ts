export interface Project {
  number: string;
  slug: string;
  name: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  primaryCta?: { label: string; href?: string; external?: boolean; action?: "toggle-detail" };
  githubLabel?: string;
  metrics?: { label: string; value: string }[];
  imageSide: "left" | "right";
}

export const projects: Project[] = [
  {
    number: "01",
    slug: "fake-news-detection",
    name: "fake-news-detection",
    category: "Machine Learning · NLP · Explainable AI",
    year: "2026",
    title: "Fake News Detection",
    description:
      "A transformer-based fake news detection system built on DistilBERT, with SHAP and LIME explainability and a Gemini-powered layer that turns model reasoning into plain-English explanations.",
    tech: ["Python", "DistilBERT", "Transformers", "SHAP", "LIME", "Gemini"],
    metrics: [
      { label: "Test Accuracy", value: "78.13%" },
      { label: "F1 Score", value: "73.13%" },
    ],
    githubUrl:
      "https://github.com/trisha29807-del/Fake-News-Detection-Machine-Learning-Model",
    githubLabel: "GitHub ↗",
    primaryCta: {
      label: "Read Research ↗",
      href: "https://drive.google.com/file/d/1dkGCQcGaTnkIngruiT7oCiB3d-b1QGYn/view?usp=sharing",
      external: true,
    },
    imageSide: "left",
  },
  {
    number: "02",
    slug: "synora",
    name: "synora",
    category: "Product / Web",
    year: "2026",
    title: "Synora",
    description:
      "An AI-powered engineering decision-intelligence platform that helps students and engineers make smarter decisions, track growth, and build their personal knowledge graph.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "Vercel"],
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
    imageSide: "right",
  },
  {
    number: "03",
    slug: "delhi-heritage-explorer",
    name: "delhi-heritage-explorer",
    category: "Web / Hackathon",
    year: "2026",
    title: "Delhi Heritage Explorer",
    description:
      "An AI-powered web platform for discovering Delhi's cultural heritage through exploration, contextual place details, an AI heritage guide, personalized trails, quizzes, and local artisan discovery.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Gemini"],
    githubUrl: "https://github.com/trisha29807-del/delhi-heritage-explorer",
    githubLabel: "GitHub ↗",
    liveUrl: "https://delhi-heritage-explorer.vercel.app",
    primaryCta: {
      label: "View Case Study",
      action: "toggle-detail",
    },
    imageSide: "left",
  },
  {
    number: "04",
    slug: "foodbridge",
    name: "foodbridge",
    category: "Android · Mobile App",
    year: "2025",
    title: "FoodBridge",
    description:
      "A real-time Android platform connecting surplus-food donors with NGOs, orphanages, and buyers, built with Kotlin and Firebase — turning surplus into something useful.",
    tech: [
      "Kotlin",
      "Android SDK",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
      "Material Design",
    ],
    githubUrl: "https://github.com/trisha29807-del/FOOD-BRIDGE-CONNECT",
    githubLabel: "GitHub ↗",
    primaryCta: {
      label: "View Project",
      action: "toggle-detail",
    },
    imageSide: "right",
  },
];
