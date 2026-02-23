import { jsPDF } from 'jspdf'

const equipment = [
  { category: 'Sistema de sonido', items: ['PA mínimo: 10kW RMS', 'Subwoofers: mínimo 4 unidades', 'Sistema de monitoreo en escenario: 2 monitores activos'] },
  { category: 'Mixer', items: ['Pioneer DJM-2000NXS2 (preferido)', 'DJM-900NXS2 (alternativo)', 'Sin mezcladores analógicos'] },
  { category: 'Reproductores', items: ['2× Pioneer CDJ-3000', '1× Pioneer CDJ-2000NXS2 como mínimo aceptable', 'USB master audio'] },
  { category: 'Conectividad', items: ['RCA y XLR desde los CDJs al mixer', 'Link de red entre reproductores', 'Tierra limpia, sin ruidos de tierra'] },
  { category: 'Controladores', items: ['Pioneer DDJ-REV 5, Pioneer DDJ-1000 SRT, Pioneer DDJ-SX 3'] },
  { category: 'Iluminación', items: ['Control desde la cabina o coordinado con el artista', 'Sin strobes extremos sin aviso previo'] },
  { category: 'Cabina', items: ['Acceso exclusivo durante el set', 'Iluminación tenue de trabajo', 'Monitor de referencia cerca de la cabina'] },
]

const hospitality = [
  '2 botellas de agua mineral en cabina',
  'Bebidas sin alcohol disponibles',
  'Catering o acceso a buffet para artista + 2 acompañantes',
  'Habitación de hotel (mínimo 4 estrellas) para fechas fuera de la ciudad',
  'Transporte desde/hasta aeropuerto o alojamiento',
]

const MARGIN = 20
const LINE_HEIGHT = 6
const PAGE_HEIGHT = 297 // A4
const FOOTER_Y = PAGE_HEIGHT - 15

function buildRiderPdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  const checkPage = (needed = LINE_HEIGHT * 2) => {
    if (y + needed > FOOTER_Y) {
      doc.addPage()
      y = MARGIN
    }
  }

  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('DOBLE S', MARGIN, y)
  y += 8
  doc.setFontSize(16)
  doc.text('Technical Rider', MARGIN, y)
  y += 10
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 100, 100)
  doc.text('Documentación técnica — doblesmusic.com', MARGIN, y)
  doc.setTextColor(0, 0, 0)
  y += 14

  equipment.forEach(({ category, items }) => {
    checkPage(LINE_HEIGHT * (items.length + 4))
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text(category.toUpperCase(), MARGIN, y)
    y += LINE_HEIGHT + 2
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    items.forEach((item) => {
      doc.text('• ' + item, MARGIN + 3, y)
      y += LINE_HEIGHT
    })
    y += 4
  })

  checkPage(LINE_HEIGHT * (hospitality.length + 4))
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('HOSPITALIDAD', MARGIN, y)
  y += LINE_HEIGHT + 2
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  hospitality.forEach((item) => {
    doc.text('• ' + item, MARGIN + 3, y)
    y += LINE_HEIGHT
  })

  doc.setFontSize(8)
  doc.setTextColor(120, 120, 120)
  doc.text('doblesmusic.com · Booking: WhatsApp +56 9 8614 5761', MARGIN, FOOTER_Y)
  doc.save('technical-rider-dobles.pdf')
}

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
          <button
            type="button"
            onClick={buildRiderPdf}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-foreground font-bold rounded-full transition-colors tracking-wide uppercase text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar PDF del Rider
          </button>
          <p className="mt-4 text-muted-4 text-xs">
            Genera y descarga el rider técnico en PDF con todos los requerimientos del show.
          </p>
        </div>
      </div>
    </section>
  )
}
