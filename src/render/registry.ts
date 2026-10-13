// Page registry: id -> head metadata, active nav item and body renderer.
import { homeBody } from './home'
import {
  articleBody, avisBody, confidentialiteBody, contactBody, faqBody, galerieBody, histoireBody,
  horairesBody, journalBody, mentionsBody, notFoundBody, planBody, rayonsBody, relaisBody,
} from './pages'
import type { PageMeta } from './site'

export interface PageDef {
  meta: PageMeta
  nav: string
  body: () => string
}

export const pages: Record<string, PageDef> = {
  home: { nav: '', body: homeBody, meta: { path: '', title: 'Épicerie de Liberté, Rennes : ouverte 7j/7 jusqu’à 1h et relais colis', description: 'Épicerie de quartier au 46 boulevard de la Liberté à Rennes, ouverte 7j/7 jusqu’à 1h. Point relais colis Pickup et La Poste, jusqu’à 20 kg. Horaires à confirmer.' } },
  rayons: { nav: 'rayons', body: rayonsBody, meta: { path: 'rayons/', title: 'Nos rayons : épicerie de dépannage à Rennes | Épicerie de Liberté', description: 'Dix rayons pour dépanner jusqu’à 1h du matin : épicerie, boissons, fruits et légumes, snacks, ménager, hygiène. Catalogue d’exemple, produits et prix fictifs.' } },
  relais: { nav: 'relais', body: relaisBody, meta: { path: 'relais-colis/', title: 'Point relais colis Pickup et La Poste, Rennes | Épicerie de Liberté', description: 'Retrait et envoi de colis Chronopost, Colissimo et DPD jusqu’à 20 kg, Shop2Shop, envoi sans étiquette. Comptoir colis jusqu’à 22h (à confirmer), 46 bd de la Liberté.' } },
  horaires: { nav: 'horaires', body: horairesBody, meta: { path: 'horaires-acces/', title: 'Horaires et accès, 46 bd de la Liberté, Rennes | Épicerie de Liberté', description: 'Horaires de l’épicerie (fermeture à 1h) et du relais colis (22h), métro Colombier et République, bus, stationnement. Horaires à confirmer.' } },
  histoire: { nav: 'histoire', body: histoireBody, meta: { path: 'notre-histoire/', title: 'Le magasin et le boulevard de la Liberté | Épicerie de Liberté', description: 'Une épicerie de quartier depuis 2025 sur un boulevard rebaptisé de la Liberté le 17 octobre 1870. L’histoire du canal, du boulevard et du quartier.' } },
  avis: { nav: 'avis', body: avisBody, meta: { path: 'avis/', title: 'Vos avis Google : 5,0/5 sur 26 avis (oct. 2026) | Épicerie de Liberté', description: 'Onze avis Google recopiés tels quels : accueil chaleureux, horaires tardifs, service colis. 5,0/5 sur 26 avis Google, octobre 2026.' } },
  journal: { nav: '', body: journalBody, meta: { path: 'journal/', title: 'Le Journal du boulevard | Épicerie de Liberté', description: 'Articles d’exemple sur les colis, le quartier et les soirées à Rennes : récupérer un colis, concerts au Liberté, histoire du boulevard.' } },
  article: { nav: '', body: articleBody, meta: { path: 'journal/article/', title: 'Article | Le Journal du boulevard, Épicerie de Liberté', description: 'Article d’exemple du Journal du boulevard de l’Épicerie de Liberté, Rennes.' } },
  galerie: { nav: '', body: galerieBody, meta: { path: 'galerie/', title: 'Scènes du boulevard : illustrations | Épicerie de Liberté', description: 'Dix-neuf illustrations originales du boulevard de la Liberté, de jour comme de nuit : façade, rayons, comptoir colis, quartier.' } },
  faq: { nav: '', body: faqBody, meta: { path: 'faq/', title: 'Questions fréquentes | Épicerie de Liberté, Rennes', description: 'Horaires, colis (Pickup Pass, pièce d’identité, durée de conservation), paiement, produits et accès : les réponses, ou « à confirmer en magasin ».' } },
  contact: { nav: 'contact', body: contactBody, meta: { path: 'contact/', title: 'Nous trouver : 46 boulevard de la Liberté, Rennes | Épicerie de Liberté', description: 'Épicerie de Liberté, 46 boulevard de la Liberté, 35000 Rennes. Itinéraire, horaires, paiement par carte. Passez nous voir, on répond au comptoir.' } },
  mentions: { nav: '', body: mentionsBody, meta: { path: 'mentions-legales/', title: 'Mentions légales | Épicerie de Liberté', description: 'Mentions légales : EPI DE LIBERTE SARL, SIREN 994 343 598, 46 boulevard de la Liberté, 35000 Rennes.' } },
  confidentialite: { nav: '', body: confidentialiteBody, meta: { path: 'confidentialite/', title: 'Confidentialité | Épicerie de Liberté', description: 'Aucun cookie ni suivi. Seuls le thème et « Ma liste » sont enregistrés dans votre navigateur.' } },
  plan: { nav: '', body: planBody, meta: { path: 'plan-du-site/', title: 'Plan du site | Épicerie de Liberté', description: 'Toutes les pages du site de l’Épicerie de Liberté à Rennes.' } },
  notfound: { nav: '', body: notFoundBody, meta: { path: '404.html', noindex: true, title: 'Ce rayon est fermé : page introuvable | Épicerie de Liberté', description: 'Page introuvable. Retour à l’accueil de l’Épicerie de Liberté, Rennes.' } },
}
