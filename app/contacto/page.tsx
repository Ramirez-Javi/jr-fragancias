import { CtaLink } from "@/components/shared/cta-link";
import { SectionIntro } from "@/components/shared/section-intro";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Contacto | JR Fragancias",
  description:
    "Canal de consulta principal de JR Fragancias, con salida directa a WhatsApp y base para futuras integraciones comerciales.",
});

const whatsappHref = buildWhatsAppLink(
  "Hola, me interesa recibir asesoria sobre perfumes y decants disponibles."
);

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Contacto"
          title="Un flujo simple para convertir interes en conversacion real."
          description="La primera fase del proyecto cerrara por WhatsApp. Esta pantalla ya prepara el punto de conversion principal y luego se expandira con formularios, horarios, automatizaciones y otras salidas comerciales."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">WhatsApp</p>
            <p className="mt-4 text-base leading-8 text-muted">
              Canal principal para consultas, disponibilidad, recomendaciones y cierre comercial en la primera etapa.
            </p>
            <div className="mt-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#fff8f2] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Abrir WhatsApp
              </a>
            </div>
          </article>
          <article className="rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Instagram</p>
            <p className="mt-4 text-base leading-8 text-muted">
              Canal editorial, lanzamientos, piezas creativas y construccion de comunidad conectada al catalogo central.
            </p>
          </article>
          <article className="rounded-[1.5rem] border border-foreground/10 bg-white/55 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Siguiente capa</p>
            <p className="mt-4 text-base leading-8 text-muted">
              Formularios ligeros, rastreo de conversion, automatizacion y eventual CRM cuando el flujo comercial crezca.
            </p>
          </article>
        </div>

        <div className="mt-6">
          <CtaLink href="/catalogo" label="Explorar catalogo" variant="secondary" />
        </div>
      </section>
    </main>
  );
}