import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import LogoSVG from './LogoSVG.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const contentRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const heroHeight = window.innerHeight

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        // Solo aplica mientras el hero es visible
        if (y <= heroHeight) {
          if (contentRef.current) {
            contentRef.current.style.transform = `translateY(${y * -0.28}px)`
          }
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${y * -0.1}px)`
          }
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen h-dvh flex flex-col items-center text-center px-6 overflow-hidden -mt-16 sm:-mt-20 pt-16 sm:pt-20"
    >
      {/* Video de fondo — desktop only, con margen extra para el parallax */}
      <div
        ref={bgRef}
        className="absolute pointer-events-none"
        style={{
          top: '-12%',
          left: 0,
          right: 0,
          height: '124%',
          willChange: 'transform',
        }}
      >
        {/* hero.jpg — visible siempre (mobile) y como fallback si el video no carga */}
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '56% center', filter: 'grayscale(100%) brightness(0.5) contrast(1.15)' }}
        />
        {/* Video YouTube — solo desktop */}
        <iframe
          className="hidden md:block"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Yhzx_0Zb2LU?autoplay=1&mute=1&loop=1&playlist=Yhzx_0Zb2LU&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1"
          title="Background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            position: 'absolute',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '177.78vh',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
        />
      </div>

      {/* Capa 1 — oscurecimiento base (más suave en mobile) */}
      <div className="absolute inset-0 bg-background/40 md:bg-background/60" />

      {/* Capa 2 — gradiente que se intensifica hacia abajo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, var(--color-background) 100%)',
        }}
      />

      {/* Capa 3 — tinte de color primario lateral */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, var(--color-primary-glow) 0%, transparent 50%, var(--color-primary-glow) 100%)',
          opacity: 0.5,
        }}
      />

      {/* Capa 4 — glow radial centrado */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, var(--color-primary)/15 0%, transparent 70%)',
        }}
      />

      {/* Contenido — parallax más rápido que el fondo */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center w-full max-w-full"
        style={{ willChange: 'transform' }}
      >
        {/* Logo animado */}
        <LogoSVG
          className="w-72 md:w-96 mb-3 max-w-[85vw] mx-auto max-md:[transform:translate(var(--hero-logo-x),var(--hero-logo-y))] md:[transform:translate(var(--hero-logo-x-desktop),var(--hero-logo-y-desktop))]"
          style={{
            '--hero-logo-x': '-5px',
            '--hero-logo-y': '0px',
            '--hero-logo-x-desktop': '-2rem',
            '--hero-logo-y-desktop': '+30px',
          }}
        />

        {/* Tagline */}
        <p
          className="hero-tagline text-primary-light text-lg md:text-xl font-light tracking-widest uppercase mb-8 text-center w-full max-md:[transform:translate(var(--hero-tagline-x),var(--hero-tagline-y))] md:[transform:translate(var(--hero-tagline-x-desktop),var(--hero-tagline-y-desktop))]"
          style={{
            '--hero-tagline-x': '5px',
            '--hero-tagline-y': '0px',
            '--hero-tagline-x-desktop': '0rem',
            '--hero-tagline-y-desktop': '+30px',
            animationDelay: '1.35s',
          }}
        >
          {t('hero.tagline')}
        </p>

        {/* Social icons */}
        <div
          className="flex flex-wrap justify-center gap-6 mb-10 text-muted-2 max-md:[transform:translate(var(--hero-social-x),var(--hero-social-y))] md:[transform:translate(var(--hero-social-x-desktop),var(--hero-social-y-desktop))]"
          style={{
            '--hero-social-x': '0px',
            '--hero-social-y': '0px',
            '--hero-social-x-desktop': '0px',
            '--hero-social-y-desktop': '+30px',
          }}
        >
          {/* Instagram */}
          <a href="https://www.instagram.com/doblesmusic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hero-icon hover:text-primary-light transition-colors" style={{ animationDelay: '1.6s' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@doblesmusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hero-icon hover:text-primary-light transition-colors" style={{ animationDelay: '1.75s' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/@doblesmusic" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hero-icon hover:text-primary-light transition-colors" style={{ animationDelay: '1.9s' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex-shrink-0 flex justify-center pb-4 pt-2 text-muted-4 z-10 pointer-events-none">
        <span className="animate-bounce inline-block" aria-hidden="true">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </section>
  )
}
