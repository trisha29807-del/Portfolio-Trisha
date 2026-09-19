interface UniversitySealProps {
  initials?: string;
  className?: string;
}

export function UniversitySeal({
  initials = "IGDTUW",
  className = "",
}: UniversitySealProps) {
  const id = "seal-path";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <path
          id={id}
          d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
        />
      </defs>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" fill="none" />
      <text
        fill="currentColor"
        fontSize="8.2"
        letterSpacing="2"
        className="uppercase"
      >
        <textPath href={`#${id}`} startOffset="2%">
          {initials} • EST. 2025 •
        </textPath>
      </text>
      <path
        d="M50 34 L54 46 L67 46 L56 54 L60 66 L50 58 L40 66 L44 54 L33 46 L46 46 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
