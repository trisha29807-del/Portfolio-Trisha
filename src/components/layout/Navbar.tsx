import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "work", label: "Selected Work" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current?.disconnect();
    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (id: string) => (event: MouseEvent) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    setMenuOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-day-border/80 bg-day-bg/90 text-day-ink backdrop-blur-xl dark:border-night-border/80 dark:bg-night-bg/90 dark:text-night-ink transition-[padding,box-shadow] duration-500 ease-editorial ${scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.16)]" : ""}`}
    >
      <div
        className={`container-editorial flex items-center justify-between transition-[padding] duration-500 ease-editorial ${scrolled ? "py-4" : "py-5"}`}
      >
        <a
          href="#cover"
          onClick={handleNavClick("cover")}
          className="font-sans text-[22px] font-black tracking-[-0.08em] text-day-ink dark:text-night-ink"
        >
          TRISHA
        </a>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`relative pb-1 text-[11px] font-medium tracking-[0.11em] uppercase transition-colors duration-300 after:absolute after:-bottom-[1px] after:left-0 after:h-px after:bg-day-burgundy after:transition-all after:duration-300 dark:after:bg-night-burgundy ${
                  activeId === item.id
                    ? "text-day-burgundy after:w-full dark:text-night-burgundy"
                    : "text-day-ink/65 after:w-0 hover:text-day-ink hover:after:w-full dark:text-night-ink/65 dark:hover:text-night-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation menu" className="lg:hidden">
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-day-border/80 transition-[max-height] duration-500 ease-editorial dark:border-night-border/80 lg:hidden ${menuOpen ? "max-h-96" : "max-h-0 border-t-0"}`}>
        <ul className="container-editorial flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className={`block py-3 text-[12px] font-medium tracking-[0.12em] uppercase ${
                  activeId === item.id
                    ? "text-day-burgundy dark:text-night-burgundy"
                    : "text-day-ink/70 dark:text-night-ink/70"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
