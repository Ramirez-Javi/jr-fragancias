import Image from "next/image";
import { notFound } from "next/navigation";
import { getEditorialGuideBySlug, getEditorialGuides } from "@/lib/cms/queries";
import type { EditorialBlock } from "@/lib/cms/types";
import { createPageMetadata } from "@/lib/seo/metadata";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

function renderGuideParagraphs(content: EditorialBlock[]) {
  return content
    .map((block) => block.children?.map((child) => child.text).join("").trim())
    .filter(Boolean) as string[];
}

export async function generateStaticParams() {
  const guides = await getEditorialGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getEditorialGuideBySlug(slug);

  if (!guide) {
    return createPageMetadata({
      title: "Guia no encontrada | JR Fragancias",
      description: "La guia que buscas ya no esta disponible dentro del contenido actual.",
    });
  }

  return createPageMetadata({
    title: `${guide.title} | JR Fragancias`,
    description: guide.excerpt ?? "Consejos practicos de perfumeria y decants.",
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getEditorialGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const paragraphs = guide.content ? renderGuideParagraphs(guide.content) : [];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <article className="section-shell overflow-hidden rounded-[2rem]">
        {guide.coverImageUrl ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={guide.coverImageUrl}
              alt={guide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="space-y-6 p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Guia para ti
            </p>
            <h1 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">
              {guide.title}
            </h1>
            {guide.excerpt ? (
              <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{guide.excerpt}</p>
            ) : null}
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}