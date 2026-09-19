import { useTheme } from "@/context/ThemeContext";

export function EditionSwitch() {
  const { edition, setEdition } = useTheme();

  return (
    <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase">
      <span className="text-day-muted dark:text-night-muted">Edition</span>
      <div className="flex items-center gap-2" role="group" aria-label="Site edition">
        <button
          type="button"
          onClick={() => setEdition("day")}
          aria-pressed={edition === "day"}
          className={
            edition === "day"
              ? "text-day-burgundy dark:text-night-burgundy relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current"
              : "text-day-ink/40 hover:text-day-ink/70 dark:text-night-ink/40 dark:hover:text-night-ink/70 transition-colors"
          }
        >
          Day
        </button>
        <span className="text-day-ink/30 dark:text-night-ink/30">/</span>
        <button
          type="button"
          onClick={() => setEdition("night")}
          aria-pressed={edition === "night"}
          className={
            edition === "night"
              ? "text-day-burgundy dark:text-night-burgundy relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current"
              : "text-day-ink/40 hover:text-day-ink/70 dark:text-night-ink/40 dark:hover:text-night-ink/70 transition-colors"
          }
        >
          Night
        </button>
      </div>
    </div>
  );
}
