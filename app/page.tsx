import { EditorialGuides } from "@/components/home/editorial-guides";
import { BrandGrid } from "@/components/home/brand-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HeroProductRotator } from "@/components/home/hero-product-rotator";
import { CtaLink } from "@/components/shared/cta-link";
import { getAllBrands, getAllProducts, getBanners, getEditorialGuides, getFeaturedProducts } from "@/lib/cms/queries";

export const revalidate = 300;

export default async function Home() {
  const categories = [
    "Perfumes que duran todo el dia",
    "Decants: prueba por poco dinero",
    "Fragancias para el trabajo",
    "Citas y eventos especiales",
  ];

  const highlights = [
    {
      title: "Duran de verdad",
      text: "Seleccionamos fragancias que te acompañan durante horas y hacen notar tu presencia sin tener que reaplicar cada rato.",
    },
    {
      title: "Pruebas antes de comprar",
      text: "Con decants de 3 ml, 5 ml y 10 ml puedes probar en tu piel antes de ir por el frasco grande.",
    },
    {
      title: "Te guiamos segun tu estilo",
      text: "Si buscas algo para el trabajo, una salida o una cita, aqui puedes encontrar opciones segun tu momento y tu presupuesto.",
    },
  ];

  const purchaseSteps = [
    "Explora perfumes completos y decants segun lo que quieras proyectar.",
    "Compara notas, duracion y formatos para elegir con seguridad.",
    "Escribenos por WhatsApp y te ayudamos a decidir rapido.",
  ];

  const [featuredProducts, featuredBrands, banners, guides, allProducts] = await Promise.all([
    getFeaturedProducts(),
    getAllBrands(),
    getBanners(),
    getEditorialGuides(),
    getAllProducts(),
  ]);
  const heroBanner = banners[0];
  const heroProducts = allProducts.filter((product) => Boolean(product.mainImageUrl));

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-12">
      <section className="hero-shell relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-9">
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="hero-copy-shell rounded-[1.75rem] px-6 py-7 sm:px-8 sm:py-8 lg:min-h-full lg:px-10 lg:py-9">
            <div className="space-y-6 pt-2 lg:max-w-[36rem] lg:pt-3">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-background/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                JR Fragancias
              </div>
              <div className="space-y-5">
                <h1 className="display-font max-w-3xl text-5xl leading-[0.94] tracking-[-0.02em] sm:text-6xl lg:text-[4.7rem]">
                  {heroBanner?.title ?? "Encuentra el aroma que te define."}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  {heroBanner?.subtitle ??
                    "Trabajamos perfumes completos y decants de distintas lineas. Entre ellas hay marcas arabes que destacan mucho, junto con otras opciones que iremos sumando al catalogo."}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href={heroBanner?.ctaHref ?? "/catalogo"}
                  label={heroBanner?.ctaLabel ?? "Ver perfumes disponibles"}
                />
                <CtaLink href="/decants" label="¿Que es un decant?" variant="secondary" />
              </div>
            </div>
          </div>

          <div className="section-shell rounded-[1.75rem] p-6 sm:p-7 lg:mt-0 lg:max-w-[25rem] lg:justify-self-end lg:self-start">
            <div className="space-y-5">
              <HeroProductRotator products={heroProducts} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  ¿Por donde empezar?
                </p>
                <h2 className="display-font mt-3 text-3xl leading-tight">
                  Lo que buscas hoy puede estar aqui.
                </h2>
              </div>
              <div className="grid gap-3">
                {categories.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-foreground/8 bg-white/55 px-4 py-3 text-sm font-medium text-foreground/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="section-shell rounded-[1.5rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {item.title}
            </p>
            <p className="mt-4 text-base leading-8 text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Perfumes para ti
            </p>
            <h2 className="display-font mt-2 text-4xl leading-tight">
              Mira las opciones que van contigo.
            </h2>
          </div>
          <CtaLink href="/catalogo" label="Ver todo el catalogo" variant="secondary" />
        </div>
        <FeaturedProducts products={featuredProducts} />
      </section>

      <section
        id="compra"
        className="mt-8 grid gap-6 rounded-[2rem] bg-[#1f1714] px-6 py-8 text-[#f8f2ea] sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c2a0]">
            Comprar aqui se siente facil
          </p>
          <h2 className="display-font text-4xl leading-tight">
            Queremos que elijas bien, no que compres a ciegas.
          </h2>
          <p className="max-w-xl text-base leading-8 text-[#e6d8c9]">
            Si no sabes por donde empezar, te ayudamos a encontrar algo que combine contigo, con tu rutina y con lo que quieres proyectar al entrar a un lugar.
          </p>
        </div>
        <div className="grid gap-4 text-sm leading-7 text-[#f1e7dc] sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-[#d8c2a0]">Duracion que se nota</p>
            <p className="mt-3">Buscamos fragancias que te acompanen durante horas y mantengan tu presencia viva en el dia a dia.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-[#d8c2a0]">Prueba antes de invertir</p>
            <p className="mt-3">Los decants te dejan conocer la fragancia en tu piel antes de llevarte el frasco grande.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-[#d8c2a0]">Ahorro con sentido</p>
            <p className="mt-3">No tienes que gastar de golpe para descubrir si una fragancia va contigo. Puedes empezar poco a poco.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-[#d8c2a0]">Asesoria directa</p>
            <p className="mt-3">Si dudas entre dos opciones, te orientamos por estilo, clima, uso y el tipo de presencia que quieres dejar.</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Marcas que trabajamos
          </p>
          <h2 className="display-font mt-2 text-4xl leading-tight">
            Opciones destacadas dentro de un catalogo que sigue creciendo.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-muted">
            Cada casa aporta un estilo distinto al catalogo. Aqui dejamos una lectura rapida para que entiendas mejor que tipo de presencia, caracter y sensacion suele ofrecer cada una.
          </p>
        </div>
        <BrandGrid brands={featuredBrands} />
      </section>

      <section className="mt-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Guias para ti
            </p>
            <h2 className="display-font mt-2 text-4xl leading-tight">
              Consejos simples para elegir mejor.
            </h2>
          </div>
          <CtaLink href="/guias" label="Ver todas las guias" variant="secondary" />
        </div>
        <EditorialGuides guides={guides.slice(0, 2)} />
      </section>

      <section id="roadmap" className="mt-8 section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              ¿Como pedir el tuyo?
            </p>
            <h2 className="display-font mt-3 text-4xl leading-tight">
              Hazlo facil y elige con mas seguridad.
            </h2>
          </div>
          <ol className="grid gap-4">
            {purchaseSteps.map((item, index) => (
              <li
                key={item}
                className="rounded-[1.5rem] border border-foreground/10 bg-white/55 px-5 py-4 text-base leading-7 text-muted"
              >
                <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-[#fff8f2]">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
