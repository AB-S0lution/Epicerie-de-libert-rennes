// `rules`: REAL DATA, published network rules on the relay's own pickup.fr page (PLAN.md §3).
// `services`, `steps`: wording is ours, facts inside are real (marked `real: true`) or flagged.
// Source: https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE (consulted 2026-10-13)

export interface ParcelRule {
  id: string
  title: string
  text: string
  source: 'pickup.fr relais'
}

export const rules: ParcelRule[] = [
  { id: 'avis', title: 'Avis d’arrivée', text: 'Vous recevez un e-mail et/ou un SMS avec l’adresse du relais, ses horaires et la date limite de retrait.', source: 'pickup.fr relais' },
  { id: 'duree', title: 'Durée de conservation', text: 'Votre colis reste au relais 9 jours (DPD), 8 jours (Chronopost) ou 14 jours (Colissimo).', source: 'pickup.fr relais' },
  { id: 'pass', title: 'Ce qu’il faut présenter', text: 'Le Pickup Pass (QR code du mail du transporteur) ou le code de retrait. À défaut, une pièce d’identité originale : carte d’identité, passeport ou permis de conduire.', source: 'pickup.fr relais' },
  { id: 'tiers', title: 'Quelqu’un d’autre le récupère', text: 'La personne présente sa propre pièce d’identité originale et la vôtre. Les procurations écrites ne sont pas acceptées.', source: 'pickup.fr relais' },
  { id: 'abime', title: 'Colis abîmé', text: 'Vous pouvez enregistrer des réserves sur le scanner du commerçant, puis accepter ou refuser le colis.', source: 'pickup.fr relais' },
  { id: 'taille', title: 'Limites de taille', text: 'Moins de 20 kg et côté le plus long inférieur à 1 m (relais standard).', source: 'pickup.fr relais' },
  { id: 'shop2shop', title: 'Envoi de relais à relais', text: 'Shop2Shop by Chronopost : l’étiquette se crée en ligne, le colis se dépose au relais.', source: 'pickup.fr relais' },
]

export interface ParcelService {
  id: string
  title: string
  text: string
  real: boolean
}

export const services: ParcelService[] = [
  { id: 'retrait', title: 'Retrait de colis', text: 'Retirez vos colis Chronopost, Colissimo et DPD au comptoir, avec votre Pickup Pass ou votre code.', real: true },
  { id: 'envoi', title: 'Envoi de colis', text: 'Déposez un colis déjà affranchi ou préparé en ligne, jusqu’à 20 kg.', real: true },
  { id: 'shop2shop', title: 'Shop2Shop', text: 'Envoi de relais à relais par Chronopost, étiquette créée en ligne.', real: true },
  { id: 'sans-etiquette', title: 'Envoi sans étiquette', text: 'Si votre destinataire vous fournit un QR code / e-label, présentez-le en relais et nous imprimons l’étiquette sur place.', real: true },
  { id: 'transporteurs', title: 'Transporteurs', text: 'Chronopost, Colissimo, DPD. Poids maximum : 20 kg.', real: true },
  { id: 'pressing', title: 'Dépôt pressing linge de maison (Impekkable)', text: 'Préparez votre commande sur votre espace Impekkable, déposez-la ici dans son kit, récupérez votre linge propre quelques jours plus tard. Tarifs et délais : voir Impekkable.', real: true },
]

export interface ParcelStep {
  verb: string
  text: string
  flow: 'recevoir' | 'envoyer'
}

export const steps: ParcelStep[] = [
  { verb: 'Recevez', text: 'Le transporteur vous prévient par e-mail ou SMS : adresse du relais, horaires, date limite.', flow: 'recevoir' },
  { verb: 'Présentez', text: 'Montrez votre Pickup Pass ou votre code de retrait, ou une pièce d’identité originale.', flow: 'recevoir' },
  { verb: 'Vérifiez', text: 'Le colis est abîmé ? Enregistrez vos réserves sur le scanner avant de l’accepter.', flow: 'recevoir' },
  { verb: 'Repartez', text: 'C’est tout. Le relais est ouvert jusqu’à 22h, le magasin jusqu’à 1h.', flow: 'recevoir' },
  { verb: 'Préparez', text: 'Créez votre étiquette en ligne, ou demandez un QR code / e-label à votre destinataire.', flow: 'envoyer' },
  { verb: 'Déposez', text: 'Apportez votre colis (moins de 20\u00a0kg, moins de 1\u00a0m) au comptoir avant la fermeture du relais.', flow: 'envoyer' },
  { verb: 'Imprimez', text: 'Pas d’imprimante ? Avec un e-label, nous imprimons l’étiquette sur place.', flow: 'envoyer' },
  { verb: 'Suivez', text: 'Le suivi se fait chez le transporteur, avec le numéro de votre récépissé.', flow: 'envoyer' },
]

export const holding = [
  { carrier: 'DPD', days: 9 },
  { carrier: 'Chronopost', days: 8 },
  { carrier: 'Colissimo', days: 14 },
]

/** Demo widget codes (SAMPLE, never real tracking numbers). */
export const demoCodes: Record<string, { label: string; status: string }> = {
  'DEMO-0001': { label: 'Colis de démonstration A', status: 'Arrivé au relais, à retirer avec un Pickup Pass.' },
  'DEMO-0002': { label: 'Colis de démonstration B', status: 'En route vers le relais. Vous serez prévenu par SMS.' },
  'DEMO-0003': { label: 'Colis de démonstration C', status: 'Déposé au relais, pris en charge par le transporteur.' },
}
