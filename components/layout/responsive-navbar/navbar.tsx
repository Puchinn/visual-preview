"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Mail,
  FacebookIcon,
  InstagramIcon,
  Facebook,
  Instagram,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { CustomLogo } from "@/components/branding/custom-logo-animated/custom-logo";
import { NavItem, useActiveNav } from "@/components/layout/nav-item";
import { useIntro } from "@/components/providers/intro-provider";
import { hasSeenCuTour, markCuTourSeen } from "@/lib/cu-tour";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const { hasPlayed } = useIntro();
  const nudgeClosed = useRef(false);
  const isActive = useActiveNav();

  const services = Object.values(siteConfig.pages.services).map((service) => ({
    label: service.content_title,
    link: service.path,
  }));

  const whatsappHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.general
  )}`;

  const dismissNudge = useCallback(() => {
    if (nudgeClosed.current) return;
    nudgeClosed.current = true;
    setNudge(false);
  }, []);

  const openMenuFromNudge = () => {
    dismissNudge();
    setIsOpen(true);
  };

  // Aviso de mobile: después de la intro, sólo en pantallas chicas, arriba de
  // todo y una vez por navegador. Después, el punto de la hamburguesa y la pill
  // del menú quedan como recordatorio permanente.
  useEffect(() => {
    if (!hasPlayed) return;

    const forced =
      new URLSearchParams(window.location.search).get("cuTour") === "1";

    if (!forced && hasSeenCuTour()) return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;
    if (window.scrollY > 8) return;

    const timer = window.setTimeout(() => {
      if (window.scrollY > 8 || nudgeClosed.current) return;
      setNudge(true);
      markCuTourSeen();
    }, 600);

    return () => window.clearTimeout(timer);
  }, [hasPlayed]);

  // Cierre: 7 s, X, Escape, scroll o al abrir el menú.
  useEffect(() => {
    if (!nudge) return;

    const timer = window.setTimeout(dismissNudge, 7000);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismissNudge();
    };
    const onScroll = () => dismissNudge();
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) dismissNudge();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [nudge, dismissNudge]);

  return (
    <header className="font-archivo w-full relative max-w-[1400px] z-50 bg-none mx-auto">
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (open) dismissNudge();
        }}
      >
        <div className="w-full max-w-none">
          <div className="w-full">
            {/* Desktop Navigation */}
            <div className="flex items-center  justify-between">
              {/* Logo */}
              <Link
                className="hidden lg:block"
                aria-description="logo"
                href="/"
              >
                <CustomLogo size={200} className="active" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <NavigationMenu>
                  <h2 className="sr-only">Menu de navegacion</h2>
                  <NavigationMenuList className="gap-x-10 text-white">
                    <NavigationMenuItem>
                      <NavItem
                        href="/"
                        variant="dark"
                        active={isActive("/")}
                      >
                        INICIO
                      </NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem
                        href="/#nosotros"
                        variant="dark"
                        active={isActive("/#nosotros")}
                      >
                        NOSOTROS
                      </NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <span data-cu-tour-link className="inline-flex">
                        <NavItem
                          href={siteConfig.cuadrosUnicos.path}
                          variant="dark"
                          active={isActive(siteConfig.cuadrosUnicos.path)}
                          className="group relative inline-flex items-center gap-2"
                        >
                          CUADROS UNICOS
                          <span className="sr-only">(nuevo)</span>
                          <span
                            aria-hidden
                            className="relative flex size-1.5 shrink-0"
                          >
                            <span className="absolute inset-0 rounded-full bg-primary-light" />
                            <span className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-tone-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                              Nuevo
                            </span>
                          </span>
                        </NavItem>
                      </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-base p-0 m-0 text-white">
                        SERVICIOS
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 relative z-50 sm:w-[400px] md:grid-cols-2">
                          {Object.values(siteConfig.pages.services).map(
                            (service) => (
                              <NavigationMenuLink asChild key={service.path}>
                                <Link href={service.path}>
                                  <div className="text-sm leading-none font-medium">
                                    {service.content_title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            )
                          )}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem
                        href="/contacto"
                        variant="dark"
                        active={isActive("/contacto")}
                      >
                        CONTACTO
                      </NavItem>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Desktop Social & CTA */}
              <ul className="hidden lg:flex items-center gap-2">
                <div className="flex gap-1 items-center">
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://www.facebook.com/VisualDesignPage/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">Siguenos en facebook</span>
                          <FacebookIcon />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-base">Siguenos en facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={siteConfig.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">Siguenos en instagram</span>
                          <InstagramIcon />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-base">Siguenos en instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="mailto:info@visuald.com.ar">
                          <span className="sr-only">Envianos un mail</span>
                          <Mail />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-base">Ponte en contacto</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                </div>
                <li className="ml-2">
                  <Button
                    className="bg-primary border-none rounded-sm font-semibold text-base text-white"
                    asChild
                    size={"lg"}
                    variant="outline"
                  >
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactanos al WhatsApp{" "}
                    </a>
                  </Button>
                </li>
              </ul>

              {/* Mobile Menu Button */}
            </div>

            {/* Mobile Menu */}
            <div className="shadow lg:hidden py-5 relative">
              <div className="absolute z-10 bg-white inset-0">
                <Image
                  src="/logo-rojo-cambiado.svg"
                  width={135}
                  height={50}
                  className="bg-white mx-auto rounded-full"
                  alt="Logo"
                  title="Logo"
                />
              </div>
              <SheetTrigger className="z-20 relative" asChild>
                <button
                  className="relative px-3 text-black hover:text-gray-300 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                  <span
                    aria-hidden
                    className="absolute right-1 top-0 size-2 rounded-full bg-primary ring-2 ring-white"
                  />
                </button>
              </SheetTrigger>

              {/*
                Aviso no bloqueante: señala la hamburguesa, que es el único
                camino al link en mobile. No oscurece la página ni abre el menú
                solo. Se borra con la X, a los 7 s, al scrollear o al abrirlo.
              */}
              {nudge && (
                <div
                  role="dialog"
                  aria-labelledby="cu-nudge-title"
                  className="absolute left-3 top-full z-30 mt-2 w-[17rem] rounded-sm bg-white p-4 text-gray-tone-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                >
                  <span
                    aria-hidden
                    className="absolute -top-1.5 left-1.5 size-3 rotate-45 bg-white"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Nuevo
                    </span>
                    <button
                      type="button"
                      onClick={dismissNudge}
                      aria-label="Cerrar aviso"
                      className="-mr-1 -mt-1 p-1 text-gray-tone-3 transition-colors hover:text-gray-tone-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-tone-4"
                    >
                      <X className="size-4" aria-hidden />
                    </button>
                  </div>

                  <p id="cu-nudge-title" className="mt-2 text-sm font-semibold">
                    Cuadros Únicos ya está en el menú
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    Piezas a medida en vinilo UV, resina y LED.
                  </p>

                  <button
                    type="button"
                    onClick={openMenuFromNudge}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Abrir el menú
                    <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                </div>
              )}

              <SheetContent className="">
                <nav className="bg-black pt-10 text-sm text-white min-h-screen flex flex-col">
                  {/* Menu Items */}
                  <div className="flex-1">
                    {/* INICIO */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <NavItem
                        href="/"
                        variant="dark"
                        active={isActive("/")}
                        className="font-bold tracking-wide"
                      >
                        INICIO
                      </NavItem>
                    </div>

                    {/* NOSOTROS */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <NavItem
                        href="#nosotros"
                        variant="dark"
                        active={isActive("/#nosotros")}
                        className="font-bold tracking-wide"
                      >
                        NOSOTROS
                      </NavItem>
                    </div>

                    {/* CUADROS UNICOS */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <NavItem
                        href={siteConfig.cuadrosUnicos.path}
                        variant="dark"
                        active={isActive(siteConfig.cuadrosUnicos.path)}
                        className="inline-flex items-center gap-2 font-bold tracking-wide"
                      >
                        CUADROS UNICOS
                        <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                          Nuevo
                        </span>
                      </NavItem>
                    </div>

                    {/* SERVICIOS */}
                    <div className="border-b border-gray-800">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-900 transition"
                      >
                        <h3
                          className={cn(
                            "font-bold tracking-wide",
                            isActive("/servicios") && "text-primary-light"
                          )}
                        >
                          SERVICIOS
                        </h3>
                        <ChevronUp
                          size={24}
                          className={`transition-transform ${
                            isServicesOpen ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <div className="bg-black/90  font-bold text-base px-6 py-4 space-y-3 border-t border-gray-800">
                          {services.map((service, index) => (
                            <Link
                              href={service.link}
                              key={index}
                              aria-current={
                                isActive(service.link) ? "page" : undefined
                              }
                              className={cn(
                                "block cursor-pointer transition",
                                isActive(service.link)
                                  ? "text-primary-light"
                                  : "text-gray-300 hover:text-white"
                              )}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CONTACTO */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <NavItem
                        href="/contacto"
                        variant="dark"
                        active={isActive("/contacto")}
                        className="font-bold tracking-wide"
                      >
                        CONTACTO
                      </NavItem>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="border-b border-gray-800 px-6 py-4 flex gap-4 justify-center">
                    <a
                      href="https://www.facebook.com/VisualDesignPage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="mailto:info@visuald.com.ar"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Mail size={20} />
                    </a>
                  </div>

                  {/* Phone Button */}
                  <div className="px-6 py-4">
                    <a
                      href="tel:+541143829100"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 text-center rounded transition"
                    >
                      TEL: (011) 4382 - 9100
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </div>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
