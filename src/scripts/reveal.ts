// Scroll reveals: IntersectionObserver only (no scroll listeners). Elements are visible without JS.
import { $$ } from './dom'

const AUTO = '.bento-tile, .receipt, .post-card, .svc, .lm, .role, .tl-item, .g-item, .stats li, .faq-group, .acc-block, .note-card, .n-scene, .rules > div, .pcard, .ph-fig, .ps-item'

export function initReveal(): void {
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
}
