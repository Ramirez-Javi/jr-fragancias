import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/cms/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const hasImage = Boolean(product.mainImageUrl);

  return (
    <article className="feature-card rounded-[1.75rem] p-5 transition-transform duration-200 hover:-translate-y-1">
      <div
        className="feature-card-media"
        style={{ background: product.accentGradient }}
      >
        {hasImage ? (
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={product.mainImageUrl!}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f1714] via-[#1f1714]/78 to-transparent px-4 pb-5 pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                {product.brand.name}
              </p>
              <h2 className="display-font mt-3 text-3xl leading-tight text-white">
                {product.name}
              </h2>
            </div>
          </div>
        ) : (
          <div className="px-5 py-6">
            <div className="rounded-[1.25rem] border border-white/35 bg-white/18 px-4 py-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                {product.brand.name}
              </p>
              <h2 className="display-font mt-3 text-3xl leading-tight text-white">
                {product.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/85">{product.shortDescription}</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 space-y-4 px-1 pb-1">
        <p className="text-sm leading-7 text-muted">{product.shortDescription}</p>
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          <span>{product.productType}</span>
          <span>{product.family}</span>
          <span>{product.performance.duration}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Desde</p>
            <p className="text-xl font-semibold text-foreground">{product.priceFromLabel}</p>
          </div>
          <Link href={`/producto/${product.slug}`} className="feature-card-button shrink-0">
            Ver mas
          </Link>
        </div>
      </div>
    </article>
  );
}