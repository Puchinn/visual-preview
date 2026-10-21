"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/**
 * La vidriera como un pliego de laminas: piezas sin marco, epigrafe con
 * filete y una grilla asimetrica para que el conjunto respire como una
 * pagina armada a mano y no como una grilla de tarjetas.
 */
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

const RATIOS = [
  "4 / 3",
  "4 / 5",
  "4 / 5",
  "4 / 5",
  "4 / 5",
  "4 / 5",
  "4 / 3",
  "4 / 3",
  "4 / 3",
  "4 / 5",
  "4 / 5",
  "4 / 5",
];

export function CuadrosUnicosGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  // Cerrar con Escape y bloquear el scroll del fondo mientras el visor
  // esta abierto.
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  if (images.length === 0) {
    return null;
  }

  const tecnicas = siteConfig.cuadrosUnicos.techniques;

  return (
    <section
      id="vidriera"
      className="scroll-mt-24 border-t border-[var(--cu-rule)] bg-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-cu-display text-5xl leading-none text-[var(--cu-ink)] sm:text-6xl">
              La vidriera
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[var(--cu-ink-soft)]">
              Una muestra de lo que sale del taller. Pasá por el local a verlos
              en persona: la resina y la luz cambian según cómo les dé el
              ambiente.
            </p>
            <a
              href={siteConfig.cuadrosUnicos.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-[var(--cu-ink)] underline decoration-[var(--cu-rule)] underline-offset-4 transition-colors hover:decoration-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
            >
              Ver más en Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
          {images.map((src, i) => {
            const tecnica = tecnicas[i % tecnicas.length];
            const span = SPANS[i % SPANS.length];
            const ratio = RATIOS[i % RATIOS.length];

            return (
              <figure key={src} className={`col-span-1 ${span}`}>
                <button
                  type="button"
                  onClick={() => setActive(src)}
                  aria-label={`Ampliar lámina ${i + 1}: ${tecnica.name}`}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
                >
                  <div
                    className="relative w-full overflow-hidden bg-[var(--cu-rule)]"
                    style={{ aspectRatio: ratio }}
                  >
                    <Image
                      src={src}
                      alt={`Cuadro personalizado en ${tecnica.name.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                </button>

                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-[var(--cu-rule)] pt-3 text-xs text-[var(--cu-ink-soft)]">
                  <span>{tecnica.name}</span>
                  <span>Lámina {String(i + 1).padStart(2, "0")}</span>
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
          aria-label="Vista ampliada de la lámina"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--cu-paper)] p-4 sm:p-10"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            autoFocus
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 border border-[var(--cu-rule)] p-2 text-[var(--cu-ink)] transition-colors hover:bg-[var(--cu-ink)] hover:text-[var(--cu-paper)] focus-visible:outline-2 focus-visible:outline-[var(--cu-ink)] sm:right-8 sm:top-8"
            aria-label="Cerrar"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div
            className="relative max-h-full w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active}
              alt="Cuadro ampliado"
              width={1400}
              height={1400}
              className="mx-auto h-auto max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
