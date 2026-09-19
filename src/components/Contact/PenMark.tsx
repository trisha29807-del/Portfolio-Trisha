interface PenMarkProps {
  className?: string;
}

export function PenMark({ className = "" }: PenMarkProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* pen body */}
      <line x1="205" y1="15" x2="120" y2="100" stroke="currentColor" strokeWidth="1" />
      <line x1="212" y1="22" x2="127" y2="107" stroke="currentColor" strokeWidth="1" />
      {/* nib */}
      <path d="M120 100 L108 130 L138 112 Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <line x1="120" y1="100" x2="112" y2="124" stroke="currentColor" strokeWidth="0.75" />
      {/* trailing flourish line */}
      <path
        d="M0 165 C 30 145, 55 175, 80 155 C 100 140, 95 160, 108 130"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
