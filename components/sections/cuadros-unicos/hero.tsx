import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/** Lo que aporta cada tecnica, en una palabra. */
const HINTS: Record<string, string> = {
  resina: "Brillo",
  led: "Luz",
  marcos: "Montaje",
  medida: "Formato",
};

/**
 * Portada de la submarca, planteada como la tapa de un catalogo impreso:
 * una didone grande, una sola lamina y una linea de filetes con las
 * tecnicas. Nada de halos ni de color: el unico acento es la tinta.
 */
export function CuadrosUnicosHero() {
  return (
    <section className="bg-[var(--cu-paper)]">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-sm text-[var(--cu-ink-soft)]">
              Cuadros personalizados en resina, LED y marcos a medida
            </p>

            <h1 className="mt-8 font-cu-display text-[clamp(3.25rem,7.4vw,6.6rem)] leading-[0.9] tracking-[-0.02em] text-[var(--cu-ink)]">
              Tu imagen,{" "}
              <br />
              en un cuadro{" "}
              <br />
              que no se repite.
            </h1>

            <p className="mt-9 max-w-md text-lg leading-relaxed text-[var(--cu-ink-soft)]">
              {siteConfig.cuadrosUnicos.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contacto-cuadros"
                className="inline-flex items-center bg-[var(--cu-ink)] px-7 py-4 text-sm font-medium text-[var(--cu-paper)] transition-colors hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
              >
                Quiero el mío
              </a>
              <a
                href="#vidriera"
                className="text-sm text-[var(--cu-ink)] underline decoration-[var(--cu-rule)] underline-offset-4 transition-colors hover:decoration-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
              >
                Ver la vidriera
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--cu-rule)]">
              <Image
                src="/images/cuadros-unicos/1.webp"
                alt="Cuadro en resina con marco negro"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between border-t border-[var(--cu-rule)] pt-3 text-xs text-[var(--cu-ink-soft)]">
              <span>Resina, marco negro</span>
              <span>Lámina 01</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Indice de tecnicas, como el sumario de un catalogo. */}
      <div className="border-y border-[var(--cu-rule)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {siteConfig.cuadrosUnicos.techniques.map((technique) => (
              <li
                key={technique.slug}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--cu-rule)] px-4 py-5 first:pl-0 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-cu-display text-2xl text-[var(--cu-ink)]">
                  {technique.name}
                </span>
                <span className="hidden text-xs text-[var(--cu-ink-soft)] md:inline">
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
