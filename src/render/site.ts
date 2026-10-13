// Shared layout pieces (head, header, footer). Pure string rendering: used by the Vite plugin at build time.
import { business, transport } from '../data/business'
import { DAYS, hours } from '../data/hours'
import { awning, ermine } from '../lib/art'
import { esc, hLabel, toMin } from '../lib/format'

let BASE = '/'
export function setBase(b: string): void {
  BASE = b.endsWith('/') ? b : b + '/'
}
export const base = (): string => BASE
export const href = (path = ''): string => BASE + path

export interface PageMeta {
  title: string
  description: string
  path: string
  noindex?: boolean
}

export const NAV: { id: string; label: string; path: string }[] = [
  { id: 'rayons', label: 'Rayons', path: 'rayons/' },
  { id: 'relais', label: 'Relais colis', path: 'relais-colis/' },
  { id: 'horaires', label: 'Horaires', path: 'horaires-acces/' },
  { id: 'histoire', label: 'Histoire', path: 'notre-histoire/' },
  { id: 'avis', label: 'Avis', path: 'avis/' },
  { id: 'contact', label: 'Contact', path: 'contact/' },
]

export const ALL_LINKS: { label: string; path: string; group: string }[] = [
  { label: 'Accueil', path: '', group: 'Le magasin' },
  { label: 'Nos rayons', path: 'rayons/', group: 'Le magasin' },
  { label: 'Point relais colis', path: 'relais-colis/', group: 'Le magasin' },
  { label: 'Horaires et accès', path: 'horaires-acces/', group: 'Le magasin' },
  { label: 'Contact', path: 'contact/', group: 'Le magasin' },
  { label: 'Le magasin et le boulevard', path: 'notre-histoire/', group: 'Le quartier' },
  { label: 'Vos avis', path: 'avis/', group: 'Le quartier' },
  { label: 'Le Journal du boulevard', path: 'journal/', group: 'Le quartier' },
  { label: 'Scènes du boulevard', path: 'galerie/', group: 'Le quartier' },
  { label: 'Questions fréquentes', path: 'faq/', group: 'Aide' },
  { label: 'Plan du site', path: 'plan-du-site/', group: 'Aide' },
  { label: 'Mentions légales', path: 'mentions-legales/', group: 'Légal' },
  { label: 'Confidentialité', path: 'confidentialite/', group: 'Légal' },
]

const LD_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/** LocalBusiness JSON-LD: verified data only (no phone, no aggregateRating, hours marked as preferred set). */
export function jsonLd(): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GroceryStore',
    name: business.displayName,
    alternateName: business.listingName,
    legalName: business.legalName,
    url: business.links.siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    openingHoursSpecification: hours.shop.map((h, i) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: LD_DAYS[i],
      opens: h.open,
      closes: h.close,
    })),
    paymentAccepted: 'Carte bancaire',
    taxID: business.legal.vat,
    vatID: business.legal.vat,
    foundingDate: '2025-11-24',
    description: 'Épicerie de quartier ouverte 7j/7 jusqu’à 1h et point relais colis (Pickup / La Poste) à Rennes.',
  }
  return JSON.stringify(data)
}

export function head(m: PageMeta): string {
  const url = business.links.siteUrl + m.path
  return `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.description)}" />
${m.noindex ? '<meta name="robots" content="noindex" />' : ''}
<link rel="canonical" href="${url}" />
<meta name="theme-color" content="#0E1117" />
<meta name="color-scheme" content="dark light" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="${esc(business.displayName)}" />
<meta property="og:title" content="${esc(m.title)}" />
<meta property="og:description" content="${esc(m.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${business.links.siteUrl}og.png" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" type="image/svg+xml" href="${href('favicon.svg')}" />
<link rel="expect" href="#main" blocking="render" />
<script>try{var t=localStorage.getItem('liberte-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}document.documentElement.classList.add('js')</script>
<script type="application/ld+json">${jsonLd()}</script>`
}

const burgerIcon = `<span class="burger-l"></span><span class="burger-l"></span>`

export function header(active: string): string {
  const nav = NAV.map(
    (n) => `<a href="${href(n.path)}"${n.id === active ? ' aria-current="page"' : ''}>${n.label}</a>`,
  ).join('')
  return `
<a class="skip" href="#main">Aller au contenu</a>
<div class="notices" id="notices" role="region" aria-label="Avis du magasin" hidden></div>
<header class="site-header" id="top">
  <div class="hdr-in">
    <a class="wordmark" href="${href()}" aria-label="${esc(business.displayName)}, accueil">
      <span class="wm-stripes" aria-hidden="true"></span>
      <span class="wm-text"><span class="wm-top">Épicerie</span><span class="wm-bot">de Liberté</span></span>
    </a>
    <a class="status-pill" href="${href('horaires-acces/')}" data-status-pill aria-live="polite">
      <i class="dot" aria-hidden="true"></i><span class="st-text">Voir les horaires</span>
    </a>
    <nav class="nav" id="nav" aria-label="Navigation principale">${nav}</nav>
    <div class="hdr-tools">
      <button class="icon-btn" type="button" data-theme-toggle aria-label="Passer en mode jour" title="Jour / Nuit">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path class="ico-moon" d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" fill="currentColor"/><g class="ico-sun" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></svg>
      </button>
      <button class="icon-btn list-btn" type="button" data-list-open aria-label="Ouvrir Ma liste" aria-haspopup="dialog">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>
        <span class="list-count" data-list-count aria-hidden="true">0</span>
      </button>
      <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="nav" aria-label="Menu">${burgerIcon}</button>
    </div>
  </div>
</header>
<dialog class="list-drawer" id="list-drawer" aria-labelledby="list-title">
  <div class="ld-in">
    <div class="ld-head"><h2 id="list-title">Ma liste</h2><button class="icon-btn" type="button" data-list-close aria-label="Fermer Ma liste">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div>
    <p class="ld-note">Un simple mémo, enregistré dans votre navigateur. Aucune commande en ligne : les produits et prix du site sont des exemples.</p>
    <ul class="ld-items" data-list-items></ul>
    <p class="ld-empty" data-list-empty>Votre liste est vide. Ajoutez des produits depuis les rayons.</p>
    <div class="ld-foot"><span>Total indicatif</span><strong data-list-total>0,00 €</strong></div>
    <button class="btn btn-ghost" type="button" data-list-clear>Vider la liste</button>
  </div>
</dialog>`
}

function hoursTable(service: 'shop' | 'parcel', caption: string): string {
  const rows = DAYS.map((d, i) => {
    const h = hours[service][i]
    return `<tr><th scope="row">${d}</th><td>${hLabel(toMin(h.open))} à ${hLabel(toMin(h.close))}</td></tr>`
  }).join('')
  return `<table class="hours-mini"><caption>${caption}</caption><tbody>${rows}</tbody></table>`
}

export function footer(): string {
  const metro = transport.filter((t) => t.kind === 'metro').map((t) => `${t.name} (${t.detail.toLowerCase()})`).join(', ')
  const groups = ['Le magasin', 'Le quartier', 'Aide', 'Légal']
  const cols = groups
    .map(
      (g) =>
        `<div class="ft-col"><h3>${g}</h3><ul>${ALL_LINKS.filter((l) => l.group === g)
          .map((l) => `<li><a href="${href(l.path)}">${l.label}</a></li>`)
          .join('')}</ul></div>`,
    )
    .join('')
  return `
<footer class="site-footer">
  <div class="ft-awning" aria-hidden="true"><svg viewBox="0 0 1200 34" preserveAspectRatio="none">${awning(0, 0, 1200, 24)}</svg></div>
  <div class="wrap ft-grid">
    <div class="ft-id">
      <p class="ft-name">${esc(business.displayName)}</p>
      <address>${business.address.street}<br />${business.address.postalCode} ${business.address.city}</address>
      <p class="ft-plate" aria-label="Plaque de rue bilingue"><span>Boulevard de la Liberté</span><em>${business.address.breton}</em></p>
      <p class="ft-metro">Métro : ${metro}.</p>
      <a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a>
    </div>
    <div class="ft-hours">
      ${hoursTable('shop', 'Épicerie')}
      ${hoursTable('parcel', 'Relais colis')}
      <p class="ft-tbc">Horaires à confirmer. Le magasin ferme à 1h tous les soirs.</p>
    </div>
    <div class="ft-links">${cols}</div>
  </div>
  <div class="wrap ft-legal">
    <p>${ermine('ft-ermine')} Site de démonstration. Les produits, prix, articles et illustrations sont des exemples. Les avis cités sont des avis Google réels, attribués à la plateforme.</p>
    <p>© 2026 ${esc(business.legalName)}, SARL, SIREN ${business.legal.siren}.</p>
  </div>
</footer>`
}

/** Wrap a page body in the standard page head (title + optional lead). */
export function pageHero(title: string, lead: string, extra = ''): string {
  return `<section class="page-hero"><div class="wrap"><h1 class="h-display split">${title}</h1><p class="lead">${lead}</p>${extra}</div></section>`
}
