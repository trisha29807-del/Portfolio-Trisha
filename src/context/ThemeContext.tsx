import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Edition = "day" | "night";

interface ThemeContextValue {
  edition: Edition;
  toggleEdition: () => void;
  setEdition: (edition: Edition) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "trisha-portfolio-edition";

function getInitialEdition(): Edition {
  if (typeof window === "undefined") return "day";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "day" || stored === "night") return stored;

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "night" : "day";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [edition, setEditionState] = useState<Edition>(getInitialEdition);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", edition === "night");
    root.style.colorScheme = edition === "night" ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, edition);
  }, [edition]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      edition,
      toggleEdition: () =>
        setEditionState((prev) => (prev === "day" ? "night" : "day")),
      setEdition: setEditionState,
    }),
    [edition]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
