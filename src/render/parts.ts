// Reusable fragments shared by several pages and by client-side re-rendering (catalogue, journal).
import { photo } from '../data/photos'
import type { Photo } from '../data/photos'
import { business } from '../data/business'
import { DAYS, hours } from '../data/hours'
import { rayonById } from '../data/categories'
import { faq, faqGroups } from '../data/faq'
import type { Faq } from '../data/faq'
import type { Post } from '../data/posts'
import type { Product } from '../data/products'
import type { Review } from '../data/reviews'
import { tags as allTags } from '../data/tags'
import { glyph, scene } from '../lib/art'
import { dateFr, eur, esc, hLabel, toMin } from '../lib/format'
import { href } from './site'

export const ratingText = `${String(business.rating.value).replace('.', ',')}/5 sur ${business.rating.count} avis Google (${business.rating.asOfLabel})`

export function ratingBadge(): string {
  return `<div class="rating-badge" role="group" aria-label="${ratingText}">
    <strong>5,0</strong><span class="rb-sub">/5</span>
    <span class="rb-text">${business.rating.count} avis Google<br /><small>${business.rating.asOfLabel}</small></span>
  </div>`
}

export function productCard(p: Product): string {
  const rayon = rayonById(p.rayon)
  const tagLabels = p.tags
    .map((t) => allTags.find((x) => x.id === t)?.label)
    .filter(Boolean)
    .slice(0, 2)
    .map((l) => `<span class="chip-s">${esc(l as string)}</span>`)
    .join('')
  return `<li class="pcard" style="--tint:${rayon?.tint ?? '#F4A93A'}" data-id="${p.id}">
    <div class="pc-tile">${RAYON_PHOTO[p.rayon] ? `<img class="pc-photo" src="${photo(RAYON_PHOTO[p.rayon]).src}" alt="" width="${photo(RAYON_PHOTO[p.rayon]).width}" height="${photo(RAYON_PHOTO[p.rayon]).height}" loading="lazy" decoding="async" />` : ''}<div class="pc-art">${glyph(p.illustration)}</div><i class="pc-shelf" aria-hidden="true"></i></div>
    <div class="pc-body">
      <h3>${esc(p.name)}</h3>
      <p class="pc-meta">${tagLabels}</p>
      <div class="pc-foot">
        <p class="pc-price"><strong>${eur(p.price)}</strong> <span>${esc(p.unit)}</span><em class="sample-flag" title="Prix d’exemple">exemple</em></p>
        <button type="button" class="add-btn" data-add="${p.id}" aria-label="Ajouter ${esc(p.name)} à Ma liste"><span aria-hidden="true">+</span></button>
      </div>
    </div>
  </li>`
}

/** Unsplash illustration photo (not a photo of the shop). */
export function photoImg(ph: Photo, cls = '', eager = false): string {
  return `<img class="ph-img ${cls}" src="${ph.src}" alt="${esc(ph.alt)}" width="${ph.width}" height="${ph.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" />`
}

export function photoFigure(ph: Photo, cls = ''): string {
  return `<figure class="ph-fig ${cls}">${photoImg(ph)}<figcaption class="ph-cap">Photo d’illustration</figcaption></figure>`
}

const POST_PHOTO: Record<string, string> = {
  'comptoir-colis': 'colis-table', 'pile-colis': 'pile-cartons', concert: 'trottoir-nuit', pluie: 'rue-nuit', canal: 'commerces-nuit',
  marche: 'caisse-fruits', 'rayon-depannage': 'rayon-epicerie', 'rayon-sec': 'pates-seches', 'facade-nuit': 'vitrine-nuit',
}

/** Cover photo slug for a journal post (every post scene has one). */
export const postPhoto = (p: Post): Photo | undefined => (POST_PHOTO[p.scene] ? photo(POST_PHOTO[p.scene]) : undefined)

/** One illustration photo per rayon: used by the catalogue header and the product tiles. */
export const RAYON_PHOTO: Record<string, string> = {
  depannage: 'gondole-vue-haut', sale: 'pates-seches', boissons: 'frigo-boissons', fruits: 'legumes-frais', snacks: 'sandwich-jambon',
  petitdej: 'rayon-cereales-lait', sucre: 'bocaux-etagere', menager: 'rayon-conserves', hygiene: 'allee-epicerie', breizh: 'pain-tranche',
}

/** Slim full-width photo band for text-heavy pages (FAQ, legal, avis...). */
export function photoBand(slug: string, cls = ''): string {
  return `<div class="wrap ph-band-wrap ${cls}">${photoFigure(photo(slug), 'ph-band')}</div>`
}

export function sceneFigure(id: string, alt: string, cls = ''): string {
  return `<div class="scene-fig ${cls}" role="img" aria-label="${esc(alt)}">${scene(id)}</div>`
}

export function postCard(p: Post, big = false): string {
  return `<article class="post-card${big ? ' post-big' : ''}" data-tags="${p.tags.join('|')}">
    <a class="pc-link" href="${href('journal/article/?p=' + p.slug)}">
      ${POST_PHOTO[p.scene] ? `<figure class="ph-fig post-art post-photo">${photoImg(photo(POST_PHOTO[p.scene]))}<figcaption class="ph-cap">Photo d’illustration</figcaption></figure>` : sceneFigure(p.scene, 'Illustration : ' + p.title, 'post-art')}
      <div class="post-body">
        <p class="post-meta"><time datetime="${p.date}">${dateFr(p.date)}</time><span>${p.readingMinutes} min de lecture</span></p>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <p class="post-tags">${p.tags.map((t) => `<span class="chip-s">${t}</span>`).join('')}<span class="chip-s chip-ex">exemple</span></p>
      </div>
    </a>
  </article>`
}

/** Receipt-style quote (« ticket de caisse »). Real Google review, attributed to the platform only. */
export function receipt(r: Review, i = 0): string {
  const tilt = ((i * 37) % 7) - 3
  return `<figure class="receipt" style="--tilt:${tilt * 0.6}deg" tabindex="0">
    <div class="rc-top"><span>TICKET</span><span>${r.dateLabel}</span></div>
    <blockquote><p>« ${esc(r.text)} »</p></blockquote>
    <figcaption>Avis Google</figcaption>
    <div class="rc-cut" aria-hidden="true"></div>
  </figure>`
}

export function faqItem(f: Faq): string {
  return `<details class="faq-item" id="${f.id}" data-group="${f.group}">
    <summary><span>${esc(f.q)}</span><i class="pm" aria-hidden="true"></i></summary>
    <div class="faq-a"><p>${esc(f.a)}</p>${f.toConfirm ? '<p class="tbc">À confirmer en magasin.</p>' : ''}</div>
  </details>`
}

export function faqBlock(limit?: number, group?: string): string {
  const list = faq.filter((f) => !group || f.group === group)
  const sel = typeof limit === 'number' ? list.slice(0, limit) : list
  if (group) return sel.map(faqItem).join('')
  return faqGroups
    .map((g) => {
      const items = sel.filter((f) => f.group === g)
      if (!items.length) return ''
      return `<section class="faq-group" aria-labelledby="fg-${g}"><h2 id="fg-${g}">${g}</h2>${items.map(faqItem).join('')}</section>`
    })
    .join('')
}

/** Full per-day hours table, épicerie and relais side by side. */
export function hoursFull(): string {
  const rows = DAYS.map((d, i) => {
    const s = hours.shop[i]
    const a = hours.shopAlt[i]
    const p = hours.parcel[i]
    const differs = s.open !== a.open
    return `<tr data-day="${i}"><th scope="row">${d}</th>
      <td data-label="Épicerie">${hLabel(toMin(s.open))} à ${hLabel(toMin(s.close))}${differs ? ` <span class="alt" title="Autre source : ${hLabel(toMin(a.open))}">(autre source : ${hLabel(toMin(a.open))})</span>` : ''}</td>
      <td data-label="Relais colis">${hLabel(toMin(p.open))} à ${hLabel(toMin(p.close))}</td></tr>`
  }).join('')
  return `<table class="hours-full">
    <caption>Horaires par jour. <strong>À confirmer</strong> : les sources ne concordent pas.</caption>
    <thead><tr><th scope="col">Jour</th><th scope="col">Épicerie</th><th scope="col">Relais colis</th></tr></thead>
    <tbody>${rows}</tbody></table>`
}

/** The 24h dial. The hand is a role="slider"; arcs are drawn by clock.ts. */
export function clockMarkup(id = 'clock'): string {
  const pt = (h: number, R: number): [number, number] => {
    const a = (h / 24) * 2 * Math.PI
    return [200 - Math.sin(a) * R, 200 + Math.cos(a) * R]
  }
  const ticks = Array.from({ length: 24 }, (_, h) => {
    const big = h % 6 === 0
    const [x1, y1] = pt(h, 150)
    const [x2, y2] = pt(h, 150 - (big ? 20 : 10))
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="${big ? 'tk-big' : 'tk'}"/>`
  }).join('')
  const labels = [0, 6, 12, 18]
    .map((h) => {
      const [x, y] = pt(h, 108)
      return `<text x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" text-anchor="middle" class="tk-label">${h === 0 ? '24h' : h + 'h'}</text>`
    })
    .join('')
  return `<div class="clock" id="${id}" data-clock>
    <svg viewBox="0 0 400 400" class="clock-svg" aria-hidden="true" focusable="false">
      <circle cx="200" cy="200" r="176" class="c-face"/>
      <circle cx="200" cy="200" r="162" class="c-track"/>
      <circle cx="200" cy="200" r="144" class="c-track c-track2"/>
      <circle cx="200" cy="200" r="162" class="arc arc-shop" data-arc="shop"/>
      <circle cx="200" cy="200" r="144" class="arc arc-parcel" data-arc="parcel"/>
      ${ticks}${labels}
      <g class="c-sun"><circle cx="200" cy="62" r="8"/></g>
      <g class="c-moon"><path d="M200 330a9 9 0 1 0 6 12 7 7 0 0 1-6-12z"/></g>
      <g class="c-hand" data-hand><line x1="200" y1="200" x2="200" y2="48"/><circle cx="200" cy="48" r="11"/><circle cx="200" cy="200" r="7"/></g>
    </svg>
    <div class="clock-hit" role="slider" tabindex="0" aria-label="Heure de la journée" aria-valuemin="0" aria-valuemax="1439" aria-valuenow="720" aria-valuetext="12h" data-slider></div>
  </div>`
}
