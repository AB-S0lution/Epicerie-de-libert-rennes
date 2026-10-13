// Original SVG illustration kit (no photos, no logos, no carrier marks). Pure functions returning markup strings.
// Runs at build time (Node) and in the browser. Coordinates are in each artwork's own viewBox.

let _n = 0
const uid = (p = 'u'): string => `${p}${++_n}`

// Illustration-only palette (PLAN.md §9: half-timbered accents allowed in SVG scenes only)
export const P = {
  night: '#0B0F16', night2: '#121821', stoneN: '#1E2530', stoneN2: '#262E3B',
  day: '#A9BCCB', day2: '#D3DCE2', stoneD: '#B9B2A3', stoneD2: '#CDC7B8',
  amber: '#F4A93A', amberL: '#FBD58B', amberD: '#C9821C',
  white: '#F2F2EE', black: '#15171B', slate: '#4A5D78', ochre: '#C98B2B', oxblood: '#7A2E2A',
  metal: '#7C8794', metalD: '#566070', carton: '#B58A5A', cartonD: '#8E6B43', green: '#5CA06C',
}

const svg = (vb: string, inner: string, cls = '') =>
  `<svg class="art ${cls}" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${inner}</svg>`

const r = (x: number, y: number, w: number, h: number, fill: string, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`

/** Rennes arms: paly argent and sable (vertical stripes), scalloped hem. */
export function awning(x: number, y: number, w: number, h = 22): string {
  const n = Math.max(4, Math.round(w / 12))
  const sw = w / n
  let s = ''
  for (let i = 0; i < n; i++) {
    const fill = i % 2 === 0 ? P.white : P.black
    s += r(x + i * sw, y, sw + 0.4, h, fill)
    s += `<path d="M${x + i * sw} ${y + h}h${sw + 0.4}a${sw / 2} 6 0 0 1 -${sw + 0.4} 0z" fill="${fill}"/>`
  }
  return s
}

function slats(x: number, y: number, w: number, h: number): string {
  let s = r(x, y, w, h, P.metal)
  for (let yy = y + 5; yy < y + h; yy += 7) s += r(x, yy, w, 1.4, P.metalD)
  return s
}

export function shutterRect(x: number, y: number, w: number, h: number, pct: number): string {
  // pct = share of the window covered (0 = open, 1 = closed)
  return slats(x, y, w, Math.max(0, h * pct)) + (pct > 0 ? r(x, y + h * pct - 4, w, 4, P.metalD) : '')
}

export function lamp(x: number, gy: number, on = true, scale = 1): string {
  const h = 120 * scale
  return `<g>${r(x - 1.5, gy - h, 3, h, '#2A313C')}${r(x - 1.5, gy - h, 14 * scale, 3, '#2A313C')}<circle cx="${x + 12 * scale}" cy="${gy - h + 7}" r="${on ? 6 : 5}" fill="${on ? P.amberL : '#3A4250'}"/>${on ? `<circle cx="${x + 12 * scale}" cy="${gy - h + 7}" r="${34 * scale}" fill="${P.amber}" opacity=".14"/><circle cx="${x + 12 * scale}" cy="${gy - h + 7}" r="${18 * scale}" fill="${P.amber}" opacity=".18"/>` : ''}</g>`
}

export function person(x: number, gy: number, s = 1, fill = '#06080C'): string {
  return `<g fill="${fill}"><circle cx="${x}" cy="${gy - 44 * s}" r="${6 * s}"/><path d="M${x - 8 * s} ${gy}v-${30 * s}q0-${8 * s} ${8 * s}-${8 * s}t${8 * s} ${8 * s}v${30 * s}z"/></g>`
}

export function box(x: number, y: number, w: number, h: number, tone = 0): string {
  const f = tone ? P.cartonD : P.carton
  return `<g>${r(x, y, w, h, f)}${r(x + w * 0.42, y, w * 0.16, h, '#D9C19A', 'opacity=".7"')}${r(x + 3, y + h * 0.55, w * 0.28, h * 0.22, '#EDE6D6', 'opacity=".85"')}</g>`
}

function windowsGrid(x: number, y: number, cols: number, rows: number, w: number, h: number, gx: number, gy: number, on: (i: number) => boolean, dark: string): string {
  let s = ''
  let i = 0
  for (let rr = 0; rr < rows; rr++)
    for (let c = 0; c < cols; c++) {
      const lit = on(i++)
      const xx = x + c * (w + gx)
      const yy = y + rr * (h + gy)
      s += r(xx, yy, w, h, lit ? P.amber : dark, lit ? 'opacity=".95"' : '')
      s += r(xx - 3, yy + h, w + 6, 3, '#00000033')
      s += r(xx + w / 2 - 0.6, yy, 1.2, h, '#00000040')
    }
  return s
}

/** Shelf with item silhouettes. kinds: jar, box, bottle, can, bag */
function shelfRow(x: number, y: number, w: number, kinds: string[], palette: string[]): string {
  let s = r(x, y, w, 4, '#1B1F27')
  const step = w / kinds.length
  kinds.forEach((k, i) => {
    const cx = x + step * i + step / 2
    const c = palette[i % palette.length]
    if (k === 'jar') s += `${r(cx - 7, y - 18, 14, 18, c, 'rx="3"')}${r(cx - 8, y - 22, 16, 5, P.amberD)}`
    else if (k === 'box') s += `${r(cx - 9, y - 24, 18, 24, c)}${r(cx - 9, y - 16, 18, 5, '#ffffff55')}`
    else if (k === 'bottle') s += `${r(cx - 5, y - 26, 10, 26, c, 'rx="3"')}${r(cx - 2.5, y - 32, 5, 7, c)}`
    else if (k === 'can') s += `${r(cx - 6, y - 17, 12, 17, c, 'rx="2"')}${r(cx - 6, y - 12, 12, 4, '#ffffff66')}`
    else s += `<path d="M${cx - 8} ${y}l2 -22h12l2 22z" fill="${c}"/>`
  })
  return s
}

const SHELF_COLORS = ['#6F8CB0', '#C26D5F', '#68A66F', '#D9B650', '#4F9DB5', '#E7D9B4']

// ---------- Pictograms for the catalogue (64 x 64, classes tinted by CSS) ----------
const GL: Record<string, string> = {
  bottle: '<rect class="g1" x="26" y="5" width="12" height="9" rx="2"/><path class="g1" d="M24 15h16l4 9v30a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V24z"/><rect class="g3" x="24" y="30" width="16" height="14" rx="2"/>',
  can: '<rect class="g1" x="19" y="9" width="26" height="46" rx="5"/><rect class="g2" x="19" y="9" width="26" height="6" rx="3"/><rect class="g3" x="19" y="26" width="26" height="14"/>',
  box: '<rect class="g1" x="11" y="20" width="42" height="34" rx="3"/><rect class="g2" x="11" y="13" width="42" height="9" rx="2"/><rect class="g3" x="20" y="31" width="24" height="12" rx="2"/>',
  jar: '<rect class="g2" x="19" y="9" width="26" height="9" rx="2"/><rect class="g1" x="15" y="18" width="34" height="37" rx="9"/><rect class="g3" x="21" y="28" width="22" height="15" rx="3"/>',
  bag: '<path class="g1" d="M15 15h34l4 40H11z"/><rect class="g2" x="15" y="9" width="34" height="8" rx="2"/><circle class="g3" cx="32" cy="36" r="9"/>',
  sandwich: '<path class="g1" d="M9 31a23 15 0 0 1 46 0z"/><rect class="g3" x="9" y="31" width="46" height="5" rx="2"/><rect class="g2" x="9" y="36" width="46" height="7" rx="2"/><rect class="g1" x="9" y="43" width="46" height="9" rx="4"/>',
  apple: '<circle class="g1" cx="32" cy="37" r="19"/><path class="g2" d="M33 18c1-7 6-10 11-10-1 6-5 10-11 10z"/><rect class="g3" x="31" y="14" width="3" height="9" rx="1.5"/>',
  banana: '<path class="g1" d="M12 20c3 22 15 32 40 30-1-7-6-10-12-10-10 0-16-8-16-22z"/><rect class="g2" x="10" y="14" width="7" height="9" rx="2"/>',
  tomato: '<circle class="g1" cx="32" cy="37" r="19"/><path class="g2" d="M32 20l5-8 3 8 8 1-6 5 2 8-8-4-8 4 2-8-6-5z" transform="translate(0 -3) scale(.85) translate(5 4)"/>',
  onion: '<ellipse class="g1" cx="32" cy="38" rx="19" ry="17"/><path class="g2" d="M32 6c3 7 6 12 4 17h-8c-2-5 1-10 4-17z"/><path class="g3" d="M32 22c-6 6-8 20 0 31M32 22c6 6 8 20 0 31" fill="none" stroke="var(--tile)" stroke-width="2"/>',
  carton: '<rect class="g1" x="17" y="18" width="30" height="38" rx="2"/><path class="g2" d="M17 18l15-11 15 11z"/><rect class="g3" x="22" y="29" width="20" height="14" rx="2"/>',
  eggs: '<rect class="g2" x="7" y="38" width="50" height="14" rx="4"/><ellipse class="g1" cx="19" cy="34" rx="8" ry="11"/><ellipse class="g1" cx="32" cy="32" rx="8" ry="11"/><ellipse class="g1" cx="45" cy="34" rx="8" ry="11"/>',
  butter: '<rect class="g2" x="8" y="26" width="48" height="24" rx="3"/><rect class="g1" x="8" y="26" width="32" height="24" rx="3"/><rect class="g3" x="14" y="33" width="20" height="10" rx="2"/>',
  spray: '<rect class="g2" x="27" y="14" width="10" height="11"/><rect class="g2" x="24" y="7" width="20" height="8" rx="2"/><rect class="g1" x="19" y="24" width="26" height="33" rx="6"/><rect class="g3" x="23" y="33" width="18" height="14" rx="2"/>',
  sponge: '<rect class="g2" x="9" y="22" width="46" height="22" rx="5"/><rect class="g1" x="9" y="22" width="46" height="9" rx="4"/><circle class="g3" cx="20" cy="38" r="2.4"/><circle class="g3" cx="32" cy="36" r="2.4"/><circle class="g3" cx="44" cy="38" r="2.4"/>',
  roll: '<rect class="g1" x="15" y="20" width="34" height="31" rx="3"/><ellipse class="g2" cx="32" cy="20" rx="17" ry="7"/><ellipse class="g3" cx="32" cy="20" rx="6" ry="2.6"/>',
  tube: '<path class="g1" d="M19 10h26l-3 40H22z"/><rect class="g2" x="24" y="49" width="16" height="9" rx="2"/><rect class="g3" x="22" y="22" width="20" height="10"/>',
  tissues: '<rect class="g1" x="10" y="30" width="44" height="24" rx="4"/><path class="g2" d="M18 30c0-10 6-14 8-20 4 5 4 10 8 12 3-6 4-9 8-12 2 8 4 12 4 20z"/>',
  battery: '<rect class="g1" x="9" y="21" width="42" height="22" rx="4"/><rect class="g2" x="51" y="28" width="6" height="8" rx="2"/><rect class="g3" x="16" y="21" width="9" height="22"/>',
  cable: '<rect class="g1" x="6" y="26" width="15" height="12" rx="2"/><path class="gs" d="M21 32c14 0 10 16 24 16"/><rect class="g1" x="44" y="41" width="14" height="14" rx="2"/>',
  lighter: '<rect class="g1" x="21" y="22" width="22" height="35" rx="4"/><rect class="g2" x="21" y="14" width="22" height="10" rx="2"/><path class="g3" d="M32 5c4 4 4 7 0 10-4-3-4-6 0-10z"/>',
  bar: '<rect class="g2" x="12" y="43" width="40" height="12" rx="2"/><rect class="g1" x="12" y="10" width="40" height="36" rx="3"/><rect class="g3" x="30.5" y="10" width="3" height="36"/><rect class="g3" x="12" y="27" width="40" height="3"/>',
  biscuits: '<circle class="g1" cx="23" cy="35" r="15"/><circle class="g2" cx="41" cy="29" r="15"/><circle class="g3" cx="19" cy="32" r="2"/><circle class="g3" cx="27" cy="39" r="2"/><circle class="g3" cx="38" cy="26" r="2"/><circle class="g3" cx="45" cy="33" r="2"/>',
  crepe: '<circle class="g1" cx="32" cy="34" r="22"/><path class="g2" d="M32 12a22 22 0 0 1 0 44z"/><path class="g3" d="M18 26l28 14M18 40l28-14" stroke="var(--tile)" stroke-width="2" fill="none"/>',
  diaper: '<path class="g1" d="M8 20h48v12c0 13-11 22-24 22S8 45 8 32z"/><rect class="g2" x="8" y="20" width="9" height="7" rx="2"/><rect class="g2" x="47" y="20" width="9" height="7" rx="2"/><rect class="g3" x="25" y="35" width="14" height="6" rx="3"/>',
  pack: '<rect class="g1" x="13" y="14" width="38" height="42" rx="4"/><rect class="g2" x="13" y="14" width="38" height="8" rx="3"/><rect class="g3" x="19" y="28" width="26" height="16" rx="2"/>',
}

export function glyph(key: string): string {
  const inner = GL[key] ?? GL.pack
  return `<svg class="glyph" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${inner}</svg>`
}

/** The ermine spot micro-icon (Rennes arms). */
export function ermine(cls = ''): string {
  return `<svg class="ermine ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2c1.2 2.4 1.6 4.6 1.2 6.4 1.7-1.4 3.8-2.2 6-2.2-.6 2.2-1.9 4-3.9 5.2 2.1.1 3.9.9 5.2 2.3-2.1 1-4.3 1.2-6.4.6.8 1.8.9 3.8.2 5.9-1.7-1.2-2.8-2.7-3.3-4.5-.5 1.8-1.6 3.3-3.3 4.5-.7-2.1-.6-4.1.2-5.9-2.1.6-4.3.4-6.4-.6 1.3-1.4 3.1-2.2 5.2-2.3-2-1.2-3.3-3-3.9-5.2 2.2 0 4.3.8 6 2.2C10.4 6.6 10.8 4.4 12 2z"/></svg>`
}

// ---------- Hero shopfront (viewBox 520 x 600) ----------
export function shopfront(): string {
  const win = (x: number, y: number, on: boolean) =>
    `<g class="uwin${on ? ' on' : ''}">${r(x, y, 58, 74, on ? P.amber : P.stoneN2, `class="uwin-r"`)}${r(x + 28.5, y, 1.4, 74, '#00000055')}${r(x - 5, y + 74, 68, 5, '#00000044')}</g>`
  const clip = uid('clip')
  const upper =
    win(52, 96, false) + win(150, 96, true) + win(248, 96, false) + win(346, 96, false) +
    win(52, 214, true) + win(150, 214, false) + win(248, 214, false) + win(346, 214, true)
  return svg('0 0 520 600', `
    <defs><clipPath id="${clip}"><rect x="64" y="356" width="332" height="186" rx="3"/></clipPath></defs>
    <rect width="520" height="600" fill="${P.night}"/>
    <g class="stars" fill="#E9ECF2" opacity=".8">${[[30,26],[90,60],[150,18],[238,44],[300,24],[370,56],[430,20],[480,70],[60,120],[470,140],[410,92],[200,76]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="1.2"/>`).join('')}</g>
    <circle cx="456" cy="52" r="20" fill="#E9E4D2" opacity=".92"/><circle cx="448" cy="46" r="20" fill="${P.night}"/>
    ${r(18, 54, 484, 546, P.stoneN)}
    ${r(18, 54, 484, 20, '#2B3340')}${r(18, 74, 484, 4, '#00000050')}
    ${r(18, 196, 484, 6, '#2B3340')}${r(18, 312, 484, 6, '#2B3340')}
    ${upper}
    <rect x="30" y="338" width="64" height="16" rx="2" fill="#E7E2D3"/><text x="62" y="350" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="600" font-size="8" fill="#1A3A66">Boulevard de la Liberté</text>
    ${r(18, 318, 484, 40, '#2B3340')}
    <g class="awning-g">${awning(40, 338, 380, 26)}</g>
    <g class="shop-window">
      ${r(64, 356, 332, 186, '#17110A')}
      ${r(64, 356, 332, 186, P.amber, 'class="glow" opacity=".16"')}
      <g class="shelves" opacity=".95">
        ${shelfRow(78, 400, 150, ['jar','box','bottle','can','jar','box'], SHELF_COLORS)}
        ${shelfRow(78, 450, 150, ['bottle','can','box','jar','bottle','can'], SHELF_COLORS.slice().reverse())}
        ${shelfRow(78, 500, 150, ['bag','box','jar','bag','can','bottle'], SHELF_COLORS)}
        ${shelfRow(250, 400, 132, ['can','bottle','box','jar','can'], SHELF_COLORS.slice().reverse())}
        ${shelfRow(250, 450, 132, ['jar','jar','box','bottle','box'], SHELF_COLORS)}
        ${box(256, 485, 40, 38)}${box(300, 497, 32, 26, 1)}${box(336, 487, 40, 36)}
      </g>
      ${r(64, 536, 332, 6, '#0b0b0d')}
      <g class="ouvert-sign" transform="translate(172 372)">
        <rect width="116" height="38" rx="5" fill="#0d0d10" stroke="${P.amber}" stroke-width="2"/>
        <text class="ouvert-text" x="58" y="29" text-anchor="middle" font-family="Big Shoulders Display Variable, Big Shoulders Display, Arial Narrow, sans-serif" font-weight="800" font-size="28" letter-spacing="3" fill="${P.amberL}">OUVERT</text>
      </g>
      <g clip-path="url(#${clip})"><g id="shutter-scroll"><g id="shutter">
        ${slats(64, 150, 332, 392)}${r(64, 530, 332, 12, P.metalD)}${r(240, 520, 20, 18, '#3A4250', 'rx="2"')}
        <text id="shutter-msg" x="230" y="470" text-anchor="middle" font-family="Big Shoulders Display Variable, Big Shoulders Display, Arial Narrow, sans-serif" font-weight="800" font-size="30" letter-spacing="1" fill="#1b1f26" opacity=".85"></text>
      </g></g></g>
    </g>
    ${r(414, 356, 74, 186, '#1B222D')}${r(424, 366, 54, 150, '#0F141B')}${r(468, 440, 5, 14, P.metal)}
    ${r(424, 366, 54, 150, P.amber, 'opacity=".07"')}
    ${r(0, 542, 520, 58, '#0A0D12')}${r(0, 542, 520, 4, '#2B3340')}
    ${r(0, 560, 520, 2, '#ffffff10')}
    <g class="lamp-g">${lamp(36, 548, true, 1.25)}</g>
    <ellipse cx="230" cy="574" rx="150" ry="9" fill="${P.amber}" opacity=".12"/>
  `, 'hero-art')
}

// ---------- Wide street strip for the horizontal story (viewBox 2400 x 300) ----------
export function nightStrip(): string {
  let wins = ''
  for (let i = 0; i < 10; i++) {
    const x = 60 + i * 220
    wins += `<g class="sw" data-i="${i}">${r(x, 70, 70, 90, '#2A3342')}${r(x, 70, 70, 90, P.amber, 'class="sw-r"')}${r(x + 34, 70, 1.5, 90, '#00000055')}${r(x, 200, 70, 70, '#2A3342')}${r(x, 200, 70, 70, P.amber, 'class="sw-r2"')}</g>`
  }
  return svg('0 0 2400 300', `
    ${r(0, 0, 2400, 300, '#222A36')}
    ${r(0, 40, 2400, 14, '#2E3746')}${r(0, 175, 2400, 8, '#2E3746')}
    ${wins}
    <g>${[0,1,2,3,4,5,6,7,8,9,10].map((i) => lamp(130 + i * 220, 296, true, 0.7)).join('')}</g>
  `, 'strip-art')
}

// ---------- Vignettes for the 8 hours (viewBox 320 x 220) ----------
export function vignette(kind: string): string {
  const floor = r(0, 180, 320, 40, '#0A0D12')
  let inner = ''
  switch (kind) {
    case 'colis':
      inner = `${r(0, 0, 320, 180, P.day)}${r(30, 40, 260, 140, P.stoneD)}${r(60, 70, 200, 110, '#2A2118')}${awning(52, 52, 216, 20)}${r(60, 150, 200, 8, '#3A2D20')}${box(90, 112, 44, 38)}${box(140, 124, 34, 26, 1)}${box(182, 108, 48, 42)}${floor}`
      break
    case 'ouvert':
      inner = `${r(0, 0, 320, 180, P.day2)}${r(30, 40, 260, 140, P.stoneD2)}${r(56, 78, 208, 102, '#2A2118')}${r(56, 78, 208, 102, P.amber, 'opacity=".25"')}${awning(48, 56, 224, 22)}${shelfRow(66, 116, 80, ['jar','box','bottle','can'], SHELF_COLORS)}${shelfRow(66, 150, 80, ['can','bottle','box','jar'], SHELF_COLORS)}${shelfRow(166, 116, 90, ['bag','box','jar','can'], SHELF_COLORS)}${floor}`
      break
    case 'fermeture':
      inner = `${r(0, 0, 320, 180, '#6C7C8E')}${r(20, 40, 130, 140, '#4D5866')}${r(170, 40, 130, 140, '#4D5866')}${r(30, 80, 110, 100, '#201A14')}${shutterRect(30, 80, 110, 100, 0.65)}${r(180, 80, 110, 100, '#201A14')}${shutterRect(180, 80, 110, 100, 0.9)}${awning(24, 56, 122, 18)}${floor}`
      break
    case 'autres':
      inner = `${r(0, 0, 320, 180, '#1A2230')}${windowsGrid(24, 34, 5, 2, 38, 44, 18, 18, (i) => i === 7, '#2A3342')}${r(110, 128, 100, 52, '#17110A')}${r(110, 128, 100, 52, P.amber, 'opacity=".55"')}${awning(104, 112, 112, 16)}${floor}`
      break
    case 'relais':
      inner = `${r(0, 0, 320, 180, '#151B26')}${r(30, 120, 260, 60, '#2A2118')}${r(30, 114, 260, 8, '#4A3A28')}${box(60, 90, 40, 30)}${box(110, 98, 30, 22, 1)}<rect x="200" y="86" width="50" height="34" rx="4" fill="#0e1218" stroke="${P.metal}" stroke-width="2"/><rect x="208" y="94" width="34" height="14" fill="${P.green}" opacity=".7"/><circle cx="256" cy="52" r="26" fill="#0e1218" stroke="${P.amber}" stroke-width="3"/><path d="M256 52V36M256 52l10 8" stroke="${P.amberL}" stroke-width="3" stroke-linecap="round" fill="none"/>${floor}`
      break
    case 'concert':
      inner = `${r(0, 0, 320, 180, '#0E131C')}${r(10, 24, 150, 156, '#222A38')}${r(24, 36, 122, 36, P.amber, 'opacity=".7"')}${[190,214,236,258,282,300,174].map((x, i) => person(x, 182, 0.9 + (i % 3) * 0.1, '#04060A')).join('')}${lamp(160, 182, true, 0.8)}${floor}`
      break
    case 'derniere':
      inner = `${r(0, 0, 320, 180, P.night)}<circle cx="262" cy="40" r="16" fill="#E9E4D2"/><circle cx="256" cy="36" r="16" fill="${P.night}"/>${r(30, 24, 260, 156, P.stoneN)}${windowsGrid(46, 36, 5, 2, 34, 38, 22, 16, () => false, '#222B38')}${r(110, 118, 100, 62, '#17110A')}${r(110, 118, 100, 62, P.amber, 'opacity=".65"')}${awning(102, 104, 116, 16)}${floor}`
      break
    default:
      inner = `${r(0, 0, 320, 180, P.night)}${r(30, 24, 260, 156, P.stoneN)}${windowsGrid(46, 36, 5, 2, 34, 38, 22, 16, () => false, '#1B222D')}${r(110, 118, 100, 62, '#17110A')}${shutterRect(110, 118, 100, 62, 1)}${awning(102, 104, 116, 16)}<text x="160" y="160" text-anchor="middle" font-family="Big Shoulders Display Variable, Big Shoulders Display, Arial Narrow, sans-serif" font-weight="800" font-size="22" fill="#1b1f26">À demain</text>${floor}`
  }
  return svg('0 0 320 220', inner, 'vignette-art')
}

// ---------- Quartier map (schematic, not to scale) ----------
export function quartierMap(): string {
  return `<svg class="art map-art" viewBox="0 0 640 400" role="img" aria-label="Plan schématique du quartier : le boulevard de la Liberté entre la place de Bretagne à l’ouest et l’avenue Jean-Janvier à l’est, avec le magasin, les stations de métro Colombier et République, l’esplanade Charles-de-Gaulle et Le Liberté." focusable="false">
    <rect width="640" height="400" fill="var(--map-bg)"/>
    <g stroke="var(--map-line)" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8">
      <path d="M0 150 Q 160 120 330 160 T 640 150"/><path d="M200 0 L 230 400"/><path d="M440 0 L 410 400"/><path d="M0 300 L 640 290"/>
    </g>
    <path d="M30 210 Q 200 180 330 200 T 610 190" stroke="var(--sodium)" stroke-width="16" fill="none" stroke-linecap="round" opacity=".9"/>
    <text x="52" y="236" class="map-label" fill="var(--craie)">Place de Bretagne</text>
    <text x="520" y="178" class="map-label" fill="var(--craie)">Av. Jean-Janvier</text>
    <text x="250" y="266" class="map-label big" fill="var(--craie)">Boulevard de la Liberté</text>
    <text x="250" y="284" class="map-label" fill="var(--ardoise)">Boulouard ar Frankiz</text>
    <text x="170" y="116" class="map-label" fill="var(--ardoise)">Centre-ville</text>
    <text x="430" y="360" class="map-label" fill="var(--ardoise)">Colombier</text>
    <g><circle cx="300" cy="198" r="11" fill="var(--sodium)" stroke="var(--bitume)" stroke-width="3"/><circle cx="300" cy="198" r="22" fill="none" stroke="var(--sodium)" stroke-width="1.5" opacity=".6"/>
    <text x="316" y="186" class="map-label big" fill="var(--sodium)">no 46</text></g>
    <g><rect x="150" y="70" width="14" height="14" rx="3" fill="var(--ardoise)"/><text x="170" y="82" class="map-label" fill="var(--craie)">Le Liberté, esplanade</text></g>
    <g><circle cx="360" cy="300" r="8" fill="var(--craie)"/><text x="374" y="304" class="map-label" fill="var(--craie)">Métro Colombier (b)</text></g>
    <g><circle cx="420" cy="170" r="8" fill="var(--craie)"/><text x="434" y="150" class="map-label" fill="var(--craie)">Métro République (a, b)</text></g>
    <text x="22" y="388" class="map-label" fill="var(--ardoise)">Plan schématique, hors échelle</text>
  </svg>`
}

// ---------- Gallery / journal scenes (viewBox 400 x 300) ----------
function ground(y: number, fill = '#0A0D12'): string { return r(0, y, 400, 300 - y, fill) + r(0, y, 400, 3, '#ffffff12') }

function frontNight(lit: boolean, shutter = 0): string {
  return `${r(0, 0, 400, 300, P.night)}${r(20, 20, 360, 240, P.stoneN)}${windowsGrid(40, 34, 5, 2, 44, 52, 22, 14, (i) => i === 3 && lit, P.stoneN2)}${r(70, 164, 260, 96, '#17110A')}${r(70, 164, 260, 96, P.amber, `opacity="${lit ? 0.55 : 0.05}"`)}${shelfRow(84, 206, 100, ['jar','box','bottle','can','jar'], SHELF_COLORS)}${shelfRow(200, 206, 110, ['can','bottle','box','jar'], SHELF_COLORS)}${shutter ? shutterRect(70, 164, 260, 96, shutter) : ''}${awning(60, 148, 280, 20)}${ground(260)}`
}

function shelfScene(bg: string, items: string[][], bgTone = P.night2): string {
  let s = r(0, 0, 400, 300, bgTone) + r(20, 20, 360, 250, bg)
  items.forEach((row, i) => { s += shelfRow(36, 90 + i * 62, 330, row, SHELF_COLORS.slice(i)) })
  return s + ground(270)
}

const SCENES: Record<string, () => string> = {
  'facade-jour': () => `${r(0, 0, 400, 300, P.day)}${r(20, 20, 360, 240, P.stoneD)}${windowsGrid(40, 34, 5, 2, 44, 52, 22, 14, () => false, '#7E8997')}${r(70, 164, 260, 96, '#2A2118')}${shelfRow(84, 206, 100, ['jar','box','bottle','can','jar'], SHELF_COLORS)}${shelfRow(200, 206, 110, ['can','bottle','box','jar'], SHELF_COLORS)}${awning(60, 148, 280, 20)}${ground(260, '#6E7885')}`,
  'facade-nuit': () => frontNight(true) + lamp(34, 262, true, 1),
  'rideau': () => frontNight(true, 0.55),
  'auvent': () => `${r(0, 0, 400, 300, P.night2)}${r(0, 0, 400, 300, P.amber, 'opacity=".08"')}${awning(20, 70, 360, 70)}${r(20, 160, 360, 8, '#00000066')}${r(40, 175, 320, 95, P.amber, 'opacity=".5"')}`,
  'rayon-sec': () => shelfScene('#1B1F27', [['jar','box','jar','bag','can','jar','box'], ['bag','bag','box','jar','can','bottle','box'], ['can','can','jar','box','bag','jar','can']]),
  'rayon-frais': () => `${r(0, 0, 400, 300, P.night2)}${r(20, 20, 360, 250, '#1A2733')}${r(20, 20, 360, 250, '#9FD3E6', 'opacity=".08"')}` + [0,1,2].map((i) => shelfRow(36, 100 + i * 62, 330, i === 0 ? ['box','box','box','box','box','box'] : i === 1 ? ['jar','jar','box','jar','box','jar'] : ['box','bottle','box','bottle','box','bottle'], ['#E8EEF2','#D9B650','#9FD3E6','#F0E3B5'])).join('') + ground(270),
  'rayon-fruits': () => `${r(0, 0, 400, 300, P.night2)}${r(20, 20, 360, 250, '#1B2219')}` + [0,1,2].map((i) => { const x = 36 + i * 116; const c = ['#B24A3F', '#C23B2E', '#E6C02F'][i]; let s = r(x, 150, 106, 100, '#8E6B43') + r(x, 150, 106, 8, '#B58A5A'); for (let k = 0; k < 12; k++) s += `<circle cx="${x + 14 + (k % 4) * 26}" cy="${150 - Math.floor(k / 4) * 18 + 4}" r="12" fill="${c}"/>`; return s }).join('') + ground(270),
  'rayon-menager': () => shelfScene('#1B2226', [['bottle','bottle','box','bottle','jar','bottle','box'], ['bag','box','bag','box','bag','box','bag'], ['bottle','can','bottle','can','bottle','can','bottle']]),
  'rayon-snacks': () => `${r(0, 0, 400, 300, P.night2)}${r(30, 24, 340, 246, '#12202B')}${r(30, 24, 340, 246, '#9FD3E6', 'opacity=".07"')}` + [0,1,2].map((i) => shelfRow(46, 100 + i * 62, 308, i === 2 ? ['box','box','box','box','box'] : ['can','can','bottle','can','bottle','can','can'], i === 2 ? ['#D1913A','#E7D9B4'] : ['#C23B2E','#4F9DB5','#E6C02F','#68A66F'])).join('') + ground(270),
  'rayon-depannage': () => `${r(0, 0, 400, 300, P.night2)}${r(20, 20, 360, 250, '#1D1B14')}${shelfRow(36, 110, 330, ['box','box','box','box','box','box','box'], ['#F4A93A','#C9821C','#E7D9B4'])}${shelfRow(36, 180, 330, ['box','can','box','can','box','can','box'], ['#6F8CB0','#F4A93A'])}<g stroke="${P.amberL}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M60 235c30 0 30 -20 60 -20s30 20 60 20"/></g>${r(200, 222, 18, 28, P.amberL)}${r(230, 222, 18, 28, P.white)}${r(260, 222, 18, 28, '#C9821C')}${ground(270)}`,
  'comptoir-colis': () => `${r(0, 0, 400, 300, '#151B26')}${r(0, 0, 400, 300, P.amber, 'opacity=".05"')}${r(30, 170, 340, 90, '#2A2118')}${r(30, 162, 340, 10, '#4A3A28')}${box(60, 120, 56, 42)}${box(124, 130, 40, 32, 1)}<rect x="230" y="108" width="80" height="54" rx="6" fill="#0e1218" stroke="${P.metal}" stroke-width="3"/><rect x="240" y="118" width="60" height="26" fill="${P.green}" opacity=".7"/><rect x="326" y="132" width="26" height="30" rx="3" fill="${P.metalD}"/><rect x="332" y="124" width="14" height="10" fill="${P.amberL}"/>${ground(262)}`,
  'pile-colis': () => `${r(0, 0, 400, 300, '#151B26')}${box(70, 190, 100, 70)}${box(180, 200, 80, 60, 1)}${box(270, 180, 70, 80)}${box(95, 130, 70, 60, 1)}${box(200, 150, 80, 50)}${box(110, 82, 50, 48)}${ground(260)}`,
  'pluie': () => frontNight(true) + lamp(60, 262, true, 1.1) + `<g stroke="#9FB4CC" stroke-width="1.2" opacity=".5">${Array.from({ length: 46 }, (_, i) => `<path d="M${(i * 41) % 400} ${(i * 37) % 260}l-6 16"/>`).join('')}</g>` + `<ellipse cx="200" cy="278" rx="170" ry="8" fill="${P.amber}" opacity=".18"/>`,
  'concert': () => `${r(0, 0, 400, 300, '#0E131C')}${r(10, 30, 190, 230, '#222A38')}${r(30, 46, 150, 44, P.amber, 'opacity=".75"')}${r(30, 100, 150, 70, '#1A212D')}` + [210,236,260,284,308,332,356,382,226,274,322,370].map((x, i) => person(x, 262 + (i % 2) * 14, 1.1 + (i % 3) * 0.15, '#04060A')).join('') + lamp(204, 262, true, 1) + ground(262),
  'marche': () => `${r(0, 0, 400, 300, P.day)}${r(0, 40, 400, 60, '#B4A890')}` + [0,1,2,3].map((i) => awning(20 + i * 94, 130, 80, 24) + r(24 + i * 94, 156, 72, 70, '#8E6B43') + `<circle cx="${42 + i * 94}" cy="168" r="9" fill="${['#C23B2E', '#68A66F', '#E6C02F', '#C26D5F'][i]}"/><circle cx="${66 + i * 94}" cy="170" r="9" fill="${['#68A66F', '#E6C02F', '#C26D5F', '#C23B2E'][i]}"/>`).join('') + ground(236, '#8E98A4'),
  'canal': () => `${r(0, 0, 400, 300, '#C9C2A8')}${r(0, 0, 400, 120, P.day2)}${r(0, 90, 400, 70, '#7C7260')}${[0,1,2,3,4,5,6,7].map((i) => r(i * 52, 90, 48, 24, '#8A806C') + r(i * 52 + 24, 114, 48, 24, '#8A806C')).join('')}${r(0, 190, 400, 60, '#4F7F96')}<path d="M0 205q50-10 100 0t100 0 100 0 100 0" stroke="#9FC6D6" stroke-width="3" fill="none" opacity=".7"/>${[60,160,260,350].map((x) => r(x, 150, 6, 50, '#5B4A33') + `<circle cx="${x + 3}" cy="140" r="22" fill="#5C8B58"/>`).join('')}${r(0, 250, 400, 50, '#A59B80')}`,
  'plaque': () => `${r(0, 0, 400, 300, P.stoneN)}${windowsGrid(20, 20, 5, 1, 50, 60, 20, 10, () => false, P.stoneN2)}<rect x="40" y="110" width="320" height="110" rx="10" fill="#E7E2D3" stroke="#1A3A66" stroke-width="6"/><rect x="52" y="122" width="296" height="86" rx="5" fill="none" stroke="#1A3A66" stroke-width="2"/><text x="200" y="162" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="600" font-size="34" fill="#1A3A66">Boulevard de la Liberté</text><text x="200" y="196" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="600" font-size="24" fill="#1A3A66" opacity=".85">Boulouard ar Frankiz</text>${ground(260)}`,
  'hermine': () => `${r(0, 0, 400, 300, P.white)}${[0,1,2,3,4,5,6,7].map((i) => r(i * 50, 0, 25, 300, P.black, 'opacity=".06"')).join('')}<g fill="${P.black}">${ermineSpots()}</g>`,
  'linge': () => `${r(0, 0, 400, 300, '#151B26')}${r(30, 190, 340, 70, '#2A2118')}${r(30, 182, 340, 10, '#4A3A28')}<path d="M130 190l-10-100q0-14 14-14h132q14 0 14 14l-10 100z" fill="#E7E2D3"/><path d="M150 76q50-40 100 0" stroke="#E7E2D3" stroke-width="10" fill="none" stroke-linecap="round"/><rect x="170" y="116" width="60" height="42" rx="6" fill="#4A5D78"/><path d="M180 130h40M180 142h28" stroke="#E7E2D3" stroke-width="4" stroke-linecap="round"/>${ground(262)}`,
}

function ermineSpots(): string {
  const pts: [number, number][] = [[70, 70], [200, 60], [320, 90], [130, 160], [260, 170], [60, 240], [190, 250], [330, 240]]
  return pts.map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M0 -26c4 8 5 14 4 20 6-5 12-7 20-6-2 7-7 12-13 15 7 1 12 4 17 8-7 4-14 4-21 2 3 6 3 12 0 19-6-4-9-9-11-15-2 6-5 11-11 15-3-7-3-13 0-19-7 2-14 2-21-2 5-4 10-7 17-8-6-3-11-8-13-15 8-1 14 1 20 6-1-6 0-12 4-20z" transform="scale(.8)"/></g>`).join('')
}

export function scene(id: string): string {
  const fn = SCENES[id] ?? SCENES['facade-nuit']
  return svg('0 0 400 300', fn(), 'scene-art')
}

export const sceneIds = Object.keys(SCENES)

/** Open Graph artwork (1200 x 630): the lit window at night. */
export function ogArtwork(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${P.night}"/>
    <g transform="translate(640 40) scale(1.0)">
      <rect x="0" y="0" width="520" height="560" fill="${P.stoneN}"/>
      ${awning(20, 300, 380, 30)}
      <rect x="40" y="330" width="340" height="230" fill="#17110A"/><rect x="40" y="330" width="340" height="230" fill="${P.amber}" opacity=".55"/>
      <rect x="150" y="356" width="120" height="40" rx="5" fill="#0d0d10" stroke="${P.amber}" stroke-width="3"/>
      <text x="210" y="387" text-anchor="middle" font-family="Impact, Arial Narrow, sans-serif" font-size="30" letter-spacing="3" fill="${P.amberL}">OUVERT</text>
    </g>
    <text x="70" y="270" font-family="Impact, Arial Narrow, sans-serif" font-size="96" fill="#ECECE7">Épicerie de Liberté</text>
    <text x="70" y="340" font-family="Arial, sans-serif" font-size="34" fill="#9AA4B1">Ouvert 7j/7 jusqu’à 1h · Relais colis</text>
    <text x="70" y="400" font-family="Arial, sans-serif" font-size="28" fill="${P.amber}">46 boulevard de la Liberté, Rennes</text>
  </svg>`
}

export function faviconSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0E1117"/><rect x="10" y="14" width="44" height="12" fill="#F2F2EE"/><g fill="#15171B"><rect x="14" y="14" width="4" height="12"/><rect x="22" y="14" width="4" height="12"/><rect x="30" y="14" width="4" height="12"/><rect x="38" y="14" width="4" height="12"/><rect x="46" y="14" width="4" height="12"/></g><rect x="12" y="28" width="40" height="26" rx="2" fill="#F4A93A"/><rect x="29" y="28" width="2" height="26" fill="#0E1117" opacity=".45"/></svg>`
}
