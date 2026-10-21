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
            <p className="mb-5 flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-8 bg-primary" />
              <span className="text-xs font-light tracking-[0.28em] text-gray-tone-2 uppercase">
                Hablemos
              </span>
            </p>

            <h3 className="font-dirtylane text-[44px] leading-[0.95] sm:text-[64px]">
              ¿Lo{" "}
              <span className="italic text-primary">armamos</span>?
            </h3>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-tone-2">
              Contanos qué imagen tenés en mente y en qué la querés. Te
              respondemos con las medidas, los materiales disponibles y el
              valor. También podés pasar por el local a ver la vidriera.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#20BA5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle className="size-5" aria-hidden />
                Consultar por WhatsApp
              </a>

              <a
                href={siteConfig.cuadrosUnicos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-base font-light tracking-wide text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Instagram className="size-5" aria-hidden />
                @cuadrosunicos
              </a>
            </div>
          </div>

          {/* Datos de contacto, en la misma línea que el resto del sitio. */}
          <dl className="grid content-start gap-6 border-l-0 border-white/10 pl-0 lg:border-l lg:pl-12">
            <div>
              <dt className="text-xs font-light tracking-[0.2em] text-gray-tone-2 uppercase">
                Local
              </dt>
              <dd className="mt-1 text-lg font-light">Santiago del Estero 330, CABA</dd>
            </div>
            <div>
              <dt className="text-xs font-light tracking-[0.2em] text-gray-tone-2 uppercase">
                Teléfono
              </dt>
              <dd className="mt-1 text-lg font-light">
                <a
                  href="tel:+5491143829100"
                  className="transition-colors hover:text-primary"
                >
                  (011) 4382-9100
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-light tracking-[0.2em] text-gray-tone-2 uppercase">
                Email
              </dt>
              <dd className="mt-1 text-lg font-light">
                <a
                  href="mailto:info@visuald.com.ar"
                  className="transition-colors hover:text-primary"
                >
                  info@visuald.com.ar
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-light tracking-[0.2em] text-gray-tone-2 uppercase">
                Horario
              </dt>
              <dd className="mt-1 text-lg font-light">Lunes a viernes, 9 a 18 hs</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
