// components/featured-products-section.tsx

import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

export function FeaturedProductsSection() {
  const copy = siteCopy.featuredProducts;

  if (!copy.items.length) return null;

  // map images to items by index
  const productImages = [
    ...copy.items.map(item => item.imageUrl),
    ...copy.additionalImages
  ];

  const [hero, ...rest] = copy.items;

  return (
    <SectionShell
      id="featured"
      eyebrow={copy.sectionTitle}
      heading={copy.sectionIntro}
      align="left"
    >
      <div className="space-y-10">
        {/* Hero product row */}
        <article className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-surface/80">
            <div className="relative aspect-[5/3] md:aspect-[4/3]">
              <Image
                src={productImages[0]}
                alt={hero.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[0.7rem] uppercase tracking-[0.26em] text-muted">
              Featured piece · Limited run
            </p>
            <h3 className="font-display text-[1.6rem] tracking-tight">
              {hero.name}
            </h3>
            <p className="text-sm md:text-base text-muted">
              {hero.tagline}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="font-medium">{hero.priceLabel}</span>
              <Link
                href={`/products/${hero.slug}`}
                className="text-[0.7rem] uppercase tracking-[0.26em] text-muted hover:text-ink"
              >
                View details
              </Link>
            </div>
          </div>
        </article>

        {rest.length > 0 && (
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-6" />
        )}

        {/* Aesop-style vertical list */}
        <div className="space-y-6">
          {rest.map((item, index) => (
            <article
              key={item.slug}
              className="grid gap-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-surface/80">
                <Image
                  src={productImages[index + 1] ?? productImages[0]}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.26em] text-muted">
                  Studio piece
                </p>
                <h3 className="font-display text-[1.1rem]">
                  {item.name}
                </h3>
                <p className="text-sm text-muted">
                  {item.tagline}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                  <span className="font-medium">{item.priceLabel}</span>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-[0.7rem] uppercase tracking-[0.26em] text-muted hover:text-ink"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}