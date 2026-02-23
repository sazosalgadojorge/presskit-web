import Hero from './components/Hero'
import Bio from './components/Bio'
import Music from './components/Music'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import TechnicalRider from './components/TechnicalRider'

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#bio', label: 'Bio' },
  { href: '#music', label: 'Música' },
  { href: '#videos', label: 'Videos' },
  { href: '#gallery', label: 'Galería' },
  { href: '#rider', label: 'Rider' },
]

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero">
          <img src="/negative.svg" alt="Doble S" className="h-9 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted-2 hover:text-primary-light text-sm font-light tracking-wide capitalize transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/56986145761"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-light capitalize tracking-wide px-5 py-2 rounded-sm border border-primary bg-primary hover:bg-primary-light hover:border-primary-light text-foreground transition-colors"
        >
          <svg className="w-4 h-4 inline-block mr-1.5 -mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.524 5.855L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.374l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.534 6.534 2.118 12 2.118c5.467 0 9.882 4.416 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z" />
          </svg>
          Booking
</a>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-background border-t border-surface-2 py-10 px-6 text-center">
      <div className="flex flex-col items-center gap-3 mb-2">
        <img src="/blanco.svg" alt="Doble S" className="h-5 w-auto opacity-40" />
        <p className="text-muted-4 text-xs tracking-widest">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
      <p className="mt-2 text-muted-4 text-xs">
        Booking:{' '}
        <a href="mailto:booking@doblesmusic.com" className="text-primary hover:text-primary-light transition-colors">
          booking@doblesmusic.com
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Bio />
        <Music />
        <Videos />
        <Gallery />
        <TechnicalRider />
      </main>
      <Footer />
    </div>
  )
}
