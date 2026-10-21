"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Package,
  Settings,
  InstagramIcon,
  FacebookIcon,
  ArrowRight,
  Frame,
} from "lucide-react";
import { CustomLogo } from "../branding/custom-logo-animated/custom-logo";
import { CuFooter } from "./cu-footer";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathName = usePathname();

  // La submarca tiene su propio pie: no comparte el footer de Visual Design.
  if (pathName === "/cuadros-unicos") {
    return <CuFooter />;
  }

  return (
    <footer
      id="main-footer"
      className={cn("bg-gray-tone-4 relative pt-10 text-white")}
    >
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto ">
          {/* Top Section: Logo, Contact, and Newsletter */}

          <div className="grid grid-cols-1 justify-center items-start md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Contact Section */}
            <div className="col-span-1">
              <h3 className="sr-only">INFORMACION DE CONTACTO</h3>
              <div className="pb-5">
                <Link
                  href="/contacto"
                  className="text-lg font-bold max-w-max hover:underline hover:border-red-500 block text-white mb-3"
                >
                  CONTACTANOS
                </Link>
                <ul className="flex gap-3">
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Siguenos en facebook</span>
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.links.instagram}
                    >
                      <span className="sr-only">Siguenos en instagram</span>
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:+54(011)43829100"
                  className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">+54 9 11 4382 9100</span>
                </a>
                <a
                  href={siteConfig.links.mail}
                  className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@visuald.com.ar</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/nXnfhEQs8aqLt9aB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Santiago del Estero 330, CABA</span>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div className="col-span-1 flex  ">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Package className="text-primary" />
                  <h3 className="text-lg font-bold text-white">PRODUCTOS</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/servicios/banners-y-carteleria"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Banners y Cartelería
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/corporeos"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Corporeos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/montados"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Montados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/grafica-vehicular"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Gráfica Vehicular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/vinilos-y-vidrieras"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Vinilos y Vidrieras
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Column */}
            <div className="col-span-1 flex ">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="text-primary" />
                  <h3 className="text-lg font-bold text-white">SERVICIOS</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20diseño%20personalizado..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Diseño Personalizado
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20una%20instalación..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Instalación
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20asesoramiento..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Asesoramiento
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20envío%20a%20domicilio..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Envíos a Domicilio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cuadros Unicos Column */}
            <div className="col-span-1 flex">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Frame className="text-primary" />
                  <h3 className="text-lg font-bold text-white">
                    {siteConfig.cuadrosUnicos.name.toUpperCase()}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={siteConfig.cuadrosUnicos.path}
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Ver la submarca
                    </Link>
                  </li>
                  <li>
                    <a
                      href={siteConfig.cuadrosUnicos.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${siteConfig.links.whatsapp}?text=${encodeURIComponent(
                        siteConfig.links.whatsappMessages.cuadros
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      Consultar por un cuadro
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-full col-span-1 lg:col-span-1">
              <CustomLogo className="mx-auto" />
              {pathName !== "/contacto" ? (
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all mt-2 duration-300 hover:scale-105"
                >
                  <Link
                    href="/contacto"
                    className="flex items-center justify-center gap-2"
                  >
                    ¡Contactanos Ahora!
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="border-t border-slate-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} VISUAL DESIGN - Todos los derechos
              reservados - Tel: (011) 4382 – 9100 / 9400
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
