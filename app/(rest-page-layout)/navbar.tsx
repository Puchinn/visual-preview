"use client";

import { useState } from "react";
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
} from "lucide-react";
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

  const services = Object.values(siteConfig.pages.services).map((service) => ({
    label: service.title,
    link: service.path,
  }));

  return (
    <div className="font-archivo relative lg:py-5 w-full top-0 max-w-[1400px] z-50 mx-auto">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full max-w-none">
          <div className="w-full">
            {/* Desktop Navigation */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="w-[160px]">
                <Link
                  className="hidden absolute top-0 lg:block"
                  aria-description="logo"
                  href="/"
                >
                  <Image
                    width={140}
                    height={140}
                    className="bg-white rounded-full"
                    src="/logo-rojo-cambiado.svg"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <NavigationMenu>
                  <NavigationMenuList className="gap-x-10 text-black">
                    <NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href={"/"}>INICIO</Link>
                      </NavigationMenuItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href={"/#experience"}>NOSOTROS</Link>
                      </NavigationMenuItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-base p-0 m-0 text-black">
                        SERVICIOS
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 relative z-50 sm:w-[400px] md:grid-cols-2">
                          {Object.values(siteConfig.pages.services).map(
                            (service) => (
                              <NavigationMenuLink asChild key={service.path}>
                                <Link href={service.path}>
                                  <div className="text-sm leading-none font-medium">
                                    {service.title}
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
                      <Link href={"/contacto"}>CONTACTO</Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Desktop Social & CTA */}
              <ul className="hidden lg:flex items-center gap-2">
                <div className="flex gap-1 items-center">
                  <li className="text-black hover:scale-105 p-2 rounded-full border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://www.facebook.com/VisualDesignPage/"
                          target="_blank"
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
                  <li className="text-black hover:scale-105 p-2 rounded-full border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://www.instagram.com/visualdesignok"
                          target="_blank"
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
                  <li className="text-black hover:scale-105 p-2 rounded-full border">
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
                    <a href="https://wa.me/5491173593738" target="_blank">
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
                  className="mx-auto bg-white rounded-full"
                  alt="Logo"
                />
              </div>
              <SheetTrigger className="z-20 relative" asChild>
                <button
                  className="px-3 text-black hover:text-gray-300 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent className="">
                <nav className="bg-black pt-10 text-sm text-white min-h-screen flex flex-col">
                  {/* Menu Items */}
                  <div className="flex-1">
                    {/* INICIO */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <Link href="/" className="font-bold  tracking-wide">
                        INICIO
                      </Link>
                    </div>

                    {/* NOSOTROS */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <Link
                        href="/#experience"
                        className="font-bold tracking-wide"
                      >
                        NOSOTROS
                      </Link>
                    </div>

                    {/* SERVICIOS */}
                    <div className="border-b border-gray-800">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-900 transition"
                      >
                        <h3 className="font-bold tracking-wide">SERVICIOS</h3>
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
                              className="text-gray-300 block hover:text-white cursor-pointer transition"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CONTACTO */}
                    <div className="border-b border-gray-800 px-6 py-4 cursor-pointer hover:bg-gray-900 transition">
                      <Link
                        href={"/contacto"}
                        className="font-bold tracking-wide"
                      >
                        CONTACTO
                      </Link>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="border-b border-gray-800 px-6 py-4 flex gap-4 justify-center">
                    <a
                      href="https://www.facebook.com/VisualDesignPage/"
                      target="_blank"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/visualdesignok"
                      target="_blank"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="mailto:info@visuald.com.ar"
                      target="_blank"
                      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"
                    >
                      <Mail size={20} />
                    </a>
                  </div>

                  {/* Phone Button */}
                  <div className="px-6 py-4">
                    <a
                      href="tel:+541143829100"
                      target="_blank"
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
    </div>
  );
}
