// SAMPLE DATA – original illustrations drawn in SVG (src/lib/art.ts). These are NOT photographs of the shop.
// Replace with owner-supplied photos when they exist (TODO).

export type GalleryFilter = 'jour' | 'nuit' | 'colis' | 'quartier'

export interface GalleryItem {
  id: string
  title: string
  alt: string
  caption: string
  filters: GalleryFilter[]
  scene: string
}

export const galleryFilters: { id: GalleryFilter | 'tout'; label: string }[] = [
  { id: 'tout', label: 'Tout' },
  { id: 'jour', label: 'Jour' },
  { id: 'nuit', label: 'Nuit' },
  { id: 'colis', label: 'Colis' },
  { id: 'quartier', label: 'Quartier' },
]

export const gallery: GalleryItem[] = [
  { id: 'g1', title: 'La façade de jour', alt: 'Illustration d’une façade en pierre de taille avec une vitrine de commerce et un auvent rayé noir et blanc, en plein jour.', caption: 'Le boulevard en plein jour, façade de pierre et auvent rayé.', filters: ['jour'], scene: 'facade-jour' },
  { id: 'g2', title: 'La façade de nuit', alt: 'Illustration de la même façade la nuit, une seule vitrine éclairée sous un lampadaire.', caption: 'La nuit, une seule vitrine reste allumée.', filters: ['nuit'], scene: 'facade-nuit' },
  { id: 'g3', title: 'Le rideau à mi-hauteur', alt: 'Illustration d’un rideau métallique à moitié relevé sur une vitrine éclairée.', caption: 'Le rideau qui monte, ou qui descend.', filters: ['nuit'], scene: 'rideau' },
  { id: 'g4', title: 'L’auvent rayé', alt: 'Illustration d’un auvent à rayures verticales blanches et noires, inspiré des armes de Rennes.', caption: 'Rayures blanches et noires, clin d’œil aux armes de Rennes.', filters: ['jour', 'quartier'], scene: 'auvent' },
  { id: 'g5', title: 'Rayon épicerie salée', alt: 'Illustration d’une étagère de bocaux, de paquets de pâtes et de boîtes de conserve.', caption: 'Pâtes, riz, bocaux : le salé.', filters: ['jour'], scene: 'rayon-sec' },
  { id: 'g6', title: 'Rayon frais', alt: 'Illustration d’un rayon avec briques de lait, œufs et beurre.', caption: 'Lait, œufs, beurre : le frais.', filters: ['jour'], scene: 'rayon-frais' },
  { id: 'g7', title: 'Fruits et légumes', alt: 'Illustration de cagettes de pommes, de tomates et de bananes.', caption: 'Les cagettes de l’entrée.', filters: ['jour'], scene: 'rayon-fruits' },
  { id: 'g8', title: 'Rayon ménager', alt: 'Illustration d’une étagère de flacons, d’éponges et de rouleaux de papier.', caption: 'Ménager et hygiène.', filters: ['jour'], scene: 'rayon-menager' },
  { id: 'g9', title: 'Snacks et boissons', alt: 'Illustration d’un frigo vitré avec canettes, bouteilles et sandwichs.', caption: 'Le frigo des fins de soirée.', filters: ['nuit'], scene: 'rayon-snacks' },
  { id: 'g10', title: 'Le coin dépannage', alt: 'Illustration d’un présentoir de piles, de câbles et de briquets.', caption: 'Piles, câbles, briquets.', filters: ['jour', 'nuit'], scene: 'rayon-depannage' },
  { id: 'g11', title: 'Le comptoir colis', alt: 'Illustration d’un comptoir avec un scanner, un écran et des colis à retirer.', caption: 'Là où on scanne, on retire, on envoie.', filters: ['colis', 'jour'], scene: 'comptoir-colis' },
  { id: 'g12', title: 'Une pile de colis', alt: 'Illustration d’une pile de colis en carton sans marque de transporteur.', caption: 'Chronopost, Colissimo, DPD : on les range sans logo.', filters: ['colis'], scene: 'pile-colis' },
  { id: 'g13', title: 'Lampadaire sous la pluie', alt: 'Illustration d’un lampadaire à lumière orangée sous la pluie, devant une vitrine.', caption: 'Une nuit de pluie à Rennes.', filters: ['nuit', 'quartier'], scene: 'pluie' },
  { id: 'g14', title: 'Sortie de concert', alt: 'Illustration d’une foule de silhouettes qui traverse l’esplanade la nuit.', caption: 'Quand le concert se termine.', filters: ['nuit', 'quartier'], scene: 'concert' },
  { id: 'g15', title: 'Marché des Lices, samedi matin', alt: 'Illustration d’étals sous des tentes à rayures, sur une place bordée de halles.', caption: 'Le samedi matin, à quelques minutes.', filters: ['jour', 'quartier'], scene: 'marche' },
  { id: 'g16', title: 'Le canal au pied des remparts, 1855', alt: 'Illustration historique schématique d’un canal le long d’un rempart avec des arbres.', caption: 'Illustration d’après l’histoire du boulevard (schématique).', filters: ['quartier'], scene: 'canal' },
  { id: 'g17', title: 'La plaque bilingue', alt: 'Illustration d’une plaque de rue émaillée « Boulevard de la Liberté, Boulouard ar Frankiz ».', caption: 'Boulouard ar Frankiz, le nom officiel en breton.', filters: ['quartier'], scene: 'plaque' },
  { id: 'g18', title: 'L’hermine', alt: 'Illustration d’une hermine stylisée, mouchetures noires sur fond clair.', caption: 'Les mouchetures d’hermine, micro-icône du site.', filters: ['quartier'], scene: 'hermine' },
  { id: 'g19', title: 'Le sac Impekkable au comptoir', alt: 'Illustration d’un sac de linge posé sur un comptoir, dessiné sans marque.', caption: 'Un dépôt linge de maison, dessiné de façon générique.', filters: ['colis', 'jour'], scene: 'linge' },
]
