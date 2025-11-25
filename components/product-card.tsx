// components/product-card.tsx

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ProductCardVariant = "standard" | "compact" | "grid";

type ProductCardProps = {
	slug: string;
	name: string;
	tagline: string;
	priceLabel: string;
	imageUrl: string;
	variant?: ProductCardVariant;
	badge?: string;
	priority?: boolean;
	className?: string;
};

export function ProductCard({
	slug,
	name,
	tagline,
	priceLabel,
	imageUrl,
	variant = "standard",
	badge,
	priority = false,
	className,
}: ProductCardProps) {
	const isCompact = variant === "compact";
	const isGrid = variant === "grid";

	// Variant-specific configurations
	const imageAspect = "aspect-[4/3]";
	const imageRadius = "rounded-[1.4rem]";
	const titleSize = isCompact ? "text-base" : "text-[1.1rem]";
	const spacing = "space-y-2";

	// Grid variant: vertical stack (image on top, content below)
	if (isGrid) {
		return (
			<article className={cn("group relative", className)}>
				<Link href={`/products/${slug}`} className="block space-y-4">
					{/* Image */}
					<div
						className={cn(
							"relative overflow-hidden bg-surface/80 transition-transform duration-700 group-hover:scale-[1.02]",
							imageRadius,
						)}
					>
						<div className={cn("relative", imageAspect)}>
							<Image
								src={imageUrl}
								alt={name}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								sizes="(min-width: 1024px) 50vw, 100vw"
								priority={priority}
							/>
						</div>
					</div>

					{/* Content */}
					<div className="space-y-2.5">
						{badge && (
							<p className="text-[0.7rem] uppercase tracking-[0.26em] text-muted">
								{badge}
							</p>
						)}
						<h3
							className={cn(
								"font-display tracking-tight transition-colors group-hover:text-ink/80",
								titleSize,
							)}
						>
							{name}
						</h3>
						<p className="text-sm text-muted leading-relaxed">{tagline}</p>
						<div className="flex flex-wrap items-center gap-4 text-sm pt-1">
							<span className="font-medium">{priceLabel}</span>
							<span className="text-[0.7rem] uppercase tracking-[0.26em] text-muted transition-colors group-hover:text-ink/60">
								View details
							</span>
						</div>
					</div>
				</Link>
			</article>
		);
	}

	return (
		<article
			className={cn(
				"group relative",
				"grid gap-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-center",
				className,
			)}
		>
			{/* Image */}
			<Link
				href={`/products/${slug}`}
				className={cn(
					"relative overflow-hidden bg-surface/80 transition-transform duration-700 group-hover:scale-[1.02]",
					imageRadius,
				)}
			>
				<div className={cn("relative", imageAspect)}>
					<Image
						src={imageUrl}
						alt={name}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						sizes="(min-width: 1024px) 320px, 100vw"
						priority={priority}
					/>
				</div>
			</Link>

			{/* Content */}
			<div className={cn(spacing)}>
				{badge && (
					<p className="text-[0.7rem] uppercase tracking-[0.26em] text-muted">
						{badge}
					</p>
				)}
				<Link href={`/products/${slug}`}>
					<h3
						className={cn(
							"font-display tracking-tight transition-colors group-hover:text-ink/80",
							titleSize,
						)}
					>
						{name}
					</h3>
				</Link>
				<p className="text-muted text-sm">{tagline}</p>
				<div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
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
