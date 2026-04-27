import { ProductCard } from "@/components/catalog/product-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { getAllProducts, getCatalogSections } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Catalogo | JR Fragancias",
  description:
    "Explora perfumes y decants pensados para durar, hacerte sentir bien y ayudarte a elegir con seguridad.",
});

export default async function CatalogPage() {
  const [products, sections] = await Promise.all([
    getAllProducts(),
    getCatalogSections(),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Catalogo"
          title="Encuentra una fragancia que hable por ti."
          description="Aqui puedes ver perfumes completos y decants para probar con calma. Compara estilos, revisa la duracion y elige algo que encaje contigo de verdad."
        />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {sections.map((section) => (
          <article key={section.id} className="section-shell rounded-[1.5rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {section.title}
            </p>
            <p className="mt-4 text-base leading-8 text-muted">{section.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}