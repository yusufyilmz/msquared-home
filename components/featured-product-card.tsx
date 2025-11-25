// components/featured-product-card.tsx

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type FeaturedProductCardProps = {
	slug: string;
	name: string;
	tagline: string;
	priceLabel: string;
	imageUrl: string;
	badge?: string;
	priority?: boolean;
	className?: string;
};

export function FeaturedProductCard({
	slug,
	name,
	tagline,
	priceLabel,
	imageUrl,
	badge,
	priority = false,
	className,
}: FeaturedProductCardProps) {
	return (
		<article
			className={cn(
				"group relative",
				"grid gap-8 md:gap-16 md:grid-cols-[minmax(0,1.8fr)_minmax(0,0.85fr)] md:items-center",
				className,
			)}
		>
			{/* Image */}
			<Link
				href={`/products/${slug}`}
				className={cn(
					"relative overflow-hidden bg-surface/80 transition-transform duration-700 group-hover:scale-[1.02]",
					"rounded-[2rem] md:rounded-[2.4rem]",
				)}
			>
				<div className="relative aspect-[5/3] md:aspect-[16/9]">
					<Image
						src={imageUrl}
						alt={name}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						sizes="(min-width: 1024px) 1200px, 100vw"
						priority={priority}
					/>
				</div>
			</Link>

			{/* Content */}
			<div className="space-y-5">
				{badge && (
					<p className="uppercase tracking-[0.26em] text-muted text-[0.75rem] md:text-sm">
						{badge}
					</p>
				)}
				<Link href={`/products/${slug}`}>
					<h3 className="font-display tracking-tight transition-colors group-hover:text-ink/80 text-[2rem] md:text-[2.8rem]">
						{name}
					</h3>
				</Link>
				<p className="text-muted text-lg md:text-xl">{tagline}</p>
				<div className="flex flex-wrap items-center gap-4 mt-5 text-lg">
					<span className="font-medium">{priceLabel}</span>
					<Link
						href={`/products/${slug}`}
						className="text-[0.7rem] uppercase tracking-[0.26em] text-muted transition-colors hover:text-ink"
					>
						View details
					</Link>
				</div>
			</div>
		</article>
	);
}
