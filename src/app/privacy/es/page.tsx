import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getPrivacyMetadata } from "@/lib/metadata"

export const metadata: Metadata = getPrivacyMetadata({ locale: "es" });

export default function PrivacyPolicyES() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Política de Privacidad</h1>
            <p className="text-muted-foreground mb-4">Última Actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <div className="flex gap-3 mt-4">
              <Link href="/privacy" className="text-sm text-primary hover:underline">English</Link>
              <span className="text-sm font-semibold">Español</span>
            </div>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <p className="lead text-lg dark:text-gray-200">
              Por favor, lee esta Política de Privacidad cuidadosamente antes de usar la aplicación móvil 
              y el sitio web de Tippsy (el "Servicio") operado por Tippsy ("nosotros", "nos" o "nuestro").
            </p>
            
            <p className="mb-6">
              Esta Política de Privacidad describe cómo recopilamos, usamos y compartimos tu información 
              personal cuando utilizas nuestro Servicio y las opciones que tienes asociadas con esa información.
            </p>
            
            <div className="my-8 rounded-lg border bg-amber-50 dark:bg-amber-950/50 p-6 shadow-sm dark:border-amber-900/50">
              <p className="font-medium mb-0 text-lg">
                <strong>Al usar nuestro Servicio, aceptas la recopilación y el uso de información de acuerdo 
                con esta política. Si no estás de acuerdo con alguna parte de esta política, 
                entonces no puedes usar nuestro Servicio.</strong>
              </p>
            </div>
            
            <h2 id="informacion-que-recopilamos" className="text-primary-foreground">Información que Recopilamos</h2>
            <p>
              Recopilamos varios tipos de información para proporcionar y mejorar nuestro Servicio para ti:
            </p>
            
            <h3 id="informacion-personal">Información Personal</h3>
            <p>
              Al utilizar nuestro Servicio, podemos solicitarte que nos proporciones cierta información 
              personalmente identificable que se puede utilizar para contactarte o identificarte 
              ("Información Personal"). Esta información puede incluir, pero no se limita a:
            </p>
            <ul className="space-y-2 dark:text-gray-300">
              <li><strong>Información de contacto</strong> - Dirección de correo electrónico, número de teléfono y nombre</li>
              <li><strong>Información de perfil</strong> - Edad, foto de perfil, intereses y preferencias</li>
              <li><strong>Información de ubicación</strong> - Con tu consentimiento, podemos acceder a tu ubicación para mostrarte bares y eventos cercanos</li>
              <li><strong>Información del dispositivo</strong> - Tipo de dispositivo, sistema operativo y otra información técnica</li>
            </ul>
            
            <h3 id="registro-de-uso">Registro de Uso</h3>
            <p>
              También recopilamos información sobre cómo accedes y utilizas nuestro Servicio 
              ("Registro de Uso"). Este Registro de Uso puede incluir información como la dirección 
              de Protocolo de Internet de tu computadora, tipo de navegador, versión del navegador, 
              las páginas de nuestro Servicio que visitas, la hora y fecha de tu visita, el tiempo que 
              pasas en esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
            </p>
            
            <h2 id="como-usamos-tu-informacion" className="text-primary-foreground">Cómo Usamos Tu Información</h2>
            <div className="space-y-4">
              <p>
                Utilizamos la información que recopilamos de varias formas, incluyendo:
              </p>
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Proporcionar y mantener nuestro Servicio</strong> - Para operar nuestra plataforma y ofrecerte nuestros servicios</li>
                  <li><strong>Mejorar nuestro Servicio</strong> - Para entender cómo nuestros usuarios utilizan el Servicio y mejorar la experiencia</li>
                  <li><strong>Personalizar tu experiencia</strong> - Para recomendarte bares, eventos y conectarte con personas basadas en tus preferencias</li>
                  <li><strong>Comunicarnos contigo</strong> - Para responderte cuando nos contactas y enviarte actualizaciones sobre el Servicio</li>
                  <li><strong>Seguridad</strong> - Para proteger nuestro Servicio y garantizar la seguridad de nuestros usuarios</li>
                  <li><strong>Marketing</strong> - Con tu consentimiento, podemos enviarte comunicaciones de marketing sobre nuestros servicios</li>
                  <li><strong>Cumplimiento legal</strong> - Para cumplir con las leyes y regulaciones aplicables</li>
                </ul>
              </div>
            </div>
            
            <h2 id="compartiendo-tu-informacion" className="text-primary-foreground">Compartiendo Tu Información</h2>
            <div className="space-y-4">
              <p>
                Podemos compartir tu información en las siguientes situaciones:
              </p>
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <ul className="space-y-2 dark:text-gray-300">
                  <li><strong className="block text-lg mb-1">Con otros usuarios</strong>
                    <p className="mt-0">Tu perfil público y la información que elijas compartir serán visibles para otros usuarios de la aplicación</p>
                  </li>
                  <li><strong className="block text-lg mb-1">Con proveedores de servicios</strong>
                    <p className="mt-0">Podemos compartir tu información con proveedores de servicios terceros para facilitar nuestro Servicio</p>
                  </li>
                  <li><strong className="block text-lg mb-1">Para transferencias de negocios</strong>
                    <p className="mt-0">Podemos compartir o transferir tu información en conexión con, o durante negociaciones de, cualquier fusión, venta de activos de la empresa, financiamiento o adquisición</p>
                  </li>
                  <li><strong className="block text-lg mb-1">Con tu consentimiento</strong>
                    <p className="mt-0">Podemos divulgar tu información personal para cualquier otro propósito con tu consentimiento</p>
                  </li>
                  <li><strong className="block text-lg mb-1">Por requerimientos legales</strong>
                    <p className="mt-0">Podemos divulgar tu información si creemos que es necesario para cumplir con una obligación legal</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 id="seguridad-de-datos" className="text-primary-foreground">Seguridad de Datos</h2>
            <div className="space-y-4">
              <p>
                La seguridad de tu información es importante para nosotros, pero recuerda que ningún método 
                de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
              </p>
              
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="mb-0">
                  <strong>Mientras nos esforzamos por utilizar medios comercialmente aceptables para proteger tu Información 
                  Personal</strong>, no podemos garantizar su seguridad absoluta.
                </p>
              </div>
            </div>
            
            <h2 id="cookies-y-tecnologias-de-seguimiento" className="text-primary-foreground">Cookies y Tecnologías de Seguimiento</h2>
            <p>
              Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en 
              nuestro Servicio y mantener cierta información. Las cookies son archivos con una pequeña 
              cantidad de datos que pueden incluir un identificador único anónimo.
            </p>
            
            <p>
              Puedes instruir a tu navegador para que rechace todas las cookies o para que te avise cuando 
              se envía una cookie. Sin embargo, si no aceptas cookies, es posible que no puedas utilizar 
              algunas partes de nuestro Servicio.
            </p>
            
            <h2 id="tus-derechos-de-privacidad" className="text-primary-foreground">Tus Derechos de Privacidad</h2>
            <div className="space-y-4">
              <p>
                Dependiendo de tu ubicación, puedes tener ciertos derechos relacionados con tu información 
                personal, como:
              </p>
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Derecho de acceso</strong> - El derecho a solicitar copias de tu información personal</li>
                  <li><strong>Derecho de rectificación</strong> - El derecho a solicitar que corrijamos información que creas que es inexacta o incompleta</li>
                  <li><strong>Derecho de eliminación</strong> - El derecho a solicitar que eliminemos tu información personal</li>
                  <li><strong>Derecho a restringir el procesamiento</strong> - El derecho a solicitar que restrinjamos el procesamiento de tu información personal</li>
                  <li><strong>Derecho a la portabilidad de datos</strong> - El derecho a solicitar que transfiramos la información que has proporcionado a otra organización o a ti</li>
                </ul>
              </div>
              
              <p>
                Si deseas ejercer alguno de estos derechos, contáctanos a través de la información 
                proporcionada al final de esta política.
              </p>
            </div>
            
            <h2 id="privacidad-de-menores" className="text-primary-foreground">Privacidad de Menores</h2>
            <div className="space-y-4">
              <p>
                Nuestro Servicio no está dirigido a personas menores de 21 años en los Estados Unidos o 
                por debajo de la edad legal para consumir alcohol en otras jurisdicciones.
              </p>
              
              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4 shadow-sm border-amber-200 dark:border-amber-900/50">
                <p className="font-medium mb-0">
                  <strong>No recopilamos a sabiendas información personalmente identificable de cualquier persona menor de esta edad.</strong> 
                  Si eres padre/madre o tutor y sabes que tu hijo nos ha proporcionado Información Personal, 
                  por favor contáctanos para que podamos tomar las medidas necesarias.
                </p>
              </div>
            </div>
            
            <h2 id="cambios-a-esta-politica" className="text-primary-foreground">Cambios a Esta Política</h2>
            <div className="space-y-4">
              <p>
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos 
                cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando 
                la fecha de "Última Actualización" en la parte superior.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>Se te aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.</strong> 
                  Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10 dark:bg-gray-900 dark:border-gray-800">
              <h2 id="contactanos" className="mt-0 font-bold text-2xl">Contáctanos</h2>
              <p className="mb-2">
                Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en:
              </p>
              <p className="mb-0">
                <a href="mailto:privacy@tippsy.app" className="text-primary hover:underline font-medium text-lg">privacy@tippsy.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 