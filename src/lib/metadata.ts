import { Metadata } from "next";

// Base URLs for resources
const BASE_URL = "https://tippsy.me";
const SOCIAL_IMAGE_BASE_URL = `${BASE_URL}/social`;

// Default metadata values
const DEFAULT_TITLE = "Tippsy - Connect & Meet at Local Bars";
const DEFAULT_DESCRIPTION = "Tippsy helps you meet new people in real life at local bars and venues. No endless texting, just genuine connections over drinks.";

// Default social image
const DEFAULT_SOCIAL_IMAGE = `${BASE_URL}/images/tippsy-about.png`;

// Types of locales the app supports
export type SupportedLocale = "en" | "es";

interface PageMetadataProps {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterImage?: string;
  path?: string;
  locale?: SupportedLocale;
}

/**
 * Generates consistent metadata for a page
 */
export function generateMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_SOCIAL_IMAGE,
  twitterImage = DEFAULT_SOCIAL_IMAGE,
  path = "",
  locale = "en"
}: PageMetadataProps = {}): Metadata {
  // Format the title
  const formattedTitle = title.includes("Tippsy") ? title : `${title} | Tippsy`;
  
  // Determine alternate locales and paths
  const alternates = {
    canonical: `${BASE_URL}${path}`,
    languages: {} as Record<string, string>,
  };

  // Add language alternates
  if (locale === "en") {
    alternates.languages["es"] = `${BASE_URL}${path}/es`;
  } else if (locale === "es") {
    // For Spanish pages, the English version is at the base path
    const englishPath = path.replace(/\/es$/, "");
    alternates.languages["en"] = `${BASE_URL}${englishPath}`;
  }

  return {
    title: formattedTitle,
    description,
    alternates,
    openGraph: {
      title: formattedTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Tippsy",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Tippsy - Connect & Meet at Local Bars",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [twitterImage],
      creator: "@Tippsy",
      site: "@Tippsy",
    },
  };
}

/**
 * Pre-configured metadata generators for specific pages
 */

// Home page metadata
export function getHomeMetadata(locale: SupportedLocale = "en") {
  const title = locale === "en" 
    ? "Tippsy - Connect & Meet at Local Bars" 
    : "Tippsy - Conecta y Conoce Gente en Bares Locales";
  
  const description = locale === "en"
    ? "Tippsy helps you meet new people in real life at local bars and venues. No endless texting, just genuine connections over drinks."
    : "Tippsy te ayuda a conocer personas en la vida real en bares y lugares locales. Sin mensajes interminables, solo conexiones genuinas mientras tomas algo.";
  
  const path = locale === "en" ? "" : "/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
}

// About page metadata
export function getAboutMetadata({ locale = "en" }: { locale?: SupportedLocale } = {}) {
  const title = locale === "en" 
    ? "About Tippsy - A Social Connector for Bars and Nightlife" 
    : "Acerca de Tippsy - Un Conector Social para Bares y Vida Nocturna";
  
  const description = locale === "en"
    ? "Tippsy is a social connector designed to get you out of the house and into real conversations with real people—over a couple of drinks at a bar near you."
    : "Tippsy es un conector social diseñado para sacarte de casa y llevarte a conversaciones reales con personas reales, mientras disfrutas de unas copas en un bar cercano.";
  
  const path = locale === "en" ? "/about" : "/about/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
}

// Partner page metadata
export function getPartnerMetadata({ locale = "en" }: { locale?: SupportedLocale } = {}) {
  const title = locale === "en" 
    ? "Partner With Tippsy - Advertising & Development Opportunities" 
    : "Asociarse con Tippsy - Oportunidades de Publicidad y Desarrollo";
  
  const description = locale === "en"
    ? "Explore partnership opportunities with Tippsy including bar advertising, alcohol brand promotion, and technical development collaborations."
    : "Explora oportunidades de asociación con Tippsy, incluyendo publicidad en bares, promoción de marcas de alcohol y colaboraciones de desarrollo técnico.";
  
  const path = locale === "en" ? "/partner" : "/partner/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
}

// Contact metadata
export function getContactMetadata({ locale = "en" }: { locale?: SupportedLocale } = {}) {
  const title = locale === "en" 
    ? "Contact Tippsy - Get In Touch With Our Team" 
    : "Contacta a Tippsy - Comunícate Con Nuestro Equipo";
  
  const description = locale === "en"
    ? "Have questions or want to learn more about Tippsy? Get in touch with our team for information about our app, partnerships, or support."
    : "¿Tienes preguntas o quieres saber más sobre Tippsy? Comunícate con nuestro equipo para obtener información sobre nuestra aplicación, asociaciones o soporte.";
  
  const path = locale === "en" ? "/contact" : "/contact/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
}

// Privacy Policy metadata
export function getPrivacyMetadata({ locale = "en" }: { locale?: SupportedLocale } = {}) {
  const title = locale === "en" 
    ? "Privacy Policy - Tippsy" 
    : "Política de Privacidad - Tippsy";
  
  const description = locale === "en"
    ? "Read Tippsy's privacy policy to understand how we collect, use, and protect your personal information."
    : "Lee la política de privacidad de Tippsy para entender cómo recopilamos, utilizamos y protegemos tu información personal.";
  
  const path = locale === "en" ? "/privacy" : "/privacy/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
}

// Terms of Service metadata
export function getTermsMetadata({ locale = "en" }: { locale?: SupportedLocale } = {}) {
  const title = locale === "en" 
    ? "Terms of Service - Tippsy" 
    : "Términos de Servicio - Tippsy";
  
  const description = locale === "en"
    ? "Read Tippsy's terms of service to understand the rules and guidelines governing the use of our app and services."
    : "Lee los términos de servicio de Tippsy para entender las reglas y directrices que rigen el uso de nuestra aplicación y servicios.";
  
  const path = locale === "en" ? "/terms" : "/terms/es";
  
  return generateMetadata({
    title,
    description,
    path,
    locale
  });
} 