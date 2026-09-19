interface SectionStubProps {
  id: string;
  title: string;
}

/**
 * Temporary scroll-anchor placeholder. Gives the sticky Navbar a real
 * element to link to and scroll-spy on before each section has been
 * designed and built. Delete/replace as each real section lands.
 */
export function SectionStub({ id, title }: SectionStubProps) {
  return (
    <section
      id={id}
      className="flex min-h-[60vh] items-center justify-center border-t border-day-border bg-day-bg text-day-ink dark:border-night-border dark:bg-night-bg dark:text-night-ink"
    >
      <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-day-muted dark:text-night-muted">
        {title} — coming soon
      </span>
    </section>
  );
}
