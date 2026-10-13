// Tiny DOM helpers.
export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T | null => root.querySelector<T>(sel)
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T[] => Array.from(root.querySelectorAll<T>(sel))
export const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = (): boolean => window.matchMedia('(hover: hover) and (pointer: fine)').matches
