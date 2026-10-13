// GSAP + ScrollTrigger + SplitText (all free since GSAP 3.13) and Lenis smooth scroll. Loaded lazily.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

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
  document.querySelectorAll<HTMLElement>('.page-hero h1.split, .nf h1.split, .art-head h1').forEach((el) => {
    el.style.visibility = 'visible'
    const s = SplitText.create(el, { type: 'words', mask: 'words' })
    gsap.from(s.words, { yPercent: 105, duration: 0.9, ease: 'expo.out', stagger: 0.07 })
  })
}
