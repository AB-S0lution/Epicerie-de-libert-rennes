import './style.css'
import '@fontsource-variable/big-shoulders-display'
import '@fontsource/barlow/latin-400.css'
import '@fontsource/barlow/latin-500.css'
import '@fontsource/barlow/latin-600.css'
import '@fontsource/barlow-condensed/latin-500.css'
import '@fontsource/barlow-condensed/latin-600.css'
import { setBase } from './render/site'
import { $, $$, reducedMotion } from './scripts/dom'
import { initTheme } from './scripts/theme'
import { initStatus, markToday } from './scripts/status'
import { initList } from './scripts/list'
import { initReveal } from './scripts/reveal'
import { initClocks } from './scripts/clock'
import { initCatalog } from './scripts/catalog'
import { initArticle, initFaqHash, initGallery, initJournal, initParcelDemo } from './scripts/misc'

setBase(import.meta.env.BASE_URL)

function ripple(): void {
  if (reducedMotion()) return
  document.addEventListener('pointerdown', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('.btn')
    if (!b) return
    const r = b.getBoundingClientRect()
    const s = document.createElement('span')
    s.className = 'ripple'
    s.style.left = `${e.clientX - r.left}px`
    s.style.top = `${e.clientY - r.top}px`
    b.appendChild(s)
    s.addEventListener('animationend', () => s.remove())
  })
}

function scrollProgress(): void {
  if (!CSS.supports('animation-timeline: scroll()')) return
  const bar = document.createElement('div')
  bar.className = 'scroll-progress'
  bar.setAttribute('aria-hidden', 'true')
  document.body.appendChild(bar)
}

function initNav(): void {
  const btn = $<HTMLButtonElement>('[data-burger]')
  const nav = $('#nav')
  if (!btn || !nav) return
  const set = (open: boolean): void => {
    nav.classList.toggle('is-open', open)
    btn.setAttribute('aria-expanded', String(open))
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Menu')
    document.documentElement.classList.toggle('nav-open', open)
  }
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
  nav.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false) })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { set(false); btn.focus() }
  })
  window.matchMedia('(min-width: 1100px)').addEventListener('change', (m) => { if (m.matches) set(false) })
}

/** Pause CSS loops (marquee, lamp glow) while their section is offscreen. */
function pauseOffscreen(): void {
  if (!('IntersectionObserver' in window)) return
  const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('is-off', !e.isIntersecting)), { rootMargin: '80px 0px' })
  $$('.marquee, .hero').forEach((el) => io.observe(el))
}

/** Horizontal chip rows: drop the edge-fade swipe hint once the end is reached. */
function swipeHints(): void {
  $$('.cb-chips').forEach((row) => {
    const upd = (): void => { row.classList.toggle('at-end', row.scrollLeft + row.clientWidth >= row.scrollWidth - 4) }
    row.addEventListener('scroll', upd, { passive: true })
    window.addEventListener('resize', upd, { passive: true })
    upd()
  })
}

async function motion(page: string): Promise<void> {
  const fx = await import('./scripts/fx')
  const reduce = reducedMotion()
  if (!reduce) fx.startLenis()
  fx.splitTitles()
  fx.photoDrift()
  if (page === 'home') {
    const h = await import('./scripts/home')
    h.initHero()
    h.initStory()
    h.initHistory()
  }
}

function boot(): void {
  const page = document.body.dataset.page ?? ''
  initTheme()
  initNav()
  initStatus()
  initList()
  initClocks()
  if (!reducedMotion()) initReveal()
  ripple()
  scrollProgress()
  pauseOffscreen()
  swipeHints()
  if (page === 'rayons') initCatalog()
  if (page === 'journal') initJournal()
  if (page === 'article') initArticle()
  if (page === 'galerie') initGallery()
  if (page === 'relais') initParcelDemo()
  if (page === 'faq') initFaqHash()
  if (page === 'horaires') markToday()
  // Fallback: never leave split titles hidden.
  window.setTimeout(() => { $$<HTMLElement>('[data-split], h1.split, .art-head h1').forEach((el) => { el.style.visibility = 'visible' }) }, 2500)
  void $
  motion(page).catch(() => {
    $$<HTMLElement>('[data-split], h1.split, .art-head h1').forEach((el) => { el.style.visibility = 'visible' })
  })
}

boot()
