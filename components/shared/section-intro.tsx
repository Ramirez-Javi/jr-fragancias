type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
        {eyebrow}
      </p>
      <h1 className="display-font text-4xl leading-tight sm:text-5xl">{title}</h1>
      <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}