// components/social-proof-section.tsx

import Link from "next/link";
import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

// Curated journal / styled shots section (separate from the live Instagram feed)
export function JournalPreviewSection() {
	const copy = siteCopy.socialProof;

	return (
		<SectionShell
			id="journal-preview"
			eyebrow={copy.sectionTitle}
			heading={copy.heading}
			intro={copy.body}
		>
			<div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
				{/* Images on the left */}
				<div className="grid grid-cols-3 grid-rows-2 gap-3 order-first align-top">
					{copy.images.map((src, index) => (
						<div
							key={src}
							className={[
								"relative overflow-hidden rounded-[1.3rem]",
								// Make the first image a little larger for a collage feel
								index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1",
								"aspect-[4/5]",
							]
								.filter(Boolean)
								.join(" ")}
						>
							<Image
								src={src}
								alt={`Instagram style preview ${index + 1}`}
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 320px, 33vw"
							/>
						</div>
					))}
				</div>

				{/* Text content on the right */}
				<div className="space-y-6">
					<div className="space-y-4 text-base text-ink/90">
						<p>
							Follow{" "}
							<Link
								href={copy.instagramUrl}
								className="font-medium text-ink underline-offset-4 hover:underline"
							>
								{copy.instagramHandle}
							</Link>{" "}
							for new pieces, studio notes, and quiet glimpses into how
							everything is made.
						</p>
					</div>
					<div className="space-y-3 pt-2">
						<p className="text-xs uppercase tracking-[0.18em] text-ink/60">
							Journal preview
						</p>
						<p className="max-w-md text-sm leading-relaxed text-ink/80">
							A small, curated selection from recent posts – styled corners,
							table settings, and quiet details that capture the mood of the
							collection.
						</p>
					</div>
				</div>
			</div>
		</SectionShell>
	);
}
