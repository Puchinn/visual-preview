"use client";

import { usePathname } from "next/navigation";
import { FloatingWsp } from "@/components/ui/floating-wsp";
import { InstagramFloatButton } from "@/components/ui/floating-instagram";
import { FloatingToUp } from "./floating-to-up";

export function FloatingButtons() {
  const pathname = usePathname();

  // En /cuadros-unicos los CTA viven en el header y en la seccion de
  // contacto. Los botones flotantes de Visual Design romperian la paleta
  // monocroma, asi que ahi no se muestran.
  if (pathname === "/cuadros-unicos") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 items-center z-50 flex gap-3">
      <InstagramFloatButton />
      <FloatingWsp />
      <FloatingToUp />
    </div>
  );
}
