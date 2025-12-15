"use client";

import { useState, useEffect, useRef } from "react";
import { ImageCard } from "./image-card";
import { ImageModal } from "./image-modal";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function ImageGallery({ imagesGallery }: { imagesGallery: string[] }) {
  const itemsPerPage = 12;

  // Pagination helper: returns a chunk for the given page (0-based)
  const fetchImages = (page: number) => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return imagesGallery.slice(start, end);
  };

  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(0); // next page to load (0-based)
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false); // Ref to track loading state synchronously
  const requestId = useRef(0); // Track the current request ID to invalidate stale ones

  // Reset when the source array changes
  useEffect(() => {
    requestId.current += 1; // Invalidate any pending requests
    setImages([]);
    setPage(0);
    setHasMore(true);
    setVisibleCount(0);
    loadingRef.current = false;
  }, [imagesGallery]);

  // Initial load (and will also trigger after a reset above)
  useEffect(() => {
    // only load if there are images available
    if (imagesGallery.length > 0) {
      loadMoreImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesGallery]);

  // Efecto fade secuencial cuando se agregan nuevas imágenes
  useEffect(() => {
    if (images.length > visibleCount) {
      const newImagesCount = images.length - visibleCount;
      let revealed = 0;

      const revealInterval = setInterval(() => {
        if (revealed < newImagesCount) {
          setVisibleCount((prev) => prev + 1);
          revealed++;
        } else {
          clearInterval(revealInterval);
        }
      }, 100); // 100ms entre cada imagen

      return () => clearInterval(revealInterval);
    }
  }, [images.length, visibleCount]);

  const loadMoreImages = async () => {
    // Use ref for immediate check to prevent race conditions
    if (loadingRef.current || !hasMore) return;

    const currentRequestId = requestId.current;
    loadingRef.current = true;
    setLoading(true);
    try {
      const newImages = await fetchImages(page);

      // Check if this request is still valid
      if (currentRequestId !== requestId.current) {
        return;
      }

      // If no items returned, mark as finished
      if (newImages.length === 0) {
        setHasMore(false);
      } else {
        setImages((prev) => [...prev, ...newImages]);
        setPage((prev) => prev + 1);

        // If we've loaded all available images, set hasMore false
        const totalLoaded = images.length + newImages.length;
        if (totalLoaded >= imagesGallery.length) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("[v0] Error loading images:", error);
    } finally {
      // Only reset loading if this was the valid request
      if (currentRequestId === requestId.current) {
        setLoading(false);
        loadingRef.current = false;
      }
    }
  };

  // Intersection Observer para infinite scroll
  useEffect(() => {
    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Only trigger if we have images (pagination), not for initial load
        if (
          entry.isIntersecting &&
          !loadingRef.current &&
          hasMore &&
          images.length > 0
        ) {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    const currentLoadMoreRef = loadMoreRef.current;
    if (currentLoadMoreRef) {
      observer.observe(currentLoadMoreRef);
    }

    return () => {
      if (observerRef.current && currentLoadMoreRef) {
        observerRef.current.unobserve(currentLoadMoreRef);
      }
      observerRef.current = null;
    };
    // Recreate observer when loading/hasMore change so the callback sees latest values
  }, [hasMore, imagesGallery, page, images.length]);

  return (
    <section className="min-h-[75vh]">
      <h2 className="sr-only">Galería de imágenes</h2>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry>
          {images.map((src, index) => (
            <ImageCard
              key={`${src}-${index}`}
              src={src}
              alt={`Image ${index + 1}`}
              index={index}
              isVisible={index < visibleCount}
              onClick={() =>
                setSelectedImage({
                  src: src,
                  alt: `Image ${index + 1}`,
                })
              }
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Loading indicator */}
      {loading && (
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Cargando más imágenes...</span>
          </div>
        </div>
      )}

      {/* Trigger element for infinite scroll */}
      <div ref={loadMoreRef} className="h-60 -mt-[300px]" />

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
