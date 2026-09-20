export interface Milestone {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  year: string;
  featured?: boolean;
  /** Only set when there's a real, existing destination — never fabricated. */
  link?: { href: string; label: string };
}

export const milestones: Milestone[] = [
  {
    number: "01",
    eyebrow: "Finalist · Team Lead",
    title: "Delhi AI Grind 2026",
    description:
      "Led my team to the finalist stage of the Delhi AI Grind 2026 Hackathon, building Delhi Heritage Explorer.",
    year: "2026",
    featured: true,
    link: { href: "#delhi-heritage-explorer", label: "View Project" },
  },
  {
    number: "02",
    eyebrow: "250+ Problems Solved",
    title: "LeetCode · Data Structures & Algorithms",
    description:
      "A continuing problem-solving journey across Data Structures & Algorithms.",
    year: "2026",
    link: { href: "https://leetcode.com/u/trisha29807/", label: "View LeetCode Profile ↗" },
  },
];
