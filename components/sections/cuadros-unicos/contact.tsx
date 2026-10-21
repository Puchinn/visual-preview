import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CuadrosUnicosContact() {
  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros
  )}`;

  return (
    <section
      id="contacto-cuadros"
      className="scroll-mt-24 border-t border-white/10 bg-gray-tone-4 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h3 className="font-dirtylane text-[44px] leading-[0.95] sm:text-[64px]">
              ¿Lo armamos?
            </h3>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Contanos qué imagen tenés en mente y en qué la querés. Te
              respondemos con las medidas, los materiales disponibles y el
              valor. También podés pasar por el local a ver la vidriera.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#20BA5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="size-5" aria-hidden />
                Consultar por WhatsApp
              </a>

              <a
                href={siteConfig.cuadrosUnicos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Instagram className="size-5" aria-hidden />
                @cuadrosunicos
              </a>
            </div>
          </div>

          {/* Datos de contacto, en la misma línea que el resto del sitio. */}
          <dl className="grid content-start gap-6 border-l-0 border-white/10 pl-0 lg:border-l lg:pl-12">
            <div>
              <dt className="text-sm text-white/40">Local</dt>
              <dd className="mt-1 text-lg">Santiago del Estero 330, CABA</dd>
            </div>
            <div>
              <dt className="text-sm text-white/40">Teléfono</dt>
              <dd className="mt-1 text-lg">
                <a
                  href="tel:+5491143829100"
                  className="transition-colors hover:text-primary-light"
                >
                  (011) 4382-9100
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/40">Email</dt>
              <dd className="mt-1 text-lg">
                <a
                  href="mailto:info@visuald.com.ar"
                  className="transition-colors hover:text-primary-light"
                >
                  info@visuald.com.ar
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/40">Horario</dt>
              <dd className="mt-1 text-lg">Lunes a viernes, 9 a 18 hs</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
