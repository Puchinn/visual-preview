"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Button } from "./button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { UseEmblaCarouselType } from "embla-carousel-react";

interface Image {
  src: string;
  alt: string;
}
type EmblaCarouselType = UseEmblaCarouselType[1];

const images: Image[] = [
  {
    src: "/carousel-test/1.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/2.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/3.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/4.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/5.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/6.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/7.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/8.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/9.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/10.jpeg",
    alt: "",
  },
  {
    src: "/carousel-test/11.jpeg",
    alt: "",
  },
];

export function CarouselLastProjects() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  const onSelectImage = (image: Image) => {
    setSelectedImage(image);
    if (emblaApi) {
      emblaApi.scrollTo(images.indexOf(image));
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="text-white pt-16 overflow-hidden bg-white">
      <h2 className="text-[68px] leading-14 pb-5 xl:text-9xl text-primary text-center font-dirtylane">
        Nuestros Últimos Trabajos
      </h2>
      <Carousel
        setApi={setEmblaApi}
        opts={{
          loop: true,
          dragFree: true,
          align: "center",
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="py-12 items-center">
          {images.map((image, index) => (
            <CarouselItemProject
              key={index}
              src={image.src}
              alt={image.alt}
              height={index % 2 === 0 ? "down" : "high"}
              onSelect={() => onSelectImage(image)}
            />
          ))}
        </CarouselContent>
      </Carousel>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close modal</span>
            </Button>

            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CarouselItemProject({
  src,
  alt,
  height,
  onSelect,
}: {
  src: string;
  alt: string;
  height: "down" | "high";
  onSelect: () => void;
}) {
  return (
    <CarouselItem
      className={` ${
        height === "down" ? "mt-12" : "-mt-12"
      } min-w-0 lg:w-[400px] w-[200px] lg:flex-[0_0_401px] flex-[0_0_201px] ml-2 mr-1 cursor-pointer`}
      onClick={onSelect}
    >
      <Image
        className="lg:h-[590px] h-[300px] object-cover lg:w-[400px] w-[200px]"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </CarouselItem>
  );
}
