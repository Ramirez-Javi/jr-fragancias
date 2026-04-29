"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.42 2.18 11.85c0 1.74.45 3.44 1.31 4.95L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.85a9.8 9.8 0 0 0-2.85-7.04Zm-7.01 15.22h-.01a8.18 8.18 0 0 1-4.17-1.15l-.3-.18-3.17.83.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.19-8.17 2.18 0 4.22.85 5.76 2.4a8.1 8.1 0 0 1 2.39 5.78c0 4.51-3.67 8.18-8.09 8.18Zm4.48-6.11c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.25.24-.42.08-.16.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.47-.41-.41-.56-.42h-.48c-.16 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.16 1.76 2.69 4.27 3.77.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.07-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.45 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
      <path d="M14.56 3c.17 1.4.95 2.66 2.14 3.43.83.54 1.8.82 2.8.82V9.8a7.3 7.3 0 0 1-2.73-.53v5.13c0 3.6-2.92 6.52-6.52 6.52a6.52 6.52 0 1 1 0-13.04c.3 0 .6.03.9.08v2.63a3.9 3.9 0 0 0-.9-.11 3.9 3.9 0 1 0 3.91 3.92V3h2.4Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 stroke-current" fill="none">
      <path
        d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navigation = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/marcas", label: "Marcas" },
  { href: "/decants", label: "Decants" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
];

const instagramHref = "https://www.instagram.com/jrfragancias.py?igsh=NDV4azR3ZHhnbHBn";
const tiktokHref = "https://www.tiktok.com/@j.r.fragancias?_r=1&_t=ZS-95u8EAdc0pj";
const whatsappHref = buildWhatsAppLink("Hola, quiero encontrar una fragancia que vaya conmigo.");
const mobileActionClassName =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-white/55 text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-[#fff8f2]";

export function SiteHeader() {
  const menuId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-40 px-4 py-1 sm:px-6 sm:py-2 md:sticky md:top-0 lg:px-8">
      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Cerrar menu movil"
          className="fixed inset-0 z-0 bg-[#1f1714]/28 backdrop-blur-[3px] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

      <div className="glass-panel relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full px-4 py-2 sm:px-5 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1714] text-sm font-semibold tracking-[0.18em] text-[#f8f2ea] sm:h-11 sm:w-11">
            JR
          </div>
          <div className="min-w-0">
            <p className="display-font text-[1.55rem] leading-none sm:text-2xl">JR Fragancias</p>
            <p className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-muted sm:block sm:text-xs sm:tracking-[0.22em]">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className={mobileActionClassName}
          >
            <WhatsAppIcon />
          </a>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a Instagram"
            className={mobileActionClassName}
          >
            <InstagramIcon />
          </a>
          <a
            href={tiktokHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a TikTok"
            className={mobileActionClassName}
          >
            <TikTokIcon />
          </a>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Cerrar menu principal" : "Abrir menu principal"}
            className={`${mobileActionClassName} lg:hidden`}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`relative z-10 mx-auto flex w-full max-w-7xl justify-end overflow-hidden px-2 transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen ? "mt-3 max-h-96 opacity-100" : "pointer-events-none mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="glass-panel w-fit min-w-[12rem] rounded-[2rem] px-5 py-4 shadow-[0_24px_64px_rgba(31,23,20,0.2)]">
          <nav className="flex w-fit flex-col gap-1.5" aria-label="Menu principal movil">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-left text-sm font-semibold text-foreground/80 transition-colors hover:bg-white/45 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}