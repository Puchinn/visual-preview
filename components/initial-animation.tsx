"use client";

import { useState, useEffect } from "react";
import { useIntro } from "@/components/providers/intro-provider";
import { CustomLogo } from "./branding/custom-logo-animated/custom-logo";

export function InitialAnimation() {
  const { hasPlayed, setHasPlayed } = useIntro();
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (hasPlayed) return;

    const idActive = setTimeout(() => {
      setActive(true);
    }, 300);

    const idFade = setTimeout(() => {
      setFadeOut(true);
    }, 5800);

    // Al finalizar la animación, marcamos como visto globalmente
    const idDestroy = setTimeout(() => {
      setHasPlayed(true);
    }, 6100);

    return () => {
      clearTimeout(idActive);
      clearTimeout(idFade);
      clearTimeout(idDestroy);
    };
  }, [hasPlayed, setHasPlayed]);

  if (hasPlayed) return null;

  return (
    <div
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "all 0.5s",
      }}
      className="fixed max-h-screen z-100 transition-all inset-0 w-full h-full flex items-center justify-center bg-black"
    >
      <CustomLogo size={350} active={active} loop={false} />
    </div>
  );
}
