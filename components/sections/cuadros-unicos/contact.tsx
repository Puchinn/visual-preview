import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const MAPS = "https://maps.app.goo.gl/nXnfhEQs8aqLt9aB9";

/**
 * Cierre en papel: la tipografía grande y el panel negro con los datos
 * directos. La inversión fuerte de la página queda en la vidriera; acá el
 * negro aparece como una ficha de contacto.
 */
export function CuadrosUnicosContact() {
  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros
  )}`;

  return (
    <section
      id="contacto-cuadros"
      className="scroll-mt-24 border-t border-[var(--cu-rule)] bg-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cu-ink-soft)]">
              04 / Contacto
            </p>
            <h2 className="mt-5 font-cu-sans text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[var(--cu-ink)]">
              ¿Qué querés
              <br />
              colgar?
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--cu-ink-soft)] sm:text-lg">
              Mandanos la imagen, la medida y dónde va. Te respondemos con
              los materiales, el plazo y el precio. También podés pasar por
              el local a ver las piezas en persona.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[var(--cu-ink)] px-6 py-4 text-sm font-medium text-[var(--cu-paper)] transition-colors hover:bg-[#292929] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
              >
                <MessageCircle className="size-4" aria-hidden />
                Escribinos por WhatsApp
              </a>
              <a
                href={siteConfig.cuadrosUnicos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--cu-ink)]/20 px-6 py-4 text-sm font-medium text-[var(--cu-ink)] transition-colors hover:border-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
              >
                <Instagram className="size-4" aria-hidden />
                @cuadrosunicos
              </a>
            </div>

            <p className="mt-6 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink-soft)]">
              Respondemos de lunes a viernes, de 9 a 18 hs.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[var(--cu-ink)] p-7 text-[var(--cu-paper)] lg:p-9">
              <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Visitanos / Escribinos
              </p>

              <dl className="mt-7 border-t border-white/15">
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-white/15 py-4">
                  <dt className="font-cu-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                    Local
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-white/85">
                    Santiago del Estero 330, CABA
                  </dd>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-white/15 py-4">
                  <dt className="font-cu-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                    Teléfono
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-white/85">
                    <a
                      href="tel:+5491143829100"
                      className="transition-colors hover:text-white"
                    >
                      (011) 4382-9100
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-white/15 py-4">
                  <dt className="font-cu-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                    Email
                  </dt>
                  <dd className="min-w-0 break-words text-[15px] leading-relaxed text-white/85">
                    <a
                      href={siteConfig.links.mail}
                      className="transition-colors hover:text-white"
                    >
                      info@visuald.com.ar
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-white/15 py-4">
                  <dt className="font-cu-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                    Horario
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-white/85">
                    Lunes a viernes, 9 a 18 hs
                  </dd>
                </div>
              </dl>

              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Cómo llegar
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
