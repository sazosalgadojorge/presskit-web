// Archivos en public/press/ (DSC00526, DSC00550, DSC00598, DSC00600, DSC00614)
const photos = [
  { id: 6, alt: 'DOBLE S — PRESS 1', file: 'IMG_8989.png' },
  { id: 2, alt: 'DOBLE S — PRESS 2', file: 'DSC00598.jpg' },
  { id: 1, alt: 'DOBLE S — PRESS 3', file: 'DSC00526.jpg' },
  { id: 3, alt: 'DOBLE S — PRESS 4', file: 'DSC00600.jpg' },
  { id: 4, alt: 'DOBLE S — PRESS 5', file: 'DSC00614.jpg' },
  { id: 5, alt: 'DOBLE S — PRESS 6', file: 'DSC5456.jpg' },
]

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
          Prensa
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
          Galería
        </h2>
        <p className="text-muted-3 text-sm mb-12 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Uso libre para prensa — descarga en alta resolución
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map(({ id, alt, file }) => (
            <div key={id} className="group relative aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border">
              <img
                src={`${import.meta.env.BASE_URL || ''}press/${file}`}
                alt={alt}
                width="400"
                height="400"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Hover overlay with download button */}
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                <p className="text-foreground text-xs text-center font-medium leading-snug">{alt}</p>
                <a
                  href={`${import.meta.env.BASE_URL || ''}press/${file}`}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-light text-foreground text-xs font-bold rounded-full transition-colors uppercase tracking-wide"
                >
                  <DownloadIcon />
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
