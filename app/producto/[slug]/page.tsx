import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/shared/cta-link";
import { getAllProducts, getProductBySlug } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return createPageMetadata({
      title: "Producto no encontrado | JR Fragancias",
      description: "La fragancia que buscas ya no esta disponible dentro del catalogo actual.",
    });
  }

  return createPageMetadata({
    title: `${product.name} | JR Fragancias`,
    description: product.shortDescription,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappHref = buildWhatsAppLink(
    `Hola, me interesa ${product.name}. Quiero saber si va conmigo, su precio y disponibilidad.`
  );
  const galleryImages = product.galleryImageUrls?.filter(Boolean) ?? [];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="section-shell rounded-[2rem] p-6 sm:p-8">
          {product.mainImageUrl ? (
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-foreground/10 bg-white/60">
                <Image
                  src={product.mainImageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {galleryImages.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {galleryImages.map((imageUrl) => (
                    <div
                      key={imageUrl}
                      className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-foreground/10 bg-white/60"
                    >
                      <Image
                        src={imageUrl}
                        alt={`${product.name} galeria`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div
              className="rounded-[1.8rem] px-6 py-8 sm:px-8 sm:py-10"
              style={{ background: product.accentGradient }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                {product.brand.name}
              </p>
              <h1 className="display-font mt-4 text-5xl leading-[0.94] text-white sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/88">
                {product.story}
              </p>
            </div>
          )}
        </div>

        <aside className="section-shell rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {product.brand.name}
              </p>
              <h1 className="display-font mt-3 text-4xl leading-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-8 text-muted">{product.story}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Ideal si buscas
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <span>{product.productType}</span>
                <span>{product.family}</span>
                {product.occasions.map((occasion) => (
                  <span key={occasion}>{occasion}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Desde</p>
              <p className="mt-1 text-3xl font-semibold text-foreground">{product.priceFromLabel}</p>
            </div>

            <div className="space-y-3">
              {product.presentations.map((presentation) => (
                <div
                  key={`${presentation.label}-${presentation.value}`}
                  className="rounded-[1.25rem] border border-foreground/10 bg-white/60 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-foreground">{presentation.label}</p>
                  <div className="mt-1 flex items-center justify-between gap-4 text-sm text-muted">
                    <span>{presentation.value}</span>
                    <span>{presentation.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#fff8f2] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Preguntar por WhatsApp
              </a>
              <CtaLink href="/catalogo" label="Volver al catalogo" variant="secondary" />
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Salida</p>
          <p className="mt-4 text-base leading-8 text-muted">{product.topNotes.join(", ")}</p>
        </article>
        <article className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Corazon</p>
          <p className="mt-4 text-base leading-8 text-muted">{product.heartNotes.join(", ")}</p>
        </article>
        <article className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Fondo</p>
          <p className="mt-4 text-base leading-8 text-muted">{product.baseNotes.join(", ")}</p>
        </article>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Duracion</p>
          <p className="mt-4 text-base leading-8 text-muted">{product.performance.duration}</p>
        </article>
        <article className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Proyeccion</p>
          <p className="mt-4 text-base leading-8 text-muted">{product.performance.projection}</p>
        </article>
      </section>
    </main>
  );
}