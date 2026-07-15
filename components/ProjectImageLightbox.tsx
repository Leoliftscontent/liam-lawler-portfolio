"use client";

import Image from "next/image";
import { useState } from "react";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export function ProjectImageLightbox({
  images,
  variant = "grid"
}: {
  images: ProjectImage[];
  variant?: "grid" | "masonry";
}) {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  return (
    <>
      <div
        className={
          variant === "masonry"
            ? "masonry-grid mt-8"
            : "mt-8 grid gap-4 md:grid-cols-3"
        }
      >
        {images.map((image, index) => (
          <button
            aria-label={`Open image: ${image.alt}`}
            className={
              variant === "masonry"
                ? "group mb-4 w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-translate-y-1 hover:border-emerald/70"
                : "group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-translate-y-1 hover:border-emerald/70"
            }
            key={`${image.src}-${index}`}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <span
              className={
                variant === "masonry"
                  ? "relative block aspect-[4/3]"
                  : "relative block aspect-[16/10]"
              }
            >
              <Image
                alt={image.alt}
                className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                fill
                loading="lazy"
                sizes={
                  variant === "masonry"
                    ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 768px) 33vw, 100vw"
                }
                src={image.src}
                style={{ objectPosition: image.objectPosition ?? "center" }}
              />
            </span>
            {image.caption ? (
              <span className="block p-4 text-sm text-white/64">
                {image.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-xl"
          role="dialog"
        >
          <button
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-md border border-white/20 px-4 py-2 text-sm text-white transition hover:border-emerald hover:text-emerald"
            onClick={() => setActiveImage(null)}
            type="button"
          >
            Close
          </button>
          <figure className="w-full max-w-6xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/12 bg-black">
              <Image
                alt={activeImage.alt}
                className="object-contain"
                fill
                sizes="100vw"
                src={activeImage.src}
              />
            </div>
            {activeImage.caption ? (
              <figcaption className="mt-4 text-center text-sm text-white/58">
                {activeImage.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
