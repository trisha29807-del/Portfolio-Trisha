import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Copy, Check, ArrowUpRight } from "lucide-react";

interface ContactRouteProps {
  icon: LucideIcon;
  label: string;
  value: string;
  /** External link (opens in a new tab) */
  href?: string;
  /** Copy-to-clipboard behaviour (used for email) */
  copyValue?: string;
}

export function ContactRoute({ icon: Icon, label, value, href, copyValue }: ContactRouteProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fail silently, nothing to do
    }
  };

  return (
    <div className="group flex flex-1 items-center gap-4 border-t border-day-border py-6 first:border-t-0 dark:border-night-border sm:border-t-0 sm:border-l sm:py-0 sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-day-border text-day-ink/70 transition-colors duration-300 ease-editorial group-hover:border-day-burgundy/40 group-hover:text-day-burgundy dark:border-night-border dark:text-night-ink/70 dark:group-hover:border-night-burgundy/40 dark:group-hover:text-night-burgundy">
        <Icon size={17} strokeWidth={1.5} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-day-burgundy dark:text-night-burgundy">
          {label}
        </div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-[14px] text-day-ink dark:text-night-ink"
          >
            <span className="relative">
              {value}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-day-burgundy/60 transition-all duration-300 ease-editorial group-hover:w-full dark:bg-night-burgundy/60" />
            </span>
            <ArrowUpRight
              size={13}
              strokeWidth={1.75}
              className="shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <div className="mt-1 flex items-center gap-2">
            <span className="truncate text-[14px] text-day-ink dark:text-night-ink">
              {value}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium tracking-[0.06em] text-day-muted transition-colors duration-300 ease-editorial hover:text-day-burgundy dark:text-night-muted dark:hover:text-night-burgundy"
            >
              {copied ? (
                <Check size={12} strokeWidth={2} />
              ) : (
                <Copy size={12} strokeWidth={1.75} />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
