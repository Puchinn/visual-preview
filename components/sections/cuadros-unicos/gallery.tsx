"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Piece = {
  src: string;
  title: string;
  technique: string;
  alt: string;
};

/**
 * La vidriera como una pared negra: piezas reales en gris, epígrafes en
 * Geist Mono y una retícula de tres columnas con corrimientos verticales.
 * El visor amplía la pieza y permite recorrer la serie con las flechas.
 */
export function CuadrosUnicosGallery({
  pieces,
  instagram,
}: {
  pieces: Piece[];
  instagram: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? null : (current + 1) % pieces.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? null
            : (current - 1 + pieces.length) % pieces.length
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, pieces.length]);

  if (pieces.length === 0) {
    return null;
  }

  const current = active === null ? null : pieces[active];

  return (
    <section
      id="vidriera"
      className="scroll-mt-24 bg-[var(--cu-ink)] text-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              03 / Vidriera
            </p>
            <h2 className="mt-4 font-cu-sans text-[clamp(3rem,6.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Piezas
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base leading-relaxed text-white/60">
              Una selección de piezas reales del taller. La luz, la resina y
              el marco cambian según el lugar; por eso conviene verlas en
              persona.
            </p>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Ver más en Instagram
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          {pieces.map((piece, index) => (
            <figure
              key={piece.src}
              className={cn(
                "group",
                index % 3 === 1 && "lg:mt-16",
                index % 3 === 2 && "lg:mt-32"
              )}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ampliar ${piece.title} — ${piece.technique}`}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5">
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover grayscale opacity-95 transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
              </button>

              <figcaption className="mt-4 flex items-start justify-between gap-4 border-t border-white/15 pt-3">
                <div>
                  <p className="font-cu-sans text-base font-medium tracking-[-0.02em]">
                    {piece.title}
                  </p>
                  <p className="mt-1 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {piece.technique}
                  </p>
                </div>
                <span className="font-cu-mono text-[10px] tracking-[0.16em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/15 pt-5 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
          <span>Cuadros Únicos / Selección</span>
          <span>{String(pieces.length).padStart(2, "0")} piezas</span>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada: ${current.title}`}
          className="fixed inset-0 z-[70] flex flex-col bg-[var(--cu-ink)] text-white"
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              Pieza {String((active ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(pieces.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setActive(null)}
              aria-label="Cerrar"
              className="p-2 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1200}
              height={1600}
              className="h-auto max-h-full w-auto max-w-full object-contain grayscale"
            />
          </div>

          <div
            className="flex items-end justify-between gap-6 border-t border-white/15 px-5 py-5 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div>
              <p className="font-cu-sans text-xl font-medium tracking-[-0.02em]">
                {current.title}
              </p>
              <p className="mt-1 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                {current.technique}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Pieza anterior"
                onClick={() =>
                  setActive((value) =>
                    value === null
                      ? null
                      : (value - 1 + pieces.length) % pieces.length
                  )
                }
                className="border border-white/20 p-2.5 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Pieza siguiente"
                onClick={() =>
                  setActive((value) =>
                    value === null ? null : (value + 1) % pieces.length
                  )
                }
                className="border border-white/20 p-2.5 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
