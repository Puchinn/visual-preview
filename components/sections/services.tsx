import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

export function Services() {
  return (
    <section className="relative w-full pt-1 lg:pb-0 bg-black pb-3 mt-10">
      <h2 className="sr-only">Productos y Servicios</h2>
      <div
        style={{
          clipPath: "polygon(100% 0, 0 0, 50% 82%)",
        }}
        className="absolute hidden max-h-max inset-0 lg:flex z-10 items-start justify-center"
      >
        <div
          className="w-full shadow-2xl z-10 h-[200px] bg-black"
          style={{
            clipPath: "polygon(100% 0, 0 0, 50% 75%)",
          }}
        ></div>
        <div
          className="w-full absolute h-[200px] bg-white opacity-90"
          style={{
            clipPath: "polygon(100% 0, 0 0, 50% 77%)",
          }}
        ></div>
      </div>

      <Carousel
        opts={{
          align: "center",
        }}
        className="bg-white"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="w-full mx-auto gap-x-1 h-full lg:overflow-hidden min-h-[85dvh] bg-white text-white">
          <ServiceCard
            src="1"
            href="/servicios/vinilos-y-vidrieras"
            label="Vinilos y vidrieras"
            description="Vinilos y vidrieras de excelente calidad con tintas base solvente, resistentes a rayos UV."
          />
          <ServiceCard
            src="2"
            href="/servicios/montados"
            label="Montados"
            description="Montados de excelente calidad con tintas base solvente, resistentes a rayos UV."
          />
          <ServiceCard
            src="3"
            href="/servicios/banners-y-carteleria"
            label="Banners y carteleria"
            description="Banners en lona para colocar varillas o portabanners. Impresiones de excelente calidad con tintas base solvente, resistentes a rayos UV."
          />
          <ServiceCard
            src="4"
            href="/servicios/grafica-vehicular"
            label="Grafica vehicular"
            description="Realizada con vinilo de alta durabilidad o promocionales. Con protección UV adaptable a cualquier transporte vehicular, publicando y realizando la imagen de su empresa."
          />
          <ServiceCard
            src="5"
            href="/servicios/corporeos"
            label="Corporeos"
            description=" Realizamos corpóreos en distintos materiales y espesores como Polyfan, fibrofácil, PVC espumado y acrílico. Logotipos y letras corpóreas: laminados, adhesivos y montajes."
          />
        </CarouselContent>
      </Carousel>
      {/* <div className="w-full overflow-hidden h-full min-h-[80dvh] flex gap-1 bg-white text-white"></div> */}
    </section>
  );
}

function ServiceCard({
  src,
  href,
  label,
  description,
}: {
  src: string;
  href: string;
  label: string;
  description: string;
}) {
  return (
    <CarouselItem className="relative group md:hover:basis-[50%] cursor-pointer group duration-700 transition-all text-center basis-[80%] lg:flex-[100%] md:basis-[45%] lg:hover:flex-[120%]">
      <Link href={href}>
        <article className="relative h-full w-full">
          <h3 className="sr-only">{label}</h3>
          <p className="sr-only">{description}</p>
          <Image
            className="object-cover w-full h-full"
            src={`/imagenes-servicios/${src}.webp`}
            alt={label}
            title={label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </article>

        <div className="absolute inset-0">
          <Image
            className="duration-300 object-cover transition-all opacity-0 translate-y-[500px] group-hover:opacity-100 group-hover:translate-y-0"
            src={`/imagenes-servicios/hover/${src}.webp`}
            alt={label}
            title={label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </CarouselItem>
  );
}
