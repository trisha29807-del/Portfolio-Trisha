interface VerticalTagProps {
  words: string[];
}

export function VerticalTag({ words }: VerticalTagProps) {
  return (
    <div
      className="hidden lg:flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 text-[11px] font-medium tracking-[0.32em] uppercase text-day-burgundy/80 dark:text-night-burgundy/80 [writing-mode:vertical-rl]">
        {words.map((word, i) => (
          <span key={word} className="flex items-center gap-6">
            {word}
            {i < words.length - 1 && (
              <span className="h-1 w-1 rotate-45 bg-current" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
