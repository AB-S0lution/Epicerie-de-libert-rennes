import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { pages } from './src/render/registry'
import { footer, head, header, setBase } from './src/render/site'
import { typo } from './src/lib/format'
import { faviconSvg } from './src/lib/art'

// GitHub Pages project site: https://ab-s0lution.github.io/Epicerie-de-libert-rennes/
const BASE = '/Epicerie-de-libert-rennes/'

/**
 * Multi-page build with build-time rendering: each root HTML file carries a `data-page` id, and this
 * plugin injects the head, header, page body and footer from src/render (typed data layer, French typography).
 */
function renderPages(): Plugin {
  return {
    name: 'liberte-render-pages',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        setBase(BASE)
        const id = /data-page="([^"]+)"/.exec(html)?.[1]
        const def = id ? pages[id] : undefined
        if (!def) return html
        const out = html
          .replace('<!--@head-->', head(def.meta))
          .replace('<!--@header-->', header(def.nav))
          .replace('<!--@page-->', def.body())
          .replace('<!--@footer-->', footer())
        return typo(out)
      },
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'favicon.svg', source: faviconSvg() })
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === BASE + 'favicon.svg') {
          res.setHeader('Content-Type', 'image/svg+xml')
          res.end(faviconSvg())
          return
        }
        next()
      })
    },
  }
}

const input: Record<string, string> = {}
for (const [name, file] of Object.entries({
  home: 'index.html',
  notfound: '404.html',
  rayons: 'rayons/index.html',
  relais: 'relais-colis/index.html',
  horaires: 'horaires-acces/index.html',
  histoire: 'notre-histoire/index.html',
  avis: 'avis/index.html',
  journal: 'journal/index.html',
  article: 'journal/article/index.html',
  galerie: 'galerie/index.html',
  faq: 'faq/index.html',
  contact: 'contact/index.html',
  mentions: 'mentions-legales/index.html',
  confidentialite: 'confidentialite/index.html',
  plan: 'plan-du-site/index.html',
})) {
  input[name] = resolve(import.meta.dirname, file)
}

export default defineConfig({
  base: BASE,
  plugins: [tailwindcss(), renderPages()],
  build: { rollupOptions: { input } },
})
