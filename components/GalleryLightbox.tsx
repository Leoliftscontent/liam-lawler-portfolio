"use client";

import Image from "next/image";
import { useState } from "react";
import type { galleryItems } from "@/data/portfolio";

type GalleryItem = (typeof galleryItems)[number];

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="masonry-grid mt-10">
        {items.map((item, index) => (
          <button
            aria-label={`Open gallery image: ${item.alt}`}
            className="group mb-4 w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-translate-y-1 hover:border-emerald/70"
            key={`${item.src}-${index}`}
            onClick={() => setActiveItem(item)}
            type="button"
          >
            <span className="relative block aspect-[4/3]">
              <Image
                alt={item.alt}
                className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={item.src}
              />
            </span>
            <span className="block p-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-5 backdrop-blur-xl"
          role="dialog"
        >
          <button
            aria-label="Close gallery image"
            className="absolute right-5 top-5 rounded-md border border-white/20 px-4 py-2 text-sm text-white transition hover:border-emerald hover:text-emerald"
            onClick={() => setActiveItem(null)}
            type="button"
          >
            Close
          </button>
          <div className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-lg border border-white/12">
            <Image
              alt={activeItem.alt}
              className="object-cover"
              fill
              sizes="100vw"
              src={activeItem.src}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
