// REAL DATA, CONFLICTING SOURCES (PLAN.md §1 "Opening hours"). Not confirmed by the owner.
// One config object: the whole site (dial, status pill, tables, JSON-LD) reads from here.

export interface DayHours {
  open: string // "HH:MM"
  close: string // "HH:MM", a close time <= open means the next day
}

export type ServiceKey = 'shop' | 'shopAlt' | 'parcel'

export interface HoursException {
  date: string // YYYY-MM-DD
  label: string
  closed?: boolean
  from?: string
  to?: string
}

export interface HoursNotice {
  from: string // ISO datetime
  to: string
  text: string
  source: string
}

export const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] as const
export const DAYS_SHORT = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] as const

const d = (open: string, close: string): DayHours => ({ open, close })

export const hours = {
  timezone: 'Europe/Paris',
  confirmed: false,
  note: 'Horaires à confirmer : les sources ne concordent pas (Google et annuaires). Le magasin ferme à 1h tous les soirs.',
  /** Épicerie, Google / epicerie.tel set (preferred, matches the relay pattern). */
  shop: [
    d('15:00', '01:00'),
    d('11:00', '01:00'),
    d('11:00', '01:00'),
    d('11:00', '01:00'),
    d('11:00', '01:00'),
    d('11:00', '01:00'),
    d('15:00', '01:00'),
  ] as DayHours[],
  /** Épicerie, bottin.fr set (kept for reference, not displayed as certain). */
  shopAlt: [
    d('15:00', '01:00'),
    d('15:00', '01:00'),
    d('15:00', '01:00'),
    d('15:00', '01:00'),
    d('15:00', '01:00'),
    d('15:00', '01:00'),
    d('12:00', '01:00'),
  ] as DayHours[],
  /** Relais colis, La Poste / Pickup. */
  parcel: [
    d('15:00', '22:00'),
    d('11:00', '22:00'),
    d('11:00', '22:00'),
    d('11:00', '22:00'),
    d('11:00', '22:00'),
    d('11:00', '22:00'),
    d('15:00', '22:00'),
  ] as DayHours[],
  sources: {
    shop: 'Google via epicerie.tel (mise à jour du 09/10/2026)',
    shopAlt: 'bottin.fr',
    parcel: 'La Poste (localiser.laposte.fr) et relais.pickup.fr',
  },
  /** Public holidays and seasonal closures: no data found (TODO owner). */
  exceptions: [] as HoursException[],
  /**
   * Exceptional notices shown in the dismissible « Avis » banner. Empty by default.
   * Example kept for the shape (real precedent, 26 June 2026, Ille-et-Vilaine prefecture):
   * {
   *   from: '2026-06-26T18:00:00+02:00', to: '2026-06-27T08:00:00+02:00',
   *   text: 'Vente d’alcool à emporter suspendue ce soir par arrêté préfectoral.',
   *   source: 'rennes-infos-autrement.fr'
   * }
   */
  notices: [] as HoursNotice[],
}
