import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Bloque de CUADROS UNICOS en la home. Comparte paleta con el sitio pero se
 * diferencia por el tratamiento: a diferencia del resto de secciones, esta
 * tiene un marco alrededor, como si el cuadro estuviera colgado en la página.
 */
export function CuadrosUnicosBanner() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          {/* Composición de cuadros */}
          <div className="relative order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <FrameMock
                  src="/images/cuadros-unicos/6.webp"
                  alt="Cuadro en resina con marco negro"
                  material="#2b2b2b"
                  ratio="3 / 4"
                />
                <FrameMock
                  src="/images/cuadros-unicos/10.webp"
                  alt="Cuadro con marco de madera"
                  material="#6b4a2f"
                  ratio="1 / 1"
                />
              </div>
              <div className="space-y-4 pt-10 sm:space-y-6 sm:pt-16">
                <FrameMock
                  src="/images/cuadros-unicos/12.webp"
                  alt="Cuadro iluminado con LED"
                  material="#1c1c1c"
                  ratio="1 / 1"
                  glow
                />
                <FrameMock
                  src="/images/cuadros-unicos/8.webp"
                  alt="Cuadro con marco de aluminio"
                  material="#8e9094"
                  ratio="3 / 4"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.cuadrosUnicos.logo}
                alt=""
                width={58}
                height={41}
                className="h-auto w-[58px] shrink-0 invert"
              />
              <span className="text-sm text-gray-600">
                Submarca de{" "}
                <span className="font-semibold text-gray-tone-4">
                  Visual Design
                </span>
              </span>
            </div>

            <h2 className="mt-5 font-dirtylane text-[56px] leading-[0.92] text-gray-tone-4 sm:text-[80px]">
              Cuadros
              <br />
              <span className="text-primary">Únicos</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {siteConfig.cuadrosUnicos.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-tone-3">
              {siteConfig.cuadrosUnicos.techniques.map((technique) => (
                <li key={technique.slug}>{technique.name}</li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={siteConfig.cuadrosUnicos.path}
                className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-tone-4"
              >
                Conocer Cuadros Unicos
                <ArrowRight className="size-5" aria-hidden />
              </Link>

              <a
                href={siteConfig.cuadrosUnicos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-tone-3/25 px-7 py-3.5 text-base font-medium text-gray-tone-4 transition-colors hover:border-gray-tone-3/60 hover:bg-gray-tone-1/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-tone-4"
              >
                <Instagram className="size-5" aria-hidden />
                @cuadrosunicos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Versión en blanco del componente Frame, para la sección sobre fondo claro. */
function FrameMock({
  src,
  alt,
  material,
  ratio,
  glow = false,
}: {
  src: string;
  alt: string;
  material: string;
  ratio: string;
  glow?: boolean;
}) {
  return (
    <div className="relative" style={{ aspectRatio: ratio }}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-6 -bottom-4 -z-10 h-1/2 rounded-[50%] blur-2xl"
          style={{ background: "rgba(255,232,190,0.35)" }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: material,
          boxShadow: "0 16px 32px -12px rgba(0,0,0,0.45)",
        }}
      />

      <div
        className="absolute"
        style={{
          inset: "6%",
          background: "#f4f1ea",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25) inset",
        }}
      >
        <div className="absolute overflow-hidden" style={{ inset: "8%" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
