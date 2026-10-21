"use client";

import { useState } from "react";
import Image from "next/image";
import { Frame } from "./frame";
import { siteConfig } from "@/lib/site-config";

/**
 * Muro de cuadros. A diferencia de la galería de Imágenes masonry, cada
 * pieza se muestra enmarcada, que es como se vende realmente el producto.
 */
export function CuadrosUnicosGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-tone-4 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-dirtylane text-[44px] leading-[0.95] sm:text-[64px]">
              La vidriera
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Una muestra de lo que sale del taller. Pasá por el local a verlos
              en persona: los colores de la resina se ven distintos en persona
              que en una pantalla.
            </p>
          </div>

          <a
            href={siteConfig.cuadrosUnicos.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Ver más en Instagram
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              className="group text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label={`Ampliar cuadro ${i + 1}`}
            >
              <Frame
                src={src}
                alt={`Cuadro personalizado ${i + 1}`}
                material={i % 3 === 1 ? "madera" : i % 3 === 2 ? "aluminio" : "negro"}
                mat={i % 4 === 3 ? "arena" : "blanco"}
                sheen={i % 3 === 0}
                ratio="3 / 4"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-transform duration-500 group-hover:-translate-y-1.5"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 p-2 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
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
