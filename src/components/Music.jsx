const tracks = [
  {
    title: 'Dark Frequencies EP',
    label: 'Berlin Underground, 2023',
    // SoundCloud embed — replace the src URL with your actual track
    src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djname/dark-frequencies&color=%237c3aed&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  },
  {
    title: 'Industrial Mind Mix',
    label: 'Podcast Series #12, 2023',
    src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djname/industrial-mind-mix&color=%237c3aed&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  },
  {
    title: 'Resident Mix — Club XYZ',
    label: 'Live recording, 2022',
    src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djname/resident-mix&color=%237c3aed&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  },
]

export default function Music() {
  return (
    <section id="music" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          Escucha
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tight">
          Música
        </h2>

        <div className="space-y-8">
          {tracks.map(({ title, label, src }) => (
            <div key={title} className="bg-surface-2 rounded-xl p-6 border border-border">
              <div className="mb-3">
                <h3 className="text-foreground font-bold text-lg">{title}</h3>
                <p className="text-muted-3 text-sm">{label}</p>
              </div>
              {/* SoundCloud iframe — replace src with real embed URL */}
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

        <p className="mt-8 text-center text-muted-4 text-sm">
          * Reemplaza las URLs de los iframes con tus tracks reales de SoundCloud o Spotify
        </p>
      </div>
    </section>
  )
}
