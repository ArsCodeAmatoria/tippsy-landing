import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getPartnerMetadata } from "@/lib/metadata"

export const metadata: Metadata = getPartnerMetadata({ locale: "es" });

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
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Asociarse con Tippsy</h1>
            <p className="text-xl text-muted-foreground">Únete a nosotros para transformar cómo las personas se conectan en el mundo real</p>
          </div>
          
          <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/partners-hero-image.png" 
                alt="Oportunidades de asociación con Tippsy" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy está a la vanguardia de reunir a las personas en entornos del mundo real, 
                  particularmente en la atmósfera vibrante de bares y lugares de vida nocturna. 
                  Buscamos socios estratégicos que compartan nuestra visión y quieran ser parte 
                  de esta revolución social.
                </p>
              </div>

              <div>
                <h2 id="asociaciones-con-bares" className="text-primary-foreground">Asociaciones con Bares y Locales</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    Como local asociado a Tippsy, tendrás acceso a una nueva base de clientes que buscan 
                    activamente lugares para conectar. Los beneficios para socios incluyen:
                  </p>
                  <ul className="space-y-2">
                    <li>Ubicación destacada en la aplicación Tippsy</li>
                    <li>Mayor afluencia de clientes durante horas típicamente más lentas</li>
                    <li>Análisis e información sobre clientes</li>
                    <li>Promociones y oportunidades para eventos especiales</li>
                    <li>Integración con tus programas de fidelidad existentes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 id="asociaciones-con-marcas" className="text-primary-foreground">Asociaciones con Marcas de Alcohol y Bebidas</h2>
                <div className="rounded-lg border p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 shadow-sm mb-6">
                  <p className="mb-4">
                    Para marcas de bebidas que buscan aumentar su visibilidad y ventas, Tippsy ofrece 
                    oportunidades promocionales únicas directamente en el punto de consumo:
                  </p>
                  <ul className="space-y-2">
                    <li>Promociones y recomendaciones destacadas en la aplicación</li>
                    <li>Marketing directo a usuarios con verificación de edad</li>
                    <li>Eventos patrocinados y encuentros</li>
                    <li>Visibilidad de marca en asociaciones con locales</li>
                    <li>Datos de preferencias de clientes e información de mercado</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 id="web3-blockchain" className="text-primary-foreground">Asociaciones Web3 y Blockchain</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    Tippsy adopta la tecnología blockchain para mejorar la experiencia del usuario y la seguridad. 
                    Estamos explorando asociaciones en:
                  </p>
                  <ul className="space-y-2">
                    <li>Soluciones de verificación de identidad</li>
                    <li>Sistemas de tokens de fidelidad</li>
                    <li>Implementación de contratos inteligentes para recompensas</li>
                    <li>Desarrollo de gráficos sociales descentralizados</li>
                    <li>Integraciones de pago con criptomonedas para gestión de cuentas en locales</li>
                  </ul>
                  <div className="grid grid-cols-5 gap-4 mt-6">
                    <div className="flex justify-center items-center">
                      <Image src="/images/tech-logos/ethereum-logo.svg" width={40} height={40} alt="Ethereum" />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src="/images/tech-logos/polygon-logo.svg" width={40} height={40} alt="Polygon" />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src="/images/tech-logos/solana-logo.svg" width={40} height={40} alt="Solana" />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src="/images/tech-logos/polkadot-logo.svg" width={40} height={40} alt="Polkadot" />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src="/images/tech-logos/near-logo.svg" width={40} height={40} alt="NEAR Protocol" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 id="desarrollo-tecnologico" className="text-primary-foreground">Asociaciones de Desarrollo Tecnológico</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    Estamos construyendo Tippsy utilizando tecnología moderna y estamos abiertos a colaboraciones 
                    con desarrolladores y empresas tecnológicas interesadas en:
                  </p>
                  <ul className="space-y-2">
                    <li>Integraciones de API</li>
                    <li>Mejoras en servicios basados en ubicación</li>
                    <li>IA y aprendizaje automático para emparejamiento</li>
                    <li>Soluciones de seguridad y privacidad</li>
                    <li>Innovaciones en desarrollo móvil</li>
                  </ul>
                  <p className="mt-4">
                    Nuestro stack tecnológico incluye:
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/nextjs-logo.svg" width={40} height={40} alt="Next.js" />
                      </div>
                      <p className="text-xs font-medium">Next.js</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/react-logo.svg" width={40} height={40} alt="React" />
                      </div>
                      <p className="text-xs font-medium">React</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/tailwind-logo.svg" width={40} height={40} alt="Tailwind CSS" />
                      </div>
                      <p className="text-xs font-medium">Tailwind</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/typescript-logo.svg" width={40} height={40} alt="TypeScript" />
                      </div>
                      <p className="text-xs font-medium">TypeScript</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/swift-logo.svg" width={40} height={40} alt="Swift" />
                      </div>
                      <p className="text-xs font-medium">Swift</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/kotlin-logo.svg" width={40} height={40} alt="Kotlin" />
                      </div>
                      <p className="text-xs font-medium">Kotlin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-6 shadow-sm border-amber-200 dark:border-amber-900/50 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-center">¿Listo para explorar una asociación?</h3>
                <p className="text-center mb-4">
                  Estamos entusiasmados por discutir cómo podemos trabajar juntos para crear conexiones 
                  significativas en el mundo real mientras hacemos crecer tu negocio.
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:partners@tippsy.io"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contacta a Nuestro Equipo de Asociaciones
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