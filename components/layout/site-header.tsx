import Link from "next/link";

const navigation = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/marcas", label: "Marcas" },
  { href: "/decants", label: "Decants" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="relative z-40 px-4 py-4 sm:px-6 md:sticky md:top-0 lg:px-8">
      <div className="glass-panel mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1714] text-sm font-semibold tracking-[0.18em] text-[#f8f2ea] sm:h-11 sm:w-11">
            JR
          </div>
          <div className="min-w-0">
            <p className="display-font text-[1.95rem] leading-none sm:text-2xl">JR Fragancias</p>
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted sm:text-xs sm:tracking-[0.22em]">
              Perfumes y decants
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold leading-tight text-[#fff8f2] text-center transition-transform duration-200 hover:-translate-y-0.5 sm:px-5"
        >
          Hablemos por WhatsApp
        </Link>
      </div>
    </header>
  );
}