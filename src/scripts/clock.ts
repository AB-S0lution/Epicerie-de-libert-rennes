// L'Horloge du Boulevard : a draggable 24h dial (midnight at the bottom, noon at the top).
// Two arcs (épicerie / relais colis) come from the typed hours config. The hand is also a keyboard slider.
import { DAYS_SHORT, hours } from '../data/hours'
import { hLabel, toMin, typo } from '../lib/format'
import { sentence } from '../lib/hours'
import { currentShopStatus } from './status'
import { $, $$ } from './dom'

const R: Record<string, number> = { shop: 162, parcel: 144 }

function segments(service: 'shop' | 'parcel', day: number): [number, number][] {
  const t = hours[service]
  const cur = t[day]
  const prev = t[(day + 6) % 7]
  const out: [number, number][] = []
  const pc = toMin(prev.close)
  const po = toMin(prev.open)
  if (pc <= po) out.push([0, pc / 60]) // yesterday's session carries over past midnight
  const o = toMin(cur.open)
  const c = toMin(cur.close)
  out.push([o / 60, c <= o ? 24 : c / 60])
  return out.sort((a, b) => a[0] - b[0])
}

function dash(segs: [number, number][], radius: number): string {
  const u = (2 * Math.PI * radius) / 24
  // SVG dash arrays alternate [on, off, on, off...] from hour 0 (the circle is rotated to start at midnight).
  const arr: number[] = []
  let cursor = 0
  segs.forEach(([a, b]) => {
    if (a > cursor) {
      if (arr.length === 0) arr.push(0, (a - cursor) * u)
      else arr[arr.length - 1] += (a - cursor) * u
    }
    arr.push((b - a) * u, 0)
    cursor = b
  })
  arr[arr.length - 1] += cursor < 24 ? (24 - cursor) * u : 0.01
  return arr.map((n) => n.toFixed(2)).join(' ')
}

export function initClock(root: HTMLElement): void {
  const scope = (root.closest('section') as HTMLElement | null) ?? document.body
  const hand = $<SVGGElement>('[data-hand]', root)!
  const hit = $<HTMLElement>('[data-slider]', root)!
  const tabsEl = $('[data-day-tabs]', scope)
  const sentenceEl = $('[data-clock-sentence]', scope)
  const arcs = { shop: $<SVGCircleElement>('[data-arc="shop"]', root)!, parcel: $<SVGCircleElement>('[data-arc="parcel"]', root)! }
  const { now } = currentShopStatus()

  let day = now.day
  let minute = Math.round(now.minute / 5) * 5 % 1440

  const draw = (smooth: boolean): void => {
    hand.classList.toggle('smooth', smooth)
    hand.style.transform = `rotate(${minute / 4 - 180}deg)`
    hit.setAttribute('aria-valuenow', String(minute))
    hit.setAttribute('aria-valuetext', `${DAYS_LONG[day]} ${hLabel(minute)}`)
    if (sentenceEl) sentenceEl.textContent = typo(sentence(day, minute))
  }
  const drawArcs = (): void => {
    ;(['shop', 'parcel'] as const).forEach((k) => {
      const el = arcs[k]
      el.setAttribute('transform', 'rotate(90 200 200)')
      el.style.strokeDasharray = dash(segments(k, day), R[k])
    })
  }
  const DAYS_LONG = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

  if (tabsEl) {
    tabsEl.innerHTML = DAYS_SHORT.map((d, i) => `<button type="button" class="chip${i === day ? ' is-on' : ''}" data-d="${i}" aria-pressed="${i === day}">${d}</button>`).join('')
    tabsEl.addEventListener('click', (e) => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-d]')
      if (!b) return
      day = Number(b.dataset.d)
      $$('[data-d]', tabsEl).forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)) })
      drawArcs(); draw(true)
    })
  }

  const setFromPointer = (e: PointerEvent): void => {
    const r = root.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    const phi = (Math.atan2(dx, -dy) * 180) / Math.PI // 0 = top, clockwise
    const m = ((phi + 180) / 360) * 1440
    minute = (Math.round(m / 5) * 5) % 1440
    draw(false)
  }
  let dragging = false
  hit.addEventListener('pointerdown', (e) => { dragging = true; hit.setPointerCapture(e.pointerId); setFromPointer(e) })
  hit.addEventListener('pointermove', (e) => { if (dragging) setFromPointer(e) })
  const stop = (e: PointerEvent): void => { dragging = false; if (hit.hasPointerCapture(e.pointerId)) hit.releasePointerCapture(e.pointerId) }
  hit.addEventListener('pointerup', stop)
  hit.addEventListener('pointercancel', stop)
  hit.addEventListener('keydown', (e) => {
    const step: Record<string, number> = { ArrowRight: 15, ArrowUp: 15, ArrowLeft: -15, ArrowDown: -15, PageUp: 60, PageDown: -60 }
    if (e.key in step) { minute = (minute + step[e.key] + 1440) % 1440; e.preventDefault(); draw(true) }
    else if (e.key === 'Home') { minute = 0; e.preventDefault(); draw(true) }
    else if (e.key === 'End') { minute = 1435; e.preventDefault(); draw(true) }
  })

  drawArcs()
  draw(false)
}

export function initClocks(): void {
  $$('[data-clock]').forEach(initClock)
}
