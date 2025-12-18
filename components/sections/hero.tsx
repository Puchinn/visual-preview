"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

const titulos = [
  "GRAFICA DE GRAN FORMATO",
  "Impresión digital de gran tamaño",
  "Cartelería publicitaria",
  "Diseño gráfico profesional",
  "Visuales de alto impacto",
];

export function Hero() {
  return (
    <section className="min-h-[60vh] min-h-[60dvh] grid grid-cols-1 items-center max-h-max h-full overflow-hidden z-30 relative pt-16 pb-14 text-center">
      <div className="relative">
        <h2 className="sr-only">Presentación</h2>
        <p className="text-white text-[68px] leading-14 pb-5 xl:text-9xl font-dirtylane">
          Imprimimos Calidad, Al Mejor Costo.
        </p>
        <p className="sr-only">
          Soluciones en impresión para empresas y locales comerciales.
        </p>

        <div className="relative max-w-max mt-5 mx-auto py-1">
          <FlipWords
            className="text-white text-center uppercase text-xl xl:text-4xl font-archivo"
            words={titulos}
          />
          <div className="absolute inset-0 bg-primary "></div>
        </div>

        <InfiniteCarousel
          images={Array(7)
            .fill("")
            .map((_, index) => `/home-slider/${index + 1}.webp`)}
        />
      </div>
    </section>
  );
}

function InfiniteCarousel({
  images,
  speed = 40,
}: {
  images: string[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf: number;

    const step = () => {
      x -= speed / 60;

      track.style.transform = `translateX(${x}px)`;

      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const doubled = [...images, ...images];

  return (
    <div
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      className="overflow-hidden w-full mt-10 bg-white/85 p-1 max-w-3xl xl:max-w-5xl mx-auto"
    >
      <div ref={trackRef} className="flex w-max gap-1 select-none">
        {doubled.map((src, i) => (
          <div key={i} className="relative xl:h-48 h-32 w-auto aspect-video">
            <Image
              src={src}
              alt="carousel-item"
              title="carousel-item"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
