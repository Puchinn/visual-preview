import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";

export function Clients() {
  return (
    <section className="bg-white py-20">
      <h2 className="text-center text-primary pb-3 text-[68px] leading-14 lg:leading-none lg:text-9xl font-dirtylane">
        Nuestros Clientes
      </h2>
      <Carousel
        opts={{
          loop: true,
          dragFree: true,
        }}
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
          }),
        ]}
        className="lg:scale-75 mx-auto [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <CarouselContent className="items-center lg:scale-100 scale-[0.60] flex">
          <MyCarouselItem
            className="w-auto h-full"
            src="AIRBONE.png"
            description="AIRBONE"
          />
          <MyCarouselItem
            className="w-[250px] h-auto"
            src="AUSA-logo.svg"
            description="AUSA"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="DESI.png"
            description="DESI"
          />
          <MyCarouselItem
            className="w-[150px] h-auto"
            src="unica.png"
            description="UNICA"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="medicus-logo.png"
            description="MEDICUS"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="logo-bbva.png"
            description="BBVA"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="BRIOCHE DOREE.png"
            description="BRIOCHE DOREE"
          />
          <MyCarouselItem
            className="w-auto h-full object-contain"
            src="anses.png"
            description="ANSES"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="aca.png"
            description="ACA"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="bago.png"
            description="BAGO"
          />
          {/* <MyCarouselItem className="w-auto h-[70px]" src="bigbox.png" /> */}
          <MyCarouselItem
            className="w-auto h-full"
            src="coto.png"
            description="COTO"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="havana.png"
            description="HAVANA"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="honky-tank.png"
            description="HONKY TANK"
          />
          {/* <MyCarouselItem className="w-auto h-full" src="la-trastienda.png" /> */}
          {/* <MyCarouselItem className="w-auto h-full" src="metrovias.png" /> */}
          <MyCarouselItem
            className="w-auto h-full"
            src="portsaid.png"
            description="PORTSAID"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="provincia-seguros.png"
            description="PROVINCIA SEGUROS"
          />
          <MyCarouselItem
            className="w-auto h-full"
            src="senado-argentina.png"
            description="SENADO ARGENTINA"
          />
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function MyCarouselItem({
  src,
  className,
  width = 200,
  height = 200,
  description,
}: {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  description: string;
}) {
  return (
    <CarouselItem className="max-w-max lg:mr-[60px] mr-[40px] lg:ml-[30px] ml-[10px] w-full p-0 h-full grayscale-100 hover:grayscale-0">
      <Image
        width={width}
        height={height}
        alt={description}
        title={description}
        src={`/logos-clientes/${src}`}
        className={className}
      />
    </CarouselItem>
  );
}
