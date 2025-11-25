// components/categories-section.tsx

import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

export function CategoriesSection() {
	const copy = siteCopy.categories;

	return (
		<SectionShell
			id="collection"
			eyebrow={copy.sectionTitle}
			heading={copy.sectionIntro}
			align="center"
		>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{copy.items.map((item) => (
					<Link
						key={item.slug}
						href={item.slug}
						className="group relative block"
					>
						<div className="relative overflow-hidden rounded-[1.4rem] bg-surface/80 mb-4">
							<div className="relative aspect-[4/3]">
								<Image
									src={item.imageUrl}
									alt={item.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
								/>
							</div>
						</div>
						<div className="text-center">
							<h3 className="font-display text-lg mb-1 group-hover:text-ink/90 transition-colors">
								{item.name}
							</h3>
							<p className="text-sm text-muted">{item.description}</p>
						</div>
					</Link>
				))}
			</div>
		</SectionShell>
	);
}
