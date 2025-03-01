"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type LanguageCode = "en" | "es"

export interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
}

// Define the translation keys and values with proper typing
type TranslationKeys = 
  | "hero.title" | "hero.subtitle" | "hero.comingSoon" | "hero.finishing" | "hero.joinWaitlist" | "hero.waitlistBtn" | "hero.learnMoreBtn"
  | "nav.features" | "nav.testimonials" | "nav.pricing" | "nav.contact"
  | "cta.title" | "cta.subtitle" | "cta.joinWaitlist" | "cta.learnMore"
  | "contact.title" | "contact.subtitle" | "contact.waitlistTitle" | "contact.waitlistInfo" | "contact.thanks" | "contact.emailLabel" | "contact.emailPlaceholder" | "contact.submitBtn"

type TranslationRecord = Record<TranslationKeys, string>
type Translations = Record<LanguageCode, TranslationRecord>

const translations: Translations = {
  en: {
    "hero.title": "Meet new people & find great bars with",
    "hero.subtitle": "The social matchmaking app that connects you with new friends and helps you discover the best bars in your area.",
    "hero.comingSoon": "Coming Soon:",
    "hero.finishing": "We're putting the finishing touches on Tippsy.",
    "hero.joinWaitlist": "Join the waitlist for early access!",
    "hero.waitlistBtn": "Join Waitlist",
    "hero.learnMoreBtn": "Learn More",
    
    "nav.features": "Features",
    "nav.testimonials": "Testimonials",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    
    "cta.title": "Ready to transform your social life?",
    "cta.subtitle": "Tippsy is coming soon to both iOS and Android. Join our waitlist to be the first to know when we launch.",
    "cta.joinWaitlist": "Join Waitlist",
    "cta.learnMore": "Learn More",
    
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have questions or want to be notified when we launch Tippsy?",
    "contact.waitlistTitle": "Join the Waitlist",
    "contact.waitlistInfo": "Be the first to know when Tippsy launches. We'll send you early access information and exclusive offers.",
    "contact.thanks": "Thanks for joining the waitlist! We'll notify you when Tippsy is ready.",
    "contact.emailLabel": "Email Address",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.submitBtn": "Join Waitlist"
  },
  es: {
    "hero.title": "Conoce gente nueva y encuentra bares geniales con",
    "hero.subtitle": "La aplicación de emparejamiento social que te conecta con nuevos amigos y te ayuda a descubrir los mejores bares de tu zona.",
    "hero.comingSoon": "Próximamente:",
    "hero.finishing": "Estamos dando los últimos toques a Tippsy.",
    "hero.joinWaitlist": "¡Únete a la lista de espera para acceso anticipado!",
    "hero.waitlistBtn": "Únete a la Lista",
    "hero.learnMoreBtn": "Saber Más",
    
    "nav.features": "Características",
    "nav.testimonials": "Testimonios",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    
    "cta.title": "¿Listo para transformar tu vida social?",
    "cta.subtitle": "Tippsy estará disponible pronto para iOS y Android. Únete a nuestra lista de espera para ser el primero en saber cuando lancemos.",
    "cta.joinWaitlist": "Únete a la Lista",
    "cta.learnMore": "Saber Más",
    
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "¿Tienes preguntas o quieres que te avisemos cuando lancemos Tippsy?",
    "contact.waitlistTitle": "Únete a la Lista de Espera",
    "contact.waitlistInfo": "Sé el primero en saber cuando se lance Tippsy. Te enviaremos información de acceso anticipado y ofertas exclusivas.",
    "contact.thanks": "¡Gracias por unirte a la lista de espera! Te avisaremos cuando Tippsy esté listo.",
    "contact.emailLabel": "Correo Electrónico",
    "contact.emailPlaceholder": "tu.correo@ejemplo.com",
    "contact.submitBtn": "Unirse a la Lista"
  }
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const storedLang = localStorage.getItem("language") as LanguageCode
    if (storedLang && (storedLang === "en" || storedLang === "es")) {
      setLanguageState(storedLang)
    }
  }, [])
  
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }
  
  const t = (key: string): string => {
    return translations[language][key as TranslationKeys] || key
  }
  
  // Only render children when we're in the browser
  if (!mounted) {
    return null
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
} 