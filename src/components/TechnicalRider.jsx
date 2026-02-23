const equipment = [
  { category: 'Sistema de sonido', items: ['PA mínimo: 10kW RMS', 'Subwoofers: mínimo 4 unidades', 'Sistema de monitoreo en escenario: 2 monitores activos'] },
  { category: 'Mixer', items: ['Pioneer DJM-900NXS2 (preferido)', 'Allen & Heath Xone:96 (alternativo)', 'Sin mezcladores analógicos de 3 canales'] },
  { category: 'Reproductores', items: ['2× Pioneer CDJ-3000', '1× Pioneer CDJ-2000NXS2 como mínimo aceptable', 'USB master audio'] },
  { category: 'Conectividad', items: ['RCA y XLR desde los CDJs al mixer', 'Link de red entre reproductores', 'Tierra limpia, sin ruidos de tierra'] },
  { category: 'Iluminación', items: ['Control desde la cabina o coordinado con el artista', 'Sin strobes extremos sin aviso previo', 'Sin luces de casa durante el set'] },
  { category: 'Cabina', items: ['Acceso exclusivo durante el set', 'Iluminación tenue de trabajo', 'Monitor de referencia cerca de la cabina'] },
]

const hospitality = [
  '2 botellas de agua mineral en cabina',
  'Bebidas sin alcohol disponibles',
  'Catering o acceso a buffet para artista + 2 acompañantes',
  'Habitación de hotel (mínimo 4 estrellas) para fechas fuera de la ciudad',
  'Transporte desde/hasta aeropuerto o alojamiento',
]

export default function TechnicalRider() {
  return (
    <section id="rider" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          Documentación técnica
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
          Technical Rider
        </h2>

        {/* Equipment table */}
        <div className="mb-12 space-y-6">
          {equipment.map(({ category, items }) => (
            <div key={category} className="bg-surface-2 rounded-xl border border-border overflow-hidden">
              <div className="bg-surface-3/60 px-6 py-3 border-b border-border-subtle">
                <h3 className="text-primary-light font-bold text-sm uppercase tracking-widest">{category}</h3>
              </div>
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={item} className="px-6 py-3 flex items-start gap-3 text-muted text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hospitality */}
        <div className="bg-surface-2 rounded-xl border border-border overflow-hidden mb-12">
          <div className="bg-surface-3/60 px-6 py-3 border-b border-border-subtle">
            <h3 className="text-primary-light font-bold text-sm uppercase tracking-widest">Hospitalidad</h3>
          </div>
          <ul className="divide-y divide-border">
            {hospitality.map((item) => (
              <li key={item} className="px-6 py-3 flex items-start gap-3 text-muted text-sm">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Download PDF button */}
        <div className="text-center">
          <a
            href="/technical-rider.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-foreground font-bold rounded-full transition-colors tracking-wide uppercase text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar PDF del Rider
          </a>
          <p className="mt-4 text-muted-4 text-xs">
            Descarga el rider técnico completo en PDF para consultar todos los detalles y requerimientos del show.
          </p>
        </div>
      </div>
    </section>
  )
}
