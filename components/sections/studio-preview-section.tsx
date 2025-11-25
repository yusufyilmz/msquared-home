"use client";

import { SectionShell } from "@/components/section-shell";
import { MediaCarousel } from "@/components/features/media-carousel";
import { siteCopy } from "@/config/siteCopy";

export function StudioPreviewSection() {
	const copy = siteCopy.studio;

	// Build carousel items array
	const carouselItems = [];

	// Add video first if it exists
	if (copy.video) {
		carouselItems.push({
			src: copy.video,
			alt: "Studio video",
			type: "video" as const,
			label: copy.videoLabel,
		});
	}

	// Add images
	if (copy.images) {
		copy.images.forEach((image, index) => {
			carouselItems.push({
				src: image,
				alt: `Studio image ${index + 1}`,
				type: "image" as const,
			});
		});
	}

	return (
		<SectionShell
			id="inside"
			eyebrow={copy.sectionTitle}
			heading={copy.heading}
		>
			<div className="space-y-10">
				{/* Text content */}
				<p className="body-lg max-w-2xl">{copy.body}</p>

				{/* Carousel container */}
				{carouselItems.length > 0 && (
					<MediaCarousel
						items={carouselItems}
						aspectRatio="aspect-[4/3]"
						autoPlayInterval={4000}
						pauseOnHover
						showNavigation
						showDots
						videoProps={{
							loop: true,
							muted: true,
							autoPlay: false,
							showControls: false,
						}}
					/>
				)}
			</div>
		</SectionShell>
	);
}
