"use client";

import { Instagram } from "lucide-react";
import { useIntent } from "@/components/providers/intent-provider";
import { siteConfig } from "@/lib/site-config";

export function InstagramFloatButton() {
  const { intent } = useIntent();

  // Los visitantes que vienen por CUADROS UNICOS van al IG de la submarca.
  const href =
    intent === "cuadros"
      ? siteConfig.cuadrosUnicos.instagram
      : siteConfig.links.instagram;

  const tooltip =
    intent === "cuadros"
      ? "Conocé los cuadros que hacemos"
      : "Conoce nuestros últimos posts";

  return (
    <div className="group">
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute translate-y-96 group-hover:translate-y-0 bottom-full right-0 mb-2 transition-opacity duration-200 group-hover:opacity-100 opacity-0">
          <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            {tooltip}
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-8 border-transparent border-t-foreground" />
            </div>
          </div>
        </div>

        {/* Botón flotante */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[65px] md:h-[80px] flex items-center justify-center w-[65px] md:w-[80px] rounded-full bg-gradient-to-tr from-[#7b2dae] via-[#E1306C] to-[#F56040] hover:scale-[120%] transition-transform duration-200 shadow-lg hover:shadow-xl"
          aria-label={tooltip}
        >
          <Instagram size={36} className="text-white" />
        </a>
      </div>
    </div>
  );
}
