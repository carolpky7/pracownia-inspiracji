# Pracownia Inspiracji Rozwoju · strona (Astro)

Strona Katarzyny Janiny Lipskiej, budowana według `../Guideline.md`.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statyczny build do dist/
npm run preview  # podgląd buildu
npm run build:preview  # build TESTOWY: przykładowe wydarzenia i opinie + noindex
```

Wersja testowa na Netlify: `netlify.toml` uruchamia `npm run build:preview`. Przy ręcznym wgrywaniu (Netlify Drop)
najpierw `npm run build:preview`, potem przeciągnij folder `dist`. Przed publikacją produkcyjną: `npm run build`.

Wymagany Node 22.12 lub nowszy (wymóg Astro 7), npm 9.6.5+.

## Struktura

```
src/
  styles/      tokens.css (kolory, typografia, ruch) · base.css (baza, przyciski, eyebrow, linki) · global.css
  data/        pillars.ts  ← jedno źródło prawdy: menu, blok filarów, stopka
               events.json ← wydarzenia (przeszłe znikają same, przy buildzie i w przeglądarce)
               site.ts     ← dane kontaktowe, SEO
  lib/typo.ts  helper do sierotek (twarde spacje po „w”, „i”, „z”…)
  components/  Header · Hero · PillarsGrid · Manifest · EventList · HowIWork · Testimonials · FinalCta · Footer
               Signet (sygnet SVG z prymitywów) · PillarIcon (mikro-ikony filarów) · Placeholder (miejsce na zdjęcie)
  layouts/     Base.astro (head, SEO, JSON-LD, skip-link)
  pages/       index.astro · 404.astro
public/        logo/ (przycięte PNG @2x/@3x) · favicon.svg · apple-touch-icon.png · og-default.png
```

## Stan (etap 1: strona główna)

Gotowe: tokeny, fonty self-hosted (Fontsource: Gloock, Albert Sans, Corinthia), sygnet SVG, header z mega-menu
i menu mobilnym, hero, blok filarów (4 kolumny / 2×2 / akordeon), manifest, wydarzenia, „Jak pracuję”,
opinie, CTA, stopka, 404, JSON-LD (LocalBusiness, Person, Event).

Następne: szablon huba filaru i podstrony (§14 p. 6), wydarzenia, Notatnik, kontakt z formularzem.

## Decyzje odbiegające od dosłownego brzmienia guideline’u

- **Biel `#FFFFFF` jako tło.** §0 i §5.1 każą użyć czystej bieli, a checklista §12 jej zabrania. Wygrała biel (§0/§5.1),
  bez szumu papieru z §5.6, żeby nie szarzała.
- **Przycisk główny `#E00087` zamiast `#EC008C`.** Biały tekst na `#EC008C` ma kontrast 4.25:1, poniżej progu WCAG AA.
  `#E00087` wygląda praktycznie tak samo, a ma 4.65:1. Sygnet, kropki i akcenty zostają w `#EC008C`.
- **Teksty w zieleni i cynobrze** używają wariantów `--pillar-ngo-ink` i `--pillar-biz-ink`, bo kolory bazowe mają na bieli
  4.3–4.4:1. Kreski, ikony i kropki zostają w kolorach bazowych.
- **Nazwy tokenów:** guideline używa raz `--pink`/`--text-main`, raz `--magenta`/`--ink`/`--paper`. W `tokens.css` są
  zdefiniowane obie wersje (aliasy).

## Do uzupełnienia przez klientkę (§13)

- Zdjęcia: hero i portret „Moja droga” są już wstawione (`src/assets/photos`, Astro generuje AVIF/WebP). Przydałyby się
  oryginały w wyższej rozdzielczości (obecne mają 1440 px szerokości, guideline zaleca min. 2400 px wysokości dla hero).
- Skan podpisu (teraz zastępczo font Corinthia), logo w wektorze.
- **Wydarzenie 24.10.2026 „Moje JA, Moja MOC”** jest wzięte z przykładu w §4.1. Trzeba potwierdzić datę, godzinę i miejsce.
- Zgody na publikację opinii z nazwiskami. Treść filaru Biznes. Czy była dyrektorką szkoły (lead filaru Edukacja).
- Teksty w „Jak pracuję” i w CTA końcowym to propozycje do akceptacji.
- Domena: w `astro.config.mjs` jest roboczo `pracowniainspiracji.pl`.
