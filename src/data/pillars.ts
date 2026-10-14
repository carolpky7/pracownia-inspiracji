/**
 * Single source of truth for the four pillars (§11).
 * Menu, pillars block and footer are all generated from this file.
 * Order and color mapping are fixed (§4.2): dot → ray-left → ray-mid → ray-right.
 */
export type PillarIcon = 'dot' | 'ray-left' | 'ray-mid' | 'ray-right';

export interface PillarLink {
  label: string;
  href: string;
}

export interface Pillar {
  id: 'osobisty' | 'edukacja' | 'ngo' | 'biznes';
  /** Completes the sentence "Pracownia Inspiracji Rozwoju…" */
  label: string;
  /** Short label for navigation and tags */
  short: string;
  icon: PillarIcon;
  href: string;
  lead: string;
  /** Who it is for — used in mega menu */
  audience: string;
  links: PillarLink[];
  /** Extra block when list is short (Biznes, §4.2) */
  note?: { text: string; cta: PillarLink };
}

export const pillars: Pillar[] = [
  {
    id: 'osobisty',
    label: 'Osobistego',
    short: 'Osobisty',
    icon: 'dot',
    href: '/rozwoj-osobisty',
    lead: 'Dla kobiet, które chcą wrócić do siebie i do swojej mocy.',
    audience: 'Kobiety, mamy z córkami, osoby prywatne',
    links: [
      { label: 'Moje warsztaty', href: '/rozwoj-osobisty/warsztaty' },
      { label: 'Sesje 1:1', href: '/rozwoj-osobisty/sesje-1-1' },
      { label: 'Wystąpienia', href: '/rozwoj-osobisty/wystapienia' },
      { label: 'Współpraca', href: '/rozwoj-osobisty/wspolpraca' },
    ],
  },
  {
    id: 'edukacja',
    label: 'Edukacji',
    short: 'Edukacja',
    icon: 'ray-left',
    href: '/edukacja',
    // TODO(§13.7): potwierdzić z klientką, czy była dyrektorką szkoły.
    lead: 'Dla nauczycieli i dyrektorów. Od kogoś, kto sam kierował szkolnym zespołem.',
    audience: 'Nauczyciele, dyrektorzy, rady pedagogiczne',
    links: [
      { label: 'Produkty online', href: '/edukacja/produkty-online' },
      { label: 'Warsztaty na żywo', href: '/edukacja/warsztaty-na-zywo' },
      { label: '1:1 dla nauczyciela', href: '/edukacja/1-1-dla-nauczyciela' },
      { label: '1:1 dla dyrektora', href: '/edukacja/1-1-dla-dyrektora' },
      { label: 'Współpraca', href: '/edukacja/wspolpraca' },
    ],
  },
  {
    id: 'ngo',
    label: 'NGO',
    short: 'NGO',
    icon: 'ray-mid',
    href: '/ngo',
    lead: 'Dla KGW i organizacji, które chcą działać z głową i z sercem.',
    audience: 'Organizacje pozarządowe, KGW, animatorki lokalne',
    links: [
      { label: 'KGW', href: '/ngo/kgw' },
      { label: 'Metoda projektu', href: '/ngo/metoda-projektu' },
      { label: 'Wystąpienia', href: '/ngo/wystapienia' },
      { label: 'Współpraca', href: '/ngo/wspolpraca' },
    ],
  },
  {
    id: 'biznes',
    label: 'Biznesu',
    short: 'Biznes',
    icon: 'ray-right',
    href: '/biznes',
    lead: 'Warsztaty szyte na miarę Twojego zespołu.',
    audience: 'Firmy i zespoły',
    links: [
      // TODO(§13.4): „Warsztaty dla…” — dla kogo? Lista tematów.
      { label: 'Warsztaty dla zespołów', href: '/biznes/warsztaty' },
    ],
    note: {
      text: 'Kompetencje miękkie, facylitacja, odporność zespołu. Program układamy razem, pod Wasze wyzwania.',
      cta: { label: 'Porozmawiajmy', href: '/kontakt?filar=biznes' },
    },
  },
];

export const pillarById = Object.fromEntries(pillars.map((p) => [p.id, p])) as Record<Pillar['id'], Pillar>;
