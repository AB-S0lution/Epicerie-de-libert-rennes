// SAMPLE DATA – Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// Remplacer par les photos fournies par le commerçant quand elles existent (TODO).

export type PhotoTheme = 'rayons' | 'boissons' | 'frais' | 'fruits' | 'courses' | 'pain' | 'epicerie' | 'colis' | 'nuit'

export interface Photo {
  slug: string
  src: string
  alt: string
  theme: PhotoTheme
  width: number
  height: number
  credit: string
  url: string
}

// Build-time rendering runs in Node (vite.config.ts), where import.meta.env may be absent.
const BASE: string = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/Epicerie-de-libert-rennes/'

export const photoThemes: { id: PhotoTheme | 'tout'; label: string }[] = [
  { id: 'tout', label: 'Tout' },
  { id: 'rayons', label: 'Rayons' },
  { id: 'fruits', label: 'Fruits et légumes' },
  { id: 'epicerie', label: 'Épicerie' },
  { id: 'pain', label: 'Pain' },
  { id: 'boissons', label: 'Boissons' },
  { id: 'colis', label: 'Colis' },
  { id: 'nuit', label: 'La nuit' },
]

export const photos: Photo[] = [
  { slug: 'rayon-epicerie', src: BASE + 'photos/rayon-epicerie.jpg', alt: 'Allée d’épicerie aux étagères bien remplies', theme: 'rayons', width: 1000, height: 750, credit: 'Unsplash', url: 'https://unsplash.com/photos/1604719312566-8912e9227c6a' },
  { slug: 'allee-epicerie', src: BASE + 'photos/allee-epicerie.jpg', alt: 'Allée de magasin remplie de produits du quotidien', theme: 'rayons', width: 1200, height: 788, credit: 'Unsplash', url: 'https://unsplash.com/photos/1670684684445-a4504dca0bbc' },
  { slug: 'rayon-cereales-lait', src: BASE + 'photos/rayon-cereales-lait.jpg', alt: 'Rayon de céréales et de briques de lait', theme: 'rayons', width: 1000, height: 750, credit: 'Unsplash', url: 'https://unsplash.com/photos/1578916171728-46686eac8d58' },
  { slug: 'rayon-conserves', src: BASE + 'photos/rayon-conserves.jpg', alt: 'Étagères métalliques garnies de produits d’épicerie salée', theme: 'rayons', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1534723452862-4c874018d66d' },
  { slug: 'gondole-vue-haut', src: BASE + 'photos/gondole-vue-haut.jpg', alt: 'Gondole d’épicerie vue d’en haut', theme: 'rayons', width: 1000, height: 667, credit: 'Unsplash', url: 'https://unsplash.com/photos/1515706886582-54c73c5eaf41' },
  { slug: 'frigo-boissons', src: BASE + 'photos/frigo-boissons.jpg', alt: 'Boissons fraîches alignées dans un réfrigérateur', theme: 'boissons', width: 1200, height: 620, credit: 'Unsplash', url: 'https://unsplash.com/photos/1506617420156-8e4536971650' },
  { slug: 'rayon-boissons', src: BASE + 'photos/rayon-boissons.jpg', alt: 'Bouteilles de sodas colorés alignées en rayon', theme: 'boissons', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/N9t-33mrqeg' },
  { slug: 'frigo-yaourts', src: BASE + 'photos/frigo-yaourts.jpg', alt: 'Vitrine réfrigérée remplie de yaourts', theme: 'frais', width: 1000, height: 1250, credit: 'Unsplash', url: 'https://unsplash.com/photos/1601599561213-832382fd07ba' },
  { slug: 'legumes-frais', src: BASE + 'photos/legumes-frais.jpg', alt: 'Légumes frais en vrac sur un étal', theme: 'fruits', width: 1000, height: 750, credit: 'Unsplash', url: 'https://unsplash.com/photos/1542838132-92c53300491e' },
  { slug: 'etal-legumes', src: BASE + 'photos/etal-legumes.jpg', alt: 'Étal de légumes colorés', theme: 'fruits', width: 1000, height: 1500, credit: 'Unsplash', url: 'https://unsplash.com/photos/1550989460-0adf9ea622e2' },
  { slug: 'agrumes-pommes', src: BASE + 'photos/agrumes-pommes.jpg', alt: 'Oranges, pommes, citrons et citrons verts en rayon', theme: 'fruits', width: 1000, height: 750, credit: 'Unsplash', url: 'https://unsplash.com/photos/1583258292688-d0213dc5a3a8' },
  { slug: 'legumes-varies', src: BASE + 'photos/legumes-varies.jpg', alt: 'Assortiment de légumes sur fond clair', theme: 'fruits', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1597362925123-77861d3fbac7' },
  { slug: 'tomates-concombre', src: BASE + 'photos/tomates-concombre.jpg', alt: 'Tomates rouges en grappe à côté d’un concombre', theme: 'fruits', width: 1000, height: 1390, credit: 'Unsplash', url: 'https://unsplash.com/photos/1592924802543-809bfeee53fb' },
  { slug: 'carottes-poireaux', src: BASE + 'photos/carottes-poireaux.jpg', alt: 'Carottes et poireaux', theme: 'fruits', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1471193945509-9ad0617afabf' },
  { slug: 'panier-legumes', src: BASE + 'photos/panier-legumes.jpg', alt: 'Carottes et concombres dans un panier tressé', theme: 'fruits', width: 1000, height: 1500, credit: 'Unsplash', url: 'https://unsplash.com/photos/1609842947419-ba4f04d5d60f' },
  { slug: 'caisse-fruits', src: BASE + 'photos/caisse-fruits.jpg', alt: 'Cagette en bois remplie de fruits et légumes', theme: 'fruits', width: 1200, height: 1600, credit: 'Unsplash', url: 'https://unsplash.com/photos/1635341083777-5f93a755e916' },
  { slug: 'oranges', src: BASE + 'photos/oranges.jpg', alt: 'Tas d’oranges', theme: 'fruits', width: 1200, height: 675, credit: 'Unsplash', url: 'https://unsplash.com/photos/1517161782303-6bee363b9d9a' },
  { slug: 'pommes-caisse', src: BASE + 'photos/pommes-caisse.jpg', alt: 'Pommes rouges dans une caisse', theme: 'fruits', width: 1000, height: 750, credit: 'Unsplash', url: 'https://unsplash.com/photos/1599678914948-8e0a39f42a31' },
  { slug: 'oranges-citrons-caisse', src: BASE + 'photos/oranges-citrons-caisse.jpg', alt: 'Caisse d’oranges et de citrons verts', theme: 'fruits', width: 1000, height: 1780, credit: 'Unsplash', url: 'https://unsplash.com/photos/1676635134692-cbc45c099c33' },
  { slug: 'filet-courses', src: BASE + 'photos/filet-courses.jpg', alt: 'Filet de courses avec légumes frais et sauce', theme: 'courses', width: 1000, height: 1500, credit: 'Unsplash', url: 'https://unsplash.com/photos/1584473457406-6240486418e9' },
  { slug: 'baguette', src: BASE + 'photos/baguette.jpg', alt: 'Deux baguettes de pain sur un plateau sombre', theme: 'pain', width: 1000, height: 1250, credit: 'Unsplash', url: 'https://unsplash.com/photos/1554475659-9fd915c8f156' },
  { slug: 'pain-sac-kraft', src: BASE + 'photos/pain-sac-kraft.jpg', alt: 'Pain dans un sac en papier kraft', theme: 'pain', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1599819055803-717bba43890f' },
  { slug: 'pain-tranche', src: BASE + 'photos/pain-tranche.jpg', alt: 'Tranches de pain de campagne empilées', theme: 'pain', width: 1200, height: 1500, credit: 'Unsplash', url: 'https://unsplash.com/photos/1533782654613-826a072dd6f3' },
  { slug: 'sandwich-jambon', src: BASE + 'photos/sandwich-jambon.jpg', alt: 'Sandwich jambon-fromage', theme: 'pain', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1550507992-eb63ffee0847' },
  { slug: 'bocaux-etagere', src: BASE + 'photos/bocaux-etagere.jpg', alt: 'Bocaux en verre sur une étagère', theme: 'epicerie', width: 1000, height: 1500, credit: 'Unsplash', url: 'https://unsplash.com/photos/1592178036182-5400889dfc74' },
  { slug: 'epices-bocaux', src: BASE + 'photos/epices-bocaux.jpg', alt: 'Épices dans des bocaux en verre', theme: 'epicerie', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1621318551436-68573392fd5c' },
  { slug: 'cereales-bocaux', src: BASE + 'photos/cereales-bocaux.jpg', alt: 'Quatre bocaux remplis de céréales et graines', theme: 'epicerie', width: 1200, height: 787, credit: 'Unsplash', url: 'https://unsplash.com/photos/1509043183980-23be96ae4109' },
  { slug: 'pates-seches', src: BASE + 'photos/pates-seches.jpg', alt: 'Pâtes sèches dans des boîtes transparentes', theme: 'epicerie', width: 1200, height: 797, credit: 'Unsplash', url: 'https://unsplash.com/photos/1789993563920-bdd2abeb3352' },
  { slug: 'colis-carton', src: BASE + 'photos/colis-carton.jpg', alt: 'Colis en carton brun', theme: 'colis', width: 1200, height: 1800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1577705998148-6da4f3963bc8' },
  { slug: 'pile-cartons', src: BASE + 'photos/pile-cartons.jpg', alt: 'Pile de cartons d’expédition', theme: 'colis', width: 1200, height: 1800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1624137527136-66e631bdaa0e' },
  { slug: 'colis-table', src: BASE + 'photos/colis-table.jpg', alt: 'Carton d’envoi posé sur une table', theme: 'colis', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/1607166452427-7e4477079cb9' },
  { slug: 'vitrine-nuit', src: BASE + 'photos/vitrine-nuit.jpg', alt: 'Vitrine éclairée d’un café la nuit, un vélo garé devant', theme: 'nuit', width: 1200, height: 1600, credit: 'Unsplash', url: 'https://unsplash.com/photos/Yce_YUvLeFo' },
  { slug: 'trottoir-nuit', src: BASE + 'photos/trottoir-nuit.jpg', alt: 'Rue piétonne illuminée de guirlandes avec de rares passants la nuit', theme: 'nuit', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/KYhJH1r_-F8' },
  { slug: 'rue-nuit', src: BASE + 'photos/rue-nuit.jpg', alt: 'Passant sous un parapluie sur un trottoir mouillé, la nuit', theme: 'nuit', width: 1200, height: 675, credit: 'Unsplash', url: 'https://unsplash.com/photos/EH5ZXlv_S-4' },
  { slug: 'kiosque-nuit', src: BASE + 'photos/kiosque-nuit.jpg', alt: 'Rue sombre avec un kiosque éclairé la nuit', theme: 'nuit', width: 1200, height: 855, credit: 'Unsplash', url: 'https://unsplash.com/photos/1711072349314-e3b4842a17aa' },
  { slug: 'commerces-nuit', src: BASE + 'photos/commerces-nuit.jpg', alt: 'Scooter garé devant une vitrine de boutique éclairée le soir', theme: 'nuit', width: 1200, height: 800, credit: 'Unsplash', url: 'https://unsplash.com/photos/ClTbC2yLl1I' },
]

export const photo = (slug: string): Photo => photos.find((p) => p.slug === slug) ?? photos[0]
