// SAMPLE DATA – editorial examples (kind: 'exemple'), not published by the business.
// Facts inside are taken from PLAN.md; any hours claim is marked « à confirmer ». Replace with real posts.

export type PostTag = 'Colis' | 'Quartier' | 'Histoire' | 'Soirée' | 'Pratique'

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  readingMinutes: number
  tags: PostTag[]
  scene: string
  kind: 'exemple'
  featured?: boolean
  body: string[]
}

export const postTags: PostTag[] = ['Colis', 'Quartier', 'Histoire', 'Soirée', 'Pratique']

export const posts: Post[] = [
  {
    id: 'j1', slug: 'recuperer-un-colis-au-relais', title: 'Récupérer un colis au relais : mode d’emploi',
    excerpt: 'Pickup Pass, code de retrait, pièce d’identité : ce qu’il faut avoir en poche avant de passer au comptoir.',
    date: '2026-09-28', readingMinutes: 3, tags: ['Colis', 'Pratique'], scene: 'comptoir-colis', kind: 'exemple', featured: true,
    body: [
      'Vous avez reçu un e-mail ou un SMS du transporteur. Il indique l’adresse du relais, ses horaires et la date limite de retrait. C’est le point de départ.',
      'Au comptoir, présentez votre Pickup Pass : c’est le QR code que contient le mail. Si vous préférez, un code de retrait fait aussi l’affaire. Sans l’un ni l’autre, une pièce d’identité originale suffit : carte d’identité, passeport ou permis de conduire.',
      'Le colis est abîmé ? Avant de l’accepter, vous pouvez enregistrer vos réserves sur le scanner du commerçant, puis l’accepter ou le refuser.',
      'Pensez à la durée de conservation : 9 jours pour DPD, 8 jours pour Chronopost, 14 jours pour Colissimo. Le comptoir colis ferme à 22h (horaires à confirmer), alors que l’épicerie reste ouverte jusqu’à 1h.',
    ],
  },
  {
    id: 'j2', slug: 'envoyer-un-colis-sans-etiquette', title: 'Envoyer un colis sans étiquette',
    excerpt: 'Pas d’imprimante ? Avec un QR code ou un e-label, l’étiquette s’imprime directement au relais.',
    date: '2026-09-21', readingMinutes: 3, tags: ['Colis', 'Pratique'], scene: 'pile-colis', kind: 'exemple',
    body: [
      'Vous vendez un objet à quelqu’un, ou vous renvoyez un achat. Votre destinataire ou la boutique vous envoie un QR code, aussi appelé e-label. Pas besoin d’imprimante.',
      'Présentez le QR code au relais : nous imprimons l’étiquette sur place. Ce service existe pour Chronopost et Colissimo.',
      'Votre colis doit peser moins de 20 kg et son plus grand côté doit rester inférieur à 1 m. Pour un envoi de relais à relais, il existe aussi Shop2Shop by Chronopost, avec une étiquette créée en ligne.',
      'Le suivi se fait ensuite chez le transporteur, avec le numéro du récépissé remis au comptoir.',
    ],
  },
  {
    id: 'j3', slug: 'soir-de-concert-au-liberte', title: 'Soir de concert au Liberté : on est ouverts après',
    excerpt: 'À deux pas de l’esplanade, la dernière vitrine allumée du boulevard quand la salle se vide.',
    date: '2026-09-12', readingMinutes: 3, tags: ['Soirée', 'Quartier'], scene: 'concert', kind: 'exemple',
    body: [
      'Le Liberté, la grande salle de concerts de Rennes, se trouve esplanade Charles-de-Gaulle, à quelques pas du no 46 du boulevard. Quand le rideau tombe sur scène, il y a du monde dehors.',
      'Une bouteille d’eau, un en-cas, des mouchoirs, une pile pour la lampe du téléphone : l’épicerie ferme à 1h tous les soirs (horaires à confirmer), bien après la plupart des commerces du boulevard.',
      'Un avis Google résume bien l’esprit : « L’équipe est au top pour les courses de dernière minute ! » Voilà ce que nous essayons d’être, un soir de concert comme un mardi ordinaire.',
    ],
  },
  {
    id: 'j4', slug: 'trans-musicales-2026-navette-esplanade', title: 'Trans Musicales 2026 (2-6 déc.) : la navette part de l’Esplanade',
    excerpt: 'Le festival se tient surtout au Parc Expo. Le village des Trans et les navettes de nuit, eux, sont tout près.',
    date: '2026-09-05', readingMinutes: 4, tags: ['Soirée', 'Quartier'], scene: 'pluie', kind: 'exemple',
    body: [
      'La 48e édition des Trans Musicales a lieu du 2 au 6 décembre 2026. La plupart des concerts se tiennent au Parc Expo, pas au Liberté : mieux vaut le dire clairement.',
      'Ce qui nous concerne, c’est le village des Trans, installé au Liberté avec des concerts gratuits, et les navettes de nuit vers le Parc Expo, qui partent de l’Esplanade Charles-de-Gaulle, à quelques minutes du magasin.',
      'D’après l’horaire de l’édition précédente, les navettes passent toutes les 5 minutes pendant la nuit du vendredi et du samedi. L’horaire 2026 n’est pas encore publié : consultez le site du festival et celui du réseau STAR.',
      'Nos horaires de cette semaine-là (épicerie et comptoir colis) ne sont pas encore confirmés. S’ils changent, un avis s’affichera en haut du site.',
    ],
  },
  {
    id: 'j5', slug: 'boulevard-de-la-liberte-du-canal-au-nom-de-1870', title: 'Le boulevard de la Liberté, du canal de 1855 au nom de 1870',
    excerpt: 'Un ancien canal au pied des remparts, un boulevard tracé en 1855 et rebaptisé le 17 octobre 1870.',
    date: '2026-08-29', readingMinutes: 5, tags: ['Histoire', 'Quartier'], scene: 'canal', kind: 'exemple',
    body: [
      'Le boulevard suit les limites de la ville depuis au moins le XVe siècle, le long d’un ancien canal au pied des remparts. C’est ce tracé qui devient, au XIXe siècle, un boulevard de 0,8 km entre l’avenue Jean-Janvier et la place de Bretagne.',
      'Il est aménagé en 1855, selon une source avec les déblais du chantier de la gare. Sous le Second Empire, il porte le nom de boulevard de l’Impératrice, puis du Prince impérial.',
      'Après la chute de l’Empire, le conseil municipal le rebaptise boulevard de la Liberté, le 17 octobre 1870. Le nom ne vient donc pas d’un slogan de commerçant, mais de la rue elle-même.',
      'Aujourd’hui, le boulevard sépare le Centre-ville, au nord, du Colombier, au sud. Les immeubles sont en pierre de taille de style haussmannien. Son nom officiel en breton est « Boulouard ar Frankiz ».',
      'Attention : l’épicerie, elle, n’a pas 1870 ans d’histoire. La société qui l’exploite a été créée en novembre 2025.',
    ],
  },
  {
    id: 'j6', slug: 'colombier-centre-lices-notre-coin-de-rennes', title: 'Colombier, Centre, Lices : notre coin de Rennes',
    excerpt: 'Un boulevard à la frontière de trois ambiances : la dalle du Colombier, le centre et le marché.',
    date: '2026-08-14', readingMinutes: 4, tags: ['Quartier'], scene: 'marche', kind: 'exemple',
    body: [
      'Au sud du boulevard, le Colombier : un quartier de dalle dessiné par Louis Arretche, avec plus de 2 500 logements et le centre commercial Colombia. Des habitants, des bureaux, des étudiants.',
      'Au nord, le Centre-ville : La Criée, les Champs Libres, la rue Saint-Michel et ses maisons à pans de bois. Et, un peu plus loin, le marché des Lices, tous les samedis matin.',
      'Le boulevard n’est pas touristique. C’est un axe de passage, très central, où les gens rentrent, sortent, attendent un bus ou un colis. L’épicerie est faite pour eux.',
    ],
  },
  {
    id: 'j7', slug: 'la-liste-anti-panne-du-dimanche-soir', title: 'La liste anti-panne du dimanche soir',
    excerpt: 'Une idée de liste pour ne plus ouvrir son placard à 23h en se disant « il manque tout ».',
    date: '2026-07-26', readingMinutes: 3, tags: ['Pratique'], scene: 'rayon-depannage', kind: 'exemple',
    body: [
      'Voici, à titre d’exemple, la liste type d’un dimanche soir : du lait et des œufs pour le lendemain matin, des pâtes et une sauce pour dîner, du papier toilette (toujours le premier à manquer).',
      'Ajoutez un chargeur ou des piles, une ampoule de rechange, des mouchoirs. Le catalogue en ligne de ce site est un exemple qui permet de se constituer une liste, enregistrée uniquement dans votre navigateur.',
      'Précision utile : les produits et les prix de ce site sont fictifs. Pour savoir ce qui est en rayon, demandez au comptoir. Aucune commande en ligne n’est possible.',
    ],
  },
  {
    id: 'j8', slug: 'galette-saucisse-pate-rennais-petit-lexique', title: 'Galette-saucisse, pâté rennais : petit lexique rennais',
    excerpt: 'Quelques spécialités de Rennes, à titre d’exemple, avec la précision qui s’impose : à confirmer en rayon.',
    date: '2026-07-10', readingMinutes: 3, tags: ['Quartier', 'Pratique'], scene: 'rayon-sec', kind: 'exemple',
    body: [
      'La galette-saucisse est l’emblème des samedis de marché à Rennes : une galette de sarrasin chaude enroulée autour d’une saucisse grillée. On la trouve surtout aux Lices.',
      'Le pâté rennais, le beurre demi-sel, le caramel au beurre salé ou les palets bretons font aussi partie des spécialités de la région.',
      'Nous ne disons pas que le magasin les propose : la liste du site est un exemple et le « Coin Breizh » reste à confirmer. Si vous cherchez un produit précis, demandez au comptoir.',
    ],
  },
  {
    id: 'j9', slug: 'rentrer-tard-en-securite-nos-reperes', title: 'Rentrer tard en sécurité : nos repères dans le quartier',
    excerpt: 'Des repères simples quand la nuit est tombée : où trouver de la lumière, du monde et un horaire de bus.',
    date: '2026-06-30', readingMinutes: 4, tags: ['Pratique', 'Soirée'], scene: 'facade-nuit', kind: 'exemple',
    body: [
      'Un avis Google résume le sentiment de plusieurs clientes et clients : « super safe pour les filles ». Nous ne pouvons rien promettre de plus que ceci : la vitrine est éclairée et quelqu’un est au comptoir jusqu’à 1h (horaires à confirmer).',
      'Les stations de métro Colombier (ligne b) et République (lignes a et b) sont à environ 260 m et 300 m. Plusieurs arrêts de bus sont sur ou près du boulevard.',
      'Les lignes Chronostar circuleraient jusqu’à 0h35 du dimanche au mercredi et 1h35 du jeudi au samedi, avec une ligne de nuit les week-ends. Ces horaires sont à vérifier sur star.fr avant tout déplacement.',
      'En cas de doute, entrez : la vitrine éclairée est un point de repère. Et pour un itinéraire, le bouton « Itinéraire » du site ouvre une carte.',
    ],
  },
]

export const postBySlug = (slug: string): Post | undefined => posts.find((p) => p.slug === slug)
