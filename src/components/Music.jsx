import { useLanguage } from '../context/LanguageContext.jsx'
import { useInView } from '../hooks/useInView.js'

// SoundCloud embed: usar URL del player (w.soundcloud.com/player/?url=...) no la URL de la página
const TRACK_URL = 'https://soundcloud.com/doblesmusic/doblesplace'
const embedParams = 'auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
const soundcloudEmbed = (path) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(path)}&${embedParams}`

const tracks = [
  {
    title: 'Polvos Que No Se Olvidan (Remix)',
    label: 'Remix',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/polvosquenoseolvidanremix'),
  },
  {
    title: 'Trueno - Real Gangsta Love (Dobles Remix)',
    label: 'Remix',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/trueno-real-gangsta-love-dobles-remix'),
  },
  {
    title: 'Doble-S - Aca Place',
    label: 'Original',
    url: 'https://soundcloud.com/doblesmusic/doblesplace',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/doblesplace'),
  },
]

export default function Music() {
  const { t } = useLanguage()
  const [headerRef, headerVisible] = useInView()
  const [tracksRef, tracksVisible] = useInView()

  return (
    <section id="music" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className={`fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
            {t('music.listen')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
            {t('music.title')}
          </h2>
        </div>

        <div ref={tracksRef} className={`space-y-8 fade-up ${tracksVisible ? 'visible' : ''}`}>
          {tracks.map(({ title, label, src }) => (
            <div key={title} className="bg-surface-2 rounded-xl p-6 border border-border">
              <div className="mb-3">
                <h3 className="text-foreground font-bold text-lg">{title}</h3>
                <p className="text-muted-3 text-sm">{label}</p>
              </div>
              <iframe
                title={title}
                width="100%"
                height="120"
                allow="autoplay"
                src={src}
                className="rounded-lg"
                style={{ border: 'none' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
