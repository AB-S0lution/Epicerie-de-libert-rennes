// SAMPLE DATA – not supplied by the business; replace with real data.
// Narrative scenes for « Une nuit sur le boulevard ». Facts that are real: relay closes at 22h, shop closes at 1h
// (hours to confirm), the Le Liberté concert hall is nearby, Trans Musicales shuttles leave from the Esplanade (December).
// No competitor is named: « les autres ferment ».

export interface NightScene {
  id: string
  hour: string
  minutes: number
  title: string
  text: string
  /** Sky darkness 0 (day) to 1 (deep night). */
  night: number
  art: 'colis' | 'ouvert' | 'fermeture' | 'autres' | 'relais' | 'concert' | 'derniere' | 'rideau'
  /** Window lights that are still on at this hour (out of 10). */
  windowsOn: number
}

export const nightScenes: NightScene[] = [
  { id: 'n11', hour: '11h', minutes: 660, title: 'On dépose, on retire', text: 'Le matin, le boulevard est tout à son affaire. Le comptoir colis commence à voir passer ses premiers sacs.', night: 0, art: 'colis', windowsOn: 10 },
  { id: 'n15', hour: '15h', minutes: 900, title: 'Tout le monde est ouvert', text: 'L’après-midi, le quartier est en pleine activité. L’épicerie aussi, du lundi au dimanche.', night: 0.05, art: 'ouvert', windowsOn: 10 },
  { id: 'n1930', hour: '19h30', minutes: 1170, title: 'Les commerces du jour baissent le rideau', text: 'La lumière tombe. Les vitrines de jour s’éteignent les unes après les autres.', night: 0.45, art: 'fermeture', windowsOn: 7 },
  { id: 'n21', hour: '21h', minutes: 1260, title: 'Les autres ferment', text: 'Passé 21h, le boulevard se fait plus silencieux. Ici, la vitrine reste allumée.', night: 0.7, art: 'autres', windowsOn: 5 },
  { id: 'n22', hour: '22h', minutes: 1320, title: 'Le comptoir colis ferme', text: 'Le relais colis s’arrête à 22h (horaires à confirmer). L’épicerie, elle, continue.', night: 0.82, art: 'relais', windowsOn: 4 },
  { id: 'n23', hour: '23h', minutes: 1380, title: 'La sortie de concert', text: 'Les portes du Liberté s’ouvrent, la foule traverse l’esplanade. En décembre, la file des navettes des Trans attend à deux pas.', night: 0.92, art: 'concert', windowsOn: 3 },
  { id: 'n0030', hour: '0h30', minutes: 30, title: 'La dernière vitrine', text: 'Une seule fenêtre éclairée sur la façade. Un accueil chaleureux, et « super safe » comme le disent les avis.', night: 1, art: 'derniere', windowsOn: 1 },
  { id: 'n01', hour: '1h', minutes: 60, title: 'À demain', text: 'Le rideau descend. Le magasin ferme à 1h tous les soirs (à confirmer). Il rouvre dans la journée.', night: 1, art: 'rideau', windowsOn: 0 },
]
