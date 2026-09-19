export interface Skill {
  name: string;
  context?: string;
}

export interface SkillCategory {
  number: string;
  label: string;
  /** "wrap": inline chips (default). "list": stacked full-width rows, for a bit of art-directed variety. */
  variant?: "wrap" | "list";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    label: "Languages",
    skills: [
      { name: "C" },
      { name: "C++", context: "DSA · Problem Solving" },
      { name: "Python", context: "ML · GenAI · Data Science" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Kotlin", context: "Used in FoodBridge · Android App" },
      { name: "R" },
    ],
  },
  {
    number: "02",
    label: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", context: "Used in Fake News Detection · Internship" },
      { name: "Generative AI" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "SHAP" },
      { name: "Transformers" },
    ],
  },
  {
    number: "03",
    label: "Web Development",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React", context: "Used in Synora · Frontend" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Firebase" },
    ],
  },
  {
    number: "04",
    label: "Computer Science",
    variant: "list",
    skills: [
      { name: "Data Structures & Algorithms", context: "Core strength · CS foundation" },
      { name: "Object-Oriented Programming" },
      { name: "Database Management Systems" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
  {
    number: "05",
    label: "Mobile Development",
    skills: [
      { name: "Android" },
      { name: "Kotlin", context: "Used in FoodBridge · Android App" },
      { name: "Android Studio" },
    ],
  },
  {
    number: "06",
    label: "Tools & Design",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Canva" },
      { name: "Vercel" },
    ],
  },
];
