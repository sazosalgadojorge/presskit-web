import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const BASE = import.meta.env.BASE_URL || ''

const logos = [
  { name: 'Logo negativo (fondo oscuro)', file: 'negative.svg', bg: 'bg-foreground' },
  { name: 'Logo blanco', file: 'blanco.svg', bg: 'bg-foreground' },
  { name: 'Logo negro', file: 'negro.svg', bg: 'bg-surface' },
  { name: 'Logo color', file: 'color.svg', bg: 'bg-surface' },
]

const photos = [
  { id: 1, alt: 'DOBLE S — PRESS 1', file: 'IMG_8989.png' },
  { id: 2, alt: 'DOBLE S — PRESS 2', file: 'DSC00598.jpg' },
  { id: 3, alt: 'DOBLE S — PRESS 3', file: 'DSC00526.jpg' },
  { id: 4, alt: 'DOBLE S — PRESS 4', file: 'DSC00600.jpg' },
  { id: 5, alt: 'DOBLE S — PRESS 5', file: 'DSC00614.jpg' },
  { id: 6, alt: 'DOBLE S — PRESS 6', file: 'DSC5456.jpg' },
]

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

export default function Press() {
  const { t } = useLanguage()
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img src="/negative.svg" alt="Doble S" width="120" height="36" className="h-8 sm:h-9 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-muted-2 hover:text-primary-light text-sm font-light tracking-wide transition-colors"
          >
            {t('pressPage.backToHome')}
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            {t('pressPage.title')}
          </h1>
          <p className="text-muted-2 text-lg max-w-2xl mx-auto">
            {t('pressPage.subtitle')}
          </p>
        </div>

        {/* Logos */}
        <section className="mb-20">
          <h2 className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-2">
            {t('pressPage.logos')}
          </h2>
          <p className="text-muted-2 text-sm mb-8">
            {t('pressPage.logosDesc')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {logos.map(({ name, file, bg }) => (
              <div
                key={file}
                className={`rounded-xl border border-border overflow-hidden ${bg} p-6 flex flex-col items-center justify-center min-h-[140px]`}
              >
                <img
                  src={`${BASE}${file}`}
                  alt={name}
                  className="max-h-16 w-auto object-contain mb-3"
                />
                <a
                  href={`${BASE}${file}`}
                  download
                  className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary-light transition-colors uppercase tracking-wide"
                >
                  <DownloadIcon />
                  {t('pressPage.download')}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Visuals: mismo set de fotos como “visuales” o podemos duplicar; aquí uso las fotos como visuales también */}
        <section className="mb-20">
          <h2 className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-2">
            {t('pressPage.photos')}
          </h2>
          <p className="text-muted-2 text-sm mb-8">
            {t('pressPage.photosDesc')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map(({ id, alt, file }) => (
              <div key={id} className="rounded-xl border border-border overflow-hidden bg-surface-2 group">
                <div className="aspect-square relative">
                  <img
                    src={`${BASE}press/${file}`}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={`${BASE}press/${file}`}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-light text-foreground text-xs font-bold rounded-full transition-colors uppercase tracking-wide"
                    >
                      <DownloadIcon />
                      {t('pressPage.download')}
                    </a>
                  </div>
                </div>
                <p className="p-3 text-muted-3 text-xs truncate">{alt}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-2 py-8 px-6 text-center">
        <Link to="/" className="inline-block mb-4">
          <img src="/blanco.svg" alt="Doble S" width="80" height="20" className="h-5 w-auto opacity-40 hover:opacity-60 transition-opacity" />
        </Link>
        <p className="text-muted-4 text-xs">
          © {new Date().getFullYear()} DOBLE S ·{' '}
          <a href="mailto:booking@doblesmusic.com" className="text-primary hover:text-primary-light transition-colors">
            booking@doblesmusic.com
          </a>
        </p>
      </footer>
    </div>
  )
}
