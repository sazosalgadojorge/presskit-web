import { jsPDF } from 'jspdf'
import { translations } from '../translations'
import { useLanguage } from '../context/LanguageContext.jsx'

const MARGIN = 20
const LINE_HEIGHT = 6
const PAGE_HEIGHT = 297 // A4
const FOOTER_Y = PAGE_HEIGHT - 15

function buildRiderPdf(locale) {
  const rider = translations[locale]?.rider ?? translations.es.rider
  const equipment = rider.equipment ?? []
  const hospitalityList = rider.hospitalityList ?? []
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
  doc.text(rider.technicalRider ?? 'Technical Rider', MARGIN, y)
  y += 10
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 100, 100)
  doc.text(rider.docLine ?? 'doblesmusic.com', MARGIN, y)
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

  checkPage(LINE_HEIGHT * (hospitalityList.length + 4))
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text((rider.hospitality ?? 'HOSPITALITY').toUpperCase(), MARGIN, y)
  y += LINE_HEIGHT + 2
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  hospitalityList.forEach((item) => {
    doc.text('• ' + item, MARGIN + 3, y)
    y += LINE_HEIGHT
  })

  doc.setFontSize(8)
  doc.setTextColor(120, 120, 120)
  doc.text('doblesmusic.com · Booking: WhatsApp +56 9 8614 5761', MARGIN, FOOTER_Y)
  doc.save('technical-rider-dobles.pdf')
}

export default function TechnicalRider() {
  const { locale, t, getSection } = useLanguage()
  const rider = getSection('rider')
  const equipment = rider.equipment ?? []
  const hospitalityList = rider.hospitalityList ?? []

  return (
    <section id="rider" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          {t('rider.techDoc')}
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
          {t('rider.technicalRider')}
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
            <h3 className="text-primary-light font-bold text-sm uppercase tracking-widest">{t('rider.hospitality')}</h3>
          </div>
          <ul className="divide-y divide-border">
            {hospitalityList.map((item) => (
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
            onClick={() => buildRiderPdf(locale)}
            data-cta="download-rider-pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-foreground font-bold rounded-full transition-colors tracking-wide uppercase text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('rider.downloadPdf')}
          </button>
          <p className="mt-4 text-muted-4 text-xs">
            {t('rider.pdfDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}
