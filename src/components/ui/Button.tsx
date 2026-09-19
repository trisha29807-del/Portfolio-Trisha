import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[13px] font-medium tracking-[0.14em] uppercase transition-all duration-300 ease-editorial focus-visible:outline-offset-4 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-day-burgundy text-day-bg shadow-[0_1px_2px_rgba(122,22,38,0)] hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] hover:-translate-y-px hover:bg-day-burgundy/95 dark:bg-night-burgundy dark:text-night-bg dark:hover:shadow-[0_10px_24px_-8px_rgba(199,73,92,0.35)] dark:hover:bg-night-burgundy/95",
  secondary:
    "border border-day-ink/70 text-day-ink hover:-translate-y-px hover:border-day-ink hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:border-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg",
};

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
