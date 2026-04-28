import { CtaLink } from "@/components/shared/cta-link";
import { SectionIntro } from "@/components/shared/section-intro";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.42 2.18 11.85c0 1.74.45 3.44 1.31 4.95L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.85a9.8 9.8 0 0 0-2.85-7.04Zm-7.01 15.22h-.01a8.18 8.18 0 0 1-4.17-1.15l-.3-.18-3.17.83.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.19-8.17 2.18 0 4.22.85 5.76 2.4a8.1 8.1 0 0 1 2.39 5.78c0 4.51-3.67 8.18-8.09 8.18Zm4.48-6.11c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.25.24-.42.08-.16.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.47-.41-.41-.56-.42h-.48c-.16 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.16 1.76 2.69 4.27 3.77.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.07-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.45 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M14.56 3c.17 1.4.95 2.66 2.14 3.43.83.54 1.8.82 2.8.82V9.8a7.3 7.3 0 0 1-2.73-.53v5.13c0 3.6-2.92 6.52-6.52 6.52a6.52 6.52 0 1 1 0-13.04c.3 0 .6.03.9.08v2.63a3.9 3.9 0 0 0-.9-.11 3.9 3.9 0 1 0 3.91 3.92V3h2.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

const instagramHref = "https://www.instagram.com/jrfragancias.py?igsh=NDV4azR3ZHhnbHBn";
const tiktokHref = "https://www.tiktok.com/@j.r.fragancias?_r=1&_t=ZS-95u8EAdc0pj";
const emailAddress = "jrfraganciaspy@gmail.com";

export const metadata = createPageMetadata({
  title: "Contacto | JR Fragancias",
  description:
    "Hablemos por WhatsApp, Instagram, TikTok o correo y te ayudamos a encontrar algo que vaya contigo.",
});

const whatsappHref = buildWhatsAppLink(
  "Hola, quiero encontrar una fragancia que vaya conmigo."
);

const emailHref = `mailto:${emailAddress}`;
const contactButtonClassName =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#fff8f2] transition-all duration-200 hover:-translate-y-0.5 sm:max-w-[15rem]";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Contacto"
          title="Hablemos y encontramos una fragancia para ti."
          description="Si quieres recomendacion rapida, escribenos por WhatsApp. Si quieres ver contenido y novedades, siguenos en Instagram. Si quieres descubrir mas estilo y videos, mira TikTok. Y si prefieres escribir con calma, envianos un correo."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <article className="flex h-full flex-col rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <div className="flex items-center gap-3 text-accent">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                <WhatsAppIcon />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">WhatsApp</p>
            </div>
            <p className="mt-4 text-base leading-8 text-muted">
              Si quieres recomendacion rapida, escribenos por WhatsApp. Por aqui te ayudamos con stock, formatos, precios y opciones parecidas a lo que buscas.
            </p>
            <p className="mt-3 text-center text-sm text-muted">+595 991 900 518</p>
            <div className="mt-auto pt-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButtonClassName} hover:bg-[#25d366] hover:shadow-[0_12px_28px_rgba(37,211,102,0.22)]`}
              >
                <WhatsAppIcon />
                Abrir WhatsApp
              </a>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <div className="flex items-center gap-3 text-accent">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                <InstagramIcon />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">Instagram</p>
            </div>
            <p className="mt-4 text-base leading-8 text-muted">
              Si quieres ver contenido y novedades, siguenos en Instagram. Ahi compartimos lanzamientos, ideas y contenido para que sigas descubriendo fragancias a tu ritmo.
            </p>
            <p className="mt-3 text-center text-sm text-muted">@jrfragancias.py</p>
            <div className="mt-auto pt-6">
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButtonClassName} hover:bg-[#c86f64] hover:shadow-[0_12px_28px_rgba(200,111,100,0.22)]`}
              >
                <InstagramIcon />
                Ir a Instagram
              </a>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <div className="flex items-center gap-3 text-accent">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                <TikTokIcon />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">TikTok</p>
            </div>
            <p className="mt-4 text-base leading-8 text-muted">
              Si quieres descubrir mas estilo y videos, mira TikTok. Es el lugar ideal para ver contenido mas dinamico y seguir conectando con la marca.
            </p>
            <p className="mt-3 text-center text-sm text-muted">@j.r.fragancias</p>
            <div className="mt-auto pt-6">
              <a
                href={tiktokHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButtonClassName} hover:bg-[#2f2a27] hover:shadow-[0_12px_28px_rgba(31,23,20,0.24)]`}
              >
                <TikTokIcon />
                Ir a TikTok
              </a>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <div className="flex items-center gap-3 text-accent">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                <MailIcon />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">Correo</p>
            </div>
            <p className="mt-4 text-base leading-8 text-muted">
              Si prefieres escribir con calma, envianos un correo. Es una buena opcion si quieres detallar mejor lo que buscas o hacer una consulta mas tranquila.
            </p>
            <p className="mt-3 text-center text-sm text-muted">{emailAddress}</p>
            <div className="mt-auto pt-6">
              <a
                href={emailHref}
                className={`${contactButtonClassName} hover:bg-[#9b6a43] hover:shadow-[0_12px_28px_rgba(155,106,67,0.22)]`}
              >
                <MailIcon />
                Enviar correo
              </a>
            </div>
          </article>
        </div>

        <div className="mt-6">
          <CtaLink href="/catalogo" label="Ir al catalogo" variant="secondary" />
        </div>
      </section>
    </main>
  );
}