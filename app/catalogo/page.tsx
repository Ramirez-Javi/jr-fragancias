import { ProductCard } from "@/components/catalog/product-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { getAllProducts, getCatalogSections } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 300;

export const metadata = createPageMetadata({
  title: "Catalogo | JR Fragancias",
  description:
    "Perfumes y decants para que explores a tu ritmo y encuentres algo que de verdad vaya contigo.",
});

export default async function CatalogPage() {
  const [products, sections] = await Promise.all([
    getAllProducts(),
    getCatalogSections(),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-12 pt-3 sm:px-8 sm:pt-6 lg:px-12">
      <section className="section-shell rounded-[1.7rem] px-5 py-5 sm:rounded-[2rem] sm:px-8 sm:py-8 lg:px-10">
        <SectionIntro
          eyebrow="Catalogo"
          title="Encuentra una fragancia que hable por ti."
          description="Aqui puedes ver perfumes completos y decants para probar con calma. Compara estilos, revisa la duracion y elige algo que de verdad vaya contigo."
        />
      </section>

      <section className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.id}
            className="section-shell rounded-[1.35rem] px-4 py-3.5 sm:rounded-[1.5rem] sm:px-5 sm:py-5"
          >
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-accent sm:text-[0.84rem] sm:tracking-[0.16em]">
              {section.title}
            </p>
            <p className="mt-2 text-[0.94rem] leading-6.5 text-muted sm:mt-2.5 sm:text-[1rem] sm:leading-7">
              {section.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-4 grid gap-4 sm:mt-6 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}