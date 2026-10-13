// Live open / closed status (header pill, home hero sign) and the « Avis » banner.
import { hours } from '../data/hours'
import { hLabel } from '../lib/format'
import { minutesToChange, parisNow, pillText, statusAt } from '../lib/hours'
import { $, $$ } from './dom'

function countdown(min: number): string {
  if (min < 60) return `dans ${min} min`
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? `dans ${h} h ${String(m).padStart(2, '0')}` : `dans ${h} h`
}

export function currentShopStatus() {
  const now = parisNow(location.search)
  return { now, status: statusAt('shop', now.day, now.minute) }
}

export function updateStatus(): void {
  const { now, status } = currentShopStatus()
  const p = pillText(status, now.day)
  const pill = $('[data-status-pill]')
  if (pill) {
    pill.setAttribute('data-state', p.state)
    const t = $('.st-text', pill)
    if (t) t.textContent = p.text
  }
  const sign = $('[data-live-sign]')
  if (sign) {
    sign.classList.toggle('is-open', status.open)
    sign.classList.toggle('is-closed', !status.open)
    const main = $('.ls-main', sign)
    const sub = $('[data-live-sub]', sign)
    if (main) main.textContent = status.open ? 'Ouvert' : 'Fermé'
    if (sub) {
      sub.textContent = status.open
        ? `jusqu’à ${hLabel(status.closesAt ?? 0)}`
        : `${p.text.replace('Fermé, ', '')} (${countdown(minutesToChange(status, now.day, now.minute))})`
    }
  }
}

export function initStatus(): void {
  updateStatus()
  window.setInterval(updateStatus, 30000)
  initNotices()
}

function initNotices(): void {
  const box = $('#notices')
  if (!box) return
  const now = Date.now()
  const active = hours.notices.filter((n) => new Date(n.from).getTime() <= now && now <= new Date(n.to).getTime())
  if (!active.length) return
  let dismissed = false
  try { dismissed = sessionStorage.getItem('liberte-notice') === '1' } catch { /* ignore */ }
  if (dismissed) return
  box.innerHTML = `<span>${active.map((n) => n.text).join(' ')}</span><button type="button">Masquer</button>`
  box.hidden = false
  $('button', box)?.addEventListener('click', () => {
    box.hidden = true
    try { sessionStorage.setItem('liberte-notice', '1') } catch { /* ignore */ }
  })
}

export function markToday(): void {
  const { now } = currentShopStatus()
  $$('tr[data-day]').forEach((tr) => tr.classList.toggle('is-today', Number(tr.dataset.day) === now.day))
}
