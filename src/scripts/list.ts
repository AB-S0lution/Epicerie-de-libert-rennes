// « Ma liste » : a local memo (localStorage), no ordering, no backend.
import { products } from '../data/products'
import { eur, typo } from '../lib/format'
import { $ } from './dom'

const KEY = 'liberte-list'
type ListState = Record<string, number>

function load(): ListState {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') as ListState } catch { return {} }
}
function save(s: ListState): void {
  try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* ignore */ }
}

export function initList(): void {
  const drawer = $<HTMLDialogElement>('#list-drawer')
  if (!drawer) return
  let state = load()
  const itemsEl = $('[data-list-items]')!
  const emptyEl = $('[data-list-empty]')!
  const totalEl = $('[data-list-total]')!
  const countEl = $('[data-list-count]')!

  const render = (pop = false): void => {
    const ids = Object.keys(state).filter((id) => state[id] > 0 && products.some((p) => p.id === id))
    const n = ids.reduce((a, id) => a + state[id], 0)
    countEl.textContent = String(n)
    countEl.setAttribute('data-n', String(n))
    if (pop) { countEl.classList.remove('pop'); void countEl.offsetWidth; countEl.classList.add('pop') }
    emptyEl.hidden = ids.length > 0
    let total = 0
    itemsEl.innerHTML = typo(
      ids.map((id) => {
        const p = products.find((x) => x.id === id)!
        total += p.price * state[id]
        return `<li><div><strong>${p.name}</strong><br /><small>${eur(p.price)} ${p.unit}</small></div>
          <span class="ld-q"><button type="button" data-dec="${id}" aria-label="Retirer un ${p.name}">−</button><b>${state[id]}</b><button type="button" data-inc="${id}" aria-label="Ajouter un ${p.name}">+</button></span></li>`
      }).join(''),
    )
    totalEl.textContent = eur(total)
  }

  const change = (id: string, d: number): void => {
    state[id] = Math.max(0, (state[id] ?? 0) + d)
    if (state[id] === 0) delete state[id]
    save(state)
    render(d > 0)
  }

  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement
    const add = t.closest<HTMLElement>('[data-add]')
    if (add) {
      change(add.dataset.add!, 1)
      add.classList.remove('added'); void add.offsetWidth; add.classList.add('added')
      return
    }
    const inc = t.closest<HTMLElement>('[data-inc]')
    if (inc) return change(inc.dataset.inc!, 1)
    const dec = t.closest<HTMLElement>('[data-dec]')
    if (dec) return change(dec.dataset.dec!, -1)
    if (t.closest('[data-list-open]')) { drawer.showModal(); return }
    if (t.closest('[data-list-close]')) { drawer.close(); return }
    if (t.closest('[data-list-clear]')) { state = {}; save(state); render(); return }
    if (t === drawer) drawer.close()
  })
  render()
}


