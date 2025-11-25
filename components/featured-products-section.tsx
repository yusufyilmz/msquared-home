// components/featured-products-section.tsx

import { SectionShell } from "@/components/section-shell";
import { ProductCard } from "@/components/product-card";
import { FeaturedProductCard } from "@/components/featured-product-card";
import { siteCopy } from "@/config/siteCopy";

export function ProductsSection() {
	const copy = siteCopy.featuredProducts;

	if (!copy.items.length) return null;

	// Separate hero product from the rest
	const [hero, ...rest] = copy.items;

	return (
		<SectionShell
			id="featured"
			eyebrow={copy.sectionTitle}
			heading={copy.sectionIntro}
			align="left"
		>
			<div className="space-y-10">
				{/* Hero product - featured prominently */}
				<FeaturedProductCard
					slug={hero.slug}
					name={hero.name}
					tagline={hero.tagline}
					priceLabel={hero.priceLabel}
					imageUrl={hero.imageUrl}
					badge="Featured piece · Limited run"
					priority
				/>

				{/* Divider between hero and grid */}
				{rest.length > 0 && (
					<div className="border-t border-[rgba(0,0,0,0.06)] pt-10" />
				)}

				{/* Secondary products - elegant grid layout */}
				{rest.length > 0 && (
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
						{rest.map((item) => (
							<ProductCard
								key={item.slug}
								slug={item.slug}
								name={item.name}
								tagline={item.tagline}
								priceLabel={item.priceLabel}
								imageUrl={item.imageUrl}
								variant="grid"
								badge="Studio piece"
							/>
						))}
					</div>
				)}
			</div>
		</SectionShell>
	);
}
