// Opening-hours logic. Day index: 0 = Lundi ... 6 = Dimanche. Minutes since midnight.
// Handles sessions that cross midnight (Lundi 15h to Mardi 1h belongs to Lundi).
import { DAYS, hours, type DayHours, type ServiceKey } from '../data/hours'
import { hLabel, toMin } from './format'

export interface Status {
  open: boolean
  /** minutes (0..1440) at which the current session closes, when open */
  closesAt?: number
  /** minutes at which the next session opens, when closed */
  opensAt?: number
  /** day index of the next opening, when closed */
  opensDay?: number
}

const prev = (d: number) => (d + 6) % 7
const next = (d: number) => (d + 1) % 7

function span(h: DayHours): { open: number; close: number } {
  const o = toMin(h.open)
  let c = toMin(h.close)
  if (c <= o) c += 1440
  return { open: o, close: c }
}

export function statusAt(service: ServiceKey, day: number, minute: number): Status {
  const table = hours[service]
  const today = span(table[day])
  if (minute >= today.open && minute < Math.min(today.close, 1440)) {
    return { open: true, closesAt: today.close % 1440 || 1440 }
  }
  const yesterday = span(table[prev(day)])
  if (yesterday.close > 1440 && minute < yesterday.close - 1440) {
    return { open: true, closesAt: yesterday.close - 1440 }
  }
  if (minute < today.open) return { open: false, opensAt: today.open, opensDay: day }
  const tomorrow = span(table[next(day)])
  return { open: false, opensAt: tomorrow.open, opensDay: next(day) }
}

export interface Now {
  day: number
  minute: number
  forced: boolean
}

const MAP: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }
const URL_DAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']

/** Current time in Europe/Paris. `?heure=03:10` and `?jour=mar` force a demo time (testing, README). */
export function parisNow(search = ''): Now {
  const q = new URLSearchParams(search)
  const forcedHour = q.get('heure')
  const forcedDay = q.get('jour')
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: hours.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0'
  let day = MAP[get('weekday')] ?? 0
  let minute = Number(get('hour')) * 60 + Number(get('minute'))
  let forced = false
  if (forcedHour && /^\d{1,2}:\d{2}$/.test(forcedHour)) {
    minute = toMin(forcedHour)
    forced = true
  }
  if (forcedDay && URL_DAYS.includes(forcedDay)) {
    day = URL_DAYS.indexOf(forcedDay)
    forced = true
  }
  return { day, minute, forced }
}

export function dayLabel(day: number): string {
  return DAYS[day]
}

/** "Ouvert jusqu'à 1h" / "Fermé, ouvre à 11h" style short label. */
export function pillText(s: Status, nowDay: number): { text: string; state: 'open' | 'closed' } {
  if (s.open) return { text: `Ouvert jusqu’à ${hLabel(s.closesAt ?? 0)}`, state: 'open' }
  const when = s.opensDay === nowDay ? `ouvre à ${hLabel(s.opensAt ?? 0)}` : `ouvre ${DAYS[s.opensDay ?? 0].toLowerCase()} à ${hLabel(s.opensAt ?? 0)}`
  return { text: `Fermé, ${when}`, state: 'closed' }
}

/** Minutes until the next change (open to close or close to open). */
export function minutesToChange(s: Status, nowDay: number, nowMinute: number): number {
  if (s.open) {
    const c = s.closesAt ?? 0
    return c >= nowMinute ? c - nowMinute : c + 1440 - nowMinute
  }
  const o = s.opensAt ?? 0
  const dayDiff = (((s.opensDay ?? nowDay) - nowDay) + 7) % 7
  return dayDiff * 1440 + o - nowMinute
}

export function sentence(day: number, minute: number): string {
  const shop = statusAt('shop', day, minute)
  const parcel = statusAt('parcel', day, minute)
  const t = hLabel(minute)
  const shopTxt = shop.open
    ? `l’épicerie est ouverte (jusqu’à ${hLabel(shop.closesAt ?? 0)})`
    : `l’épicerie est fermée (ouvre à ${hLabel(shop.opensAt ?? 0)})`
  const parcelTxt = parcel.open
    ? `le relais colis est ouvert (jusqu’à ${hLabel(parcel.closesAt ?? 0)})`
    : parcel.opensDay === day || (parcel.opensAt != null && parcel.opensDay === next(day) && minute > 22 * 60)
      ? `le relais colis est fermé (${parcel.opensDay === day ? `ouvre à ${hLabel(parcel.opensAt ?? 0)}` : `il ferme à 22h`})`
      : `le relais colis est fermé`
  return `${DAYS[day]} ${t} : ${shopTxt}, ${parcelTxt}.`
}

export function dayRange(service: ServiceKey, day: number): string {
  const h = hours[service][day]
  return `${hLabel(toMin(h.open))} à ${hLabel(toMin(h.close))}`
}
