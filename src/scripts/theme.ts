// Jour / Nuit toggle. Dark is the default (PLAN.md §9); the choice is stored locally only.
import { $ } from './dom'

const KEY = 'liberte-theme'

function apply(theme: 'dark' | 'light'): void {
  document.documentElement.setAttribute('data-theme', theme)
  const btn = $('[data-theme-toggle]')
  btn?.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode jour' : 'Passer en mode nuit')
  $('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0E1117' : '#EEF1F0')
}

export function initTheme(): void {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  apply(current)
  $('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    apply(next)
    try { localStorage.setItem(KEY, next) } catch { /* storage may be blocked */ }
  })
}
