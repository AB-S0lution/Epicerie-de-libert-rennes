// SAMPLE DATA – not supplied by the business; replace with real data.
// No product list or price is published by the shop: every entry below is an invented, plausible
// convenience-store item. Generic names only, no brand claims. Prices are samples (no promotions).
// « Coin Breizh » items are an idea to confirm with the owner and are labelled as such on the site.

import type { RayonId } from './categories'

export type Glyph =
  | 'bottle' | 'can' | 'box' | 'jar' | 'bag' | 'sandwich' | 'apple' | 'banana' | 'tomato' | 'onion'
  | 'carton' | 'eggs' | 'butter' | 'spray' | 'sponge' | 'roll' | 'tube' | 'tissues' | 'battery'
  | 'cable' | 'lighter' | 'bar' | 'biscuits' | 'crepe' | 'diaper' | 'pack'

export interface Product {
  id: string
  name: string
  rayon: RayonId
  /** Sample price in euros. */
  price: number
  unit: string
  tags: string[]
  isSample: true
  illustration: Glyph
}

export const products: Product[] = [
  { id: 'p01', name: 'Piles AA x4', rayon: 'depannage', price: 4.9, unit: 'le lot', tags: ['depannage', 'derniere-minute', 'pratique'], isSample: true, illustration: 'battery' },
  { id: 'p02', name: 'Piles AAA x4', rayon: 'depannage', price: 4.9, unit: 'le lot', tags: ['depannage', 'derniere-minute'], isSample: true, illustration: 'battery' },
  { id: 'p03', name: 'Câble de charge USB-C', rayon: 'depannage', price: 9.9, unit: 'la pièce', tags: ['depannage', 'derniere-minute', 'pratique'], isSample: true, illustration: 'cable' },
  { id: 'p04', name: 'Briquet', rayon: 'depannage', price: 1.9, unit: 'la pièce', tags: ['depannage', 'pratique'], isSample: true, illustration: 'lighter' },
  { id: 'p05', name: 'Ampoule E27', rayon: 'depannage', price: 3.9, unit: 'la pièce', tags: ['depannage', 'maison'], isSample: true, illustration: 'pack' },
  { id: 'p06', name: 'Préservatifs x3', rayon: 'depannage', price: 2.9, unit: 'la boîte', tags: ['depannage', 'hygiene'], isSample: true, illustration: 'box' },
  { id: 'p07', name: 'Couches taille 4 (dépannage)', rayon: 'depannage', price: 7.9, unit: 'le paquet', tags: ['depannage', 'bebe', 'derniere-minute'], isSample: true, illustration: 'diaper' },
  { id: 'p08', name: 'Ruban adhésif', rayon: 'depannage', price: 2.2, unit: 'le rouleau', tags: ['depannage', 'maison'], isSample: true, illustration: 'pack' },
  { id: 'p09', name: 'Pâtes coquillettes 500 g', rayon: 'sale', price: 1.3, unit: 'le paquet', tags: ['depannage', 'vegetarien'], isSample: true, illustration: 'bag' },
  { id: 'p10', name: 'Spaghetti 500 g', rayon: 'sale', price: 1.3, unit: 'le paquet', tags: ['depannage', 'vegetarien'], isSample: true, illustration: 'bag' },
  { id: 'p11', name: 'Riz long 1 kg', rayon: 'sale', price: 2.6, unit: 'le paquet', tags: ['vegetarien', 'sans-gluten'], isSample: true, illustration: 'bag' },
  { id: 'p12', name: 'Sauce tomate basilic', rayon: 'sale', price: 2.2, unit: 'le bocal', tags: ['vegetarien', 'depannage'], isSample: true, illustration: 'jar' },
  { id: 'p13', name: 'Thon au naturel', rayon: 'sale', price: 1.8, unit: 'la boîte', tags: ['depannage'], isSample: true, illustration: 'can' },
  { id: 'p14', name: 'Lentilles vertes 500 g', rayon: 'sale', price: 2.4, unit: 'le paquet', tags: ['vegetarien', 'sans-gluten'], isSample: true, illustration: 'bag' },
  { id: 'p15', name: 'Maïs en boîte', rayon: 'sale', price: 1.4, unit: 'la boîte', tags: ['vegetarien', 'sans-gluten'], isSample: true, illustration: 'can' },
  { id: 'p16', name: 'Soupe de légumes 1 L', rayon: 'sale', price: 2.9, unit: 'la brique', tags: ['vegetarien', 'derniere-minute'], isSample: true, illustration: 'carton' },
  { id: 'p17', name: 'Biscuits petit-beurre', rayon: 'sucre', price: 1.9, unit: 'le paquet', tags: ['soiree', 'petit-dej'], isSample: true, illustration: 'biscuits' },
  { id: 'p18', name: 'Tablette chocolat noir', rayon: 'sucre', price: 1.8, unit: 'la tablette', tags: ['soiree', 'sans-gluten'], isSample: true, illustration: 'bar' },
  { id: 'p19', name: 'Tablette chocolat au lait', rayon: 'sucre', price: 1.7, unit: 'la tablette', tags: ['soiree'], isSample: true, illustration: 'bar' },
  { id: 'p20', name: 'Confiture de fraises', rayon: 'sucre', price: 2.8, unit: 'le pot', tags: ['petit-dej', 'vegetarien'], isSample: true, illustration: 'jar' },
  { id: 'p21', name: 'Pâte à tartiner', rayon: 'sucre', price: 3.5, unit: 'le pot', tags: ['petit-dej'], isSample: true, illustration: 'jar' },
  { id: 'p22', name: 'Gaufrettes vanille', rayon: 'sucre', price: 1.6, unit: 'le paquet', tags: ['soiree'], isSample: true, illustration: 'biscuits' },
  { id: 'p23', name: 'Bonbons assortis', rayon: 'sucre', price: 2.2, unit: 'le sachet', tags: ['soiree', 'derniere-minute'], isSample: true, illustration: 'bag' },
  { id: 'p24', name: 'Eau minérale 1,5 L', rayon: 'boissons', price: 0.9, unit: 'la bouteille', tags: ['derniere-minute', 'pratique'], isSample: true, illustration: 'bottle' },
  { id: 'p25', name: 'Eau gazeuse 1 L', rayon: 'boissons', price: 1.2, unit: 'la bouteille', tags: ['soiree'], isSample: true, illustration: 'bottle' },
  { id: 'p26', name: 'Soda cola 33 cl', rayon: 'boissons', price: 1.3, unit: 'la canette', tags: ['soiree'], isSample: true, illustration: 'can' },
  { id: 'p27', name: 'Limonade 1,5 L', rayon: 'boissons', price: 1.8, unit: 'la bouteille', tags: ['soiree'], isSample: true, illustration: 'bottle' },
  { id: 'p28', name: 'Jus d’orange 1 L', rayon: 'boissons', price: 2.4, unit: 'la brique', tags: ['petit-dej', 'frais'], isSample: true, illustration: 'carton' },
  { id: 'p29', name: 'Jus de pomme 1 L', rayon: 'boissons', price: 2.3, unit: 'la brique', tags: ['petit-dej', 'frais'], isSample: true, illustration: 'carton' },
  { id: 'p30', name: 'Thé glacé pêche 50 cl', rayon: 'boissons', price: 1.9, unit: 'la bouteille', tags: ['soiree', 'frais'], isSample: true, illustration: 'bottle' },
  { id: 'p31', name: 'Boisson énergisante 25 cl', rayon: 'boissons', price: 2.2, unit: 'la canette', tags: ['soiree'], isSample: true, illustration: 'can' },
  { id: 'p32', name: 'Bananes', rayon: 'fruits', price: 1.9, unit: 'le kg', tags: ['frais', 'petit-dej'], isSample: true, illustration: 'banana' },
  { id: 'p33', name: 'Pommes', rayon: 'fruits', price: 3.2, unit: 'le kg', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'apple' },
  { id: 'p34', name: 'Tomates', rayon: 'fruits', price: 3.9, unit: 'le kg', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'tomato' },
  { id: 'p35', name: 'Oignons', rayon: 'fruits', price: 1.8, unit: 'le kg', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'onion' },
  { id: 'p36', name: 'Citrons', rayon: 'fruits', price: 0.6, unit: 'la pièce', tags: ['frais'], isSample: true, illustration: 'apple' },
  { id: 'p37', name: 'Carottes', rayon: 'fruits', price: 1.6, unit: 'le kg', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'onion' },
  { id: 'p38', name: 'Pommes de terre', rayon: 'fruits', price: 1.5, unit: 'le kg', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'onion' },
  { id: 'p39', name: 'Avocat', rayon: 'fruits', price: 1.2, unit: 'la pièce', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'apple' },
  { id: 'p40', name: 'Sandwich jambon-beurre', rayon: 'snacks', price: 3.9, unit: 'la pièce', tags: ['frais', 'derniere-minute'], isSample: true, illustration: 'sandwich' },
  { id: 'p41', name: 'Croque-monsieur', rayon: 'snacks', price: 3.5, unit: 'la pièce', tags: ['derniere-minute', 'soiree'], isSample: true, illustration: 'sandwich' },
  { id: 'p42', name: 'Sandwich poulet crudités', rayon: 'snacks', price: 4.5, unit: 'la pièce', tags: ['frais'], isSample: true, illustration: 'sandwich' },
  { id: 'p43', name: 'Wrap végétarien', rayon: 'snacks', price: 4.2, unit: 'la pièce', tags: ['frais', 'vegetarien'], isSample: true, illustration: 'sandwich' },
  { id: 'p44', name: 'Chips sel', rayon: 'snacks', price: 1.9, unit: 'le paquet', tags: ['soiree', 'vegetarien'], isSample: true, illustration: 'bag' },
  { id: 'p45', name: 'Chips paprika', rayon: 'snacks', price: 1.9, unit: 'le paquet', tags: ['soiree', 'vegetarien'], isSample: true, illustration: 'bag' },
  { id: 'p46', name: 'Cacahuètes salées', rayon: 'snacks', price: 2.2, unit: 'le sachet', tags: ['soiree', 'vegetarien'], isSample: true, illustration: 'bag' },
  { id: 'p47', name: 'Barre de céréales', rayon: 'snacks', price: 1.2, unit: 'la pièce', tags: ['pratique', 'petit-dej'], isSample: true, illustration: 'bar' },
  { id: 'p48', name: 'Lait demi-écrémé 1 L', rayon: 'petitdej', price: 1.2, unit: 'la brique', tags: ['petit-dej', 'frais'], isSample: true, illustration: 'carton' },
  { id: 'p49', name: 'Œufs x6', rayon: 'petitdej', price: 2.6, unit: 'la boîte', tags: ['petit-dej', 'frais'], isSample: true, illustration: 'eggs' },
  { id: 'p50', name: 'Beurre demi-sel 250 g', rayon: 'petitdej', price: 3.2, unit: 'la plaquette', tags: ['petit-dej', 'frais'], isSample: true, illustration: 'butter' },
  { id: 'p51', name: 'Yaourts nature x4', rayon: 'petitdej', price: 1.8, unit: 'le lot', tags: ['petit-dej', 'frais', 'vegetarien'], isSample: true, illustration: 'pack' },
  { id: 'p52', name: 'Céréales croustillantes', rayon: 'petitdej', price: 3.3, unit: 'la boîte', tags: ['petit-dej'], isSample: true, illustration: 'box' },
  { id: 'p53', name: 'Pain de mie', rayon: 'petitdej', price: 1.9, unit: 'le paquet', tags: ['petit-dej', 'derniere-minute'], isSample: true, illustration: 'bag' },
  { id: 'p54', name: 'Café moulu 250 g', rayon: 'petitdej', price: 3.9, unit: 'le paquet', tags: ['petit-dej'], isSample: true, illustration: 'pack' },
  { id: 'p55', name: 'Liquide vaisselle', rayon: 'menager', price: 2.1, unit: 'le flacon', tags: ['maison', 'depannage'], isSample: true, illustration: 'spray' },
  { id: 'p56', name: 'Éponges x3', rayon: 'menager', price: 1.9, unit: 'le lot', tags: ['maison', 'depannage'], isSample: true, illustration: 'sponge' },
  { id: 'p57', name: 'Papier toilette x6', rayon: 'menager', price: 3.6, unit: 'le lot', tags: ['maison', 'depannage', 'derniere-minute'], isSample: true, illustration: 'roll' },
  { id: 'p58', name: 'Lessive liquide 1 L', rayon: 'menager', price: 5.9, unit: 'le flacon', tags: ['maison'], isSample: true, illustration: 'spray' },
  { id: 'p59', name: 'Sacs poubelle 30 L x20', rayon: 'menager', price: 2.6, unit: 'le rouleau', tags: ['maison', 'pratique'], isSample: true, illustration: 'roll' },
  { id: 'p60', name: 'Essuie-tout x2', rayon: 'menager', price: 2.4, unit: 'le lot', tags: ['maison'], isSample: true, illustration: 'roll' },
  { id: 'p61', name: 'Spray multi-surfaces', rayon: 'menager', price: 2.9, unit: 'le flacon', tags: ['maison'], isSample: true, illustration: 'spray' },
  { id: 'p62', name: 'Papier aluminium', rayon: 'menager', price: 2.8, unit: 'le rouleau', tags: ['maison', 'pratique'], isSample: true, illustration: 'roll' },
  { id: 'p63', name: 'Dentifrice', rayon: 'hygiene', price: 2.2, unit: 'le tube', tags: ['hygiene', 'depannage'], isSample: true, illustration: 'tube' },
  { id: 'p64', name: 'Gel douche', rayon: 'hygiene', price: 2.6, unit: 'le flacon', tags: ['hygiene'], isSample: true, illustration: 'spray' },
  { id: 'p65', name: 'Mouchoirs en papier', rayon: 'hygiene', price: 0.9, unit: 'le paquet', tags: ['hygiene', 'pratique', 'derniere-minute'], isSample: true, illustration: 'tissues' },
  { id: 'p66', name: 'Brosse à dents', rayon: 'hygiene', price: 2.4, unit: 'la pièce', tags: ['hygiene', 'depannage'], isSample: true, illustration: 'tube' },
  { id: 'p67', name: 'Savon liquide mains', rayon: 'hygiene', price: 2.3, unit: 'le flacon', tags: ['hygiene'], isSample: true, illustration: 'spray' },
  { id: 'p68', name: 'Coton-tiges', rayon: 'hygiene', price: 1.7, unit: 'la boîte', tags: ['hygiene'], isSample: true, illustration: 'box' },
  { id: 'p69', name: 'Déodorant', rayon: 'hygiene', price: 3.5, unit: 'le flacon', tags: ['hygiene'], isSample: true, illustration: 'spray' },
  { id: 'p70', name: 'Galettes de sarrasin', rayon: 'breizh', price: 3.4, unit: 'le lot de 6', tags: ['breizh', 'sans-gluten'], isSample: true, illustration: 'crepe' },
  { id: 'p71', name: 'Palets bretons', rayon: 'breizh', price: 3.9, unit: 'la boîte', tags: ['breizh', 'soiree'], isSample: true, illustration: 'biscuits' },
  { id: 'p72', name: 'Caramel au beurre salé', rayon: 'breizh', price: 4.5, unit: 'le pot', tags: ['breizh', 'petit-dej'], isSample: true, illustration: 'jar' },
  { id: 'p73', name: 'Jus de pomme de Bretagne', rayon: 'breizh', price: 2.9, unit: 'la bouteille', tags: ['breizh', 'frais'], isSample: true, illustration: 'bottle' },
  { id: 'p74', name: 'Cola breton 33 cl', rayon: 'breizh', price: 1.9, unit: 'la canette', tags: ['breizh', 'soiree'], isSample: true, illustration: 'can' },
  { id: 'p75', name: 'Biscuits au beurre bretons', rayon: 'breizh', price: 3.6, unit: 'la boîte', tags: ['breizh'], isSample: true, illustration: 'biscuits' },
  { id: 'p76', name: 'Crêpes dentelle', rayon: 'breizh', price: 3.2, unit: 'la boîte', tags: ['breizh', 'soiree'], isSample: true, illustration: 'biscuits' },
]

export const productCount = products.length
