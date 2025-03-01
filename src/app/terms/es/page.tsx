import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getTermsMetadata } from "@/lib/metadata"

export const metadata: Metadata = getTermsMetadata({ locale: "es" });

export default function TermsOfServiceES() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <Logo />
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al Inicio
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 md:mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Legal
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Términos de Servicio</h1>
            <p className="text-muted-foreground mb-4">Última Actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <div className="flex gap-3 mt-4">
              <Link href="/terms" className="text-sm text-primary hover:underline">English</Link>
              <span className="text-sm font-semibold">Español</span>
            </div>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <p className="lead text-lg dark:text-gray-200">
              Por favor, lee estos Términos de Servicio ("Términos", "Términos de Servicio") cuidadosamente 
              antes de usar la aplicación móvil y el sitio web de Tippsy (el "Servicio") operado por 
              Tippsy ("nosotros", "nos" o "nuestro").
            </p>
            
            <p className="mb-6">
              Tu acceso y uso del Servicio está condicionado a tu aceptación y cumplimiento de estos Términos. 
              Estos Términos se aplican a todos los visitantes, usuarios y otros que accedan o usen el Servicio.
            </p>
            
            <div className="my-8 rounded-lg border bg-amber-50 dark:bg-amber-950/50 p-6 shadow-sm dark:border-amber-900/50">
              <p className="font-medium mb-0 text-lg">
                <strong>Al acceder o usar el Servicio, aceptas estar sujeto a estos Términos. 
                Si no estás de acuerdo con alguna parte de los términos, no puedes acceder al Servicio.</strong>
              </p>
            </div>
            
            <h2 id="requisitos-de-edad" className="text-primary-foreground">Requisitos de Edad</h2>
            <div className="space-y-4">
              <p>
                Tippsy está destinado a usuarios que tienen la edad legal para consumir alcohol en sus 
                respectivas ubicaciones. Esto es típicamente 21 años de edad en los Estados Unidos y 
                18 o 19 en muchos otros países.
              </p>
              
              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4 shadow-sm border-amber-200 dark:border-amber-900/50">
                <p className="font-medium mb-0">
                  <strong>Al usar Tippsy, representas y garantizas que tienes la edad legal para consumir alcohol en tu 
                  jurisdicción. Nos reservamos el derecho de terminar tu cuenta si descubrimos que estás por 
                  debajo de la edad legal para consumir alcohol.</strong>
                </p>
              </div>
            </div>
            
            <h2 id="cuentas" className="text-primary-foreground">Cuentas</h2>
            <div className="space-y-4">
              <p>
                Cuando creas una cuenta con nosotros, debes proporcionar información que sea precisa, completa 
                y actual en todo momento. El incumplimiento de esto constituye una violación de los Términos, 
                lo que puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>Eres responsable de salvaguardar la contraseña</strong> que utilizas para acceder al Servicio y por 
                  cualquier actividad o acción bajo tu contraseña. Aceptas no revelar tu contraseña a ningún 
                  tercero. Debes notificarnos inmediatamente al tener conocimiento de cualquier violación de 
                  seguridad o uso no autorizado de tu cuenta.
                </p>
              </div>
            </div>
            
            <h2 id="contenido-del-usuario" className="text-primary-foreground">Contenido del Usuario</h2>
            <div className="space-y-4">
              <p>
                Nuestro Servicio te permite publicar, enlazar, almacenar, compartir y de otra manera poner a 
                disposición cierta información, texto, gráficos, videos u otro material ("Contenido"). Eres 
                responsable del Contenido que publiques en o a través del Servicio, incluyendo su legalidad, 
                confiabilidad y apropiación.
              </p>
              
              <p>
                Al publicar Contenido en o a través del Servicio, representas y garantizas que:
              </p>
              <ul className="space-y-2 dark:text-gray-300">
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Eres propietario del Contenido</strong> - El Contenido es tuyo (eres su propietario) o tienes derecho a usarlo y concedernos los derechos y licencias proporcionados en estos Términos.
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>No hay violación de derechos</strong> - La publicación de tu Contenido no viola los derechos de privacidad, derechos de publicidad, derechos de autor, derechos contractuales ni ningún otro derecho de cualquier persona.
                </li>
              </ul>
            </div>
            
            <h2 id="conducta-prohibida" className="text-primary-foreground">Conducta Prohibida</h2>
            <div className="space-y-4">
              <p>Aceptas no participar en ninguna de las siguientes actividades prohibidas:</p>
              <div className="rounded-lg border p-4 bg-muted/30 dark:bg-gray-800/30 dark:border-gray-700">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Actividades ilegales</strong> - Usar el Servicio para cualquier propósito ilegal o en violación de cualquier ley local, estatal, nacional o internacional</li>
                  <li><strong>Acoso</strong> - Acosar, amenazar o intimidar a cualquier otro usuario</li>
                  <li><strong>Suplantación</strong> - Suplantar a otra persona o entidad</li>
                  <li><strong>Contenido ofensivo</strong> - Publicar contenido que sea ofensivo, difamatorio, obsceno o de otra manera objetable</li>
                  <li><strong>Uso bajo intoxicación</strong> - Usar el Servicio mientras esté intoxicado o bajo la influencia de sustancias</li>
                  <li><strong>Prácticas inseguras</strong> - Fomentar prácticas de consumo de alcohol inseguras</li>
                  <li><strong>Elusión de seguridad</strong> - Intentar eludir cualquier característica de seguridad del Servicio</li>
                  <li><strong>Múltiples cuentas</strong> - Crear múltiples cuentas con el propósito de abusar de promociones o evadir prohibiciones</li>
                </ul>
              </div>
            </div>
            
            <h2 id="propiedad-intelectual" className="text-primary-foreground">Propiedad Intelectual</h2>
            <div className="space-y-4">
              <p>
                El Servicio y su contenido original (excluyendo el Contenido proporcionado por usuarios), 
                características y funcionalidad son y seguirán siendo propiedad exclusiva de Tippsy y sus 
                licenciantes.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  El Servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de 
                  los Estados Unidos como de países extranjeros. <strong>Nuestras marcas registradas y vestimenta 
                  comercial no pueden ser utilizadas</strong> en conexión con ningún producto o servicio sin el 
                  consentimiento previo por escrito de Tippsy.
                </p>
              </div>
            </div>
            
            <h2 id="enlaces-a-otros-sitios-web" className="text-primary-foreground">Enlaces a Otros Sitios Web</h2>
            <div className="space-y-4">
              <p>
                Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son 
                propiedad ni están controlados por Tippsy.
              </p>
              
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="mb-0">
                  <strong>Tippsy no tiene control sobre, y no asume responsabilidad por</strong>, el contenido, políticas de 
                  privacidad o prácticas de cualquier sitio web o servicio de terceros. Además, reconoces y 
                  aceptas que Tippsy no será responsable, directa o indirectamente, por cualquier daño o pérdida 
                  causado o supuestamente causado por o en conexión con el uso o la confianza en cualquier 
                  contenido, bienes o servicios disponibles en o a través de cualquier sitio web o servicio.
                </p>
              </div>
            </div>
            
            <h2 id="terminacion" className="text-primary-foreground">Terminación</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>Podemos terminar o suspender tu cuenta inmediatamente</strong>, sin previo aviso o responsabilidad, 
                  por cualquier razón, incluyendo, sin limitación, si incumples los Términos.
                </p>
              </div>
              
              <p>
                Tras la terminación, tu derecho a usar el Servicio cesará inmediatamente. Si deseas terminar 
                tu cuenta, puedes simplemente dejar de usar el Servicio.
              </p>
            </div>
            
            <h2 id="limitacion-de-responsabilidad" className="text-primary-foreground">Limitación de Responsabilidad</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="font-medium mb-0">
                  <strong>En la máxima medida permitida por la ley aplicable</strong>, en ningún caso Tippsy, sus afiliados, 
                  agentes, directores, empleados, proveedores o licenciantes serán responsables por cualquier 
                  daño indirecto, punitivo, incidental, especial, consecuente o ejemplar, incluyendo sin 
                  limitación, daños por pérdida de beneficios, buena voluntad, uso, datos u otras pérdidas 
                  intangibles, que surjan de o estén relacionadas con tu uso, o incapacidad para usar, el Servicio.
                </p>
              </div>
            </div>
            
            <h2 id="exenciones-de-responsabilidad" className="text-primary-foreground">Exenciones de Responsabilidad</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>Tu uso del Servicio es a tu propio riesgo.</strong> El Servicio se proporciona "TAL CUAL" y "SEGÚN 
                  DISPONIBILIDAD". El Servicio se proporciona sin garantías de ningún tipo, ya sean expresas o 
                  implícitas, incluyendo, pero no limitado a, garantías implícitas de comerciabilidad, idoneidad 
                  para un propósito particular, no infracción o curso de rendimiento.
                </p>
              </div>
              
              <p>
                Tippsy, sus subsidiarias, afiliados y sus licenciantes no garantizan que:
              </p>
              
              <ul className="space-y-2 dark:text-gray-300 grid gap-2 sm:grid-cols-2">
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Servicio continuo</strong> - El Servicio funcionará ininterrumpido, seguro o disponible en cualquier momento o ubicación particular
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Corrección de errores</strong> - Cualquier error o defecto será corregido
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Garantías de seguridad</strong> - El Servicio está libre de virus u otros componentes dañinos
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Satisfacción</strong> - Los resultados de usar el Servicio cumplirán con tus requisitos
                </li>
              </ul>
            </div>
            
            <h2 id="ley-aplicable" className="text-primary-foreground">Ley Aplicable</h2>
            <div className="space-y-4">
              <p>
                Estos Términos se regirán y construirán de acuerdo con las leyes de los Estados Unidos, 
                sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  Nuestro incumplimiento en hacer valer cualquier derecho o disposición de estos Términos no se 
                  considerará una renuncia a esos derechos. Si alguna disposición de estos Términos se considera 
                  inválida o inaplicable por un tribunal, las disposiciones restantes de estos Términos 
                  permanecerán en vigor.
                </p>
              </div>
            </div>
            
            <h2 id="responsabilidad-con-el-alcohol" className="text-primary-foreground">Responsabilidad con el Alcohol</h2>
            <div className="space-y-4">
              <p>
                Tippsy promueve el consumo responsable y no fomenta el consumo excesivo o de menores de edad. 
                Se espera que los usuarios beban responsablemente y de acuerdo con las leyes y regulaciones locales.
              </p>
              
              <div className="rounded-lg border bg-red-50 dark:bg-red-950/30 p-4 shadow-sm border-red-200 dark:border-red-900/50">
                <p className="font-medium mb-0">
                  <strong>Tippsy no es responsable por cualquier daño o responsabilidad que pueda surgir del mal uso del 
                  alcohol o intoxicación. Al usar nuestro Servicio, aceptas usar el alcohol responsablemente y 
                  nunca conducir bajo los efectos del alcohol.</strong>
                </p>
              </div>
            </div>
            
            <h2 id="cambios-a-los-terminos" className="text-primary-foreground">Cambios a los Términos</h2>
            <div className="space-y-4">
              <p>
                Nos reservamos el derecho, a nuestro único criterio, de modificar o reemplazar estos Términos 
                en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días 
                de aviso antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material 
                será determinado a nuestro único criterio.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  Al continuar accediendo o usando nuestro Servicio después de que esas revisiones entren en vigor, 
                  aceptas estar sujeto a los términos revisados. Si no estás de acuerdo con los nuevos términos, 
                  por favor deja de usar el Servicio.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10 dark:bg-gray-900 dark:border-gray-800">
              <h2 id="contactanos" className="mt-0 font-bold text-2xl">Contáctanos</h2>
              <p className="mb-2">
                Si tienes alguna pregunta sobre estos Términos, contáctanos en:
              </p>
              <p className="mb-0">
                <a href="mailto:legal@tippsy.app" className="text-primary hover:underline font-medium text-lg">legal@tippsy.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 