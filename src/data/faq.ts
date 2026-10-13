// SAMPLE DATA (wording) – facts inside answers are real (PLAN.md §3, §12) or say « à confirmer en magasin ».
// Replace with the owner's own answers.

export type FaqGroup = 'Horaires' | 'Colis' | 'Paiement' | 'Produits' | 'Accès'

export interface Faq {
  id: string
  group: FaqGroup
  q: string
  a: string
  /** true when the answer relies on something not yet confirmed by the owner. */
  toConfirm?: boolean
}

export const faqGroups: FaqGroup[] = ['Horaires', 'Colis', 'Paiement', 'Produits', 'Accès']

export const faq: Faq[] = [
  { id: 'f1', group: 'Horaires', q: 'Jusqu’à quelle heure êtes-vous ouverts ?', a: 'Le magasin ferme à 1h du matin, tous les soirs de la semaine. Le comptoir colis ferme plus tôt, à 22h. Les horaires d’ouverture en début de journée sont à confirmer.', toConfirm: true },
  { id: 'f2', group: 'Horaires', q: 'Êtes-vous ouverts le dimanche ?', a: 'Oui, l’épicerie est ouverte 7 jours sur 7. L’heure d’ouverture du dimanche (15h d’après la source privilégiée) est à confirmer en magasin.', toConfirm: true },
  { id: 'f3', group: 'Horaires', q: 'Et les jours fériés ?', a: 'Nous n’avons pas d’information sur les jours fériés. Si une fermeture exceptionnelle est annoncée, un avis apparaît en haut du site. À confirmer en magasin.', toConfirm: true },
  { id: 'f4', group: 'Colis', q: 'Quels transporteurs sont acceptés ?', a: 'Le relais traite les colis Chronopost, Colissimo et DPD, par le réseau Pickup et La Poste.' },
  { id: 'f5', group: 'Colis', q: 'Quel est le poids maximum d’un colis ?', a: 'Moins de 20 kg, avec un côté le plus long inférieur à 1 m (relais standard).' },
  { id: 'f6', group: 'Colis', q: 'Que dois-je présenter pour retirer un colis ?', a: 'Votre Pickup Pass (le QR code du mail du transporteur) ou votre code de retrait. Sans l’un ni l’autre, une pièce d’identité originale : carte d’identité, passeport ou permis de conduire.' },
  { id: 'f7', group: 'Colis', q: 'Quelqu’un d’autre peut-il récupérer mon colis ?', a: 'Oui. La personne doit présenter sa propre pièce d’identité originale et la vôtre. Les procurations écrites ne sont pas acceptées.' },
  { id: 'f8', group: 'Colis', q: 'Combien de temps mon colis est-il conservé ?', a: '9 jours pour DPD, 8 jours pour Chronopost, 14 jours pour Colissimo. La date limite figure dans l’avis d’arrivée.' },
  { id: 'f9', group: 'Colis', q: 'Mon colis est abîmé, que faire ?', a: 'Vous pouvez enregistrer des réserves sur le scanner du commerçant, puis accepter ou refuser le colis.' },
  { id: 'f10', group: 'Colis', q: 'Puis-je envoyer un colis sans imprimer d’étiquette ?', a: 'Oui, pour Chronopost et Colissimo : si votre destinataire vous fournit un QR code / e-label, présentez-le en relais et nous imprimons l’étiquette sur place.' },
  { id: 'f11', group: 'Colis', q: 'Jusqu’à quelle heure puis-je déposer ou retirer un colis ?', a: 'Les horaires du comptoir colis vont jusqu’à 22h. Un avis client évoque des colis traités plus tard : en cas de doute, demandez au comptoir. À confirmer.', toConfirm: true },
  { id: 'f12', group: 'Colis', q: 'C’est quoi Impekkable, et comment ça marche ici ?', a: 'Impekkable est un service de pressing de linge de maison (draps, housses de couette, couettes, oreillers). Vous préparez votre commande sur votre espace Impekkable, la déposez ici dans son kit de démarrage, puis la récupérez quelques jours plus tard. Tarifs et délais sont chez Impekkable.' },
  { id: 'f13', group: 'Paiement', q: 'Peut-on payer par carte ?', a: 'Oui, les cartes de crédit et de débit sont acceptées.' },
  { id: 'f14', group: 'Paiement', q: 'Et les espèces ou les titres-restaurant ?', a: 'Nous n’avons pas cette information. À confirmer en magasin.', toConfirm: true },
  { id: 'f15', group: 'Produits', q: 'Trouve-t-on des fruits et légumes, des sandwichs ?', a: 'L’activité déclarée du magasin couvre les produits alimentaires, les fruits et légumes, la sandwicherie, les produits ménagers et d’hygiène. Les produits exacts changent : la liste en ligne est un exemple.', toConfirm: true },
  { id: 'f16', group: 'Produits', q: 'Avez-vous des produits bretons ?', a: 'Le « Coin Breizh » du catalogue est une idée, pas une promesse. À confirmer en magasin.', toConfirm: true },
  { id: 'f17', group: 'Produits', q: 'Vendez-vous de l’alcool ?', a: 'L’activité déclarée du magasin inclut les boissons à emporter, alcool compris, réservées aux adultes. Il n’y a aucune promotion ici. Une vente peut être suspendue par arrêté : un avis s’affiche alors sur le site. À confirmer en magasin. L’abus d’alcool est dangereux pour la santé, à consommer avec modération.', toConfirm: true },
  { id: 'f18', group: 'Accès', q: 'Comment venir en transports ou en voiture ?', a: 'Métro Colombier (ligne b, environ 260 m), République (lignes a et b, environ 300 m). Devant le no 46, 5 places à horodateur : payant du lundi au samedi de 9h à 19h, gratuit le soir, le dimanche et de 12h à 14h.' },
  { id: 'f19', group: 'Accès', q: 'Le magasin est-il accessible en fauteuil roulant ?', a: 'Le réseau Pickup signale un accès PMR pour ce relais, mais nous n’avons pas de détail (seuil, largeur de porte). À confirmer en magasin.', toConfirm: true },
]
