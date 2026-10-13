// Pure helpers (run in Node at build time and in the browser). No DOM access here.

export const NBSP = ' '
export const NNBSP = ' '

/** HTML-escape a string. */
export function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * French typography on text nodes only (never inside tags, <script>, <style>):
 * - narrow no-break space before ; ! ?
 * - no-break space before :
 * - no-break spaces inside « »
 * Only existing spaces are converted, nothing is inserted (URLs and 12:30 stay untouched).
 */
export function typo(html: string): string {
  const parts = html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/g)
  return parts
    .map((p) => {
      if (p.startsWith('<')) return p
      return p
        .replace(/[  ]+([;!?])/g, `${NNBSP}$1`)
        .replace(/[  ]+(:)/g, `${NBSP}$1`)
        .replace(/«[  ]+/g, `«${NBSP}`)
        .replace(/[  ]+»/g, `${NBSP}»`)
    })
    .join('')
}

/** 2.5 -> "2,50 €" with a no-break space. */
export function eur(n: number): string {
  return n.toFixed(2).replace('.', ',') + NBSP + '€'
}

/** Minutes since midnight (0 to 1500) -> "11h", "1h", "23h40". */
export function hLabel(totalMinutes: number): string {
  const m = ((totalMinutes % 1440) + 1440) % 1440
  const h = Math.floor(m / 60)
  const mm = m % 60
  return mm === 0 ? `${h}h` : `${h}h${String(mm).padStart(2, '0')}`
}

/** "HH:MM" -> minutes. */
export function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** "2026-09-28" -> "28 septembre 2026". */
export function dateFr(iso: string): string {
  const d = new Date(iso + 'T12:00:00')
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
}

export function slug(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
