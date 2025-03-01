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
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/nextjs-logo.svg"
                          alt="Logo de Next.js"
                          fill
                          className="object-contain dark:brightness-200 dark:invert"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Next.js</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/rust-logo.svg"
                          alt="Logo de Rust"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Rust</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/polkadot-logo.svg"
                          alt="Logo de Polkadot"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Polkadot</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/react-logo.svg"
                          alt="Logo de React"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">React</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/tailwind-logo-light.svg"
                          alt="Logo de Tailwind CSS"
                          fill
                          className="object-contain hidden dark:block"
                        />
                        <Image
                          src="/images/tech-logos/tailwind-logo-dark.svg"
                          alt="Logo de Tailwind CSS"
                          fill
                          className="object-contain block dark:hidden"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Tailwind</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/nodejs-logo.svg"
                          alt="Logo de Node.js"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Node.js</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/fastapi-logo.svg"
                          alt="Logo de FastAPI"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">FastAPI</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/llama-logo.svg"
                          alt="Logo de Llama AI"
                          fill
                          className="object-contain dark:invert"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Llama AI</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="hoja-de-ruta" className="text-primary-foreground">Hoja de Ruta de Desarrollo de Tippsy</h2>
                <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q3</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q3 2024: Seguridad y Autenticación</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Implementar Identidad Descentralizada Polkadot (DID) para autenticación segura de usuarios</li>
                            <li>Desarrollar API Rust con integración FastAPI para flujos de autenticación</li>
                            <li>Crear sistema de verificación con Pruebas de Conocimiento Cero para preservar la privacidad</li>
                            <li>Lanzar Tokens Soulbound (SBTs) para logros y reputación de usuarios</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q4</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q4 2024: Integración de IA y Descubrimiento Social</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Integrar Llama AI para recomendaciones personalizadas de locales</li>
                            <li>Lanzar algoritmo de emparejamiento social impulsado por IA</li>
                            <li>Construir características de descubrimiento de locales con filtrado mejorado por IA</li>
                            <li>Desarrollar rutas de experiencia personalizadas basadas en preferencias del usuario</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q1</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/30 p-4 rounded-xl shadow-sm border border-violet-200 dark:border-violet-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q1 2025: Aplicaciones Móviles y Asociaciones con Locales</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Lanzar aplicaciones móviles nativas para iOS y Android</li>
                            <li>Iniciar programa de asociación con locales con registros por código QR</li>
                            <li>Implementar promociones en la aplicación y ofertas especiales para socios</li>
                            <li>Crear panel de análisis para socios de locales</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q2</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q2 2025: Expansión Global y Asociaciones con Marcas</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Expandir a los principales mercados internacionales</li>
                            <li>Lanzar plataforma de asociación para empresas de alcohol y bebidas</li>
                            <li>Implementar recomendaciones patrocinadas con integración de marca</li>
                            <li>Desarrollar análisis multiplataforma para medir la efectividad de campañas</li>
                          </ul>
                        </div>
                      </div>
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