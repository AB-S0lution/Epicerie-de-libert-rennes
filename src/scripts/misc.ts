// Small per-page behaviours: journal filter, article switch, gallery + lightbox, parcel demo, FAQ hash.
import { demoCodes } from '../data/parcel'
import { posts } from '../data/posts'
import { $, $$ } from './dom'

export function initJournal(): void {
  const bar = $('.tag-bar')
  if (!bar) return
  const cards = $$('.post-card', $('[data-posts]')!)
  const none = $('[data-posts-empty]')!
  bar.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-ptag]')
    if (!b) return
    const tag = b.dataset.ptag!
    $$('[data-ptag]', bar).forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)) })
    let n = 0
    cards.forEach((c) => { const show = tag === 'all' || (c.dataset.tags ?? '').split('|').includes(tag); c.hidden = !show; if (show) n++ })
    none.hidden = n > 0
  })
}

export function initArticle(): void {
  const slug = new URLSearchParams(location.search).get('p') ?? posts[0].slug
  const post = posts.find((p) => p.slug === slug)
  const arts = $$('.article')
  arts.forEach((a) => { a.hidden = !post || a.dataset.slug !== post.slug })
  if (!post) { const m = $('[data-art-missing]'); if (m) m.hidden = false; return }
  document.title = `${post.title} | Le Journal du boulevard, Épicerie de Liberté`
  $('meta[name="description"]')?.setAttribute('content', post.excerpt)
}

export function initGallery(): void {
  const list = $('[data-gallery]')
  if (!list) return
  const items = $$('.g-item', list)
  const box = $<HTMLDialogElement>('#lightbox')!
  const art = $('[data-lb-art]', box)!
  const cap = $('[data-lb-cap]', box)!
  let shown: HTMLElement[] = items
  let idx = 0
  const open = (i: number): void => {
    idx = (i + shown.length) % shown.length
    const fig = $('.scene-fig', shown[idx])!
    art.innerHTML = fig.innerHTML
    art.setAttribute('aria-label', fig.getAttribute('aria-label') ?? '')
    cap.textContent = `${$('.g-cap strong', shown[idx])?.textContent ?? ''} : ${fig.getAttribute('aria-label') ?? ''}`
    if (!box.open) box.showModal()
  }
  $$<HTMLElement>('[data-pf]').forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.pf!
    $$<HTMLElement>('[data-pf]').forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)) })
    $$<HTMLElement>('.pg-item').forEach((it) => { it.hidden = !(f === 'tout' || it.dataset.theme === f) })
  }))
  $$<HTMLElement>('[data-gf]').forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.gf!
    $$('[data-gf]').forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)) })
    items.forEach((it) => { it.hidden = !(f === 'tout' || (it.dataset.filters ?? '').split(' ').includes(f)) })
    shown = items.filter((i) => !i.hidden)
  }))
  list.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-open]')
    if (b) open(shown.indexOf(b.closest<HTMLElement>('.g-item')!))
  })
  $('[data-lb-close]', box)?.addEventListener('click', () => box.close())
  $('[data-lb-prev]', box)?.addEventListener('click', () => open(idx - 1))
  $('[data-lb-next]', box)?.addEventListener('click', () => open(idx + 1))
  box.addEventListener('click', (e) => { if (e.target === box) box.close() })
  box.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') open(idx + 1); if (e.key === 'ArrowLeft') open(idx - 1) })
}

export function initParcelDemo(): void {
  const form = $<HTMLFormElement>('[data-track-form]')
  if (!form) return
  const input = $<HTMLInputElement>('input', form)!
  const msg = $('.tf-msg', form)!
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const code = input.value.trim().toUpperCase()
    const hit = demoCodes[code]
    msg.classList.remove('err', 'ok')
    if (hit) {
      input.removeAttribute('aria-invalid')
      msg.classList.add('ok')
      msg.textContent = `${hit.label} : ${hit.status} (démonstration)`
    } else {
      input.setAttribute('aria-invalid', 'true')
      msg.classList.add('err')
      msg.textContent = code ? 'Code inconnu. Ceci est une démonstration : essayez DEMO-0001.' : 'Saisissez un code de démonstration.'
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake')
    }
  })
}

export function initFaqHash(): void {
  const open = (): void => {
    const el = location.hash ? $<HTMLDetailsElement>(`details${location.hash}`) : null
    if (el) el.open = true
  }
  open()
  window.addEventListener('hashchange', open)
}
