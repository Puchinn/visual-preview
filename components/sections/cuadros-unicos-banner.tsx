import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface CuadroShowcasePiece {
  src: string;
  alt: string;
  title: string;
  technique: string;
  glow: string;
}

const PIECES: CuadroShowcasePiece[] = [
  {
    src: "/images/cuadros-unicos/piezas-color/sonic.webp",
    alt: "Cuadro de Sonic en vinilo UV con silueta iluminada por LED",
    title: "Sonic",
    technique: "Vinilo UV + LED",
    glow: "radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0) 70%)",
  },
  {
    src: "/images/cuadros-unicos/piezas-color/jack-daniels-1.webp",
    alt: "Cuadro de Jack Daniel's en vinilo UV con relieve y acabado en resina",
    title: "Jack Daniel's",
    technique: "Vinilo UV + Resina",
    glow: "radial-gradient(ellipse at center, rgba(217,119,6,0.25) 0%, rgba(217,119,6,0) 70%)",
  },
  {
    src: "/images/cuadros-unicos/piezas-color/acdc.webp",
    alt: "Cuadro de AC/DC en vinilo UV con logo iluminado por LED",
    title: "AC/DC",
    technique: "Vinilo UV + LED",
    glow: "radial-gradient(ellipse at center, rgba(220,38,38,0.32) 0%, rgba(220,38,38,0) 70%)",
  },
  {
    src: "/images/cuadros-unicos/piezas-color/messi-10.webp",
    alt: "Cuadro de Messi en vinilo UV con dorsal iluminado por LED",
    title: "Messi 10",
    technique: "Vinilo UV + LED",
    glow: "radial-gradient(ellipse at center, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 70%)",
  },
];

function PieceCard({ piece }: { piece: CuadroShowcasePiece }) {
  return (
    <Link
      href={siteConfig.cuadrosUnicos.path}
      className="group relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      aria-label={`Ver cuadro ${piece.title} — ${piece.technique}`}
    >
      {/* Resplandor LED / halo ambiental proyectado sobre la pared */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: piece.glow }}
      />

      {/* Panel del cuadro: pieza real sin marco con bordes limpios y profundidad física */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-900 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_42px_-10px_rgba(0,0,0,0.32)]">
        <Image
          src={piece.src}
          alt={piece.alt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Brillo de resina epóxica líquida al pasar el cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Etiqueta con la técnica de la pieza */}
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md shadow-xs sm:text-xs">
            {piece.technique}
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Bloque de CUADROS UNICOS en la home. Presenta a la submarca de piezas
 * personalizadas en vinilo UV, resina e iluminación LED, mostrando obras reales
 * del taller sin marcos.
 */
export function CuadrosUnicosBanner() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          {/* Composición de cuadros reales del taller */}
          <div className="relative order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <PieceCard piece={PIECES[0]} />
                <PieceCard piece={PIECES[1]} />
              </div>
              <div className="space-y-4 pt-10 sm:space-y-6 sm:pt-16">
                <PieceCard piece={PIECES[2]} />
                <PieceCard piece={PIECES[3]} />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.cuadrosUnicos.logoOscuro}
                alt="Cuadros Unicos"
                width={592}
                height={517}
                className="h-auto w-[104px] shrink-0"
              />
              <span className="text-sm text-gray-600">
                Submarca de{" "}
                <span className="font-semibold text-gray-tone-4">
                  Visual Design
                </span>
              </span>
            </div>

            <h2 className="mt-6 font-dirtylane text-[56px] leading-[0.92] text-gray-tone-4 sm:text-[80px]">
              Cuadros
              <br />
              <span className="text-primary">Únicos</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {siteConfig.cuadrosUnicos.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-tone-3">
              {siteConfig.cuadrosUnicos.techniques.map((technique) => (
                <li key={technique.slug} className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  {technique.name}
                </li>
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
                @cuadrosunicos_visual
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
