"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import {
  NavItem,
  useActiveNav,
  type NavVariant,
} from "@/components/layout/nav-item";
import { useIntent } from "@/components/providers/intent-provider";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Navbar({ variant = "light" }: { variant?: NavVariant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isActive = useActiveNav();
  const pathname = usePathname();
  const { intent } = useIntent();

  // En la pagina de la submarca la barra queda solo con la marca, las redes,
  // CONTACTO y el CTA de WhatsApp. INICIO, NOSOTROS y SERVICIOS son de Visual
  // Design y ahi no aportan.
  const isCuadrosUnicos = pathname === siteConfig.cuadrosUnicos.path;

  const whatsappHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    intent
      ? siteConfig.links.whatsappMessages[intent]
      : siteConfig.links.whatsappMessages.general,
  )}`;

  const instagramHref = isCuadrosUnicos
    ? siteConfig.cuadrosUnicos.instagram
    : siteConfig.links.instagram;

  const services = Object.values(siteConfig.pages.services).map((service) => ({
    label: service.content_title,
    link: service.path,
  }));

  // En la submarca la barra es oscura. El logo de Visual Design lleva su
  // circulo blanco en ambos casos, asi que se lee igual sobre tinta.
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "site-navbar font-archivo relative lg:py-5 w-full top-0 max-w-[1400px] z-50 mx-auto",
        isDark && "font-cu-ui",
      )}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full max-w-none">
          <div className="w-full">
            {/* Desktop Navigation */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="w-[160px]">
                <Link
                  className="site-nav-logo-link-vd hidden absolute top-0 lg:block"
                  aria-description="logo"
                  href="/"
                >
                  <Image
                    width={140}
                    height={140}
                    className="site-nav-logo-vd bg-white rounded-full"
                    src="/logo-rojo-cambiado.svg"
                    alt="Visual Design"
                  />
                </Link>
                {/* En /cuadros-unicos el CSS de la ruta oculta el logo de VD
                    y muestra este, que lleva a la home de la submarca. */}
                <Link
                  className="site-nav-logo-link-cu absolute top-0 hidden"
                  aria-label="Cuadros Únicos — inicio"
                  href={siteConfig.cuadrosUnicos.path}
                >
                  <Image
                    width={592}
                    height={517}
                    className="site-nav-logo-cu mt-1 hidden h-auto bg-white w-[112px]"
                    src={siteConfig.cuadrosUnicos.logoOscuro}
                    alt="Cuadros Únicos"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <NavigationMenu>
                  <NavigationMenuList
                    className={cn(
                      "gap-x-10",
                      isDark ? "text-white" : "text-black",
                    )}
                  >
                    {!isCuadrosUnicos && (
                      <>
                        <NavigationMenuItem>
                          <NavItem
                            href="/"
                            variant={variant}
                            active={isActive("/")}
                          >
                            INICIO
                          </NavItem>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavItem
                            href="/#nosotros"
                            variant={variant}
                            active={isActive("/#nosotros")}
                          >
                            NOSOTROS
                          </NavItem>
                        </NavigationMenuItem>
                      </>
                    )}
                    {isCuadrosUnicos && (
                      <NavigationMenuItem>
                        <NavItem
                          href="/"
                          variant={variant}
                          active={isActive("/")}
                        >
                          VOLVER A VISUAL
                        </NavItem>
                      </NavigationMenuItem>
                    )}
                    <NavigationMenuItem>
                      <NavItem
                        href={siteConfig.cuadrosUnicos.path}
                        variant={variant}
                        active={isActive(siteConfig.cuadrosUnicos.path)}
                      >
                        CUADROS UNICOS
                      </NavItem>
                    </NavigationMenuItem>
                    {!isCuadrosUnicos && (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent text-base p-0 m-0",
                            isDark ? "text-white" : "text-black",
                          )}
                        >
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
                              ),
                            )}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )}
                    <NavigationMenuItem>
                      <NavItem
                        href="/contacto"
                        variant={variant}
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
                  {!isCuadrosUnicos && (
                    <li
                      className={cn(
                        "hover:scale-105 p-2 rounded-full border",
                        isDark
                          ? "text-white border-white/25 hover:text-primary"
                          : "text-black",
                      )}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={siteConfig.links.facebook}
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
                  )}
                  <li
                    className={cn(
                      "hover:scale-105 p-2 rounded-full border",
                      isDark
                        ? "text-white border-white/25 hover:text-primary"
                        : "text-black",
                    )}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={instagramHref}
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
                  {!isCuadrosUnicos && (
                    <li
                      className={cn(
                        "hover:scale-105 p-2 rounded-full border",
                        isDark
                          ? "text-white border-white/25 hover:text-primary"
                          : "text-black",
                      )}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href={siteConfig.links.mail}>
                            <span className="sr-only">Envianos un mail</span>
                            <Mail />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-base">Ponte en contacto</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  )}
                </div>
                <li className="ml-2">
                  <Button
                    className={cn(
                      "site-nav-cta border-none rounded-sm text-base",
                      isDark
                        ? "bg-primary font-medium text-gray-tone-4 hover:bg-[#eeb34a]"
                        : "bg-primary font-semibold text-white",
                    )}
                    asChild
                    size={"lg"}
                    variant="outline"
                  >
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isCuadrosUnicos
                        ? "Solicita tu cuadro"
                        : "Contactanos al WhatsApp"}{" "}
                    </a>
                  </Button>
                </li>
              </ul>

              {/* Mobile Menu Button */}
            </div>

            {/* Mobile Menu */}
            <div className="site-nav-mobile-bar shadow lg:hidden py-5 relative">
              <div
                className={cn(
                  "absolute z-10 inset-0",
                  isDark ? "bg-gray-tone-4" : "bg-white",
                )}
              >
                <Image
                  src="/logo-rojo-cambiado.svg"
                  width={135}
                  height={135}
                  className={cn(
                    "site-nav-logo-vd mx-auto bg-white rounded-full",
                    // En la submarca el header es oscuro y chico: el logo
                    // grande de 135px tapa el hero.
                    isDark && "h-16 w-16",
                  )}
                  alt="Visual Design"
                />
                <Image
                  src={siteConfig.cuadrosUnicos.logoOscuro}
                  width={592}
                  height={517}
                  className="site-nav-logo-cu site-nav-mobile-logo-cu mt-1 hidden h-14 w-auto"
                  alt="Cuadros Únicos"
                />
              </div>
              <SheetTrigger className="z-20 relative" asChild>
                <button
                  className={cn(
                    "px-3 transition-colors",
                    isDark
                      ? "text-white hover:text-primary"
                      : "text-black hover:text-gray-300",
                  )}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent className="site-nav-sheet">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <nav
                  className={cn(
                    "bg-black pt-10 text-sm text-white min-h-screen flex flex-col",
                    isDark && "cu-sub-brand",
                  )}
                >
                  {/* Menu Items */}
                  <div className="flex-1">
                    {/* INICIO y NOSOTROS: solo en el sitio principal */}
                    {!isCuadrosUnicos && (
                      <>
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

                        <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                          <NavItem
                            href="/#nosotros"
                            variant="dark"
                            active={isActive("/#nosotros")}
                            className="font-bold tracking-wide"
                          >
                            NOSOTROS
                          </NavItem>
                        </div>
                      </>
                    )}

                    {/* CUADROS UNICOS */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <NavItem
                        href={siteConfig.cuadrosUnicos.path}
                        variant="dark"
                        active={isActive(siteConfig.cuadrosUnicos.path)}
                        className="font-bold tracking-wide"
                      >
                        CUADROS UNICOS
                      </NavItem>
                    </div>

                    {/* Vuelta al sitio principal */}
                    {isCuadrosUnicos && (
                      <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                        <NavItem
                          href="/"
                          variant="dark"
                          active={isActive("/")}
                          className="font-bold tracking-wide"
                        >
                          VOLVER A VISUAL
                        </NavItem>
                      </div>
                    )}

                    {/* SERVICIOS: solo en el sitio principal */}
                    {!isCuadrosUnicos && (
                      <div className="border-b border-gray-800">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-900 transition"
                        >
                          <h3
                            className={cn(
                              "font-bold tracking-wide",
                              isActive("/servicios") && "text-primary-light",
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
                                    : "text-gray-300 hover:text-white",
                                )}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

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
                    {!isCuadrosUnicos && (
                      <a
                        href={siteConfig.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                      >
                        <Facebook size={20} />
                      </a>
                    )}
                    <a
                      href={instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Instagram size={20} />
                    </a>
                    {!isCuadrosUnicos && (
                      <a
                        href={siteConfig.links.mail}
                        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>

                  {/* Phone Button */}
                  <div className="px-6 py-4">
                    <a
                      href="tel:+541143829100"
                      className={cn(
                        "site-nav-phone block w-full text-white font-bold py-3 px-4 text-center rounded transition",
                        isDark
                          ? "bg-primary hover:bg-[#eeb34a] hover:text-gray-tone-4"
                          : "bg-red-600 hover:bg-red-700",
                      )}
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
    </div>
  );
}
