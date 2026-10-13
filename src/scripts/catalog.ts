// Catalogue (sample data): rayon chips, search, tag chips, tilt-on-hover tiles, empty state.
import { rayonById } from '../data/categories'
import { products } from '../data/products'
import { glyph } from '../lib/art'
import { esc, typo } from '../lib/format'
import { productCard } from '../render/parts'
import { $, $$, finePointer, reducedMotion } from './dom'

const norm = (s: string): string => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export function initCatalog(): void {
  const grid = $('[data-grid]')
  if (!grid) return
  const input = $<HTMLInputElement>('[data-search]')!
  const count = $('[data-count]')!
  const empty = $('[data-empty]')!
  const head = $('[data-rayon-head]')!
  const params = new URLSearchParams(location.search)
  const state = { rayon: params.get('r') && rayonById(params.get('r')!) ? params.get('r')! : 'all', q: '', tags: new Set<string>() }

  const sync = (): void => {
    $$('[data-rayon]').forEach((b) => { const on = b.dataset.rayon === state.rayon; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)) })
    $$('[data-tag]').forEach((b) => { const on = state.tags.has(b.dataset.tag!); b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)) })
  }
  const render = (): void => {
    const q = norm(state.q.trim())
    const list = products.filter((p) =>
      (state.rayon === 'all' || p.rayon === state.rayon) &&
      (!q || norm(p.name).includes(q)) &&
      Array.from(state.tags).every((t) => p.tags.includes(t)))
    grid.innerHTML = typo(list.map(productCard).join(''))
    empty.hidden = list.length > 0
    count.textContent = typo(`${list.length} produit${list.length > 1 ? 's' : ''} d’exemple`)
    const r = state.rayon === 'all' ? undefined : rayonById(state.rayon)
    head.innerHTML = r
      ? typo(`<div class="rh" style="--tint:${r.tint}">${glyph(r.glyph)}<div><h2>${esc(r.label)}</h2><p>${esc(r.blurb)}</p></div></div>`)
      : ''
    const url = new URL(location.href)
    if (state.rayon === 'all') url.searchParams.delete('r'); else url.searchParams.set('r', state.rayon)
    history.replaceState(null, '', url)
    sync()
  }

  $$('[data-rayon]').forEach((b) => b.addEventListener('click', () => { state.rayon = b.dataset.rayon!; render() }))
  $$('[data-tag]').forEach((b) => b.addEventListener('click', () => { const t = b.dataset.tag!; state.tags.has(t) ? state.tags.delete(t) : state.tags.add(t); render() }))
  input.addEventListener('input', () => { state.q = input.value; render() })
  $('[data-reset]')?.addEventListener('click', () => { state.rayon = 'all'; state.q = ''; state.tags.clear(); input.value = ''; render() })

  // A shelf item being picked: tilt up to 4 degrees, pointer-tracked, transform only.
  if (finePointer() && !reducedMotion()) {
    grid.addEventListener('pointermove', (e) => {
      const tile = (e.target as HTMLElement).closest<HTMLElement>('.pc-tile')
      if (!tile) return
      const art = $('.pc-art', tile)!
      const r = tile.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      art.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
      art.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`)
    })
    grid.addEventListener('pointerout', (e) => {
      const tile = (e.target as HTMLElement).closest<HTMLElement>('.pc-tile')
      const art = tile && $('.pc-art', tile)
      art?.style.setProperty('--rx', '0deg'); art?.style.setProperty('--ry', '0deg')
    })
  }
  render()
}
