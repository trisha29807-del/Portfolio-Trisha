import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "work", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "achievements", label: "ACHIEVEMENTS" },
  { id: "contact", label: "CONTACT ME" },
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
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => Boolean(el));
    observerRef.current?.disconnect();
    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
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
    <nav className={"sticky top-0 z-50 h-[50px] bg-[#123F69] text-white transition-shadow duration-300 " + (scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,.25)]" : "")}>
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-3 sm:px-5 lg:px-7">
        <a href="#cover" onClick={handleNavClick("cover")} className="font-boldfat text-[24px] leading-none tracking-[-0.03em] text-[#C9C8FF]">
          TRISHA
        </a>

        <ul className="hidden h-full items-center gap-7 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <a href={"#" + item.id} onClick={handleNavClick(item.id)} aria-current={activeId === item.id ? "true" : undefined} className="flex h-full items-center font-seasons text-[15px] text-white transition-opacity hover:opacity-75">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation menu" className="lg:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={"overflow-hidden bg-[#123F69] transition-[max-height] duration-300 lg:hidden " + (menuOpen ? "max-h-96" : "max-h-0")}>
        <ul className="flex flex-col gap-1 px-5 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={"#" + item.id} onClick={handleNavClick(item.id)} className="block py-2 font-seasons text-sm text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
