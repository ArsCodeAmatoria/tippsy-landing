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
  | "contact.title" | "contact.subtitle" | "contact.waitlistTitle" | "contact.waitlistInfo" | "contact.thanks" | "contact.emailLabel" | "contact.emailPlaceholder" | "contact.submitBtn" | "contact.ageVerification"
  | "features.title" | "features.subtitle"
  | "features.social.title" | "features.social.description" 
  | "features.bars.title" | "features.bars.description"
  | "features.deals.title" | "features.deals.description"
  | "features.safety.title" | "features.safety.description"
  | "footer.privacy" | "footer.terms" | "footer.contact" | "footer.about" | "footer.copyright"
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
    "footer.copyright": "© 2025 Tippsy. All rights reserved.",
    
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
    "footer.copyright": "© 2025 Tippsy. Todos los derechos reservados.",
    
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