import { EditorialGuides } from "@/components/home/editorial-guides";
import { SectionIntro } from "@/components/shared/section-intro";
import { getEditorialGuides } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Guias | JR Fragancias",
  description:
    "Consejos practicos para elegir perfumes, entender los decants y encontrar una fragancia que vaya contigo.",
});

export default async function GuidesPage() {
  const guides = await getEditorialGuides();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Guias"
          title="Consejos simples para elegir mejor tu proxima fragancia."
          description="Aqui reunimos contenido util para que entiendas mejor como comprar, que esperar de un decant y que mirar segun tu estilo y tu rutina."
        />
      </section>

      <EditorialGuides guides={guides} />
    </main>
  );
}