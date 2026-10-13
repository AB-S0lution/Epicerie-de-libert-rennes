// Mixed small datasets. Each block states whether it is REAL or SAMPLE.

// ---- Stats: REAL ONLY (PLAN.md §11). No invented counts. ----
export interface Stat {
  id: string
  value: string
  label: string
  note?: string
}

export const stats: Stat[] = [
  { id: 'jours', value: '7j/7', label: 'ouvert tous les jours' },
  { id: 'heure', value: '1h', label: 'heure de fermeture du magasin', note: 'à confirmer' },
  { id: 'note', value: '5,0/5', label: '26 avis Google', note: 'oct. 2026' },
  { id: 'poids', value: '20 kg', label: 'poids maximum par colis' },
  { id: 'depuis', value: '2025', label: 'dans le quartier depuis' },
]

// ---- Team: SAMPLE roles, no names (the gérant is not named without consent). ----
export interface TeamRole {
  id: string
  role: string
  text: string
}

export const team: TeamRole[] = [
  { id: 'comptoir', role: 'Au comptoir', text: 'L’accueil, l’encaissement par carte et les petits conseils de dernière minute.' },
  { id: 'relais', role: 'Au relais colis', text: 'Le scanner, les Pickup Pass, les envois et les dépôts de linge.' },
  { id: 'rayon', role: 'À la mise en rayon', text: 'Les rayons garnis, les fruits et légumes à l’avant, le frais au froid.' },
]

// ---- Landmarks of the quartier: REAL places (PLAN.md §6); descriptions are ours. ----
export interface Landmark {
  id: string
  name: string
  text: string
  area: 'esplanade' | 'centre' | 'colombier' | 'boulevard'
}

export const landmarks: Landmark[] = [
  { id: 'liberte', name: 'Le Liberté', text: 'La grande salle de concerts de Rennes, esplanade Charles-de-Gaulle, avec la petite salle L’Étage. Elle a pris le nom du boulevard en 1996.', area: 'esplanade' },
  { id: 'esplanade', name: 'Esplanade Charles-de-Gaulle', text: 'La place culturelle bâtie sur l’ancien Champ de Mars. Les navettes de nuit des Trans Musicales y partent.', area: 'esplanade' },
  { id: 'criee', name: 'La Criée', text: 'Le centre d’art contemporain installé dans les Halles centrales.', area: 'centre' },
  { id: 'lices', name: 'Marché des Lices et Halles Martenot', text: 'Le grand marché du samedi matin, autour des halles construites entre 1867 et 1871, sur une place utilisée depuis 1622.', area: 'centre' },
  { id: 'saintmichel', name: 'Rue Saint-Michel', text: 'La « rue de la Soif » du vieux Rennes, ses maisons à pans de bois.', area: 'centre' },
  { id: 'champslibres', name: 'Les Champs Libres', text: 'Bibliothèque, musée et espace des sciences, à quelques minutes.', area: 'centre' },
  { id: 'colombier', name: 'Le Colombier', text: 'Le quartier de dalle dessiné par Louis Arretche (1936-1969), plus de 2 500 logements et le centre commercial Colombia.', area: 'colombier' },
  { id: 'temple', name: 'Temple protestant', text: 'Au no 22 du boulevard, parmi les immeubles en pierre de taille de style haussmannien.', area: 'boulevard' },
]

// ---- History timeline: REAL (PLAN.md §2). Never claim the shop dates from 1870. ----
export interface HistoryStep {
  id: string
  year: string
  yearNum: number
  title: string
  text: string
}

export const history: HistoryStep[] = [
  { id: 'xv', year: 'XVe siècle', yearNum: 1450, title: 'La limite de la ville', text: 'La rue suit déjà les limites de la ville, au pied des remparts.' },
  { id: 'canal', year: 'Avant 1855', yearNum: 1800, title: 'Un canal au pied des remparts', text: 'Un ancien canal longe les murailles. C’est son tracé que suivra le boulevard.' },
  { id: '1855', year: '1855', yearNum: 1855, title: 'Le boulevard est tracé', text: 'Il est aménagé en 1855 selon une source, avec des déblais de la construction de la gare.' },
  { id: 'empire', year: 'Second Empire', yearNum: 1860, title: 'Boulevard de l’Impératrice', text: 'Il porte alors les noms de boulevard de l’Impératrice, puis du Prince impérial.' },
  { id: '1870', year: '17 octobre 1870', yearNum: 1870, title: 'Il devient boulevard de la Liberté', text: 'Après la chute de l’Empire, la ville le rebaptise. Le nom n’a pas bougé depuis.' },
  { id: '2025', year: '2025', yearNum: 2025, title: 'La société de l’épicerie est créée', text: 'EPI DE LIBERTE SARL est créée le 24 novembre 2025. Le magasin ouvre au no 46 dans l’hiver 2025-2026.' },
]

export const boulevardFacts = {
  length: '0,8 km',
  from: 'l’avenue Jean-Janvier',
  to: 'la place de Bretagne',
  separates: 'le Centre-ville au nord et le Colombier au sud',
  architecture: 'des immeubles en pierre de taille de style haussmannien',
}
