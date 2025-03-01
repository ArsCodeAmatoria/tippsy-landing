import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Asóciese con Tippsy - Oportunidades de Publicidad y Desarrollo",
  description: "Explore oportunidades de asociación con Tippsy, incluyendo publicidad para bares, promoción de marcas de alcohol y colaboraciones de desarrollo técnico."
}

export default function PartnerPageES() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link 
              href="/partner" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              English
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Volver al Inicio
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 md:mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Asociación
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Asóciese con Tippsy</h1>
            <p className="text-xl text-muted-foreground">Únase a nosotros para transformar la experiencia social y nocturna</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy está creando un nuevo ecosistema social que conecta personas y lugares. Buscamos 
                  socios estratégicos que quieran ser parte de esta revolución en redes sociales y vida nocturna.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="asociaciones-con-bares" className="text-primary-foreground">Asociaciones con Bares y Locales</h2>
                <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                  <p>
                    Únase a nuestra red de locales destacados y acceda a un flujo de nuevos clientes 
                    que buscan activamente buenos lugares para reunirse. Tippsy puede ayudar a su establecimiento a:
                  </p>
                  <ul className="mt-4">
                    <li>Aumentar el tráfico de clientes durante períodos más lentos</li>
                    <li>Atraer a una audiencia diversa de usuarios de aplicaciones sociales</li>
                    <li>Crear promociones especiales para usuarios de Tippsy</li>
                    <li>Ganar visibilidad a través de nuestro sistema de recomendación de locales</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="asociaciones-con-marcas" className="text-primary-foreground">Asociaciones con Marcas de Alcohol y Bebidas</h2>
                <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 shadow-sm">
                  <p>
                    Para marcas de alcohol y bebidas, Tippsy ofrece oportunidades publicitarias 
                    únicas para llegar a una audiencia comprometida de bebedores sociales:
                  </p>
                  <ul className="mt-4">
                    <li>Recomendaciones de bebidas patrocinadas</li>
                    <li>Promociones en la aplicación y contenido destacado</li>
                    <li>Integración de marca en la experiencia social</li>
                    <li>Información basada en datos sobre preferencias del consumidor</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Nota:</strong> Toda la publicidad de alcohol sigue estrictamente las prácticas de marketing 
                    responsable y los requisitos de verificación de edad.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="asociaciones-blockchain" className="text-primary-foreground">Asociaciones Web3 y Blockchain</h2>
                <div className="rounded-lg border p-4 bg-violet-50/50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900/30 shadow-sm">
                  <p>
                    Tippsy está liderando la integración de tecnología blockchain para mejorar la seguridad, privacidad y experiencia del usuario:
                  </p>
                  <ul className="mt-4">
                    <li><strong>Identidad Descentralizada Polkadot (DID)</strong> - Identidades digitales seguras y auto-soberanas para usuarios</li>
                    <li><strong>Tokens Soulbound (SBTs)</strong> - Tokens no transferibles que representan logros y reputación del usuario</li>
                    <li><strong>Pruebas de Conocimiento Cero (ZKPs)</strong> - Verificación que preserva la privacidad sin revelar información sensible</li>
                  </ul>
                  <p className="mt-4">
                    Buscamos socios con experiencia en estas tecnologías para ayudar a construir la próxima generación de aplicaciones sociales.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="asociaciones-tecnologicas" className="text-primary-foreground">Asociaciones de Desarrollo Tecnológico</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Desarrollo Front-End</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      Buscamos socios con experiencia en:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>Tailwind CSS</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Desarrollo Móvil</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      Estamos construyendo experiencias nativas con:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Swift y SwiftUI para iOS</li>
                      <li>Kotlin y Jetpack Compose para Android</li>
                      <li>Soluciones multiplataforma</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Desarrollo Back-End</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      Nuestra tecnología del lado del servidor incluye:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Rust para componentes críticos de rendimiento</li>
                      <li>Node.js y TypeScript</li>
                      <li>PostgreSQL y Redis</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Socios de Diseño</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      Valoramos la experiencia en:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Diseño UI/UX</li>
                      <li>Identidad de marca</li>
                      <li>Diseño de movimiento</li>
                      <li>Pruebas de usuario e investigación</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Tecnologías Con Las Que Trabajamos</h3>
                  <div className="flex flex-wrap gap-6 items-center justify-center mt-4 bg-card rounded-lg border p-6 dark:bg-gray-800/50">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-black text-white rounded-full">
                        <span className="text-lg font-bold">N.js</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Next.js</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-black text-orange-500 rounded-md">
                        <span className="text-lg font-bold">RS</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Rust</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-violet-700 text-white rounded-full">
                        <span className="text-sm font-bold">Polkadot</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Polkadot</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-blue-50 text-cyan-500 rounded-full border border-cyan-500">
                        <span className="text-2xl font-bold">⚛️</span>
                      </div>
                      <span className="text-xs text-muted-foreground">React</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-cyan-500 text-white rounded-md">
                        <span className="text-lg font-bold">TW</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Tailwind</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2 flex items-center justify-center bg-green-600 text-white rounded-md">
                        <span className="text-lg font-bold">Node</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-primary/5 dark:bg-primary-foreground/5 p-6 shadow-sm border-primary/20 dark:border-primary-foreground/20 mt-10">
                <h2 className="text-xl font-semibold mb-4 text-center">Póngase en Contacto</h2>
                <p className="mb-4 text-center">
                  ¿Interesado en asociarse con Tippsy? Contacte a nuestro equipo de asociaciones para discutir oportunidades.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="mailto:tippsy.me.org@gmail.com" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Contacto: tippsy.me.org@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 