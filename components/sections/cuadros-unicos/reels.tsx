"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from "lucide-react";

export type Reel = {
  src: string;
  poster: string;
  duration: string;
};

/**
 * Reels verticales del taller: una tira horizontal de portadas 9:16 que se
 * desliza con snap y un visor a pantalla completa. Los videos se piden recién
 * cuando se abre el visor; la tira sólo carga posters.
 */
export function CuadrosUnicosReels({
  reels,
  instagram,
}: {
  reels: Reel[];
  instagram: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? null : (current + 1) % reels.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? null
            : (current - 1 + reels.length) % reels.length
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
  }, [active, reels.length]);

  if (reels.length === 0) {
    return null;
  }

  const current = active === null ? null : reels[active];

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-reel-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (card?.offsetWidth ?? track.clientWidth * 0.8) + gap;

    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section
      id="en-movimiento"
      className="scroll-mt-24 border-t border-[var(--cu-rule)] bg-[var(--cu-paper)] text-[var(--cu-ink)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cu-ink-soft)]">
              04 / En movimiento
            </p>
            <h2 className="mt-4 font-cu-sans text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
              Así se arman.
              <br />
              Así se ven.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[var(--cu-ink-soft)]">
              Videos cortos del taller: el vinilo UV, la resina y la luz en
              movimiento.
            </p>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink)] transition-colors hover:text-[var(--cu-ink-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
            >
              Ver más en Instagram
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-4 lg:mt-16">
          <p className="font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink-soft)]">
            Deslizá la tira / {String(reels.length).padStart(2, "0")} reels
          </p>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Reels anteriores"
              onClick={() => scrollTrack(-1)}
              className="border border-[var(--cu-ink)]/20 p-2.5 text-[var(--cu-ink)] transition-colors hover:border-[var(--cu-ink)] hover:bg-[var(--cu-ink)] hover:text-[var(--cu-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Reels siguientes"
              onClick={() => scrollTrack(1)}
              className="border border-[var(--cu-ink)]/20 p-2.5 text-[var(--cu-ink)] transition-colors hover:border-[var(--cu-ink)] hover:bg-[var(--cu-ink)] hover:text-[var(--cu-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {reels.map((reel, index) => (
            <figure
              key={reel.src}
              data-reel-card
              className="group w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Reproducir reel ${index + 1} de ${reels.length}`}
                className="relative block aspect-[9/16] w-full overflow-hidden bg-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
              >
                <Image
                  src={reel.poster}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />

                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
                />

                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-14 place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--cu-ink)]">
                    <Play className="size-5 fill-current" aria-hidden />
                  </span>
                </span>
              </button>

              <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-[var(--cu-rule)] pt-2 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink-soft)]">
                <span>Reel {String(index + 1).padStart(2, "0")}</span>
                <span>{reel.duration}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-[var(--cu-rule)] pt-5 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cu-ink-soft)]">
          <span>Cuadros Únicos / En movimiento</span>
          <span>{String(reels.length).padStart(2, "0")} videos</span>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Reel ${(active ?? 0) + 1} de ${reels.length}`}
          className="fixed inset-0 z-[70] flex flex-col bg-black text-white"
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              Reel {String((active ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(reels.length).padStart(2, "0")}
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
            className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[9/16] max-h-full max-w-full overflow-hidden bg-black">
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                aria-label={`Reel ${(active ?? 0) + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            className="flex items-center justify-between gap-6 border-t border-white/15 px-5 py-4 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
              Cuadros Únicos / En movimiento
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Reel anterior"
                onClick={() =>
                  setActive((value) =>
                    value === null
                      ? null
                      : (value - 1 + reels.length) % reels.length
                  )
                }
                className="border border-white/20 p-2.5 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Reel siguiente"
                onClick={() =>
                  setActive((value) =>
                    value === null ? null : (value + 1) % reels.length
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
