// Home page motion: the shutter (« Le Rideau »), hero type, the pinned horizontal night story and the history scrub.
import { hLabel } from '../lib/format'
import { reducedMotion } from './dom'
import { $, $$ } from './dom'
import { accentRoom, gsap, ScrollTrigger, SplitText } from './fx'
import { currentShopStatus } from './status'

const UP = -400 // shutter fully raised (out of the window clip), in SVG user units

function setShutterFinal(open: boolean): void {
  const sh = $<SVGGElement>('#shutter')
  if (!sh) return
  gsap.set(sh, { y: open ? UP : 0 })
  $('.ouvert-sign')?.setAttribute('style', open ? '' : 'opacity:.12')
}

function closedMessage(): void {
  const { now, status } = currentShopStatus()
  const msg = $('#shutter-msg')
  if (msg && !status.open) {
    const opens = hLabel(status.opensAt ?? 0)
    msg.textContent = status.opensDay === now.day ? `On rouvre à ${opens}` : `On rouvre demain à ${opens}`
  }
}

export function initHero(): void {
  const { status } = currentShopStatus()
  const open = status.open
  closedMessage()
  const reduce = reducedMotion()
  const title = $<HTMLElement>('[data-split]')

  if (reduce) {
    setShutterFinal(open)
    if (title) title.style.visibility = 'visible'
    return
  }

  // Headline letters drop in like sign letters.
  const small = window.matchMedia('(max-width: 899px)').matches
  if (title) {
    title.style.visibility = 'visible'
    if (small) {
      // Phones: words, not 30 single letters, drop in; no 3D rotation (cheaper, same sign-letter feel).
      const split = SplitText.create(title, { type: 'words', mask: 'words' })
      accentRoom(split.masks)
      gsap.from(split.words, { yPercent: -110, opacity: 0, duration: 0.7, ease: 'back.out(1.3)', stagger: 0.06, delay: 0.1 })
    } else {
      const split = SplitText.create(title, { type: 'words,chars', mask: 'words' })
      accentRoom(split.masks)
      gsap.from(split.chars, { yPercent: -110, rotationX: -70, opacity: 0, duration: 0.8, ease: 'back.out(1.4)', stagger: 0.035, delay: 0.1 })
    }
  }
  gsap.from('.hero-sub, .hero-cta, .hero-tbc, .live-sign', { opacity: 0, y: small ? 12 : 18, duration: small ? 0.6 : 0.8, ease: 'power3.out', stagger: 0.08, delay: small ? 0.35 : 0.5 })

  const sh = $('#shutter')
  if (sh) {
    if (open) {
      const tl = gsap.timeline({ delay: 0.5 })
      tl.to(sh, { y: UP - 14, duration: 1.1, ease: 'expo.out' }).to(sh, { y: UP, duration: 0.3, ease: 'power2.inOut' })
      tl.fromTo('.ouvert-text', { opacity: 0.1 }, { opacity: 1, duration: 0.3, ease: 'steps(3)' }, 0.9)
      tl.call(() => { const s = $('[data-live-sign]'); s?.classList.add('is-flicker') }, [], 0.9)
      // On scroll the shutter lowers part-way: you are « entering the shop ». Shorter travel on phones.
      gsap.to('#shutter-scroll', {
        y: small ? 180 : 300, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: small ? true : 0.4 },
      })
    } else {
      setShutterFinal(false)
      gsap.fromTo('#shutter-msg', { opacity: 0 }, { opacity: 0.85, duration: 0.9, delay: 0.6 })
    }
  }
  if (!small) gsap.to('.hero-art svg', { yPercent: -4, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
}

export function initStory(): void {
  const story = $<HTMLElement>('[data-story]')
  if (!story) return
  const stage = $('[data-story-stage]', story)!
  const track = $<HTMLElement>('[data-track]', story)!
  const strip = $<HTMLElement>('[data-strip]', story)!
  const skyNight = $('.sky-night', story)!
  const clock = $('[data-story-clock]', story)!
  const bar = $('[data-story-bar]', story)!
  const scenes = $$('.n-scene', story)
  const nights = scenes.map((s) => Number(s.dataset.night ?? 0))
  const hoursTxt = scenes.map((s) => s.dataset.hour ?? '')
  const mm = gsap.matchMedia()

  // Touch phones and tablets: no pin. The scenes stay stacked (or swipe on tablets) and each one
  // gets its own light scrubbed reveal: the sky darkens behind it and the vignette drifts.
  mm.add('(max-width: 899px) and (prefers-reduced-motion: no-preference), (hover: none) and (prefers-reduced-motion: no-preference)', () => {
    scenes.forEach((sc) => {
      const art = $<HTMLElement>('.n-art svg', sc)
      if (art) gsap.fromTo(art, { yPercent: -5, scale: 1.08 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: sc, start: 'top bottom', end: 'bottom top', scrub: true } })
      const hour = $<HTMLElement>('.n-hour', sc)
      if (hour) gsap.from(hour, { xPercent: -12, opacity: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sc, start: 'top 85%', once: true } })
    })
  })

  // Desktop with a fine pointer only: the pinned horizontal night (a pin is fragile under touch momentum).
  mm.add('(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    story.classList.add('is-pinned')
    const wins = $$('.sw', strip)
    const keep = 5
    const offOrder = [0, 9, 1, 8, 2, 7, 3, 6, 4]
    const dist = (): number => track.scrollWidth - window.innerWidth
    let last = -1
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: story, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: (self) => {
          const i = Math.min(scenes.length - 1, Math.round(self.progress * (scenes.length - 1)))
          if (i !== last) { last = i; clock.textContent = hoursTxt[i] }
        },
      },
    })
    tl.to(track, { x: () => -dist(), duration: 1 }, 0)
    tl.to(strip, { x: () => -Math.max(0, 2400 - window.innerWidth), duration: 1 }, 0)
    tl.to(skyNight, { keyframes: nights.slice(1).map((n) => ({ opacity: n, duration: 1 / (nights.length - 1) })) }, 0)
    tl.to(bar, { scaleX: 1, duration: 1 }, 0)
    offOrder.forEach((wi, k) => {
      const w = wins[wi]
      if (!w || wi === keep) return
      tl.to($$('.sw-r, .sw-r2', w), { opacity: 0, duration: 0.03 }, 0.08 + k * 0.1)
    })
    return () => { story.classList.remove('is-pinned'); clock.textContent = '11h' }
  })
  void stage
}

export function initHistory(): void {
  const sec = $<HTMLElement>('[data-hist]')
  if (!sec) return
  const yearEl = $('[data-hist-year]', sec)!
  const path = $<SVGPathElement>('[data-hist-path]', sec)
  if (reducedMotion()) { yearEl.textContent = '1870'; return }
  const o = { y: 1450 }
  yearEl.textContent = '1450'
  if (path) gsap.set(path, { strokeDashoffset: 1 })
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: sec, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 },
  })
  tl.to(o, { y: 1855, duration: 0.55, onUpdate: () => { yearEl.textContent = String(Math.round(o.y)) } })
    .to(o, { y: 1870, duration: 0.45, onUpdate: () => { yearEl.textContent = String(Math.round(o.y)) } })
  if (path) tl.to(path, { strokeDashoffset: 0, duration: 1 }, 0)
  void ScrollTrigger
}
