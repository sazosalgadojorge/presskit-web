const videos = [
  {
    title: 'Doble S — Video 1',
    venue: 'doblesmusic',
    src: 'https://www.youtube-nocookie.com/embed/0zcxFImIM7U?rel=0&modestbranding=1',
  },
  {
    title: 'Doble S — Video 2',
    venue: 'doblesmusic',
    src: 'https://www.youtube-nocookie.com/embed/DJlse23_iGg?rel=0&modestbranding=1',
  },
  {
    title: 'Doble S — Video 3',
    venue: 'doblesmusic',
    src: 'https://www.youtube-nocookie.com/embed/voBcSFLvZJw?rel=0&modestbranding=1',
  },
  {
    title: 'Doble S — Video 4',
    venue: 'doblesmusic',
    src: 'https://www.youtube-nocookie.com/embed/IYomUJz_9Fc?rel=0&modestbranding=1',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          Sets & Visuals
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
          Videos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map(({ title, venue, src }) => (
            <div key={title} className="bg-surface-2 rounded-xl overflow-hidden border border-border">
              {/* YouTube iframe — replace src with real embed URL */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  title={title}
                  src={src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
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
