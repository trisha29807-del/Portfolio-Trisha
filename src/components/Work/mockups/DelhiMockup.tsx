export function DelhiMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-[#e9dcc8]">
      {/* faux browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#e9dcc8] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#c7495c]/50" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-3 text-[10px] tracking-wide text-black/40">
          delhi-heritage-explorer.app
        </span>
      </div>

      {/* illustrated skyline scene */}
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3e6d3_0%,#e7c9a8_55%,#d69f76_100%)]" />
        <svg
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 h-full w-full text-[#7a1626]/70"
        >
          <line x1="0" y1="170" x2="400" y2="170" stroke="currentColor" strokeWidth="1" />
          <rect x="120" y="110" width="160" height="60" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M160 110 V70 A40 40 0 0 1 240 70 V110" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="200" y1="70" x2="200" y2="45" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="200" cy="38" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M130 110 V90 A15 15 0 0 1 160 90 V110" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M240 110 V90 A15 15 0 0 1 270 90 V110" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="120" y1="135" x2="280" y2="135" stroke="currentColor" strokeWidth="0.75" />
          <line x1="160" y1="110" x2="160" y2="170" stroke="currentColor" strokeWidth="0.6" />
          <line x1="240" y1="110" x2="240" y2="170" stroke="currentColor" strokeWidth="0.6" />
          {/* distant minarets */}
          <line x1="60" y1="170" x2="60" y2="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="115" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="340" y1="170" x2="340" y2="125" stroke="currentColor" strokeWidth="1" />
          <circle cx="340" cy="120" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="font-serif text-xl leading-tight text-[#3a1a12] sm:text-2xl">
            Discover
            <br />
            Delhi&rsquo;s Heritage
          </div>
          <p className="mt-1.5 max-w-[70%] text-[10px] leading-relaxed text-[#3a1a12]/70">
            Explore stories, places, and history that shaped our city.
          </p>
          <span className="mt-3 inline-block bg-[#3a1a12] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#f3e6d3]">
            Explore Delhi
          </span>
        </div>
      </div>
    </div>
  );
}
