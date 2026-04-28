import type { Brand } from "@/lib/cms/types";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <article className="feature-card rounded-[1.75rem] p-6 sm:p-7">
      <div className="rounded-[1.45rem] border border-foreground/8 bg-white/45 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Marca con personalidad
            </p>
            <h2 className="display-font mt-3 text-[2rem] leading-tight sm:text-[2.2rem]">
              {brand.name}
            </h2>
          </div>
          <div className="rounded-full border border-foreground/8 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {brand.origin}
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(168,116,67,0.24),rgba(52,43,39,0.05))]" />

        <p className="mt-5 text-base leading-8 text-muted">{brand.description}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          <span className="rounded-full border border-foreground/8 bg-white/72 px-3 py-1">
            Seleccion curada
          </span>
          <span className="rounded-full border border-foreground/8 bg-white/72 px-3 py-1">
            Presencia propia
          </span>
        </div>
      </div>
    </article>
  );
}