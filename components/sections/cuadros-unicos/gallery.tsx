"use client";

import { useState } from "react";
import Image from "next/image";
import { Frame, type FrameMaterial, type MatColor } from "./frame";
import { siteConfig } from "@/lib/site-config";

/**
 * El muro de la vidriera. Cada pieza cuelga de su alambre y lleva su
 * etiqueta de sala, como en una exposicion: el marco es el motivo de la
 * submarca, asi que se muestra la pieza colgada y no su contenido.
 */
const PIEZAS: { material: FrameMaterial; mat: MatColor; sheen: boolean }[] = [
  { material: "negro", mat: "blanco", sheen: true },
  { material: "madera", mat: "arena", sheen: false },
  { material: "aluminio", mat: "blanco", sheen: false },
  { material: "negro", mat: "negro", sheen: false },
  { material: "madera", mat: "blanco", sheen: true },
  { material: "aluminio", mat: "negro", sheen: false },
];

export function CuadrosUnicosGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  if (images.length === 0) {
    return null;
  }

  const tecnicas = siteConfig.cuadrosUnicos.techniques;

  return (
    <section className="bg-gray-tone-4 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-8 bg-primary" />
              <span className="text-xs font-light tracking-[0.28em] text-gray-tone-2 uppercase">
                La vidriera
              </span>
            </p>
            <h3 className="font-dirtylane text-[44px] leading-[0.95] sm:text-[64px]">
              Del taller a{" "}
              <span className="italic text-primary">la pared</span>
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-gray-tone-2">
              Una muestra de lo que sale del taller. Pasá por el local a verlos
              en persona: los colores de la resina se ven distintos en persona
              que en una pantalla.
            </p>
          </div>

          <a
            href={siteConfig.cuadrosUnicos.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light tracking-wide text-gray-tone-2 underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Ver más en Instagram
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 lg:grid-cols-3">
          {images.map((src, i) => {
            const pieza = PIEZAS[i % PIEZAS.length];
            const tecnica = tecnicas[i % tecnicas.length];

            return (
              <figure key={src} className="group">
                {/* Alambre: de la pared al cuadro. */}
                <div
                  aria-hidden
                  className="mx-auto mb-0 h-10 w-px bg-gradient-to-b from-transparent to-primary/50 transition-colors group-hover:to-primary"
                />

                <button
                  type="button"
                  onClick={() => setActive(src)}
                  className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={`Ampliar cuadro ${i + 1}`}
                >
                  <Frame
                    src={src}
                    alt={`Cuadro personalizado en ${tecnica.name.toLowerCase()}`}
                    material={pieza.material}
                    mat={pieza.mat}
                    sheen={pieza.sheen}
                    ratio="3 / 4"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="transition-transform duration-500 group-hover:-translate-y-1.5"
                  />
                </button>

                {/* Etiqueta de sala. */}
                <figcaption className="mt-5 flex items-baseline gap-3 border-t border-white/10 pt-3">
                  <span className="font-dirtylane text-lg leading-none">
                    {tecnica.name}
                  </span>
                  <span className="text-xs font-light tracking-[0.2em] text-gray-tone-2 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-tone-4/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 p-2 text-gray-tone-2 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
            aria-label="Cerrar"
          >
            <svg
              className="size-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active}
              alt="Cuadro ampliado"
              width={1200}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
