interface CityMarkProps {
  className?: string;
}

/**
 * Minimal single-weight line illustration evoking Delhi's colonial-era
 * civic architecture — a stand-in for a bespoke commissioned illustration.
 */
export function CityMark({ className = "" }: CityMarkProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="88" x2="200" y2="88" stroke="currentColor" strokeWidth="1" />
      <rect x="30" y="55" width="140" height="33" stroke="currentColor" strokeWidth="1" />
      <path d="M85 55 V33 A15 15 0 0 1 115 33 V55" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="33" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="16" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M45 55 V44 A8 8 0 0 1 61 44 V55" stroke="currentColor" strokeWidth="1" />
      <path d="M139 55 V44 A8 8 0 0 1 155 44 V55" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="70" x2="170" y2="70" stroke="currentColor" strokeWidth="0.75" />
      <line x1="45" y1="55" x2="45" y2="88" stroke="currentColor" strokeWidth="0.75" />
      <line x1="100" y1="55" x2="100" y2="88" stroke="currentColor" strokeWidth="0.75" />
      <line x1="155" y1="55" x2="155" y2="88" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
