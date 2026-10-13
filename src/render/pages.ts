// Bodies of every page except the home page. Pure string rendering (build time).
import { business, PHONE_CONFIRMED, transport } from '../data/business'
import { rayons } from '../data/categories'
import { faqGroups } from '../data/faq'
import { gallery, galleryFilters } from '../data/gallery'
import { hours } from '../data/hours'
import { boulevardFacts, history, landmarks, team } from '../data/misc'
import { holding, rules, services, steps } from '../data/parcel'
import { postTags, posts } from '../data/posts'
import { ownerReplies, reviewWords, reviews } from '../data/reviews'
import { tags } from '../data/tags'
import { products } from '../data/products'
import { glyph, quartierMap } from '../lib/art'
import { dateFr, esc } from '../lib/format'
import { photo, photoThemes, photos } from '../data/photos'
import { clockMarkup, photoBand, photoFigure, photoImg, postPhoto, faqBlock, hoursFull, postCard, productCard, ratingBadge, receipt, sceneFigure } from './parts'
import { ALL_LINKS, href, pageHero } from './site'

// ---------------- Rayons ----------------
export function rayonsBody(): string {
  const chips = [
    `<button type="button" class="chip is-on" data-rayon="all" aria-pressed="true">Tous les rayons</button>`,
    ...rayons.map((r) => `<button type="button" class="chip" data-rayon="${r.id}" aria-pressed="false" style="--tint:${r.tint}">${esc(r.short)}</button>`),
  ].join('')
  const tagChips = tags
    .map((t) => `<button type="button" class="chip chip-tag" data-tag="${t.id}" aria-pressed="false">${esc(t.label)}</button>`)
    .join('')
  return `
${pageHero('Nos rayons', 'Ce que vous trouverez au 46, du dépannage de dernière minute au dîner vite fait. La liste ci-dessous est un exemple : produits et prix sont fictifs.')}
<div class="catalog-bar" data-catalog-bar>
  <div class="wrap cb-in">
    <div class="cb-search"><label for="q" class="sr-only">Rechercher un produit</label><input id="q" type="search" placeholder="Rechercher : pâtes, piles, lait…" autocomplete="off" enterkeyhint="search" data-search /></div>
    <div class="cb-chips" role="group" aria-label="Rayons">${chips}</div>
  </div>
</div>
<section class="section rayon-photos" aria-label="Les rayons en photos"><div class="wrap">
  <ul class="photo-strip">${['gondole-vue-haut', 'rayon-conserves', 'frigo-yaourts', 'rayon-boissons', 'oranges-citrons-caisse', 'cereales-bocaux', 'sandwich-jambon', 'pain-tranche'].map((s) => `<li class="ps-item">${photoImg(photo(s))}</li>`).join('')}</ul>
  <p class="tbc">Photos d’illustration (Unsplash), pas des photos du magasin.</p>
</div></section>
<section class="section catalog" aria-live="polite">
  <div class="wrap">
    <div class="rayon-head" data-rayon-head></div>
    <details class="tag-box"><summary>Filtrer par étiquette</summary><div class="tag-chips" role="group" aria-label="Étiquettes">${tagChips}</div></details>
    <p class="result-count" data-count>${products.length} produits d’exemple</p>
    <ul class="pgrid" data-grid>${products.map(productCard).join('')}</ul>
    <div class="empty" data-empty hidden>
      <div class="empty-art">${glyph('box')}</div>
      <h2>Rien ne correspond</h2>
      <p>Essayez un autre mot, ou retirez un filtre. Sinon, demandez au comptoir.</p>
      <button type="button" class="btn btn-ghost" data-reset>Réinitialiser les filtres</button>
    </div>
    <aside class="ask-counter">
      <h2>Vous ne trouvez pas ? Demandez au comptoir</h2>
      <p>Le catalogue en ligne est un exemple et change selon l’arrivage. Pour savoir si un produit est en rayon, passez au 46 boulevard de la Liberté.</p>
      <a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a>
    </aside>
  </div>
</section>`
}

// ---------------- Relais colis ----------------
export function relaisBody(): string {
  const p = hours.parcel
  return `
<section class="page-hero relais-hero"><div class="wrap relais-hero-grid">
  <div><h1 class="h-display split">Vos colis, jusqu’à 22h</h1>
  <p class="lead">Point relais Pickup et point La Poste au 46 boulevard de la Liberté : retrait, envoi, Shop2Shop, envoi sans étiquette. Les horaires du comptoir colis sont à confirmer.</p>
  <p class="hero-cta"><a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a><a class="link-arrow" href="${business.links.pickup}" target="_blank" rel="noopener">Page officielle Pickup</a></p></div>
  <div class="relais-hero-art">${sceneFigure('comptoir-colis', 'Illustration du comptoir colis avec un scanner et des colis à retirer.')}</div>
</div></section>

<section class="section"><div class="wrap">
  <h2 class="h-display">Ce que vous pouvez faire</h2>
  <div class="svc-grid">${services.map((s) => `<article class="svc"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.id === 'pressing' ? `<a class="link-arrow" href="${business.links.impekkable}" target="_blank" rel="noopener">Voir Impekkable</a>` : ''}</article>`).join('')}</div>
  <ul class="photo-strip ps-3">${['colis-table', 'pile-cartons', 'colis-carton'].map((s) => `<li class="ps-item">${photoImg(photo(s))}</li>`).join('')}</ul>
  <p class="tbc">Photos d’illustration (Unsplash), pas des photos du relais.</p>
</div></section>

<section class="section steps-section"><div class="wrap steps-grid">
  <div><h2 class="h-display">Recevez, présentez, repartez</h2>
  <ol class="verbs big">${steps.filter((s) => s.flow === 'recevoir').map((s) => `<li><strong>${s.verb}</strong><span>${esc(s.text)}</span></li>`).join('')}</ol></div>
  <div><h2 class="h-display">Déposez, envoyez</h2>
  <ol class="verbs big">${steps.filter((s) => s.flow === 'envoyer').map((s) => `<li><strong>${s.verb}</strong><span>${esc(s.text)}</span></li>`).join('')}</ol></div>
</div></section>

<section class="section"><div class="wrap two-col">
  <div>
    <h2 class="h-display">Les règles du réseau Pickup</h2>
    <p class="lead">Elles sont publiées sur la page Pickup de ce relais.</p>
    <dl class="rules">${rules.map((r) => `<div><dt>${esc(r.title)}</dt><dd>${esc(r.text)}</dd></div>`).join('')}</dl>
  </div>
  <aside class="plate-card">
    <h2>Conservation</h2>
    <ul class="hold-list">${holding.map((h) => `<li><strong>${h.days}</strong><span>jours<br />${h.carrier}</span></li>`).join('')}</ul>
    <h2>Taille</h2>
    <p class="big-line">&lt;&nbsp;20&nbsp;kg &middot; &lt;&nbsp;1&nbsp;m</p>
    <h2>Horaires du comptoir colis</h2>
    <ul class="mini-hours">${['Lun', 'Mar à sam', 'Dim'].map((l, i) => `<li><span>${l}</span><strong>${i === 1 ? '11h à 22h' : '15h à 22h'}</strong></li>`).join('')}</ul>
    <p class="tbc">À confirmer : un avis client évoque des colis traités jusqu’à 1h. Lundi : ${p[0].open.replace(':', 'h').replace('h00', 'h')} à 22h.</p>
  </aside>
</div></section>

<section class="section demo-section"><div class="wrap two-col">
  <div>
    <h2 class="h-display">Suivre un colis ?</h2>
    <p class="lead">Le suivi se fait chez le transporteur. Ce champ est une démonstration : il n’interroge rien.</p>
    <form class="track-form" data-track-form novalidate>
      <label for="code">Code de démonstration <span class="demo-tag">démo</span></label>
      <div class="tf-row"><input id="code" name="code" type="text" inputmode="text" autocomplete="off" placeholder="DEMO-0001" aria-describedby="code-msg" /><button class="btn btn-primary" type="submit">Vérifier</button></div>
      <p id="code-msg" class="tf-msg" role="status" aria-live="polite">Essayez DEMO-0001, DEMO-0002 ou DEMO-0003.</p>
    </form>
  </div>
  <div class="faq-mini"><h2 class="h-display">Questions sur les colis</h2>${faqBlock(undefined, 'Colis')}<a class="link-arrow" href="${href('faq/')}">Toutes les questions</a></div>
</div></section>`
}

// ---------------- Horaires et accès ----------------
export function horairesBody(): string {
  const tr = (kind: string) => transport.filter((t) => t.kind === kind)
  const block = (title: string, kind: string) =>
    `<div class="acc-block"><h3>${title}</h3><ul>${tr(kind).map((t) => `<li><strong>${esc(t.name)}</strong><span>${esc(t.detail)}${t.distance ? ', ' + t.distance : ''}</span></li>`).join('')}</ul></div>`
  return `
${pageHero('Horaires et accès', 'Quand passer, comment venir. Les horaires sont à confirmer : les sources ne concordent pas, mais le magasin ferme à 1h tous les soirs.')}
<section class="section clock-section"><div class="wrap clock-grid">
  <div class="clock-copy">
    <h2 class="h-display">Faites tourner l’aiguille</h2>
    <div class="day-tabs" role="group" aria-label="Choisir un jour" data-day-tabs></div>
    <p class="clock-sentence" data-clock-sentence aria-live="polite"></p>
    <ul class="legend"><li><i class="lg lg-shop"></i>Épicerie, jusqu’à 1h</li><li><i class="lg lg-parcel"></i>Relais colis, jusqu’à 22h</li></ul>
  </div>
  <div class="clock-wrap">${clockMarkup('clock-page')}</div>
</div></section>

<section class="section"><div class="wrap two-col">
  <div>${hoursFull()}</div>
  <aside class="plate-card">
    <h2>Notes</h2>
    <ul class="notes">
      <li>Épicerie : jeu de valeurs Google (privilégié). Un annuaire donne 15h tous les jours sauf le dimanche à 12h.</li>
      <li>Relais colis : horaires La Poste et Pickup. Un avis évoque des colis jusqu’à 1h : à confirmer.</li>
      <li>Jours fériés et fermetures : aucune information. À confirmer en magasin.</li>
      <li>Une fermeture exceptionnelle ou une restriction préfectorale s’afficherait dans l’avis en haut du site.</li>
    </ul>
  </aside>
</div></section>

${photoBand('trottoir-nuit')}
<section class="section map-section"><div class="wrap acces-grid">
  <div class="acces-map">${quartierMap()}</div>
  <div class="acces-copy">
    <h2 class="h-display">Comment venir</h2>
    <address>46 boulevard de la Liberté<br />35000 Rennes<br /><em>Boulouard ar Frankiz</em></address>
    <a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a>
    <a class="link-arrow" href="${business.links.carte}" target="_blank" rel="noopener">Ouvrir la carte</a>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="acc-grid">${block('Métro', 'metro')}${block('Bus', 'bus')}${block('Stationnement', 'parking')}${block('Vélo', 'velo')}</div>
  <div class="note-cards">
    <aside class="note-card"><h3>Le dernier bus</h3><p>Les lignes Chronostar circuleraient jusqu’à 0h35 du dimanche au mercredi et jusqu’à 1h35 du jeudi au samedi, avec une ligne de nuit les week-ends. À vérifier sur star.fr avant tout déplacement.</p></aside>
    <aside class="note-card"><h3>Accessibilité</h3><p>${esc(business.accessibility)}</p></aside>
  </div>
</div></section>`
}

// ---------------- Histoire ----------------
export function histoireBody(): string {
  return `
${pageHero('Le magasin et le boulevard', 'Une épicerie de quartier au 46 boulevard de la Liberté, depuis 2025, sur un boulevard qui porte ce nom depuis 1870.')}
<section class="section"><div class="wrap two-col">
  <div>
    <h2 class="h-display">Qui nous sommes</h2>
    <p class="lead">Une épicerie de quartier ouverte 7j/7 jusqu’à 1h, qui sert aussi de point relais colis. La société EPI DE LIBERTE a été créée en novembre 2025 et le magasin est ouvert depuis l’hiver 2025-2026.</p>
    <p>Nous n’avons pas d’histoire de famille à raconter, et nous préférons ne rien inventer. Ce que nous pouvons dire : le magasin tient à l’accueil, aux horaires tardifs, à un service fiable et à un quartier où l’on se sent en sécurité.</p>
    <div class="photo-pair">${photoFigure(photo('vitrine-nuit'))}${photoFigure(photo('allee-epicerie'))}</div>
    <p class="tbc">Photos d’illustration Unsplash. TODO : photos de la devanture et de l’intérieur à fournir par le commerçant.</p>
  </div>
  <aside class="plate-card">
    <h2>Ce que vous nous dites</h2>
    <ul class="themes">${[
      ['Accueil', 'chaleureux, serviable, au top'],
      ['Horaires', '7 jours sur 7, jusqu’à 1h'],
      ['Colis', 'un service apprécié'],
      ['Sécurité', '« super safe »'],
      ['Sérieux', 'bien présenté'],
    ].map(([a, b]) => `<li><strong>${a}</strong><span>${b}</span></li>`).join('')}</ul>
    <p class="tbc">Thèmes tirés des avis Google, sans nom de client.</p>
  </aside>
</div></section>

<section class="section"><div class="wrap">
  <h2 class="h-display">Ce qu’on trouve au comptoir</h2>
  <ul class="photo-strip ps-4">${['filet-courses', 'pain-sac-kraft', 'colis-carton', 'kiosque-nuit'].map((s) => `<li class="ps-item">${photoImg(photo(s))}</li>`).join('')}</ul>
  <p class="tbc">Photos d’illustration (Unsplash), pas des photos du magasin.</p>
</div></section>

<section class="section timeline-section"><div class="wrap">
  <h2 class="h-display">Le boulevard, du canal à aujourd’hui</h2>
  <p class="lead">${boulevardFacts.length} de long, de ${boulevardFacts.from} à ${boulevardFacts.to}, il sépare ${boulevardFacts.separates}. On y trouve ${boulevardFacts.architecture}.</p>
  <ol class="timeline">${history.map((h) => `<li class="tl-item"><span class="tl-year">${h.year}</span><div class="tl-body"><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div></li>`).join('')}</ol>
  <p class="breton-plate"><span>Boulevard de la Liberté</span><em>${business.address.breton}</em><small>Nom officiel en breton (données ouvertes de Rennes Métropole)</small></p>
</div></section>

<section class="section"><div class="wrap">
  <h2 class="h-display">Autour du no 46</h2>
  ${photoFigure(photo('commerces-nuit'), 'ph-band lm-band')}
  <div class="landmarks">${landmarks.map((l) => `<article class="lm lm-${l.area}"><h3>${esc(l.name)}</h3><p>${esc(l.text)}</p></article>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  <h2 class="h-display">Qui fait quoi</h2>
  <p class="lead">Trois rôles au comptoir, sans noms ni portraits.</p>
  <div class="team">${team.map((t) => `<article class="role">${photoFigure(photo(t.id === 'comptoir' ? 'filet-courses' : t.id === 'relais' ? 'colis-table' : 'caisse-fruits'), 'role-photo')}<div class="role-art">${glyph(t.id === 'comptoir' ? 'pack' : t.id === 'relais' ? 'box' : 'jar')}</div><h3>${esc(t.role)}</h3><p>${esc(t.text)}</p></article>`).join('')}</div>
</div></section>`
}

// ---------------- Avis ----------------
export function avisBody(): string {
  const words = reviewWords.map((w) => `<li class="w-${w.weight}">${esc(w.word)}</li>`).join('')
  return `
${pageHero('Vos avis', 'Onze avis Google, recopiés tels quels. Aucun nom de client n’est affiché.')}
${photoBand('vitrine-nuit', 'band-top')}
<section class="section"><div class="wrap">
  <div class="avis-top">${ratingBadge()}<p class="lead">Note de 5,0/5 sur 26 avis Google (oct. 2026). Peu d’avis, une jeune adresse : nous ne prétendons rien de plus.</p></div>
  <div class="receipt-wall wall-all">${reviews.map((r, i) => receipt(r, i)).join('')}</div>
  <div class="owner-replies"><h2>La réponse du magasin</h2>${ownerReplies.map((o) => `<p class="reply">« ${esc(o.text)} »</p>`).join('')}<p class="reply-by">Réponses du propriétaire sur Google</p></div>
  <div class="word-cloud"><h2>Les mots qui reviennent</h2><ul>${words}</ul></div>
  <p class="avis-cta"><a class="btn btn-primary" href="${business.links.carte}" target="_blank" rel="noopener">Laisser un avis sur Google</a><small>TODO : lien direct vers la fiche Google, à fournir par le commerçant. Ce lien ouvre la carte.</small></p>
</div></section>`
}

// ---------------- Journal ----------------
export function journalBody(): string {
  const [first, ...rest] = posts
  return `
${pageHero('Le Journal du boulevard', 'Des articles d’exemple sur les colis, le quartier et les soirées de Rennes. Textes rédigés pour la démonstration.')}
<section class="section"><div class="wrap">
  <div class="tag-bar" role="group" aria-label="Filtrer les articles"><button type="button" class="chip is-on" data-ptag="all" aria-pressed="true">Tous</button>${postTags.map((t) => `<button type="button" class="chip" data-ptag="${t}" aria-pressed="false">${t}</button>`).join('')}</div>
  <div class="post-grid pg-all" data-posts>${postCard(first, true)}${rest.map((p) => postCard(p)).join('')}</div>
  <p class="empty-line" data-posts-empty hidden>Aucun article pour cette étiquette.</p>
</div></section>`
}

export function articleBody(): string {
  const arts = posts
    .map((p, i) => {
      const related = posts.filter((x) => x.id !== p.id && x.tags.some((t) => p.tags.includes(t))).slice(0, 3)
      return `<article class="article" data-slug="${p.slug}" ${i ? 'data-extra' : ''}>
      <header class="art-head"><p class="post-meta"><time datetime="${p.date}">${dateFr(p.date)}</time><span>${p.readingMinutes} min de lecture</span><span class="chip-s chip-ex">article d’exemple</span></p>
        <h1 class="h-display">${esc(p.title)}</h1><p class="lead">${esc(p.excerpt)}</p></header>
      ${postPhoto(p) ? photoFigure(postPhoto(p)!, 'art-cover') : ''}
      <div class="art-body">${p.body.map((t) => `<p>${esc(t)}</p>`).join('')}</div>
      ${sceneFigure(p.scene, 'Illustration : ' + p.title, 'art-fig')}
      <aside class="related"><h2>À lire aussi</h2><div class="post-grid pg-3">${related.map((x) => postCard(x)).join('')}</div></aside>
    </article>`
    })
    .join('')
  return `<div class="wrap article-wrap"><p class="crumb"><a href="${href('journal/')}">Le Journal du boulevard</a></p>${arts}<p class="empty-line" data-art-missing hidden>Article introuvable. <a href="${href('journal/')}">Retour au journal</a>.</p></div>`
}

// ---------------- Galerie ----------------
export function galerieBody(): string {
  return `
${pageHero('Scènes du boulevard', 'Dix-neuf illustrations originales, dessinées pour le site. Ce ne sont pas des photos du magasin.')}
<section class="section photo-gallery-section"><div class="wrap">
  <h2 class="h-display">En photos</h2>
  <p class="lead">${photos.length} photos d’illustration (Unsplash, licence Unsplash). Ce ne sont pas des photos du magasin.</p>
  <div class="tag-bar" role="group" aria-label="Filtrer les photos">${photoThemes.map((f, i) => `<button type="button" class="chip${i === 0 ? ' is-on' : ''}" data-pf="${f.id}" aria-pressed="${i === 0}">${f.label}</button>`).join('')}</div>
  <ul class="photo-gallery" data-photo-gallery>${photos.map((ph) => `<li class="pg-item" data-theme="${ph.theme}"><figure class="ph-fig">${photoImg(ph)}<figcaption class="ph-cap">Photo d’illustration · <a href="${ph.url}" target="_blank" rel="noopener">Unsplash</a></figcaption></figure></li>`).join('')}</ul>
</div></section>
<section class="section"><div class="wrap">
  <h2 class="h-display">Illustrations originales</h2>
  <div class="tag-bar" role="group" aria-label="Filtrer les scènes">${galleryFilters.map((f, i) => `<button type="button" class="chip${i === 0 ? ' is-on' : ''}" data-gf="${f.id}" aria-pressed="${i === 0}">${f.label}</button>`).join('')}</div>
  <ul class="gallery" data-gallery>${gallery.map((g, i) => `<li class="g-item" data-filters="${g.filters.join(' ')}"><button type="button" class="g-btn" data-open="${i}" aria-label="Agrandir : ${esc(g.title)}">${sceneFigure(g.scene, g.alt)}<span class="g-cap"><strong>${esc(g.title)}</strong></span></button></li>`).join('')}</ul>
</div></section>
<dialog class="lightbox" id="lightbox" aria-label="Illustration agrandie">
  <div class="lb-in"><button class="icon-btn lb-close" type="button" data-lb-close aria-label="Fermer"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
    <div class="lb-art" data-lb-art role="img"></div><p class="lb-cap" data-lb-cap></p>
    <div class="lb-nav"><button class="btn btn-ghost" type="button" data-lb-prev>Précédente</button><button class="btn btn-ghost" type="button" data-lb-next>Suivante</button></div></div>
</dialog>`
}

// ---------------- FAQ ----------------
export function faqBody(): string {
  return `
${pageHero('Questions fréquentes', 'Horaires, colis, paiement, produits, accès. Les réponses reposent sur des faits vérifiés ou disent « à confirmer en magasin ».')}
${photoBand('gondole-vue-haut', 'band-top')}
<section class="section"><div class="wrap faq-layout">
  <nav class="faq-nav" aria-label="Thèmes">${faqGroups.map((g) => `<a href="#fg-${g}">${g}</a>`).join('')}</nav>
  <div class="faq-list">${faqBlock()}</div>
</div></section>
<section class="section"><div class="wrap"><aside class="ask-counter"><h2>Une autre question ?</h2><p>Passez au comptoir : on répond sur place.</p><a class="btn btn-primary" href="${href('contact/')}">Nous trouver</a></aside></div></section>`
}

// ---------------- Contact ----------------
export function contactBody(): string {
  return `
${pageHero('Nous trouver', 'Passez nous voir, on répond au comptoir.')}
<section class="section"><div class="wrap two-col">
  <div class="contact-main">
    ${photoFigure(photo('commerces-nuit'), 'contact-photo')}
    <address class="big-address">46 boulevard de la Liberté<br />35000 Rennes</address>
    <p class="breton-plate sm"><span>Boulevard de la Liberté</span><em>${business.address.breton}</em></p>
    <p class="hero-cta"><a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a><a class="link-arrow" href="${href('horaires-acces/')}">Horaires et accès</a></p>
    ${PHONE_CONFIRMED ? `<p>Téléphone : <a href="tel:${business.phone.value.replace(/\s/g, '')}">${business.phone.value}</a></p>` : '<!-- TODO: le numéro de téléphone reste masqué tant que PHONE_CONFIRMED est faux (src/data/business.ts). -->'}
    <p class="tbc">Pas encore d’e-mail ni de réseaux sociaux : passez au comptoir ou utilisez l’itinéraire.</p>
    <div class="acc-block"><h3>Paiement</h3><p>${esc(business.payment[0])}. ${esc(business.paymentTodo)}</p></div>
    <p class="tbc">Photo d’illustration Unsplash, pas la devanture du magasin. TODO : photo de la devanture à fournir par le commerçant.</p>
  </div>
  <form class="contact-form" data-demo-form aria-describedby="cf-note" novalidate>
    <h2>Un message ?</h2>
    <p id="cf-note" class="cf-note">Formulaire de démonstration : rien n’est envoyé, il n’y a pas de serveur.</p>
    <label for="cf-name">Votre nom</label><input id="cf-name" type="text" autocomplete="name" disabled />
    <label for="cf-msg">Votre message</label><textarea id="cf-msg" rows="4" disabled></textarea>
    <button class="btn btn-primary" type="button" disabled>Envoyer (indisponible)</button>
  </form>
</div></section>`
}

// ---------------- Légal ----------------
export function mentionsBody(): string {
  const l = business.legal
  return `
${pageHero('Mentions légales', 'Informations légales de l’éditeur. Site de démonstration : le contenu éditorial est un exemple.')}
${photoBand('bocaux-etagere', 'band-top band-slim')}
<section class="section"><div class="wrap prose">
  <h2>Éditeur</h2>
  <p>${esc(business.legalName)}, ${l.form} au capital de ${l.capital}.<br />Siège : ${business.address.street}, ${business.address.postalCode} ${business.address.city}.<br />SIREN ${l.siren}, SIRET ${l.siret}.<br />TVA intracommunautaire : ${l.vat}.<br />Activité (NAF) : ${l.naf}.</p>
  <p class="todo">RCS : ${l.rcsNote}</p>
  <h2>Directeur de la publication</h2>
  <p class="todo">${l.publisherNote}</p>
  <h2>Hébergement</h2>
  <p>GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>
  <h2>Contenu de démonstration</h2>
  <p>Les produits, prix, articles du journal, illustrations et photos sont des exemples, produits pour cette démonstration. Seuls sont réels : l’adresse, l’identité légale, le fait que le magasin soit ouvert jusqu’à 1h, les informations du relais colis publiées par Pickup et La Poste, et les avis Google cités, attribués à la plateforme.</p>
  <h2>Propriété intellectuelle</h2>
  <p>Les illustrations dessinées sont des créations originales. Les photographies sont des photos d’illustration issues d’Unsplash (licence Unsplash) : elles ne montrent pas le magasin. Aucun logo de transporteur et aucun logo du magasin n’est utilisé.</p>
</div></section>`
}

export function confidentialiteBody(): string {
  return `
${pageHero('Confidentialité', 'Ce site ne collecte aucune donnée personnelle.')}
${photoBand('epices-bocaux', 'band-top band-slim')}
<section class="section"><div class="wrap prose">
  <h2>Pas de cookies, pas de suivi</h2>
  <p>Ce site n’utilise ni cookie, ni outil de mesure d’audience, ni service tiers de suivi. Les polices sont hébergées avec le site.</p>
  <h2>Ce qui est enregistré dans votre navigateur</h2>
  <p>Uniquement deux préférences, stockées localement (localStorage) et jamais envoyées : votre choix de thème (Jour ou Nuit) et le contenu de « Ma liste ». Vous pouvez les effacer à tout moment avec « Vider la liste » ou en vidant les données du site.</p>
  <h2>Formulaires</h2>
  <p>Le formulaire de contact est une démonstration désactivée. Il n’envoie rien.</p>
  <h2>Liens externes</h2>
  <p>Les boutons « Itinéraire » et « Ouvrir la carte » ouvrent Google Maps dans un nouvel onglet, sans que le site n’intègre de carte.</p>
</div></section>`
}

export function planBody(): string {
  const groups = Array.from(new Set(ALL_LINKS.map((l) => l.group)))
  return `
${pageHero('Plan du site', 'Toutes les pages, en un coup d’œil.')}
${photoBand('allee-epicerie', 'band-top band-slim')}
<section class="section"><div class="wrap sitemap">${groups.map((g) => `<div><h2>${g}</h2><ul>${ALL_LINKS.filter((l) => l.group === g).map((l) => `<li><a href="${href(l.path)}">${l.label}</a></li>`).join('')}</ul></div>`).join('')}</div></section>`
}

export function notFoundBody(): string {
  return `
<section class="nf"><div class="wrap nf-grid">
  <div><p class="live-sign closed"><i class="dot" aria-hidden="true"></i><span class="ls-main">Fermé</span></p>
  <h1 class="h-display">Ce rayon est fermé</h1>
  <p class="lead">La page demandée n’existe pas ou a été déplacée. Le rideau est tiré, mais le reste du magasin est ouvert.</p>
  <p class="hero-cta"><a class="btn btn-primary" href="${href()}">Retour à l’accueil</a><a class="link-arrow" href="${href('rayons/')}">Voir les rayons</a></p></div>
  <div class="nf-art">${sceneFigure('rideau', 'Illustration d’un rideau métallique baissé sur une vitrine.')}</div>
</div>
<div class="wrap">${photoFigure(photo('rue-nuit'), 'ph-band nf-band')}
</div></section>`
}

