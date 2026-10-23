"use client";

import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Clients } from "@/components/sections/clients";
import { FaqSection } from "@/components/sections/faqs-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/responsive-navbar/navbar";
import { InitialAnimation } from "@/components/initial-animation";
import { CuTour } from "@/components/sections/cu-tour";
import { CuadrosUnicosBanner } from "@/components/sections/cuadros-unicos-banner";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import { CarouselLastProjects } from "@/components/ui/carousel-last-projects";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="sr-only">
        Imprenta, cartelería y vinilos para locales comerciales en CABA | Visual
        Design
      </h1>
      <InitialAnimation />
      <CuTour />
      <div className="relative">
        <FadeBackground />
        <Navbar />
        <Hero />
        <div className="absolute bg-linear-to-b from-black/5 via-transparent  to-black inset-0 h-full w-full z-20"></div>
        <div className="absolute bg-linear-to-t from-black/65 via-transparent  to-black inset-0 h-full w-full z-20"></div>
        <div className="absolute bg-linear-to-r from-black/5 via-transparent  to-black inset-0 h-full w-full z-20"></div>
        <div className="absolute bg-linear-to-l from-black/5 via-transparent  to-black inset-0 h-full w-full z-20"></div>
      </div>
      <Experience />
      <Services />
      <CarouselLastProjects />
      <CuadrosUnicosBanner />
      <Clients />
      <FaqSection />

      <Footer />
      <FloatingButtons />
    </div>
  );
}

function FadeBackground() {
  return (
    <div className="w-full grayscale-100 h-full mx-auto object-cover max-h-[90vh] z-20 absolute inset-0 select-none">
      <video
        src="/loop.mp4"
        className="w-full object-cover h-full"
        muted
        autoPlay={true}
        loop
        preload="none"
        poster="/poster.webp"
      ></video>
    </div>
  );
}
