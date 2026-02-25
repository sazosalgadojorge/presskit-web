import { createContext, useContext, useState, useEffect } from 'react'
import { translations, getInitialLocale, setStoredLocale } from '../translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = (next) => {
    if (next !== 'es' && next !== 'en') return
    setLocaleState(next)
    setStoredLocale(next)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'es' ? 'es' : 'en'
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'es' ? 'es' : 'en'
    }
  }, [locale])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[locale]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  /** Devuelve un bloque completo de traducción (ej. rider con equipment y hospitalityList). */
  const getSection = (section) => translations[locale]?.[section] ?? {}

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, getSection }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
