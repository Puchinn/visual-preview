import { Frame } from "./frame";
import { siteConfig } from "@/lib/site-config";

/**
 * Cada técnica se ilustra con el mismo cuadro y distinto material, así se
 * entiende la diferencia mirando, no leyendo.
 */
const DEMOS: Record<
  string,
  { material: "negro" | "aluminio" | "madera"; mat: "blanco" | "negro" | "arena"; sheen: boolean; glow: boolean; matWidth: string }
> = {
  resina: { material: "negro", mat: "blanco", sheen: true, glow: false, matWidth: "6%" },
  led: { material: "negro", mat: "negro", sheen: false, glow: true, matWidth: "6%" },
  marcos: { material: "madera", mat: "arena", sheen: false, glow: false, matWidth: "10%" },
  medida: { material: "aluminio", mat: "blanco", sheen: false, glow: false, matWidth: "3%" },
};

const SRC: Record<string, string> = {
  resina: "/images/cuadros-unicos/2.webp",
  led: "/images/cuadros-unicos/7.webp",
  marcos: "/images/cuadros-unicos/4.webp",
  medida: "/images/cuadros-unicos/9.webp",
};

export function CuadrosUnicosTechniques() {
  return (
    <section className="bg-gray-tone-3 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <h3 className="font-dirtylane text-[44px] leading-[0.95] sm:text-[64px]">
            Cómo lo hacemos
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Cuatro formas de llegar al mismo resultado: una imagen tuya, bien
            impresa y bien montada.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.cuadrosUnicos.techniques.map((technique) => {
            const demo = DEMOS[technique.slug];
            return (
              <article key={technique.slug}>
                <Frame
                  src={SRC[technique.slug]}
                  alt={`Ejemplo de cuadro en ${technique.name}`}
                  material={demo.material}
                  mat={demo.mat}
                  sheen={demo.sheen}
                  glow={demo.glow}
                  matWidth={demo.matWidth}
                  ratio="4 / 5"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <h4 className="mt-6 font-dirtylane text-2xl leading-none">
                  {technique.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {technique.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
