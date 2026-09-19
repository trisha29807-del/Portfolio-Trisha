# Trisha — Editorial Portfolio

Personal portfolio built as an "editorial × luxury × modern engineering" print-inspired site.
This drop contains the **01 — Cover** section only; further sections will be added
incrementally into `src/App.tsx`.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (custom Day/Night color tokens in `tailwind.config.ts`)
- Framer Motion (subtle fade/slide reveals only)
- Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`).

## Portrait

`src/components/Cover/Portrait.tsx` now renders the real photo at
`src/assets/portrait.jpg`. It's been cropped to the site's 27:34 editorial
bust framing, with the background depth-of-field blurred and color-graded
toward the site's warm burgundy/ivory palette (classical color-grade +
blur, not a hard cutout — no facial features or skin tone were altered,
only crop, white balance/exposure, and mild sharpening).

To swap in a different photo later, replace `src/assets/portrait.jpg` with
a new ~3:4 image (portrait orientation, head + upper torso framing).

## Resume

Drop the CV PDF at `public/resume.pdf` — the "Download CV" button already links there.

## Theming

Day and Night editions are two intentionally distinct palettes (not an inversion),
defined as `day.*` / `night.*` tokens in `tailwind.config.ts`. Switching is handled by
`ThemeContext`, which toggles a `dark` class on `<html>`, persists the choice to
`localStorage`, and respects the visitor's OS-level preference on first visit.

## Accessibility & motion

- Keyboard focus states are visible on all interactive elements.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).
- Semantic landmarks (`header`, `main`, `footer`, `dl`) are used throughout.

## Folder structure

```
src/
  components/
    Cover/        → Cover section + its sub-parts (Portrait, QuickInfo, marks…)
    ui/            → shared primitives (Button, …)
  context/         → ThemeContext (Day/Night edition state)
  index.css        → Tailwind layers + base editorial styles
  App.tsx
  main.tsx
```
