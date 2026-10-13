// SAMPLE DATA – not supplied by the business; replace with real data.

export interface Tag {
  id: string
  label: string
  note?: string
}

export const tags: Tag[] = [
  { id: 'depannage', label: 'Dépannage' },
  { id: 'derniere-minute', label: 'Dernière minute' },
  { id: 'frais', label: 'Frais' },
  { id: 'vegetarien', label: 'Végétarien' },
  { id: 'sans-gluten', label: 'Sans gluten', note: 'À vérifier sur l’emballage' },
  { id: 'bebe', label: 'Bébé' },
  { id: 'soiree', label: 'Soirée', note: 'Snacks et softs uniquement' },
  { id: 'petit-dej', label: 'Petit-déj' },
  { id: 'maison', label: 'Maison' },
  { id: 'hygiene', label: 'Hygiène' },
  { id: 'breizh', label: 'Breizh (à confirmer)', note: 'Non confirmé par le magasin' },
  { id: 'pratique', label: 'Pratique' },
]
