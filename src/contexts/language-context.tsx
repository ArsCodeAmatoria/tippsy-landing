"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useRouter, usePathname } from 'next/navigation'

export type LanguageCode = "en" | "es"

export interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
  toggleLanguage: () => void
  isSpanish: () => boolean
}

// Define the translation keys and values with proper typing
type TranslationKeys = 
  | "hero.title" | "hero.subtitle" | "hero.comingSoon" | "hero.finishing" | "hero.joinWaitlist" | "hero.waitlistBtn" | "hero.learnMoreBtn"
  | "nav.features" | "nav.about" | "nav.partner" | "nav.contact"
  | "cta.title" | "cta.subtitle" | "cta.joinWaitlist" | "cta.learnMore"
  | "contact.title" | "contact.subtitle" | "contact.waitlistTitle" | "contact.waitlistInfo" | "contact.thanks" | "contact.emailLabel" | "contact.emailPlaceholder" | "contact.submitBtn" | "contact.ageVerification"
  | "features.title" | "features.subtitle"
  | "features.social.title" | "features.social.description" 
  | "features.bars.title" | "features.bars.description"
  | "features.deals.title" | "features.deals.description"
  | "features.safety.title" | "features.safety.description"
  | "footer.privacy" | "footer.terms" | "footer.contact" | "footer.about" | "footer.partner" | "footer.copyright" | "footer.followUs" | "footer.githubAria" | "footer.twitterAria" | "footer.instagramAria" | "footer.linkedinAria"
  | "legal.privacyPolicy" | "legal.termsOfService" | "legal.lastUpdated" | "legal.back" | "legal.legalLabel" | "legal.contactUs" | "legal.contactUsText"

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
    "nav.about": "About Us",
    "nav.partner": "Partner With Us",
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
    "contact.submitBtn": "Join Waitlist",
    "contact.ageVerification": "I confirm that I am of legal drinking age in my country of residence and agree to the Terms of Service.",
    
    "features.title": "Everything you need to enhance your social life",
    "features.subtitle": "Tippsy combines social networking with bar discovery to create the ultimate nightlife companion.",
    "features.social.title": "Social Matchmaking",
    "features.social.description": "Connect with like-minded people based on interests, location, and preferences.",
    "features.bars.title": "Bar Discovery",
    "features.bars.description": "Find the best bars nearby with ratings, reviews, and real-time availability.",
    "features.deals.title": "Exclusive Deals",
    "features.deals.description": "Enjoy special discounts and promotions at partner bars and venues.",
    "features.safety.title": "Safe Community",
    "features.safety.description": "Verified profiles and community guidelines ensure a safe and respectful experience.",
    
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact",
    "footer.about": "About Us",
    "footer.partner": "Partner With Us",
    "footer.copyright": "© 2025 Tippsy. All rights reserved.",
    "footer.followUs": "Follow Us",
    "footer.githubAria": "Tippsy GitHub",
    "footer.twitterAria": "Tippsy Twitter",
    "footer.instagramAria": "Tippsy Instagram",
    "footer.linkedinAria": "Tippsy LinkedIn",
    
    // Legal pages
    "legal.privacyPolicy": "Privacy Policy",
    "legal.termsOfService": "Terms of Service",
    "legal.lastUpdated": "Last Updated",
    "legal.back": "Back to Home",
    "legal.legalLabel": "Legal",
    "legal.contactUs": "Contact Us",
    "legal.contactUsText": "If you have any questions about this document, please contact us at:"
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
    "nav.about": "Sobre Nosotros",
    "nav.partner": "Asóciese Con Nosotros",
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
    "contact.submitBtn": "Unirse a la Lista",
    "contact.ageVerification": "Confirmo que tengo la edad legal para beber en mi país de residencia y acepto los Términos de Servicio.",
    
    "features.title": "Todo lo que necesitas para mejorar tu vida social",
    "features.subtitle": "Tippsy combina las redes sociales con el descubrimiento de bares para crear el compañero perfecto para tu vida nocturna.",
    "features.social.title": "Conexiones Sociales",
    "features.social.description": "Conéctate con personas afines basadas en intereses, ubicación y preferencias.",
    "features.bars.title": "Descubre Bares",
    "features.bars.description": "Encuentra los mejores bares cercanos con calificaciones, reseñas y disponibilidad en tiempo real.",
    "features.deals.title": "Ofertas Exclusivas",
    "features.deals.description": "Disfruta de descuentos especiales y promociones en bares y lugares asociados.",
    "features.safety.title": "Comunidad Segura",
    "features.safety.description": "Perfiles verificados y pautas comunitarias que garantizan una experiencia segura y respetuosa.",
    
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contacto",
    "footer.about": "Sobre Nosotros",
    "footer.partner": "Asóciese Con Nosotros",
    "footer.copyright": "© 2025 Tippsy. Todos los derechos reservados.",
    "footer.followUs": "Síguenos",
    "footer.githubAria": "GitHub de Tippsy",
    "footer.twitterAria": "Twitter de Tippsy",
    "footer.instagramAria": "Instagram de Tippsy",
    "footer.linkedinAria": "LinkedIn de Tippsy",
    
    // Legal pages
    "legal.privacyPolicy": "Política de Privacidad",
    "legal.termsOfService": "Términos de Servicio",
    "legal.lastUpdated": "Última Actualización",
    "legal.back": "Volver al Inicio",
    "legal.legalLabel": "Legal",
    "legal.contactUs": "Contáctenos",
    "legal.contactUsText": "Si tiene alguna pregunta sobre este documento, contáctenos en:"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()
  
  // Track if component is mounted (client-side)
  const [isClient, setIsClient] = useState(false)
  
  // Always initialize with English on the server to avoid hydration mismatch
  const [language, setLanguage] = useState<LanguageCode>("en")
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  
  // After mounting, set up the language based on the correct logic
  useEffect(() => {
    setIsClient(true)
    
    // Get saved language preference from localStorage if available
    const getSavedLanguage = (): LanguageCode | null => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('tippsy-language')
        return (saved === 'en' || saved === 'es') ? saved as LanguageCode : null
      }
      return null
    }
    
    // Detect browser language
    const detectBrowserLanguage = (): LanguageCode => {
      const browserLang = window.navigator.language.substring(0, 2).toLowerCase()
      return browserLang === 'es' ? 'es' : 'en'
    }
    
    // Set initial language based on URL, then localStorage, then browser
    const getInitialLanguage = (): LanguageCode => {
      // URL has highest priority
      if (pathname?.startsWith('/es')) {
        return 'es'
      }
      
      // Then check localStorage
      const savedLanguage = getSavedLanguage()
      if (savedLanguage) {
        return savedLanguage
      }
      
      // Finally, check browser language
      return detectBrowserLanguage()
    }
    
    setLanguage(getInitialLanguage())
    
    // Save current language preference to localStorage
    if (isClient) {
      localStorage.setItem('tippsy-language', language)
    }
  }, [pathname, isClient])
  
  // Handle first-time browser language detection and redirection
  useEffect(() => {
    if (isClient && isInitialLoad && pathname === '/') {
      const savedLang = localStorage.getItem('tippsy-language')
      
      if (savedLang === 'es') {
        router.push('/es')
      } else if (!savedLang) {
        const browserLang = window.navigator.language.substring(0, 2).toLowerCase()
        if (browserLang === 'es') {
          router.push('/es')
        }
      }
      
      setIsInitialLoad(false)
    }
  }, [isClient, isInitialLoad, pathname, router])
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('tippsy-language', language)
    }
  }, [language, isClient])
  
  // Update language when pathname changes, but only if it's a language-specific path change
  useEffect(() => {
    if (isClient && pathname) {
      const pathLanguage = pathname.startsWith('/es') ? 'es' : 'en'
      if (pathLanguage !== language) {
        setLanguage(pathLanguage)
      }
    }
  }, [pathname, language, isClient])
  
  // Toggle language function
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    
    // Redirect to the equivalent page in the other language
    if (pathname && isClient) {
      if (newLanguage === 'es') {
        // Switching to Spanish
        if (pathname === '/') {
          router.push('/es')
        } else if (!pathname.startsWith('/es')) {
          router.push(`/es${pathname}`)
        }
      } else {
        // Switching to English
        if (pathname === '/es') {
          router.push('/')
        } else if (pathname.startsWith('/es')) {
          router.push(pathname.substring(3))
        }
      }
    }
  }
  
  // Helper function to check if the current language is Spanish
  const isSpanish = () => language === 'es'
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key as TranslationKeys] || key
  }
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      toggleLanguage, 
      isSpanish 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 