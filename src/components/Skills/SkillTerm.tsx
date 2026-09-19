import type { Skill } from "@/data/skills";

interface SkillTermProps {
  skill: Skill;
}

export function SkillTerm({ skill }: SkillTermProps) {
  return (
    <span className="group relative inline-block">
      {skill.context && (
        <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1 whitespace-nowrap font-serif text-[11px] italic text-day-burgundy opacity-0 transition-all duration-300 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 dark:text-night-burgundy">
          {skill.context}
        </span>
      )}
      <span className="relative">
        {skill.name}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-day-burgundy/60 transition-all duration-300 ease-editorial group-hover:w-full dark:bg-night-burgundy/60" />
      </span>
    </span>
  );
}
