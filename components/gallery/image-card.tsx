"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ImageCardProps {
  src: string;
  alt: string;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

export function ImageCard({
  src,
  alt,
  index,
  isVisible,
  onClick,
}: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layoutId={src}
      className={cn(
        "group relative h-full w-full overflow-hidden cursor-pointer rounded-lg bg-muted",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={700}
          className={cn(
            "object-cover transition-all h-full w-full duration-500 group-hover:scale-110",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

        <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          #{index + 1}
        </div>
      </div>
    </motion.div>
  );
}
