import { useState } from 'react'

const SHORT_BIO = `DJ NAME es un artista de música electrónica con más de 10 años de experiencia en la escena underground. Con residencias en los principales clubes de la ciudad y actuaciones en festivales internacionales, su sonido fusiona techno oscuro con elementos de industrial y EBM.`

const LONG_BIO = `${SHORT_BIO}

Su carrera comenzó en los after-hours clandestinos de la ciudad, donde forjó un estilo inconfundible que rápidamente lo llevó a residencias en los venues más respetados de la escena local. En 2018 publicó su primer EP en el sello Berlin Underground, recibiendo apoyo de referentes como Surgeon, Ancient Methods y Paula Temple.

Su enfoque técnico y la selección meticulosa de tracks lo han llevado a compartir booth con figuras del calibre de Phase Fatale, SPFDJ y Truncate. Sus sets se caracterizan por una construcción narrativa precisa: de atmósferas industriales densas a explosiones rítmicas de alta energía.

Actualmente trabaja en su primer LP, mientras mantiene una agenda internacional que incluye fechas en Europa, América Latina y Asia.`

export default function Bio() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="bio" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="order-2 md:order-1">
          <div className="aspect-square rounded-2xl bg-surface-3 flex items-center justify-center border border-border-subtle overflow-hidden">
            <img src="./public/press/DSC00598.jpg" alt="Doble S" className="w-full translate-y-25" />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre el artista
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Biografía
          </h2>

          <div className="text-muted leading-relaxed space-y-4">
            {expanded ? (
              <p>{LONG_BIO}</p>
            ) : (
              <p>{SHORT_BIO}</p>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-primary-light hover:text-primary text-sm font-semibold tracking-wide uppercase flex items-center gap-2 transition-colors"
          >
            {expanded ? 'Leer menos' : 'Leer más'}
            <svg
              className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { value: '10+', label: 'Años activo' },
              { value: '200+', label: 'Actuaciones' },
              { value: '30+', label: 'Países' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-primary-light">{value}</p>
                <p className="text-muted-3 text-xs uppercase tracking-wide mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
