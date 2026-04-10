import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'
import chileMapUrl from '../assets/chile.svg'

// ─── Datos ───────────────────────────────────────────────────────────────────

const clubs = [
  { name: 'Club Bárbaro', city: 'Linares', residency: true },
  { name: 'Dolce Vita', city: 'Linares' },
  { name: 'Tacubas', city: 'Linares' },
  { name: 'Florenza Club', city: 'Linares' },
  { name: 'Club Madero', city: 'Linares' },
  { name: 'Viva Club', city: 'Linares' },
  { name: 'Hotel Parada', city: 'Linares' },
  { name: 'Vaivén', city: 'Linares' },
  { name: 'Orange Club', city: 'Linares' },
  { name: 'Micro Club', city: 'Talca' },
  { name: 'Molino Bar', city: 'Talca' },
  { name: 'Magdalena Club', city: 'Talca' },
  { name: 'Jokers', city: 'Talca' },
  { name: 'Club Bee', city: 'Talca' },
  { name: 'Festa Garden', city: 'Talca' },
  { name: 'Maldita Sea', city: 'Concepción' },
  { name: 'Club RSD', city: 'Concepción' },
  { name: 'Maderos Club', city: 'Constitución' },
  { name: 'Beach Bar', city: 'Constitución' },
  { name: 'Dubai', city: 'Chillán' },
  { name: 'Lab Music', city: 'Chillán' },
  { name: 'Club Montepiedra', city: 'Parral' },
  { name: 'La Junta Club', city: 'San Javier' },
  { name: 'Club Ko', city: 'Los Ángeles' },
  { name: 'Berlín Club', city: 'Valdivia' },
  { name: 'Club X', city: 'Colbún' },
  { name: 'La Loca Club', city: 'Vichuquén' },
  { name: 'Campary Club', city: 'Vila Alegre' },
  { name: 'Espacio Piedra', city: 'Peluhue' },
  { name: 'Club Capital', city: 'Santiago' },
]

const festivals = [
  { name: 'Lollapalooza Chile 2026', city: 'Santiago', featured: true, detail: 'Banco de Chile Stage' },
  { name: 'Asto en Chile', city: 'Santiago' },
  { name: 'Zundada Festival', city: 'Linares' },
  { name: 'Snake Festival', city: 'Linares' },
  { name: 'Pobre Diabla', city: 'Linares' },
  { name: 'Viaje Espacial', city: 'Linares' },
  { name: 'Cuecazo', city: 'Linares' },
  { name: 'Purgatorio', city: 'Linares' },
  { name: 'Friends Año Nuevo', city: 'Linares' },
  { name: 'La Jungla / Los Levantamos', city: 'Linares' },
  { name: 'Social Room Festival', city: 'Linares' },
  { name: 'Fiesta Click', city: 'Talca' },
  { name: 'Julieta Festival', city: 'Talca' },
  { name: 'Elévate', city: 'Parral' },
  { name: 'Fiesta Moment', city: 'Parral' },
  { name: 'El Nuevo Sol', city: 'Arauco' },
]

// ─── Mapa ─────────────────────────────────────────────────────────────────────
// Usa chile.svg directamente como <image> en el SVG, recortado con viewBox.
// ViewBox "60 620 200 660" → Chile central (lat ≈ −29 a −42).
// Ciudades: x = 30*lon + 2305,  y = 51.56*|lat| − 912.34

// Ciudades: coordenadas en el sistema del SVG original
const MAP_CITIES = [
  { x: 184.9, y: 812.3,  name: 'Santiago',     count: 3,  featured: true },
  { x: 145.3, y: 885.6,  name: 'Vichuquén',    count: 1  },
  { x: 132.4, y: 909.3,  name: 'Constitución', count: 2  },
  { x: 154.9, y: 914.4,  name: 'Talca',        count: 8  },
  { x: 153.1, y: 923.2,  name: 'San Javier',   count: 1  },
  { x: 155.5, y: 917.0,  name: 'Vila Alegre',  count: 1  },
  { x: 162.1, y: 928.4,  name: 'Colbún',       count: 1  },
  { x: 157.0, y: 936.1,  name: 'Linares',      count: 18 },
  { x: 130.0, y: 934.5,  name: 'Peluhue',      count: 1  },
  { x: 150.1, y: 951.0,  name: 'Parral',       count: 3  },
  { x: 142.0, y: 975.3,  name: 'Chillán',      count: 2  },
  { x: 113.5, y: 986.1,  name: 'Concepción',   count: 2  },
  { x: 105.4, y: 1007.8, name: 'Arauco',       count: 1  },
  { x: 134.5, y: 1019.6, name: 'Los Ángeles',  count: 1  },
  { x: 107.8, y: 1140.3, name: 'Valdivia',     count: 1  },
]

function dotR(count) {
  if (count >= 15) return 14
  if (count >= 6)  return 10
  if (count >= 3)  return 8
  return 6
}

// Labels permanentes para ciudades principales

function ChileMap() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-muted-4 text-[10px] uppercase tracking-widest">Chile</p>
      <svg
        viewBox="60 620 200 660"
        className="w-full max-w-[170px] h-auto"
        aria-hidden="true"
      >
        <defs>
          {/* Mapea grises del SVG → #18181b (surface-2 de la web) */}
          <filter id="chile-tint" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              0.114  0      0      0  0
              0      0.114  0      0  0
              0      0      0.128  0  0
              0      0      0      1  0
            "/>
          </filter>
        </defs>

        {/* Mapa de Chile — SVG original recortado por el viewBox */}
        <image
          href={chileMapUrl}
          x="0" y="0"
          width="400" height="2000"
          preserveAspectRatio="none"
          filter="url(#chile-tint)"
        />

        {/* Ciudades */}
        {MAP_CITIES.map(({ x, y, name, count, featured }) => {
          const r = dotR(count)
          const isHovered = hovered === name
          const showLabel = isHovered

          return (
            <g
              key={name}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'default' }}
            >
              {/* Anillo de pulso */}
              <circle
                cx={x} cy={y}
                r={r + (featured ? 18 : 12)}
                fill="var(--color-primary)"
                className="map-pulse"
                style={{ animationDelay: `${(x * y) % 2.5}s` }}
              />
              {/* Dot principal */}
              <circle
                cx={x} cy={y}
                r={isHovered ? r + 3 : r}
                fill="var(--color-primary)"
                opacity={isHovered ? 1 : featured ? 0.95 : 0.75}
                style={{ transition: 'r 0.2s, opacity 0.2s' }}
              />
              {/* Borde blanco tenue en ciudades destacadas */}
              {(featured || count >= 6) && (
                <circle
                  cx={x} cy={y}
                  r={isHovered ? r + 3 : r}
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                />
              )}
              {/* Label */}
              {showLabel && (
                <text
                  x={x + r + 4}
                  y={y + 2}
                  fontSize="14"
                  fill="rgba(255,255,255,0.85)"
                  dominantBaseline="middle"
                  fontFamily="system-ui, sans-serif"
                  fontWeight={featured || count >= 8 ? 'bold' : 'normal'}
                >
                  {name}
                  {isHovered && count > 1 ? ` · ${count}` : ''}
                </text>
              )}
            </g>
          )
        })}
      </svg>

    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

function CityBadge({ city }) {
  return (
    <span className="text-xs text-primary-light/70 font-light tracking-wider uppercase">
      {city}
    </span>
  )
}

export default function Shows() {
  const { t } = useLanguage()
  const [tab, setTab] = useState('festivals')
  const [headerRef, headerVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  const featured = festivals.find((f) => f.featured)
  const rest = festivals.filter((f) => !f.featured)

  return (
    <section id="shows" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className={`fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            {t('shows.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-10 uppercase tracking-tight">
            {t('shows.title')}
          </h2>
        </div>

        {/* Layout: lista + mapa */}
        <div ref={contentRef} className={`fade-up ${contentVisible ? 'visible' : ''} lg:grid lg:grid-cols-[1fr_190px] lg:gap-12 lg:items-start`}>

          {/* Lista */}
          <div>
            {/* Tabs */}
            <div className="flex gap-1 mb-8 border-b border-border">
              {['festivals', 'clubs'].map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                    tab === key
                      ? 'text-primary-light border-primary-light'
                      : 'text-muted-3 border-transparent hover:text-muted'
                  }`}
                >
                  {t(`shows.${key}`)}
                </button>
              ))}
            </div>

            {/* Card destacada — solo en tab festivales */}
            {tab === 'festivals' && featured && (
              <div className="mb-6 rounded-xl border border-primary-light/30 bg-primary/5 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-1.5 block">
                    {t('shows.featured')}
                  </span>
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight">
                    {featured.name}
                  </h3>
                  <p className="text-muted-3 text-sm mt-0.5">{featured.detail}</p>
                </div>
                <CityBadge city={featured.city} />
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {(tab === 'clubs' ? clubs : rest).map(({ name, city, residency }) => (
                <div
                  key={name + city}
                  className="bg-surface-2 border border-border rounded-lg px-3.5 py-3 flex flex-col gap-1 hover:border-border-subtle transition-colors"
                >
                  <div className="flex items-start justify-between gap-1.5">
                    <span className="text-foreground text-sm font-medium leading-snug">{name}</span>
                    {residency && (
                      <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider text-primary-light/60 border border-primary-light/20 rounded px-1.5 py-0.5">
                        {t('shows.residency')}
                      </span>
                    )}
                  </div>
                  <CityBadge city={city} />
                </div>
              ))}
            </div>
          </div>

          {/* Mapa — sticky en desktop */}
          <div className="hidden lg:block sticky top-28 pt-14">
            <ChileMap />
          </div>
        </div>

        {/* Mapa mobile — debajo del listado */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="w-40">
            <ChileMap />
          </div>
        </div>

      </div>
    </section>
  )
}
