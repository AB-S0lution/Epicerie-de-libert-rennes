// REAL DATA (verified, sources in PLAN.md §1). Not sample data.
// Anything marked `confirmed: false` must be validated by the owner before it is shown as certain.

export const PHONE_CONFIRMED = false

export interface TransportStop {
  kind: 'metro' | 'bus' | 'parking' | 'velo'
  name: string
  detail: string
  distance?: string
  source: string
}

export const business = {
  /** Display form pending owner confirmation (PLAN.md §12). Never "Épicerie de la Liberté". */
  displayName: 'Épicerie de Liberté',
  listingName: 'Epicerie de liberté',
  legalName: 'EPI DE LIBERTE',
  nameConfirmed: false,
  tagline: 'Votre épicerie de quartier, ouverte 7j/7 jusqu’à 1h',
  address: {
    street: '46 boulevard de la Liberté',
    postalCode: '35000',
    city: 'Rennes',
    country: 'FR',
    breton: 'Boulouard ar Frankiz',
    quartier: 'Centre-ville, à la limite de Colombier',
  },
  geo: { lat: 48.1082153, lng: -1.6826254, source: 'INSEE (registre SIRENE)' },
  legal: {
    form: 'SARL',
    capital: '3 000 €',
    siren: '994 343 598',
    siret: '994 343 598 00011',
    vat: 'FR88994343598',
    naf: '47.11B Commerce d’alimentation générale',
    createdOn: '24 novembre 2025',
    rcsNote: 'À confirmer : mention RCS Rennes (extrait Infogreffe / RNE).',
    publisherNote: 'À confirmer : directeur de la publication, à renseigner avec l’accord du gérant.',
  },
  since: 'depuis 2025',
  rating: {
    value: 5.0,
    count: 26,
    asOf: '2026-10-09',
    asOfLabel: 'oct. 2026',
    platform: 'Google',
    source: 'https://epicerie.tel/f/epicerie-de-liberte-14363773/',
  },
  phone: { value: '07 45 05 80 25', confirmed: PHONE_CONFIRMED },
  email: null as string | null,
  website: null as string | null,
  social: [] as string[],
  payment: ['Carte bancaire (crédit et débit)'],
  paymentTodo: 'Espèces, titres-restaurant, minimum carte : à confirmer en magasin.',
  accessibility:
    'Accès PMR indiqué par le réseau Pickup, à confirmer en magasin (largeur de porte, seuil).',
  links: {
    itineraire: 'https://www.google.com/maps/dir/?api=1&destination=48.1082153,-1.6826254',
    carte: 'https://www.google.com/maps/search/?api=1&query=48.1082153,-1.6826254',
    pickup: 'https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE',
    laposte: 'https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287',
    impekkable: 'https://www.impekkable.com/',
    siteUrl: 'https://ab-s0lution.github.io/Epicerie-de-libert-rennes/',
  },
  services: [
    'Épicerie de dépannage ouverte jusqu’à 1h',
    'Relais Pickup / point La Poste : retrait et envoi de colis',
    'Shop2Shop et envoi sans étiquette (Chronopost, Colissimo)',
    'Dépôt pressing linge de maison (Impekkable)',
    'Paiement par carte bancaire',
  ],
}

export const transport: TransportStop[] = [
  { kind: 'metro', name: 'Colombier', detail: 'Ligne b', distance: 'environ 260 m', source: 'OpenStreetMap (distances calculées)' },
  { kind: 'metro', name: 'République', detail: 'Lignes a et b', distance: 'environ 300 m', source: 'OpenStreetMap (distances calculées)' },
  { kind: 'metro', name: 'Charles de Gaulle', detail: 'Ligne a', distance: 'à proximité', source: 'OpenStreetMap' },
  { kind: 'bus', name: 'La Criée', detail: 'Arrêt de bus', distance: 'environ 180 m', source: 'OpenStreetMap' },
  { kind: 'bus', name: 'Colombier', detail: 'Arrêt de bus', distance: 'environ 255 m', source: 'OpenStreetMap' },
  { kind: 'bus', name: 'Place de Bretagne · Pont de Bretagne · République', detail: 'Arrêts de bus', source: 'OpenStreetMap' },
  {
    kind: 'parking',
    name: 'Horodateur devant le no 46',
    detail: '5 places. Payant du lundi au samedi de 9h à 19h, 4 h maximum. Gratuit le soir, le dimanche et de 12h à 14h.',
    source: 'Parkopedia (agrégateur, à vérifier sur place)',
  },
  {
    kind: 'velo',
    name: 'À vélo',
    detail: 'Boulevard central de 0,8 km entre l’avenue Jean-Janvier et la place de Bretagne. Stationnement vélo : à confirmer.',
    source: 'Wikipédia (longueur du boulevard)',
  },
]
