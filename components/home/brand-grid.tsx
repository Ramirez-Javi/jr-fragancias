import { BrandCard } from "@/components/brand/brand-card";
import type { Brand } from "@/lib/cms/types";

type BrandGridProps = {
  brands: Brand[];
};

export function BrandGrid({ brands }: BrandGridProps) {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </section>
  );
}