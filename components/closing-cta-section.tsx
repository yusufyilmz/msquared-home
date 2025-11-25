// components/closing-cta-section.tsx

import { CtaButton } from "@/components/cta-button";
import { siteCopy } from "@/config/siteCopy";

export function ClosingCtaSection() {
  const copy = siteCopy.closingCta;

  return (
    <section className="section pb-16">
      <div className="section-inner">
        <div className="rounded-[2rem] bg-surface/80 px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
            <div className="space-y-3">
              <h2 className="h2">
                {copy.heading}
              </h2>
              <p className="body-lg">
                {copy.body}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <CtaButton href={copy.primaryCtaHref}>
                {copy.primaryCtaLabel}
              </CtaButton>
              <CtaButton variant="secondary" href={copy.secondaryCtaHref}>
                {copy.secondaryCtaLabel}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}