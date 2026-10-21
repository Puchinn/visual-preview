import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/**
 * Las tecnicas se presentan como un indice de catalogo: una fila por
 * tecnica, filete de por medio y una muestra chica a la derecha. Sin
 * tarjetas ni iconos: el papel hace de soporte.
 */
const SRC: Record<string, string> = {
  resina: "/images/cuadros-unicos/2.webp",
  led: "/images/cuadros-unicos/7.webp",
  marcos: "/images/cuadros-unicos/4.webp",
  medida: "/images/cuadros-unicos/9.webp",
};

export function CuadrosUnicosTechniques() {
  return (
    <section
      id="tecnicas"
      className="scroll-mt-24 border-t border-[var(--cu-rule)] bg-[var(--cu-white)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-cu-display text-5xl leading-none text-[var(--cu-ink)] sm:text-6xl">
              Técnicas
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--cu-ink-soft)]">
              Cuatro formas de llegar al mismo resultado: una imagen tuya,
              bien impresa y bien montada. Se pueden combinar.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-[var(--cu-rule)]">
              {siteConfig.cuadrosUnicos.techniques.map((technique) => (
                <li
                  key={technique.slug}
                  className="flex items-start gap-6 border-b border-[var(--cu-rule)] py-8 sm:gap-10"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-cu-display text-3xl leading-none text-[var(--cu-ink)] sm:text-4xl">
                      {technique.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--cu-ink-soft)]">
                      {technique.description}
                    </p>
                  </div>

                  <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-[var(--cu-rule)] sm:w-28">
                    <Image
                      src={SRC[technique.slug]}
                      alt={`Ejemplo de cuadro en ${technique.name}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
