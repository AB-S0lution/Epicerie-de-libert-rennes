// Home page body (rendered at build time by the Vite plugin).
import { business } from '../data/business'
import { rayons } from '../data/categories'
import type { Rayon } from '../data/categories'
import { holding, steps } from '../data/parcel'
import { nightScenes } from '../data/night'
import { history, stats } from '../data/misc'
import { posts } from '../data/posts'
import { reviews } from '../data/reviews'
import { transport } from '../data/business'
import { ermine, glyph, nightStrip, quartierMap, shopfront, vignette } from '../lib/art'
import { esc } from '../lib/format'
import { clockMarkup, photoFigure, photoImg, postCard, ratingBadge, receipt } from './parts'
import { photo, photos } from '../data/photos'
import { href } from './site'

const BENTO_ORDER = ['depannage', 'sale', 'snacks', 'boissons', 'fruits', 'menager', 'petitdej', 'sucre', 'hygiene', 'breizh']

function bentoTile(r: Rayon): string {
  return `<a class="bento-tile bt-${r.size}" style="--tint:${r.tint}" href="${href('rayons/?r=' + r.id)}">
    <span class="bt-art">${glyph(r.glyph)}</span>
    <span class="bt-txt"><strong>${esc(r.short)}</strong><span>${esc(r.blurb)}</span></span>
    <span class="bt-go" aria-hidden="true">→</span>
  </a>`
}

function marquee(): string {
  const words = ['Bonsoir', 'Dépannage', 'Colis', '7j/7', 'Jusqu’à 1h']
  const run = words.map((w) => `<span>${w}</span>${ermine('mq-e')}`).join('')
  return `<section class="marquee" aria-label="En un coup d’œil : bonsoir, dépannage, colis, 7j/7, jusqu’à 1h">
    <div class="mq-track" aria-hidden="true"><div class="mq-run">${run}${run}</div><div class="mq-run">${run}${run}</div></div>
  </section>`
}

export function homeBody(): string {
  const heroReviews = reviews.filter((r) => r.usableInHero)
  const wall = [heroReviews[2], heroReviews[0], heroReviews[7], heroReviews[1], heroReviews[5], heroReviews[3]]
  const mini = transport.filter((t) => t.kind === 'metro' || t.kind === 'parking')

  const scenes = nightScenes
    .map(
      (s, i) => `<li class="n-scene" data-night="${s.night}" data-on="${s.windowsOn}" data-hour="${s.hour}">
      <div class="n-art">${vignette(s.art)}</div>
      <div class="n-txt"><p class="n-hour">${s.hour}</p><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>
      <span class="sr-only">Scène ${i + 1} sur ${nightScenes.length}</span>
    </li>`,
    )
    .join('')

  const hist = history
    .filter((h) => ['canal', '1855', '1870', '2025'].includes(h.id))
    .map((h) => `<li class="strata" data-year="${h.yearNum}"><span class="st-year">${h.year}</span><div><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div></li>`)
    .join('')

  return `
<section class="hero" id="hero" data-hero>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="live-sign" data-live-sign aria-live="polite"><i class="dot" aria-hidden="true"></i><span class="ls-main">Ouvert</span><span class="ls-sub" data-live-sub>jusqu’à 1h</span></p>
      <h1 class="h-display hero-title" data-split>Ouvert quand les autres ferment.</h1>
      <p class="lead hero-sub">Votre épicerie de quartier, ouverte 7j/7 jusqu’à 1h, avec un relais colis au 46 boulevard de la Liberté.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a>
        <a class="link-arrow" href="${href('horaires-acces/')}">Voir les horaires</a>
      </div>
      <p class="hero-tbc">Horaires à confirmer</p>
    </div>
    <div class="hero-art" data-hero-art role="img" aria-label="Illustration de la devanture du magasin la nuit : un rideau métallique qui se lève sur une vitrine éclairée, un auvent rayé noir et blanc et un lampadaire.">
      ${shopfront()}
    </div>
  </div>
</section>

${marquee()}

<section class="section photo-band" aria-label="En rayon, en photos">
  <div class="wrap pb-grid">
    ${photoFigure(photo('rayon-epicerie'), 'pb-main')}
    ${photoFigure(photo('frigo-boissons'), 'pb-a')}
    ${photoFigure(photo('legumes-frais'), 'pb-b')}
    <div class="pb-copy" data-reveal>
      <h2 class="h-display">Tout pour dépanner, à deux pas</h2>
      <p class="lead">Épicerie salée et sucrée, boissons fraîches, fruits et légumes, pain, produits ménagers : l’essentiel du quotidien, tard le soir.</p>
      <p class="tbc">Photos d’illustration (Unsplash), pas des photos du magasin.</p>
    </div>
  </div>
</section>

<section class="section clock-section" id="horloge">
  <div class="wrap clock-grid">
    <div class="clock-copy" data-reveal>
      <h2 class="h-display">L’horloge du boulevard</h2>
      <p class="lead">Faites tourner l’aiguille : à quelle heure, quel jour, l’épicerie et le relais colis sont-ils ouverts ?</p>
      <div class="day-tabs" role="group" aria-label="Choisir un jour" data-day-tabs></div>
      <p class="clock-sentence" data-clock-sentence aria-live="polite"></p>
      <ul class="legend">
        <li><i class="lg lg-shop"></i>Épicerie, jusqu’à 1h</li>
        <li><i class="lg lg-parcel"></i>Relais colis, jusqu’à 22h</li>
      </ul>
      <p class="tbc">Horaires à confirmer : les sources ne concordent pas.</p>
    </div>
    <div class="clock-wrap" data-reveal>${clockMarkup('clock-home')}</div>
  </div>
</section>

<section class="story" id="nuit" data-story aria-label="Une nuit sur le boulevard, heure par heure">
  <div class="story-stage" data-story-stage>
    <div class="sky sky-day" aria-hidden="true"></div>
    <div class="sky sky-night" aria-hidden="true"></div>
    <div class="story-strip" aria-hidden="true" data-strip>${nightStrip()}</div>
    <div class="story-head">
      <h2 class="h-display">Une nuit sur le boulevard</h2>
      <p class="story-clock" aria-hidden="true" data-story-clock>11h</p>
    </div>
    <ol class="story-track" data-track>${scenes}</ol>
    <div class="story-bar" aria-hidden="true"><i data-story-bar></i></div>
  </div>
</section>

<section class="section rayons-section" id="rayons">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <h2 class="h-display">Ce que vous trouverez</h2>
      <p class="lead">Dix rayons pour dépanner, du dîner au dentifrice. La liste des produits est un exemple, le comptoir répond à vos questions.</p>
    </div>
    <div class="bento">${BENTO_ORDER.map((id) => rayons.find((r) => r.id === id)).filter((r): r is Rayon => !!r).map(bentoTile).join('')}</div>
  </div>
</section>

<section class="section relais-teaser" id="relais">
  <div class="wrap relais-grid">
    <div class="relais-num" data-reveal>
      <p class="big-num" aria-label="Jusqu’à 20 kilos">20<small>kg</small></p>
      <p class="rn-cap">Jusqu’à 20 kg et 1 m de long par colis. Chronopost, Colissimo et DPD.</p>
    </div>
    <div class="relais-copy" data-reveal>
      <h2 class="h-display">Vos colis, jusqu’à 22h</h2>
      <ol class="verbs">${steps.filter((s) => s.flow === 'recevoir').slice(0, 3).map((s) => `<li><strong>${s.verb}</strong><span>${esc(s.text)}</span></li>`).join('')}</ol>
      <p class="holding">Conservation au relais : ${holding.map((h) => `${h.carrier} ${h.days} jours`).join(', ')}.</p>
      <a class="btn btn-ghost" href="${href('relais-colis/')}">Tout sur le relais</a>
    </div>
  </div>
</section>

<section class="section avis-section" id="avis">
  <div class="wrap">
    <div class="avis-head" data-reveal>
      <h2 class="h-display">Ce que vous nous dites</h2>
      ${ratingBadge()}
    </div>
    <div class="receipt-wall">${wall.map((r, i) => receipt(r, i)).join('')}</div>
    <p class="avis-more"><a class="link-arrow" href="${href('avis/')}">Lire tous les avis</a></p>
  </div>
</section>

<section class="section hist-section" id="histoire" data-hist>
  <div class="wrap hist-grid">
    <div class="hist-year" aria-hidden="true">
      <p class="hist-num" data-hist-year>1855</p>
      <svg class="hist-path" viewBox="0 0 300 120" preserveAspectRatio="none" focusable="false"><path data-hist-path d="M0 90 C 60 40, 110 110, 160 60 S 250 20, 300 30" pathLength="1"/></svg>
    </div>
    <div class="hist-copy">
      <h2 class="h-display">Boulevard de la Liberté, depuis 1870</h2>
      <p class="lead">Le nom vient de la rue, pas de nous : le boulevard est rebaptisé le 17 octobre 1870. L’épicerie est plus récente (2025).</p>
      <ol class="strata-list">${hist}</ol>
      <a class="link-arrow" href="${href('notre-histoire/')}">Le magasin et le boulevard</a>
    </div>
  </div>
</section>

<section class="section acces-section" id="acces">
  <div class="wrap acces-grid">
    <div class="acces-map" data-reveal>${quartierMap()}</div>
    <div class="acces-copy" data-reveal>
      <h2 class="h-display">Facile à trouver</h2>
      <address>46 boulevard de la Liberté<br />35000 Rennes</address>
      <ul class="access-list">${mini.map((t) => `<li><strong>${esc(t.name)}</strong><span>${esc(t.detail)}${t.distance ? ', ' + t.distance : ''}</span></li>`).join('')}</ul>
      <a class="btn btn-primary" href="${business.links.itineraire}" target="_blank" rel="noopener">Itinéraire</a>
    </div>
  </div>
</section>


<section class="section photo-strip-section" aria-label="Le quotidien en images">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <h2 class="h-display">Le quotidien en images</h2>
      <p class="lead">Des rayons, des cagettes, des colis et la nuit rennaise. Photos d’illustration Unsplash.</p>
    </div>
    <ul class="photo-strip">${['caisse-fruits', 'baguette', 'rayon-cereales-lait', 'epices-bocaux', 'pile-cartons', 'commerces-nuit', 'agrumes-pommes', 'pates-seches'].map((s) => `<li class="ps-item">${photoImg(photo(s))}</li>`).join('')}</ul>
    <p class="avis-more"><a class="link-arrow" href="${href('galerie/')}">Voir les ${photos.length} photos</a></p>
  </div>
</section>

<section class="section journal-teaser" id="journal">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <h2 class="h-display">Le journal du boulevard</h2>
      <p class="lead">Des articles d’exemple sur les colis, le quartier et les soirées de Rennes.</p>
    </div>
    <div class="post-grid pg-3">${[posts[0], posts[2], posts[4]].map((p, i) => postCard(p, i === 0)).join('')}</div>
    <p class="avis-more"><a class="link-arrow" href="${href('journal/')}">Tous les articles</a></p>
  </div>
</section>

<section class="section stats-band" aria-label="Le magasin en chiffres vérifiés">
  <div class="wrap"><ul class="stats">${stats.map((s) => `<li><strong>${s.value}</strong><span>${esc(s.label)}</span>${s.note ? `<em>${s.note}</em>` : ''}</li>`).join('')}</ul></div>
</section>`
}
