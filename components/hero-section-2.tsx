import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { siteCopy } from "@/config/siteCopy";

export function HeroSection() {
  const copy = siteCopy.hero;

  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1800&q=80"
          alt="Soft, neutral-toned interior with elegant decor."
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.28),_transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.55))]" />
      </div>

      {/* content */}
      <div className="relative flex min-h-[80vh] items-center">
        <div className="section-inner">
          <div className="max-w-xl space-y-6 text-white">
            <p className="text-[0.75rem] uppercase tracking-[0.3em] text-white/70">
              {copy.eyebrow} · Small-batch decor
            </p>
            <h1 className="font-display text-[2.5rem] leading-[1.05] md:text-[3rem]">
              {copy.heading}
            </h1>
            <p className="text-sm md:text-base text-white/80">
              {copy.subheading}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <CtaButton href={copy.primaryCtaHref}>
                {copy.primaryCtaLabel}
              </CtaButton>
              <CtaButton
                variant="secondary"
                href={copy.secondaryCtaHref}
                className="border-white/30 bg-white/10 text-white hover:border-white/60"
              >
                {copy.secondaryCtaLabel}
              </CtaButton>
            </div>
            <p className="pt-4 text-[0.7rem] uppercase tracking-[0.26em] text-white/60">
              Made in small batches · Hand-poured and finished · Neutral palettes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}