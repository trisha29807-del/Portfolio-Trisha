interface CompassStarProps {
  className?: string;
}

export function CompassStar({ className = "" }: CompassStarProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 2 L27 21 L46 24 L27 27 L24 46 L21 27 L2 24 L21 21 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
