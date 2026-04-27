import Link from "next/link";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CtaLink({ href, label, variant = "primary" }: CtaLinkProps) {
  const className =
    variant === "primary"
      ? "bg-accent text-[#fff8f2] hover:-translate-y-0.5"
      : "border border-foreground/10 bg-white/45 text-foreground hover:bg-white/70";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${className}`}
    >
      {label}
    </Link>
  );
}