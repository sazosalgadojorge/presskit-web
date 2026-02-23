import { useState } from 'react'

const SHORT_BIO = `Doble S, DJ y productor chileno, comenzó su carrera en 2012 y rápidamente se ha consolidado como uno de los artistas más prometedores de la escena musical chilena.`

const LONG_BIO = `${SHORT_BIO}

Reconocido por la energía de sus sets y por una constante innovación en el escenario, su trabajo va más allá del DJing convencional, posicionándolo además como un productor creativo capaz de conectar profundamente con las emociones del público a través de su música. Este enfoque artístico le ha permitido desarrollar pistas originales que enriquecen y reflejan la diversidad de la música chilena, demostrando su versatilidad como creador.

Gracias a su capacidad para combinar hits y propuestas innovadoras, ha destacado tanto en la región del Maule como a nivel nacional. Con más de una década de trayectoria y un compromiso permanente con la evolución de su arte, Doble S sigue marcando diferencia en la música actual, consolidándose como referente para nuevas generaciones de artistas y como un imperdible de la escena musical chilena.`
export default function Bio() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="bio" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="order-2 md:order-1">
          <div className="aspect-square rounded-2xl bg-surface-3 flex items-center justify-center border border-border-subtle overflow-hidden">
            <img src={`${import.meta.env.BASE_URL || ''}press/DSC00598.jpg`} alt="Doble S" className="w-full translate-y-25" />
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
              { value: '20+', label: 'Ciudades' },
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
