import { siteConfig } from "@/lib/site-config";

/** La faceta que describe cada tecnica en la ficha. */
const META: Record<string, string> = {
  resina: "Acabado",
  led: "Iluminación",
  marcos: "Montaje",
  medida: "Formato",
};

/**
 * Las técnicas como una matriz de fichas técnicas: retícula de filetes,
 * Geist Mono para los índices y el nombre en Geist. Sin tarjetas redondeadas
 * ni iconos; el sistema lo hace todo.
 */
export function CuadrosUnicosTechniques() {
  return (
    <section
      id="tecnicas"
      className="scroll-mt-24 border-t border-[var(--cu-rule)] bg-[var(--cu-gray)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cu-ink-soft)]">
              02 / Técnicas
            </p>
            <h2 className="mt-4 font-cu-sans text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[var(--cu-ink)]">
              Cuatro formas
              <br />
              de hacerlo tuyo.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[var(--cu-ink-soft)]">
              Cuatro formas de llegar al mismo resultado: una imagen tuya,
              bien impresa y bien montada. Se pueden combinar según la pieza
              y el lugar donde va.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-[var(--cu-rule)] sm:grid-cols-2 lg:mt-16">
          {siteConfig.cuadrosUnicos.techniques.map((technique, index) => (
            <article
              key={technique.slug}
              className="flex min-h-[250px] flex-col border-b border-r border-[var(--cu-rule)] p-6 lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-cu-mono text-[10px] tracking-[0.18em] text-[var(--cu-ink-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-[var(--cu-ink-soft)]">
                  {META[technique.slug]}
                </span>
              </div>

              <h3 className="mt-12 font-cu-sans text-3xl font-medium tracking-[-0.035em] text-[var(--cu-ink)]">
                {technique.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--cu-ink-soft)]">
                {technique.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink-soft)]">
          Se pueden combinar. La medida manda.
        </p>
      </div>
    </section>
  );
}
