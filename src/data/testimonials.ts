import type { ImageMetadata } from 'astro';
import p1 from '../assets/testimonials/preview-1.jpg';
import p2 from '../assets/testimonials/preview-2.jpg';
import p3 from '../assets/testimonials/preview-3.jpg';
import p4 from '../assets/testimonials/preview-4.jpg';
import type { Pillar } from './pillars';

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  pillar?: Pillar['id'];
  /** Square photo; any aspect is cropped to 1:1. Without it, initials are shown in the same square. */
  photo?: ImageMetadata;
  /**
   * Fictional demo content for the design preview (names, quotes and stock photos).
   * Shown only in `npm run dev` or with PUBLIC_SHOW_PREVIEW_EVENTS=true. Never publish.
   */
  preview?: boolean;
}

const all: Testimonial[] = [
  // --- PREVIEW (fikcyjne) ---
  {
    quote:
      'Po raz pierwszy od lat cała rada pedagogiczna wyszła ze szkolenia, rozmawiając o tym, co zmienimy od poniedziałku. Bez slajdów, za to z konkretami.',
    author: 'Anna Malinowska',
    context: 'dyrektorka szkoły podstawowej · warsztat dla rady pedagogicznej',
    pillar: 'edukacja',
    photo: p1,
    preview: true,
  },
  {
    quote:
      'Pojechałam na jeden dzień, a wróciłam z czymś, co noszę w sobie do dziś. Krąg kobiet, sad i dużo ciszy, w której wreszcie usłyszałam siebie.',
    author: 'Joanna Wrona',
    context: 'uczestniczka warsztatów Moje JA, Moja MOC',
    pillar: 'osobisty',
    photo: p2,
    preview: true,
  },
  {
    quote:
      'Zespół był zmęczony i podzielony. Po dwóch dniach z Katarzyną mamy wspólny język i kilka prostych zasad, których naprawdę się trzymamy.',
    author: 'Marta Zielińska',
    context: 'kierowniczka zespołu obsługi klienta',
    pillar: 'biznes',
    photo: p3,
    preview: true,
  },
  {
    quote:
      'Dzięki warsztatom z metody projektu napisałyśmy pierwszy wniosek i dostałyśmy dofinansowanie. Teraz całe koło wie, od czego zacząć następny.',
    author: 'Beata Sowa',
    context: 'przewodnicząca Koła Gospodyń Wiejskich',
    pillar: 'ngo',
    photo: p4,
    preview: true,
  },

  // --- PRAWDZIWE (z Facebooka) — TODO(§13.8): potwierdzić zgody na imię i nazwisko ---
  {
    quote:
      'Wspaniałe warsztaty dla każdej kobiety. Pełne pracy, emocji, z wspaniałymi kobietami. W klimatycznym otoczeniu Ziemi Sandomierskiej.',
    author: 'Ewelina Wójcik-Tworzewska',
    context: 'o warsztatach dla kobiet',
    pillar: 'osobisty',
  },
  {
    quote: 'Fantastyczna kobieta, pełna pomysłów, inspiracji i energii.',
    author: 'Paulina Rak',
    context: 'opinia na Facebooku',
    pillar: 'osobisty',
  },
];

const SHOW_PREVIEW =
  import.meta.env.DEV || import.meta.env.MODE === 'preview' || import.meta.env.PUBLIC_SHOW_PREVIEW_EVENTS === 'true';

/** In preview mode: only the fictional set. In production: only real testimonials. */
export const testimonials: Testimonial[] = SHOW_PREVIEW ? all.filter((t) => t.preview) : all.filter((t) => !t.preview);

export const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
