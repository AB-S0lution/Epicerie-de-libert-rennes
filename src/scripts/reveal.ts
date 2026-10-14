// Scroll reveals: IntersectionObserver only (no scroll listeners). Elements are visible without JS.
import { $$ } from './dom'

const AUTO = '.bento-tile, .receipt, .post-card, .svc, .lm, .role, .tl-item, .g-item, .stats li, .faq-group, .acc-block, .note-card, .n-scene, .rules > div, .pcard, .ph-fig, .ps-item'

export function initReveal(): void {
  // Fail-safe: without IntersectionObserver nothing is hidden at all.
  if (!('IntersectionObserver' in window)) return
  document.documentElement.classList.add('motion')
  const nodes = new Set<HTMLElement>($$('[data-reveal]'))
  $$(AUTO).forEach((el) => {
    if (!el.closest('.story.is-pinned') && !el.closest('[data-grid]')) nodes.add(el)
  })
  const parents = new Map<Element, number>()
  nodes.forEach((el) => {
    el.setAttribute('data-reveal', '')
    const p = el.parentElement!
    const i = parents.get(p) ?? 0
    parents.set(p, i + 1)
    el.style.setProperty('--d', `${Math.min(i, 6) * 60}ms`)
  })
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in')
          io.unobserve(en.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
  )
  nodes.forEach((el) => io.observe(el))
  // Fail-safe: whatever is on screen, already scrolled past, or anything at all once the page end is
  // reached, is shown. Runs at 3s and again every time scrolling stops (debounced), observer or not.
  const sweep = (): void => {
    const vh = window.innerHeight
    const atEnd = window.scrollY + vh >= document.documentElement.scrollHeight - 40
    nodes.forEach((el) => {
      if (el.classList.contains('is-in')) return
      if (atEnd || el.getBoundingClientRect().top < vh) { el.classList.add('is-in'); io.unobserve(el) }
    })
  }
  window.setTimeout(sweep, 3000)
  let t = 0
  window.addEventListener('scroll', () => { window.clearTimeout(t); t = window.setTimeout(sweep, 180) }, { passive: true })
  window.addEventListener('resize', () => { window.clearTimeout(t); t = window.setTimeout(sweep, 250) })
  // Jumping to an anchor or restoring a scroll position must never land on hidden content.
  window.addEventListener('hashchange', () => window.setTimeout(sweep, 400))
  window.addEventListener('pageshow', (e) => { if ((e as PageTransitionEvent).persisted) sweep() })
}
