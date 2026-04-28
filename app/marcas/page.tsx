import { BrandGrid } from "@/components/home/brand-grid";
import { SectionIntro } from "@/components/shared/section-intro";
import { getAllBrands } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Marcas | JR Fragancias",
  description:
    "Conoce las marcas del catalogo y descubre cual conecta mejor con tu estilo y lo que quieres proyectar.",
});

export default async function BrandsPage() {
  const brands = await getAllBrands();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Marcas"
          title="Marcas con personalidad propia para distintos estilos."
          description="Aqui reunimos una lectura mas clara de las marcas que trabajamos para que te sea mas facil ubicar su estilo, su caracter y el tipo de presencia que suelen ofrecer."
        />
      </section>

      <BrandGrid brands={brands} />
    </main>
  );
}