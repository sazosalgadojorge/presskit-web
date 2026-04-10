import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'

const photos = [
  { id: 1, alt: 'DOBLE S — PRESS 1', file: 'DSC5458.jpg' },
  { id: 3, alt: 'DOBLE S — PRESS 3', file: 'IMG_8989.png' },
  { id: 2, alt: 'DOBLE S — PRESS 2', file: 'DSC00598.jpg' },
  { id: 4, alt: 'DOBLE S — PRESS 4', file: 'DSC00526.jpg' },
  { id: 5, alt: 'DOBLE S — PRESS 5', file: 'DSC00600.jpg' },
  { id: 6, alt: 'DOBLE S — PRESS 6', file: 'DSC00614.jpg' },
  { id: 7, alt: 'DOBLE S — PRESS 7', file: 'DSC5456.jpg' },
]

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  const { t } = useLanguage()
  const photo = photos[index]
  const base = import.meta.env.BASE_URL || ''

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Close"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-3 md:left-6 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Previous"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="max-w-4xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${base}press/${photo.file}`}
          alt={photo.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-sm">{photo.alt}</span>
          <a
            href={`${base}press/${photo.file}`}
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-light text-foreground text-xs font-bold rounded-full transition-colors uppercase tracking-wide"
          >
            <DownloadIcon />
            {t('gallery.download')}
          </a>
        </div>
        {/* Counter */}
        <p className="text-white/30 text-xs">{index + 1} / {photos.length}</p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-3 md:right-6 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Next"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function Gallery() {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [headerRef, headerVisible] = useInView()
  const [gridRef, gridVisible] = useInView()

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), [])
  const nextPhoto = useCallback(() => setLightboxIndex((i) => (i + 1) % photos.length), [])

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            {t('gallery.press')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-3 text-sm mb-12 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('gallery.freeForPress')}
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-3 gap-4 fade-up ${gridVisible ? 'visible' : ''}`}>
          {photos.map(({ id, alt, file }, i) => (
            <button
              key={id}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={`${import.meta.env.BASE_URL || ''}press/${file}`}
                alt={alt}
                width="400"
                height="400"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
