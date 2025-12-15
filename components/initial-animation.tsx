"use client";

import { useState, useEffect } from "react";
import { CustomLogo } from "./branding/custom-logo-animated/custom-logo";

export function InitialAnimation() {
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [destroy, setDestroy] = useState(false);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setActive(true);
    }, 300);

    return () => clearTimeout(idTimeout);
  }, []);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 5800);

    return () => clearTimeout(idTimeout);
  }, []);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setDestroy(true);
    }, 6100);

    return () => clearTimeout(idTimeout);
  }, []);

  if (destroy) return null;

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
