import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getAboutMetadata } from "@/lib/metadata"

export const metadata: Metadata = getAboutMetadata({ locale: "es" });

export default function AboutPageES() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <Link href="/es">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              English
            </Link>
            <Link 
              href="/es" 
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
              Acerca de
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Acerca de Tippsy</h1>
            <p className="text-xl text-muted-foreground">Más que una Coincidencia – Es una Experiencia</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/tippsy-about.png" 
                alt="Personas disfrutando en un bar con Tippsy" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy no es sólo otra aplicación de citas. Es un conector social diseñado para 
                  sacarte de casa y llevarte a conversaciones reales con personas reales, mientras 
                  disfrutas de unas copas en un bar cercano. No más deslizamientos interminables, 
                  fantasmeos, o pensar demasiado en el mensaje perfecto. Sólo coincide, encuentra un 
                  lugar, y descubre a dónde te lleva la noche.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="abandona-la-presion" className="text-primary-foreground">Abandona la Presión, Mantén la Diversión</h2>
                <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                  <p className="mb-0">
                    Las aplicaciones de citas tradicionales a menudo acumulan expectativas innecesarias—largas 
                    conversaciones de texto, primeras citas incómodas, y la sensación de estar atrapado en un 
                    compromiso antes de conocerse. <strong>Tippsy elimina todo eso.</strong> ¿Nuestro objetivo? 
                    Facilitar la conexión con alguien sin la presión. Toma una copa, ríete un poco, y deja que 
                    la noche se desarrolle naturalmente.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="bares-el-lugar-perfecto" className="text-primary-foreground">Bares: El Lugar Perfecto para Reunirse</h2>
                <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 shadow-sm">
                  <p className="mb-0">
                    Los bares son más que excelentes lugares sociales—son <strong>espacios públicos seguros</strong> 
                    donde puedes divertirte sin preocupaciones. Con verificaciones de identificación, registros de 
                    tarjetas de crédito y personal alrededor, nunca estás realmente solo. Ya sea que busques una 
                    copa casual, un nuevo amigo o una chispa potencial, Tippsy hace que reunirse sea 
                    <strong> simple y espontáneo</strong>.
                  </p>
                  <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 mt-4">
                    <div className="rounded bg-white/70 dark:bg-gray-800/50 p-2 text-center">
                      <p className="text-sm font-medium mb-0">✓ Verificación de ID</p>
                    </div>
                    <div className="rounded bg-white/70 dark:bg-gray-800/50 p-2 text-center">
                      <p className="text-sm font-medium mb-0">✓ Ambiente Público</p>
                    </div>
                    <div className="rounded bg-white/70 dark:bg-gray-800/50 p-2 text-center">
                      <p className="text-sm font-medium mb-0">✓ Personal Presente</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="como-funciona" className="text-primary-foreground">Cómo Funciona</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">1</div>
                    <h3 className="text-lg font-semibold mb-1">Coincide</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Encuentra a alguien que comparta tu vibra.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">2</div>
                    <h3 className="text-lg font-semibold mb-1">Elige un Lugar</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Tippsy te ayuda a encontrar un buen bar entre tú y tu coincidencia.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">3</div>
                    <h3 className="text-lg font-semibold mb-1">Conoce y Socializa</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Guarda el teléfono, toma una copa, y disfruta de una conversación real.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">4</div>
                    <h3 className="text-lg font-semibold mb-1">Sin Presión</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Sin expectativas. Solo un buen momento.</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-6 shadow-sm border-amber-200 dark:border-amber-900/50 mt-10">
                <p className="font-medium text-lg mb-0 text-center">
                  <strong>¿Listo para dejar de textear y empezar a vivir?</strong><br />
                  Descarga Tippsy y deja que la noche te lleve a un lugar emocionante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 