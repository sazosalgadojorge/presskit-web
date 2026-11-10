import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'
import { tracks } from '../data/tracks.js'

export default function LatestRelease() {
  const { t } = useLanguage()
  const [ref, visible] = useInView()
  const latest = tracks[0]

  return (
    <section className="bg-background border-t border-white/10 py-20 sm:py-28 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto fade-up ${visible ? 'visible' : ''}`}>
        <h2
          className="text-foreground text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] text-center md:text-left mb-12"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {t('highlights.latestRelease')}
        </h2>

        <div className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-center">
          {latest.artwork && (
            <div className="mx-auto md:mx-0 w-full max-w-xs md:max-w-none aspect-square overflow-hidden rounded-2xl border border-white/10">
              <img
                src={latest.artwork}
                alt={latest.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="text-center md:text-left">
            <p className={`text-primary text-xl md:text-2xl font-semibold ${latest.credit ? 'mb-1' : 'mb-8'}`}>
              {latest.name || latest.title}
            </p>
            {latest.credit && (
              <p className="text-muted-2 text-sm md:text-base tracking-wide mb-8">
                {latest.credit}
              </p>
            )}
            <iframe
              title={latest.title}
              width="100%"
              height="120"
              allow="autoplay"
              src={latest.src}
              className="rounded-lg mb-8"
              style={{ border: 'none' }}
            />
            <a
              href="https://soundcloud.com/doblesmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60 hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1"
            >
              {t('highlights.viewAllMusic')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
