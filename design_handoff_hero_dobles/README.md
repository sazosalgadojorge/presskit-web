# Handoff: Hero DOBLES (DJ)

## Overview
Rediseño de la sección hero (`#hero`) del sitio de DOBLES. Reemplaza el hero actual (logo centrado sobre foto oscura con glow cian). Nuevo layout: foto a la derecha con degradados hacia negro, logo grande abajo a la izquierda, barra de acciones debajo.

## About the Design Files
`hero-reference.html` es una **referencia de diseño en HTML**, no código de producción. La tarea es **recrear este hero en el codebase existente** (el sitio corre en Vite, `localhost:5173`) usando sus patrones actuales (componentes, CSS/Tailwind, i18n, etc.). Abrir el HTML en el navegador para ver el resultado esperado.

## Fidelity
**High-fidelity.** Colores, tipografía, espaciados y estados son finales. Replicar pixel a pixel.

## Layout
Sección `min-height: 100vh`, `overflow: hidden`, fondo `#050607`, `display:flex; flex-direction:column`.

Capas (de atrás hacia adelante):
1. **Foto** — `position:absolute; top:-14%; bottom:14%; left:28%; right:0`, `object-fit: cover`, a color (sin filtros). El desplazamiento -14% sube la foto deliberadamente.
2. **Degradado horizontal** — `linear-gradient(90deg, #050607 0%, #050607 26%, rgba(5,6,7,.85) 42%, rgba(5,6,7,.2) 70%, rgba(5,6,7,.55) 100%)`.
3. **Degradado vertical** — `linear-gradient(0deg, #050607 0%, transparent 35%, transparent 80%, rgba(5,6,7,.7) 100%)`.
4. **Nav** y **contenido** con `z-index:2`. Ambas capas de degradado `pointer-events:none`.

Padding horizontal global: `clamp(20px, 5vw, 72px)`.

### Nav (header)
- `display:flex; justify-content:space-between; align-items:center; gap:24px; padding:28px <pad>; flex-wrap:wrap`.
- Izquierda: logo SVG, `height:32px`.
- Centro: links Home · Bio · Shows · Music · Videos · Gallery · Rider — Archivo 500, 14px, letter-spacing .02em, gap `clamp(16px,2.4vw,36px)`. Inactivo `rgba(255,255,255,.72)`; activo `#00C8F0`. Hover → `#00C8F0`.
- Derecha (gap 18px):
  - Selector idioma: JetBrains Mono 12px, `ES` (#fff activo) `/` (rgba .3) `EN` (rgba .5).
  - Botón "Booking": pill outline, `padding:10px 18px; border:1px solid rgba(0,200,240,.6); border-radius:999px`, Archivo 600 13px, color `#00C8F0`. Hover: fondo `#00C8F0`, texto `#050607`.

### Contenido
- `flex:1; display:flex; flex-direction:column; justify-content:flex-end; gap:28px; padding: 0 <pad> clamp(40px,7vh,88px)`.
- **Logo (h1)**: SVG, `width: clamp(260px, 46vw, 680px)`, `alt="DOBLES"`. Es el H1 de la página.
- **Barra inferior**: `border-top:1px solid rgba(255,255,255,.14); padding-top:24px; display:flex; justify-content:space-between; align-items:center; gap:24px; flex-wrap:wrap`.
  - **CTA primario "Booking"**: rectángulo sin radio, fondo `#fff`, texto `#050607`, JetBrains Mono 500 13px, uppercase, letter-spacing .14em, `padding:18px 22px 18px 24px`, gap 40px con icono flecha ↗ (16px, stroke 1.6). Hover: fondo `#00C8F0`.
  - **CTA secundario "Último set"**: link texto, JetBrains Mono 13px uppercase .14em, icono play 9×11, `padding:6px 0; border-bottom:1px solid rgba(255,255,255,.35)`. Hover: borde `#fff`, texto `#00C8F0`. Gap 32px entre CTAs.
  - **Derecha** (gap 28px): redes Instagram / TikTok / YouTube como texto (JetBrains Mono 12px uppercase .12em, `rgba(255,255,255,.72)`, gap 20px); indicador "SCROLL" (Mono 11px .2em, rgba .5) + línea vertical 1×36px `rgba(255,255,255,.15)` con relleno cian animado.

## Interactions & Behavior
- Transiciones hover: `color/background/border-color .15s`.
- Animación scroll: `@keyframes drop { from {transform:translateY(-100%)} to {transform:translateY(100%)} }`, 1.8s infinite, lineal. Respetar `prefers-reduced-motion` (desactivar).
- "Booking" (nav y CTA) → mismo destino que el botón Booking actual (WhatsApp).
- "Último set" → sección Music o el último set (definir link).
- Redes → URLs reales del artista. "SCROLL" → `#bio`.
- ES/EN → conectar al i18n existente.
- Responsive: todo usa `clamp()` y `flex-wrap`. En móvil (<768px) se recomienda colapsar los links del nav en menú hamburguesa y ampliar la foto (`left:0`) reforzando el degradado inferior para mantener legibilidad del logo.

## Design Tokens
- Fondo: `#050607`
- Texto: `#FFFFFF`; secundario `rgba(255,255,255,.72)`; terciario `rgba(255,255,255,.5)`
- Acento cian: `#00C8F0` (el logo usa `#00CFFF`)
- Bordes: `rgba(255,255,255,.14)`, `rgba(255,255,255,.35)`, `rgba(0,200,240,.6)`
- Fuentes (Google Fonts): **Archivo** 400/500/600/700 (UI), **JetBrains Mono** 400/500 (labels, CTAs)
- Radios: 0 (CTA primario), 999px (botón Booking del nav)

## Assets
- `assets/dobles-logo.svg` — logo oficial (de `negative.svg` del cliente) con fills explícitos: letras `#fff`, rayo `#00cfff` + dos degradados cian. El original venía sin bloque `<style>`, por eso se ve negro; usar esta versión.
- `assets/hero-photo.webp` — foto del DJ usada en el diseño.

## Files
- `hero-reference.html` — referencia standalone (HTML + CSS).
