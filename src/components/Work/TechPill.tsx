interface TechPillProps {
  label: string;
}

export function TechPill({ label }: TechPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-day-border px-3 py-1.5 text-[12px] font-medium text-day-muted transition-colors duration-300 ease-editorial hover:border-day-burgundy/50 hover:text-day-burgundy dark:border-night-border dark:text-night-muted dark:hover:border-night-burgundy/50 dark:hover:text-night-burgundy">
      {label}
    </span>
  );
}
