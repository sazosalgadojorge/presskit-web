import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const photoRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const heroHeight = window.innerHeight

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (y <= heroHeight && photoRef.current) {
          photoRef.current.style.transform = `translateY(${y * -0.1}px)`
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
      className="relative flex flex-col overflow-hidden -mt-16 sm:-mt-20 h-[calc(100dvh+4rem)] sm:h-[calc(100dvh+5rem)] min-h-[calc(100vh+4rem)] sm:min-h-[calc(100vh+5rem)]"
    >
      {/* Foto — a la derecha en desktop, a pantalla completa en mobile */}
      <div
        ref={photoRef}
        className="absolute pointer-events-none left-0 md:left-[28%] right-0"
        style={{ top: '-14%', bottom: '14%', willChange: 'transform' }}
      >
        <img
          src="/hero-photo.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Degradado horizontal — solo desktop, donde la foto deja espacio libre a la izquierda */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(90deg, #050607 0%, #050607 26%, rgba(5,6,7,.85) 42%, rgba(5,6,7,.2) 70%, rgba(5,6,7,.55) 100%)',
        }}
      />

      {/* Degradado vertical — desktop */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(0deg, #050607 0%, rgba(5,6,7,0) 35%, rgba(5,6,7,0) 80%, rgba(5,6,7,.7) 100%)',
        }}
      />
      {/* Degradado vertical — mobile, foto a pantalla completa: solo oscurece abajo para el contenido */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(0deg, #050607 0%, rgba(5,6,7,0) 45%, rgba(5,6,7,.75) 100%)',
        }}
      />

      {/* Contenido */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-end gap-7"
        style={{ padding: `0 var(--hero-pad) clamp(40px, 7vh, 88px)` }}
      >
        <h1 className="m-0 leading-none">
          <img
            src="/dobles-logo.svg"
            alt="DOBLES"
            className="h-auto block"
            style={{ width: 'clamp(260px, 46vw, 680px)' }}
          />
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/14 pt-6">
          <div className="flex items-center gap-8 flex-wrap">
            <a
              href="https://wa.me/56986145761"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-booking-hero"
              className="flex items-center gap-10 bg-white text-[#050607] hover:bg-primary transition-colors font-mono text-[13px] font-medium tracking-[0.14em] uppercase pl-6 pr-[22px] py-[18px]"
            >
              {t('nav.booking')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <Link
              to="/music"
              className="flex items-center gap-3 border-b border-white/35 hover:border-white hover:text-primary transition-colors font-mono text-[13px] tracking-[0.14em] uppercase py-1.5"
            >
              <svg width="9" height="11" viewBox="0 0 12 14" aria-hidden="true">
                <path d="M0 0l12 7-12 7z" fill="currentColor" />
              </svg>
              {t('hero.lastSet')}
            </Link>
          </div>

          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex gap-5 font-mono text-xs uppercase tracking-[0.12em] text-white/72">
              <a href="https://www.instagram.com/doblesmusic/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@doblesmusic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                TikTok
              </a>
              <a href="https://www.youtube.com/@doblesmusic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
            <a
              href="#footer"
              className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              {t('hero.scroll')}
              <span className="relative inline-block w-px h-9 bg-white/15 overflow-hidden">
                <span className="absolute inset-0 bg-primary hero-scroll-fill" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
