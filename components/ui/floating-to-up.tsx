"use client";

import React, { useState, useEffect } from "react";

export function FloatingToUp() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const footerElement = document.getElementById("main-footer");

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`h-[65px] cursor-pointer group md:h-[80px] w-[65px] md:w-[80px] flex items-center justify-center bg-white text-black p-4 rounded-full shadow-lg hover:shadow-xl floating-to-up ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-0 translate-y-60 absolute"
      } transition-all duration-200`}
      onClick={scrollToTop}
    >
      <svg
        className="w-[36px] h-[36px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
          className="group-hover:-translate-y-1 transition-transform duration-200"
        />
      </svg>
    </button>
  );
}
