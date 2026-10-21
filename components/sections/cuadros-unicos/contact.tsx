import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Unica inversion de la pagina: tinta plena. Es el gesto fuerte del
 * recorrido y, a la vez, empalma con el footer para cerrar el catalogo.
 */
export function CuadrosUnicosContact() {
  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros
  )}`;

  return (
    <section
      id="contacto-cuadros"
      className="scroll-mt-24 bg-[var(--cu-ink)] text-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-cu-display text-6xl leading-[0.9] tracking-[-0.01em] sm:text-7xl lg:text-8xl">
              ¿Lo armamos?
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              Contanos qué imagen tenés en mente y en qué la querés. Te
              respondemos con las medidas, los materiales disponibles y el
              valor. También podés pasar por el local a ver la vidriera.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--cu-paper)] px-7 py-4 text-sm font-medium text-[var(--cu-ink)] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-paper)]"
              >
                <MessageCircle className="size-4" aria-hidden />
                Consultar por WhatsApp
              </a>

              <a
                href={siteConfig.cuadrosUnicos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-sm text-[var(--cu-paper)] transition-colors hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-paper)]"
              >
                <Instagram className="size-4" aria-hidden />
                @cuadrosunicos
              </a>
            </div>
          </div>

          <dl className="border-t border-white/20 lg:col-span-5">
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/20 py-5">
              <dt className="text-xs text-white/50">Local</dt>
              <dd className="text-base">Santiago del Estero 330, CABA</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/20 py-5">
              <dt className="text-xs text-white/50">Teléfono</dt>
              <dd className="text-base">
                <a
                  href="tel:+5491143829100"
                  className="transition-colors hover:text-white/70"
                >
                  (011) 4382-9100
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/20 py-5">
              <dt className="text-xs text-white/50">Email</dt>
              <dd className="text-base">
                <a
                  href={siteConfig.links.mail}
                  className="transition-colors hover:text-white/70"
                >
                  info@visuald.com.ar
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/20 py-5">
              <dt className="text-xs text-white/50">Horario</dt>
              <dd className="text-base">Lunes a viernes, 9 a 18 hs</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
