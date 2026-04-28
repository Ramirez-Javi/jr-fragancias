"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/cms/types";

type HeroProductRotatorProps = {
  products: Product[];
  intervalMs?: number;
};

const DEFAULT_INTERVAL_MS = 3000;

function getNextRandomIndex(currentIndex: number, total: number) {
  if (total <= 1) {
    return currentIndex;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * total);
  }

  return nextIndex;
}

export function HeroProductRotator({
  products,
  intervalMs = DEFAULT_INTERVAL_MS,
}: HeroProductRotatorProps) {
  const rotatorProducts = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        imageUrl: product.mainImageUrl ?? product.galleryImageUrls?.[0],
      })),
    [products],
  );
  const imageProducts = useMemo(
    () => rotatorProducts.filter((product) => Boolean(product.imageUrl)),
    [rotatorProducts],
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageProducts.length < 2) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setCurrentIndex((current) => getNextRandomIndex(current, imageProducts.length));
    }, intervalMs);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [currentIndex, imageProducts.length, intervalMs]);

  if (rotatorProducts.length === 0) {
    return null;
  }

  if (imageProducts.length === 0) {
    const fallbackProduct = rotatorProducts[0];

    return (
      <Link
        href={`/producto/${fallbackProduct.slug}`}
        className="group block w-full rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        aria-label={`Ver detalle de ${fallbackProduct.name}`}
      >
        <div
          className="flex aspect-[4/5] w-full items-end overflow-hidden rounded-[1.5rem] border border-foreground/10 p-5 text-[#fff8f2]"
          style={{ background: fallbackProduct.accentGradient }}
        >
          <div className="w-full rounded-[1.2rem] border border-white/15 bg-[#1f1714]/28 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/78">
              {fallbackProduct.brand.name}
            </p>
            <p className="display-font mt-3 text-4xl leading-none">{fallbackProduct.name}</p>
            <p className="mt-3 text-sm leading-7 text-white/84">{fallbackProduct.shortDescription}</p>
          </div>
        </div>
      </Link>
    );
  }

  const activeIndex = currentIndex < imageProducts.length ? currentIndex : 0;
  const activeProduct = imageProducts[activeIndex];

  return (
    <Link
      href={`/producto/${activeProduct.slug}`}
      className="group block w-full rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      aria-label={`Ver detalle de ${activeProduct.name}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-white/60">
        {imageProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={product.imageUrl!}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f1714] via-[#1f1714]/70 to-transparent px-5 pb-5 pt-14 text-[#fff8f2] transition-transform duration-300 group-hover:translate-y-[-2px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
            {activeProduct.brand.name}
          </p>
          <p className="display-font mt-2 text-3xl leading-none">{activeProduct.name}</p>
        </div>
      </div>
    </Link>
  );
}