const shapBars = [
  { width: 78, positive: true },
  { width: 55, positive: true },
  { width: 42, positive: false },
  { width: 30, positive: true },
  { width: 20, positive: false },
];

/**
 * Placeholder technical preview for the Fake News Detection project.
 * Deliberately abstract (no invented numbers or results) — swap each
 * panel's contents for real screenshots/exports once available.
 */
export function ProjectPreview() {
  return (
    <div className="rounded-lg border border-day-border bg-day-surface/40 p-5 dark:border-night-border dark:bg-night-surface/40">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-day-muted dark:text-night-muted">
          Project Preview
        </span>
        <span className="text-[10px] italic text-day-muted/70 dark:text-night-muted/70">
          Placeholder — real results coming soon
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Model prediction */}
        <div className="rounded-md border border-day-border bg-day-bg p-3 dark:border-night-border dark:bg-night-bg">
          <div className="text-[10px] font-medium text-day-muted dark:text-night-muted">
            Model Prediction
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded border border-day-burgundy/40 px-2 py-1 font-serif text-[13px] italic text-day-burgundy dark:border-night-burgundy/40 dark:text-night-burgundy">
              Fake
            </span>
            <span className="rounded border border-day-border px-2 py-1 text-[13px] text-day-ink/50 dark:border-night-border dark:text-night-ink/50">
              Real
            </span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-day-border/60 dark:bg-night-border/60">
            <div className="h-full w-2/3 rounded-full bg-day-burgundy/60 dark:bg-night-burgundy/60" />
          </div>
        </div>

        {/* SHAP explanation */}
        <div className="rounded-md border border-day-border bg-day-bg p-3 dark:border-night-border dark:bg-night-bg">
          <div className="text-[10px] font-medium text-day-muted dark:text-night-muted">
            SHAP Explanation
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            {shapBars.map((bar, i) => (
              <div key={i} className="h-1.5 overflow-hidden rounded-full bg-day-border/60 dark:bg-night-border/60">
                <div
                  className={
                    bar.positive
                      ? "h-full rounded-full bg-day-burgundy/70 dark:bg-night-burgundy/70"
                      : "h-full rounded-full bg-day-ink/25 dark:bg-night-ink/25"
                  }
                  style={{ width: `${bar.width}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* LLM explanation */}
        <div className="rounded-md border border-day-border bg-day-bg p-3 dark:border-night-border dark:bg-night-bg">
          <div className="text-[10px] font-medium text-day-muted dark:text-night-muted">
            LLM Explanation
          </div>
          <div className="mt-2 text-[11px] text-day-ink/70 dark:text-night-ink/70">
            Plain-English Summary
          </div>
          <div className="mt-2 flex flex-col gap-1.5">
            {[95, 85, 70].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-day-border/60 dark:bg-night-border/60"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
