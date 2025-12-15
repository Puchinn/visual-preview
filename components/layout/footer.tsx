"use client";
import type React from "react";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Package,
  Settings,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import { CustomLogo } from "../branding/custom-logo-animated/custom-logo";

export function Footer() {
  return (
    <footer className="bg-gray-tone-4 relative pt-10 text-white">
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto ">
          {/* Top Section: Logo, Contact, and Newsletter */}

          <div className="grid grid-cols-1 justify-center items-start md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Contact Section */}
            <div className="col-span-1">
              <h3 className="sr-only">INFORMACION DE CONTACTO</h3>
              <div className="pb-5">
                <p className="text-lg font-bold text-white mb-3">SEGUINOS</p>
                <ul className="flex gap-3">
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <a
                      href="https://www.facebook.com/VisualDesignPage/"
                      target="_blank"
                    >
                      <span className="sr-only">Siguenos en facebook</span>
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="text-white hover:scale-105 p-2 rounded-full border">
                    <a href="https://www.instagram.com/visualdesign1996">
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
                  className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">+54 9 11 4382 9100</span>
                </a>
                <a
                  href="mailto:info@visuald.com.ar"
                  className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">info@visuald.com.ar</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/nXnfhEQs8aqLt9aB9"
                  target="_blank"
                  className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">Santiago del Estero 330, CABA</span>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div className="col-span-1 flex  ">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Package className="text-red-500" />
                  <h3 className="text-lg font-bold text-white">PRODUCTOS</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/servicios/banners-y-carteleria"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Banners y Cartelería
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/corporeos"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Corporeos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/montados"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Montados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/grafica-vehicular"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Gráfica Vehicular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/vinilos-y-vidrieras"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
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
                  <Settings className="text-red-500" />
                  <h3 className="text-lg font-bold text-white">SERVICIOS</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20diseño%20personalizado..."
                      target="_blank"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Diseño Personalizado
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20una%20instalación..."
                      target="_blank"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Instalación
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20asesoramiento..."
                      target="_blank"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Asesoramiento
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5491173593738?text=Hola%2C%20me%20gustaría%20solicitar%20un%20envío%20a%20domicilio..."
                      target="_blank"
                      className="text-slate-300 hover:text-red-500 transition-colors text-sm"
                    >
                      Envíos a Domicilio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <CustomLogo className="mx-auto" />
          </div>

          <div className="border-t border-slate-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-right">
              © 2025 VISUAL DESIGN - Todos los derechos reservados - Tel: (011)
              4382 – 9100 / 9400
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
