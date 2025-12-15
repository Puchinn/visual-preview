"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevenir scroll en el body cuando el modal está abierto
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Cerrar modal"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Contenedor de imagen */}
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain"
          priority
        />
      </div>

      {/* Instrucciones */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-white/70">
        <p>Haz clic fuera de la imagen o presiona ESC para cerrar</p>
      </div>
    </div>
  );
}
