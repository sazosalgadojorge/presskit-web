import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Bio() {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()
  const shortBio = t('bio.shortBio')
  const longBio = t('bio.longBio')

  return (
    <section id="bio" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="order-2 md:order-1">
          <div className="aspect-square rounded-2xl bg-surface-3 flex items-center justify-center border border-border-subtle overflow-hidden">
            <img src={`${import.meta.env.BASE_URL || ''}press/DSC00598.jpg`} alt="Doble S" width="600" height="600" loading="lazy" decoding="async" className="w-full translate-y-25" />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            {t('bio.aboutArtist')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            {t('bio.biography')}
          </h2>

          <div className="text-muted leading-relaxed space-y-4">
            {expanded ? (
              <p className="whitespace-pre-line">{longBio}</p>
            ) : (
              <p>{shortBio}</p>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-primary-light hover:text-primary text-sm font-semibold tracking-wide uppercase flex items-center gap-2 transition-colors"
          >
            {expanded ? t('bio.readLess') : t('bio.readMore')}
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
              { value: '10+', label: t('bio.yearsActive') },
              { value: '200+', label: t('bio.performances') },
              { value: '20+', label: t('bio.cities') },
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
