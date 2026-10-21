import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Frame } from "./frame";
import { siteConfig } from "@/lib/site-config";

export function CuadrosUnicosHero() {
  return (
    <section className="relative overflow-hidden bg-gray-tone-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Pared de la sala: la textura va en vertical, como la luz rasante
          sobre un colgado de galería. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 5px)",
        }}
      />
      {/* Luz cálida que baja desde el techo de la sala. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(224,163,60,0.13), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <p className="mb-8 flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-px w-8 bg-primary"
            />
            <span className="text-sm font-light tracking-[0.28em] text-gray-tone-2 uppercase">
              Submarca de{" "}
              <span className="text-white">Visual Design</span>
            </span>
          </p>

          {/* El logo real de la submarca. Es un wordmark con corchetes que
              enmarcan: por eso el fondo de la pagina es la pared y el
              bloque se lee como un cuadro colgado. */}
          <Image
            src={siteConfig.cuadrosUnicos.logo}
            alt="Cuadros Unicos"
            width={592}
            height={517}
            priority
            className="h-auto w-full max-w-[380px]"
          />

          <p className="mt-8 max-w-md text-lg leading-relaxed text-gray-tone-1">
            {siteConfig.cuadrosUnicos.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contacto-cuadros"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-medium text-gray-tone-4 transition-colors hover:bg-[#eeb34a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Quiero el mío
            </Link>

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

        {/* Muro de cuadros */}
        <div className="order-1 lg:order-2">
          {/* El padding inferior reserva el espacio que ocupa el desplazamiento
              vertical de los cuadros: si no, el marco de madera pisa las
              etiquetas de técnica. */}
          <div className="grid grid-cols-3 items-end gap-3 pb-6 sm:gap-5 sm:pb-8 lg:pb-0">
            <Frame
              src="/images/cuadros-unicos/1.webp"
              alt="Cuadro personalizado en marco negro"
              material="negro"
              ratio="3 / 4"
              className="translate-y-4 lg:translate-y-8"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Frame
              src="/images/cuadros-unicos/3.webp"
              alt="Cuadro en resina con marco de aluminio"
              material="aluminio"
              ratio="3 / 4"
              sheen
              glow
              priority
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Frame
              src="/images/cuadros-unicos/5.webp"
              alt="Cuadro con marco de madera"
              material="madera"
              ratio="3 / 4"
              className="translate-y-6 lg:translate-y-12"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
          </div>

          {/* Etiquetas de técnica, como fichas de sala. */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-light tracking-[0.22em] text-gray-tone-2 uppercase sm:mt-12">
            {siteConfig.cuadrosUnicos.techniques.map((technique) => (
              <span key={technique.slug}>{technique.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
