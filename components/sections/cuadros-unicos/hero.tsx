import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Lo que aporta cada tecnica, en una palabra. */
const HINTS: Record<string, string> = {
  vinilo: "Impresión",
  resina: "Brillo",
  led: "Luz",
  personalizados: "Medida",
};

/**
 * Portada del sistema blanco y negro.
 *
 * Una retícula estricta, Geist en tamaños de afiche y una pieza real del
 * taller como única imagen. El epígrafe negro bajo la foto anticipa la
 * vidriera y ordena la lectura como una ficha técnica.
 */
export function CuadrosUnicosHero() {
  const { hero, pageTechniques } = siteConfig.cuadrosUnicos;

  return (
    <section className="bg-[var(--cu-paper)]">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="flex items-center justify-between border-b border-[var(--cu-rule)] pb-4 font-cu-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cu-ink-soft)]">
          <span>Cuadros Únicos</span>
          <span className="hidden sm:inline">Piezas personalizadas — CABA</span>
          <span className="sm:hidden">CABA</span>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="font-cu-sans text-[clamp(2.85rem,9vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[var(--cu-ink)]">
              Una imagen.
              <br />
              Un cuadro.
              <br />
              Una pieza única.
            </h1>

            <p className="mt-9 max-w-md text-base leading-relaxed text-[var(--cu-ink-soft)] sm:text-lg">
              {siteConfig.cuadrosUnicos.pageDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contacto-cuadros"
                className="group inline-flex items-center gap-3 bg-[var(--cu-ink)] px-6 py-4 text-sm font-medium text-[var(--cu-paper)] transition-colors hover:bg-[#292929] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
              >
                Quiero el mío
                <ArrowDownRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none"
                  aria-hidden
                />
              </a>
              <a
                href="#vidriera"
                className="text-sm font-medium text-[var(--cu-ink)] underline decoration-[var(--cu-rule)] underline-offset-4 transition-colors hover:decoration-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
              >
                Ver las piezas
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--cu-rule)]">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 bg-[var(--cu-ink)] px-4 py-3 text-[var(--cu-paper)]">
              <span className="font-cu-mono text-[10px] uppercase tracking-[0.16em]">
                {hero.title} — {hero.technique}
              </span>
              <span className="font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                Pieza destacada
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Índice de técnicas, como el lomo de un catálogo. */}
      <div className="border-y border-[var(--cu-rule)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {pageTechniques.map((technique, index) => (
              <li
                key={technique.slug}
                className={cn(
                  "flex items-baseline justify-between gap-4 border-[var(--cu-rule)] py-5 pr-4",
                  index < 2 && "border-b md:border-b-0",
                  "md:border-r md:px-6 md:last:border-r-0 md:last:pr-0 md:first:pl-0",
                )}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-cu-mono text-[10px] tracking-[0.16em] text-[var(--cu-ink-soft)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-cu-sans text-lg font-medium tracking-[-0.02em] text-[var(--cu-ink)]">
                    {technique.name}
                  </span>
                </div>
                <span className="hidden font-cu-mono text-[10px] uppercase tracking-[0.14em] text-[var(--cu-ink-soft)] md:block">
                  {HINTS[technique.slug]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
