// GSAP + ScrollTrigger + SplitText (all free since GSAP 3.13) and Lenis smooth scroll. Loaded lazily.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)
// Phones: the address bar showing/hiding must not trigger a full ScrollTrigger refresh (jumps mid-scroll).
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger, SplitText }

export function startLenis(): Lenis {
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

/** Page-hero titles: words rise out of a mask. Heading stays readable (SplitText sets aria-label). */
export function splitTitles(): void {
  const small = window.matchMedia('(max-width: 899px)').matches
  document.querySelectorAll<HTMLElement>('.page-hero h1.split, .nf h1.split, .art-head h1').forEach((el) => {
    el.style.visibility = 'visible'
    const s = SplitText.create(el, { type: 'words', mask: 'words' })
    // Phones: shorter, tighter rise so the title settles before the thumb starts scrolling.
    gsap.from(s.words, { yPercent: 105, duration: small ? 0.65 : 0.9, ease: 'expo.out', stagger: small ? 0.045 : 0.07 })
  })
}

/** Photo bands and covers: a gentle scrubbed drift inside their frame (transform only). Lighter on phones. */
export function photoDrift(): void {
  const mm = gsap.matchMedia()
  mm.add({ wide: '(min-width: 900px)', small: '(max-width: 899px)', calm: '(prefers-reduced-motion: reduce)' }, (ctx) => {
    const { wide, calm } = ctx.conditions as { wide: boolean; small: boolean; calm: boolean }
    if (calm) return
    const amp = wide ? 8 : 4
    document.querySelectorAll<HTMLElement>('.ph-band .ph-img, .art-cover .ph-img, .contact-photo .ph-img, .pb-main .ph-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -amp / 2, scale: 1 + amp / 100 }, {
        yPercent: amp / 2, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: wide ? 0.6 : true },
      })
    })
  })
}
