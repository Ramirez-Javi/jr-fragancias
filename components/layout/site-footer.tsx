import Link from "next/link";

const quickLinks = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/marcas", label: "Marcas" },
  { href: "/decants", label: "Decants" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] bg-[#1f1714] px-6 py-8 text-[#f8f2ea] sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div className="space-y-4">
          <p className="display-font text-3xl">JR Fragancias</p>
          <p className="max-w-xl text-sm leading-7 text-[#dcccbc]">
            Perfumes completos y decants para que encuentres algo que vaya contigo, dure bien y puedas elegir con calma antes de dar el siguiente paso.
          </p>
          <div className="space-y-1 text-xs leading-6 text-[#dcccbc] sm:text-sm">
            <p>
              Desarrollado por{" "}
              <a
                href="https://www.tekoiinova.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#f8f2ea]"
              >
                www.tekoiinova.com
              </a>
            </p>
            <p>Copyright {currentYear}. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#f8f2ea] transition-colors hover:text-[#d8c2a0]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}