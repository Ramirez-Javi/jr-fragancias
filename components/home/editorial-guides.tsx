import Image from "next/image";
import Link from "next/link";
import type { EditorialGuide } from "@/lib/cms/types";

type EditorialGuidesProps = {
  guides: EditorialGuide[];
};

export function EditorialGuides({ guides }: EditorialGuidesProps) {
  return (
    <section className="mt-8 grid gap-5 lg:grid-cols-2">
      {guides.map((guide) => (
        <article key={guide.id} className="feature-card overflow-hidden rounded-[1.75rem] p-5">
          {guide.coverImageUrl ? (
            <div className="feature-card-media relative aspect-[16/9] w-full">
              <Image
                src={guide.coverImageUrl}
                alt={guide.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="px-1 pb-1 pt-5 sm:px-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Guia
            </p>
            <h3 className="display-font mt-3 text-[2rem] leading-tight">{guide.title}</h3>
            <p className="mt-4 text-base leading-8 text-muted">
              {guide.excerpt ?? "Consejos practicos para elegir mejor tu proxima fragancia."}
            </p>
            <div className="mt-6">
              <Link href={`/guias/${guide.slug}`} className="feature-card-button">
                Ver guia
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}