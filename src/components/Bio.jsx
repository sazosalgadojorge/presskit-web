import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'

function useCounter(target, active, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ value, label, active, delay }) {
  // Parse "10+", "200+", "20+" → numeric target + suffix
  const numeric = parseInt(value)
  const suffix = value.replace(String(numeric), '')
  const count = useCounter(numeric, active)
  return (
    <div className={`text-center fade-up ${active ? 'visible' : ''}`} style={{ transitionDelay: delay }}>
      <p className="text-2xl font-black text-primary-light">
        {active ? count : 0}{suffix}
      </p>
      <p className="text-muted-3 text-xs uppercase tracking-wide mt-1">{label}</p>
    </div>
  )
}

export default function Bio() {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()
  const shortBio = t('bio.shortBio')
  const longBio = t('bio.longBio')

  const [photoRef, photoVisible] = useInView()
  const [textRef, textVisible] = useInView()
  const [statsRef, statsVisible] = useInView()

  const stats = [
    { value: '10+', label: t('bio.yearsActive') },
    { value: '200+', label: t('bio.performances') },
    { value: '20+', label: t('bio.cities') },
  ]

  return (
    <section id="bio" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div ref={photoRef} className={`order-2 md:order-1 fade-up ${photoVisible ? 'visible' : ''}`}>
          <div className="aspect-square rounded-2xl bg-surface-3 flex items-center justify-center border border-border-subtle overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL || ''}press/DSC00598.jpg`}
              alt="Doble S"
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full translate-y-25"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className={`order-1 md:order-2 fade-up ${textVisible ? 'visible' : ''}`}>
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
          <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map(({ value, label }, i) => (
              <StatItem
                key={label}
                value={value}
                label={label}
                active={statsVisible}
                delay={`${i * 120}ms`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
