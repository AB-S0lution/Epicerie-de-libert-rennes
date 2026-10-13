# Épicerie de Liberté, Rennes (site de démonstration)

Site de démonstration pour l'épicerie de nuit et relais colis du 46 boulevard de la Liberté, Rennes. Concept « La Dernière Vitrine ». Le catalogue, les prix et les articles du journal sont des **exemples étiquetés**; les horaires sont **à confirmer** (les sources ne concordent pas).

## Pages

Accueil, Rayons, Relais colis, Horaires et accès, Notre histoire, Avis, Journal (+ article), Galerie, FAQ, Contact, Mentions légales, Confidentialité, Plan du site, 404.

## Technique

Vite 8, TypeScript strict, Tailwind v4 (jetons CSS), GSAP + ScrollTrigger + SplitText, Lenis, polices Fontsource. Les pages sont rendues à la compilation (voir `vite.config.ts` et `src/render/`). Aucune photo: toute l'illustration est du SVG original.

## Commandes

```bash
npm install
npm run dev                         # développement
npm run typecheck && npm run build  # vérification
npm run preview -- --port 4176      # http://localhost:4176/Epicerie-de-libert-rennes/
```

Déploiement GitHub Pages via `.github/workflows/deploy.yml` (base `/Epicerie-de-libert-rennes/`).

## À valider avec le commerçant

Horaires, orthographe du nom, téléphone, e-mail, logo/couleurs/photos, produits et prix réels, moyens de paiement, jours fériés, mentions légales (RCS, éditeur), détails d'accessibilité, horaires des bus de nuit.
