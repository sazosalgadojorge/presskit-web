import { useLanguage } from '../context/LanguageContext.jsx'

const videos = [
  {
    title: 'REGAETON OLD SCHOOL MIX FT. NACH',
    venue: 'Studio Sessions',
    // Embed bloqueado por derechos; enlace directo a YouTube
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

// Miniatura de YouTube (cuando el embed está bloqueado)
const ytThumb = (id) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

export default function Videos() {
  const { t } = useLanguage()
  return (
    <section id="videos" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          {t('videos.setsVisuals')}
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
          {t('videos.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map(({ title, venue, src, watchUrl, videoId }) => (
            <div key={title} className="bg-surface-2 rounded-xl overflow-hidden border border-border">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {watchUrl ? (
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-3 group"
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
                        <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </span>
                      {t('videos.watchOnYoutube')}
                    </span>
                  </a>
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
    </section>
  )
}
