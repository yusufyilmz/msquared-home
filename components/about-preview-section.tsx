// components/about-preview-section.tsx

import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

export function AboutPreviewSection() {
  const copy = siteCopy.aboutPreview;

  return (
    <SectionShell
      id="studio"
      eyebrow={copy.sectionTitle}
      heading={copy.heading}
    >
      <div className="grid gap-10 rounded-[2rem] bg-surface/70 px-6 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:p-10 md:items-center">
        <div className="space-y-4">
          {copy.body.map((paragraph) => (
            <p key={paragraph.slice(0, 26)} className="body-lg">
              {paragraph}
            </p>
          ))}
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {copy.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <div className="pt-4">
            <CtaButton variant="secondary" href={copy.ctaHref}>
              {copy.ctaLabel}
            </CtaButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <div className="relative aspect-[4/5]">
              <Image
                src={copy.image}
                alt="Calm, neutral-toned studio with shelves and handcrafted objects."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}