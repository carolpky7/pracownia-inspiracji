import raw from './events.json';
import type { Pillar } from './pillars';

export interface EventItem {
  title: string;
  date: string; // YYYY-MM-DD
  time?: string;
  place: string;
  region?: string;
  pillar: Pillar['id'];
  url: string;
  status: 'open' | 'full' | 'past';
  /** Demo entry for design preview — never shown in production builds, never in JSON-LD */
  preview?: boolean;
}

/**
 * Demo events (preview: true) are visible in `npm run dev` and `npm run build:preview` (astro build --mode preview).
 * Before go-live: delete them from events.json.
 */
const SHOW_PREVIEW =
  import.meta.env.DEV || import.meta.env.MODE === 'preview' || import.meta.env.PUBLIC_SHOW_PREVIEW_EVENTS === 'true';

const MONTHS = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];
const DAYS = ['NDZ', 'PON', 'WT', 'ŚR', 'CZW', 'PT', 'SOB'];

/** Upcoming events, sorted. Past events disappear automatically (at build and in the browser). */
export function upcomingEvents(now = new Date()): EventItem[] {
  const today = now.toISOString().slice(0, 10);
  return (raw as EventItem[])
    .filter((e) => e.status !== 'past' && e.date >= today)
    .filter((e) => SHOW_PREVIEW || !e.preview)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function dateParts(e: EventItem) {
  const d = new Date(`${e.date}T12:00:00`);
  return {
    day: String(d.getDate()),
    dayMonth: `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`,
    month: MONTHS[d.getMonth()],
    weekday: DAYS[d.getDay()],
    iso: e.time ? `${e.date}T${e.time}` : e.date,
  };
}
