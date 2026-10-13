// REAL DATA: verbatim Google reviews mirrored at https://epicerie.tel/f/epicerie-de-liberte-14363773/
// Spelling kept exactly as written. Attributed to the platform only: no reviewer names, ever (PLAN.md §4).

export interface Review {
  id: string
  text: string
  /** Approximate date as published by the mirror, ISO month precision. */
  approxDate: string
  dateLabel: string
  platform: 'Google'
  /** false for the quote that mentions alcohol: never in hero or visual contexts (Loi Évin). */
  usableInHero: boolean
  theme: 'accueil' | 'horaires' | 'colis' | 'securite' | 'gamme' | 'serieux' | 'general'
}

export const reviews: Review[] = [
  { id: 'r1', text: 'Serviable et accueillant…Au top 👌', approxDate: '2026-07-01', dateLabel: 'juil. 2026', platform: 'Google', usableInHero: true, theme: 'accueil' },
  { id: 'r2', text: 'Super market ultra bien bonbon gratuit à l’achat alcool caissier divin (ultra sympa et aimable)', approxDate: '2026-06-20', dateLabel: 'juin 2026', platform: 'Google', usableInHero: false, theme: 'accueil' },
  { id: 'r3', text: 'super acceuil le personnel est au top je recommande !! et super safe pour les filles', approxDate: '2026-05-30', dateLabel: 'mai 2026', platform: 'Google', usableInHero: true, theme: 'securite' },
  { id: 'r4', text: 'super accueil merci beaucoup des amours', approxDate: '2026-05-30', dateLabel: 'mai 2026', platform: 'Google', usableInHero: true, theme: 'accueil' },
  { id: 'r5', text: 'Accueil chaleureux, le personnel est très sympathique. Sérieux et bien présenté.', approxDate: '2026-03-12', dateLabel: 'mars 2026', platform: 'Google', usableInHero: true, theme: 'serieux' },
  { id: 'r6', text: 'Je recommande vivement cette épicerie.', approxDate: '2026-03-12', dateLabel: 'mars 2026', platform: 'Google', usableInHero: true, theme: 'general' },
  { id: 'r7', text: 'Très bon commerçant très bon service pour les colis et amabilité', approxDate: '2026-03-01', dateLabel: 'mars 2026', platform: 'Google', usableInHero: true, theme: 'colis' },
  { id: 'r8', text: 'Très bonne épicerie, le personel est vraiment sympas je recommande', approxDate: '2026-02-28', dateLabel: 'févr. 2026', platform: 'Google', usableInHero: true, theme: 'accueil' },
  { id: 'r9', text: 'Épicerie. Très chaleureux. Ont trouvé de tout. A des. Heures très tard.', approxDate: '2026-02-28', dateLabel: 'févr. 2026', platform: 'Google', usableInHero: true, theme: 'gamme' },
  { id: 'r10', text: '7 jours sur 7.jusqua 1 heure du matin déposer.recuperer.les colis génial. Magnifique.merci pour tout les rennais', approxDate: '2026-02-28', dateLabel: 'févr. 2026', platform: 'Google', usableInHero: true, theme: 'horaires' },
  { id: 'r11', text: 'L’équipe est au top pour les courses de dernière minute ! Je recommande vivement.', approxDate: '2026-02-28', dateLabel: 'févr. 2026', platform: 'Google', usableInHero: true, theme: 'horaires' },
]

export interface OwnerReply {
  id: string
  text: string
}

export const ownerReplies: OwnerReply[] = [
  { id: 'o1', text: 'Merci, c’est très gentil ! Au plaisir de vous revoir.' },
  { id: 'o2', text: 'Merci 🙏🏼' },
]

/** Words customers actually use (PLAN.md §4 "Emotional vocabulary"). */
export const reviewWords: { word: string; weight: 1 | 2 | 3 }[] = [
  { word: 'accueil', weight: 3 },
  { word: 'chaleureux', weight: 3 },
  { word: 'au top', weight: 3 },
  { word: 'sympa', weight: 2 },
  { word: 'serviable', weight: 2 },
  { word: 'dernière minute', weight: 2 },
  { word: '7 jours sur 7', weight: 2 },
  { word: 'jusqu’à 1h', weight: 3 },
  { word: 'colis', weight: 3 },
  { word: 'safe', weight: 2 },
  { word: 'sérieux', weight: 1 },
  { word: 'bien présenté', weight: 1 },
  { word: 'aimable', weight: 1 },
  { word: 'je recommande', weight: 2 },
]
