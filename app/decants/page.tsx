import { ProductCard } from "@/components/catalog/product-card";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionIntro } from "@/components/shared/section-intro";
import { getDecantProducts } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Decants | JR Fragancias",
  description:
    "Prueba una fragancia en tu piel antes de ir por el frasco completo y elige con mas seguridad.",
});

export default async function DecantsPage() {
  const decants = await getDecantProducts();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Decants"
          title="Prueba primero y elige con mas seguridad."
          description="Un decant te deja conocer la fragancia en tu piel, ver como dura y decidir con calma si de verdad quieres llevarte el frasco grande."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaLink href="/contacto" label="Consultar decants disponibles" />
          <CtaLink href="/catalogo" label="Volver al catalogo" variant="secondary" />
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {decants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}