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
    "bg-day-burgundy text-day-bg shadow-[0_10px_30px_-12px_rgba(185,181,255,0.65)] hover:shadow-[0_16px_38px_-12px_rgba(185,181,255,0.75)] hover:-translate-y-px hover:bg-day-burgundy/95 dark:bg-night-burgundy dark:text-night-bg dark:hover:shadow-[0_16px_38px_-12px_rgba(185,181,255,0.55)] dark:hover:bg-night-burgundy/95",
  secondary:
    "border border-day-burgundy/70 text-day-ink hover:-translate-y-px hover:border-day-burgundy hover:bg-day-burgundy hover:text-day-bg dark:border-night-burgundy/70 dark:text-night-ink dark:hover:border-night-burgundy dark:hover:bg-night-burgundy dark:hover:text-night-bg",
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
