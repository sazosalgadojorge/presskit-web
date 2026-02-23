export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background — YouTube iframe cubriendo todo el hero */}
      <div className="absolute inset-0 pointer-events-none">

      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Yhzx_0Zb2LU?si=BG81HOq7NVImnwih&autoplay=1&mute=1&loop=1&playlist=Yhzx_0Zb2LU&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>

      {/* Capa 1 — oscurecimiento base suave */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Capa 2 — gradiente que se intensifica hacia abajo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, var(--color-background) 100%)',
        }}
      />

      {/* Capa 3 — tinte de color primario lateral */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, var(--color-primary-glow) 0%, transparent 50%, var(--color-primary-glow) 100%)',
          opacity: 0.6,
        }}
      />

      {/* Capa 4 — glow radial centrado */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, var(--color-primary)/15 0%, transparent 70%)',
        }}
      />

      {/* Contenido sobre las capas */}
      <div className="relative z-10 flex flex-col items-center mt-20">

      {/* Logo */}
      <img src="/negative.svg" alt="Doble S" className="w-72 md:w-96 mb-3 -translate-x-6" />

      {/* Tagline */}
      <p className="text-primary-light text-lg md:text-xl font-light tracking-widest uppercase mb-8">
        DJ · Productor · Artista
      </p>

      {/* Social icons */}
      <div className="flex gap-6 mb-10 text-muted-2">
        {/* Instagram */}
        <a href="https://www.instagram.com/doblesmusic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-light transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@doblesmusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-primary-light transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
          </svg>
        </a>
        {/* YouTube */}
        <a href="https://www.youtube.com/@doblesmusic" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary-light transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/56986145761"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-primary hover:bg-primary-light text-foreground font-bold rounded-full transition-colors tracking-wide uppercase text-sm"
        >
          <svg className="w-5 h-5 inline-block mr-2 -mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.524 5.855L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.374l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.534 6.534 2.118 12 2.118c5.467 0 9.882 4.416 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z" />
          </svg>
          Agenda por WhatsApp
</a>
        <a
          href="#"
          download
          className="px-8 py-3 border border-primary-light hover:bg-primary-light/20 text-primary-light hover:text-foreground font-bold rounded-full transition-colors tracking-wide uppercase text-sm"
        >
          Download EPK
        </a>
      </div>

      </div>{/* fin contenido */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-4 z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
