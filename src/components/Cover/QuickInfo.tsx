import { CityMark } from "./CityMark";
import igdtuwLogo from "@/assets/igdtuw-logo.png";

export function QuickInfo() {
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-day-border sm:dark:divide-night-border">
      <div className="flex flex-col gap-3 sm:pr-6">
        <dt className="text-[11px] font-semibold tracking-[0.22em] uppercase text-day-burgundy dark:text-night-burgundy">
          Location
        </dt>
        <dd className="font-sans text-[15px] leading-snug text-day-ink dark:text-night-ink">
          New Delhi, India
        </dd>
        <CityMark className="mt-1 h-9 w-auto text-day-ink/40 dark:text-night-ink/40" />
      </div>

      <div className="flex flex-col gap-3 sm:px-6">
        <dt className="text-[11px] font-semibold tracking-[0.22em] uppercase text-day-burgundy dark:text-night-burgundy">
          University
        </dt>
        <dd className="font-sans leading-snug text-day-ink dark:text-night-ink">
          <span className="flex items-center gap-2 text-[15px] font-semibold">
            <img
              src={igdtuwLogo}
              alt="IGDTUW crest"
              className="h-5 w-5 shrink-0 object-contain"
            />
            IGDTUW
          </span>
          <span className="mt-1.5 block text-[14px] text-day-muted dark:text-night-muted">
            Computer Science Engineering
          </span>
          <span className="mt-0.5 block text-[13px] tracking-wide text-day-muted/80 dark:text-night-muted/80">
            2025 – 2029
          </span>
        </dd>
      </div>

      <div className="flex flex-col gap-3 sm:pl-6">
        <dt className="text-[11px] font-semibold tracking-[0.22em] uppercase text-day-burgundy dark:text-night-burgundy">
          Focus
        </dt>
        <dd className="font-sans text-[15px] leading-snug text-day-ink dark:text-night-ink">
          <span className="block">Artificial Intelligence</span>
          <span className="mt-1.5 block">Machine Learning</span>
          <span className="mt-1.5 block">Full-Stack Development</span>
        </dd>
      </div>
    </dl>
  );
}
