/**
 * Polish typography helpers (§5.2).
 * - Hard space after one-letter conjunctions/prepositions (sierotki).
 * - Hard space between number and unit-ish word ("10 godzin").
 */
const NBSP = ' ';

export function orphans(text: string): string {
  return text
    // one-letter words: a i o u w z (+ uppercase), also after another orphan
    .replace(/(^|[\s („])([aiouwzAIOUWZ])\s+/g, `$1$2${NBSP}`)
    .replace(/(^|[\s („])([aiouwzAIOUWZ])\s+/g, `$1$2${NBSP}`)
    // number followed by word
    .replace(/(\d)\s+(?=\p{L})/gu, `$1${NBSP}`)
    // en dash: keep with previous word
    .replace(/\s+–\s+/g, `${NBSP}– `);
}
