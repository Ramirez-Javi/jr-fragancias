import { ProductCard } from "@/components/catalog/product-card";
import type { Product } from "@/lib/cms/types";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}