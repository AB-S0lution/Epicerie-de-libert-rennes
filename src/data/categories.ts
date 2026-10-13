// SAMPLE DATA – not supplied by the business; replace with real data.
// The rayons are inferred from the declared activity (PLAN.md §3). No catalogue is published by the shop.

export type RayonId =
  | 'sale' | 'sucre' | 'boissons' | 'fruits' | 'snacks'
  | 'petitdej' | 'menager' | 'hygiene' | 'depannage' | 'breizh'

export interface Rayon {
  id: RayonId
  label: string
  short: string
  blurb: string
  /** Illustration tint (original SVG art only, never UI chrome). */
  tint: string
  /** Pictogram key used for the bento tile and the category header. */
  glyph: string
  /** Bento tile size hint for the home page. */
  size: 'xl' | 'l' | 'm' | 's'
  isSample: true
  toConfirm?: boolean
}

export const rayons: Rayon[] = [
  { id: 'depannage', label: 'Première nécessité et dépannage', short: 'Dépannage', blurb: 'Piles, chargeurs, briquets : ce qui manque toujours à 23h.', tint: '#F4A93A', glyph: 'battery', size: 'xl', isSample: true },
  { id: 'sale', label: 'Épicerie salée', short: 'Salé', blurb: 'Pâtes, riz, sauces, conserves : de quoi dîner sans y penser.', tint: '#6F8CB0', glyph: 'jar', size: 'l', isSample: true },
  { id: 'boissons', label: 'Boissons fraîches', short: 'Boissons', blurb: 'Eaux, softs et jus, au frais pour la sortie ou le retour.', tint: '#4F9DB5', glyph: 'bottle', size: 'm', isSample: true },
  { id: 'fruits', label: 'Fruits et légumes', short: 'Fruits et légumes', blurb: 'Le panier du quotidien, à la pièce ou au kilo.', tint: '#68A66F', glyph: 'apple', size: 'm', isSample: true },
  { id: 'snacks', label: 'Snacks et sandwichs', short: 'Snacks', blurb: 'Sandwichs, croque-monsieur, chips : le dîner vite fait.', tint: '#D1913A', glyph: 'sandwich', size: 'l', isSample: true },
  { id: 'petitdej', label: 'Petit-déjeuner et laitiers', short: 'Petit-déj', blurb: 'Lait, œufs, beurre et céréales pour le lendemain matin.', tint: '#D9B650', glyph: 'carton', size: 'm', isSample: true },
  { id: 'sucre', label: 'Épicerie sucrée', short: 'Sucré', blurb: 'Biscuits, chocolat, confitures : le petit plaisir de fin de soirée.', tint: '#C26D5F', glyph: 'bar', size: 'm', isSample: true },
  { id: 'menager', label: 'Produits ménagers', short: 'Ménager', blurb: 'Liquide vaisselle, éponges, papier toilette, lessive.', tint: '#6FA5A8', glyph: 'spray', size: 'm', isSample: true },
  { id: 'hygiene', label: 'Hygiène et soin', short: 'Hygiène', blurb: 'Dentifrice, gel douche, mouchoirs : les indispensables.', tint: '#7FA0B8', glyph: 'tube', size: 's', isSample: true },
  { id: 'breizh', label: 'Coin Breizh (à confirmer)', short: 'Coin Breizh', blurb: 'Idée de rayon régional : le magasin ne confirme pas encore ces produits.', tint: '#5B6E8C', glyph: 'crepe', size: 's', isSample: true, toConfirm: true },
]

export const rayonById = (id: string): Rayon | undefined => rayons.find((r) => r.id === id)
