import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'

const videos = [
  {
    title: 'REGAETON OLD SCHOOL MIX FT. NACH',
    venue: 'Studio Sessions',
    watchUrl: 'https://youtu.be/4-fmTbZVESQ',
    videoId: '4-fmTbZVESQ',
  },
  {
    title: 'MIX REGGAETON PARTY',
    venue: 'Studio Sessions',
    watchUrl: 'https://youtu.be/DJlse23_iGg',
    videoId: 'DJlse23_iGg',
  },
  {
    title: 'REGGAETON OLD SCHOOL',
    venue: 'Studio Sessions',
    watchUrl: 'https://youtu.be/voBcSFLvZJw',
    videoId: 'voBcSFLvZJw',
  },
  {
    title: 'RECAP 2024',
    venue: 'Linares, Chile',
    src: 'https://www.youtube-nocookie.com/embed/IYomUJz_9Fc?rel=0&modestbranding=1',
  },
]

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

function VideoModal({ video, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Close"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="w-full max-w-3xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <img
            src={ytThumb(video.videoId)}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <h3 className="text-white font-black text-lg md:text-2xl uppercase tracking-tight text-center px-4">
              {video.title}
            </h3>
            <p className="text-white/50 text-sm">{video.venue}</p>
            <a
              href={video.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold rounded-full transition-colors text-sm uppercase tracking-wide"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {t('videos.watchOnYoutube')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Videos() {
  const { t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(null)
  const [headerRef, headerVisible] = useInView()
  const [gridRef, gridVisible] = useInView()
  const closeModal = useCallback(() => setActiveVideo(null), [])

  return (
    <section id="videos" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            {t('videos.setsVisuals')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
            {t('videos.title')}
          </h2>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 gap-6 fade-up ${gridVisible ? 'visible' : ''}`}>
          {videos.map(({ title, venue, src, watchUrl, videoId }) => (
            <div key={title} className="bg-surface-2 rounded-xl overflow-hidden border border-border">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {watchUrl ? (
                  <button
                    onClick={() => setActiveVideo({ title, venue, watchUrl, videoId })}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-3 group w-full"
                  >
                    <img
                      src={ytThumb(videoId)}
                      alt=""
                      width="640"
                      height="360"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <span className="relative z-10 flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full text-sm border border-white/20 transition-colors">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </span>
                      {t('videos.watchOnYoutube')}
                    </span>
                  </button>
                ) : (
                  <iframe
                    title={title}
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-foreground font-bold">{title}</h3>
                <p className="text-muted-3 text-sm mt-1">{venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={closeModal} />}
    </section>
  )
}
