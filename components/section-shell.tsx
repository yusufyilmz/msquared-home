import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  heading,
  intro,
  align = "left",
  children
}: SectionShellProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const introWidth = align === "center" ? "max-w-2xl" : "max-w-3xl";

  return (
    <section id={id} className="section">
      <div className="section-inner">
        {(eyebrow || heading || intro) && (
          <header className={`mb-10 ${alignClass} ${introWidth}`}>
            {eyebrow ? <p className="section-title">{eyebrow}</p> : null}
            {heading ? <h2 className="h2 mb-3">{heading}</h2> : null}
            {intro ? <p className="body-lg">{intro}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
