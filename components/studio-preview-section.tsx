"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function StudioPreviewSection() {
	const copy = siteCopy.studio;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	// Total items in carousel (video + images)
	const totalItems = (copy.video ? 1 : 0) + (copy.images?.length || 0);

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === totalItems - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? totalItems - 1 : prev - 1,
		);
	};

	const goToImage = (index: number) => {
		setCurrentImageIndex(index);
	};

	// Auto-play video on scroll using Intersection Observer
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						video.play().catch((error) => {
							// Autoplay was prevented, which is fine
							console.log("Video autoplay prevented:", error);
						});
					} else {
						video.pause();
					}
				}
			},
			{
				threshold: 0.5, // Play when 50% of video is visible
			},
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
		};
	}, []);

	// Auto-play functionality for carousel
	useEffect(() => {
		if (totalItems <= 1 || isPaused) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}

		intervalRef.current = setInterval(() => {
			setCurrentImageIndex((prev) =>
				prev === totalItems - 1 ? 0 : prev + 1,
			);
		}, 4000); // Change item every 4 seconds

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isPaused, totalItems]);

	return (
		<SectionShell
			id="inside"
			eyebrow={copy.sectionTitle}
			heading={copy.heading}
		>
			<div className="space-y-10">
				{/* Text content */}
				<p className="body-lg max-w-2xl">{copy.body}</p>

				{/* Carousel container - always present */}
				<div
					className="relative"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-surface/80">
						{/* Video - index 0 */}
						{copy.video && (
							<div
								className={`absolute inset-0 transition-opacity duration-500 ${
									currentImageIndex === 0 ? "opacity-100" : "opacity-0"
								}`}
							>
								<video
									ref={videoRef}
									src={copy.video}
									className="w-full h-full object-cover"
									loop
									muted
									playsInline
									preload="auto"
								>
									Your browser does not support the video tag.
								</video>
							</div>
						)}

						{/* Images - starting from index 1 if video exists, 0 otherwise */}
						{copy.images?.map((image, index) => {
							const itemIndex = copy.video ? index + 1 : index;
							return (
								<div
									key={image}
									className={`absolute inset-0 transition-opacity duration-500 ${
										itemIndex === currentImageIndex ? "opacity-100" : "opacity-0"
									}`}
								>
									<Image
										src={image}
										alt={`Studio image ${index + 1}`}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 1000px, 100vw"
									/>
								</div>
							);
						})}

						{/* Navigation buttons - show when more than 1 item */}
						{totalItems > 1 && (
							<>
								<button
									type="button"
									onClick={() => {
										setIsPaused(true);
										prevImage();
									}}
									className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-all hover:bg-white hover:scale-110"
									aria-label="Previous item"
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<button
									type="button"
									onClick={() => {
										setIsPaused(true);
										nextImage();
									}}
									className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-all hover:bg-white hover:scale-110"
									aria-label="Next item"
								>
									<ChevronRight className="h-5 w-5" />
								</button>
							</>
						)}
					</div>

					{/* Dots indicator - show for all items */}
					{totalItems > 1 && (
						<div className="mt-4 flex justify-center gap-2">
							{/* biome-ignore lint/suspicious/noArrayIndexKey: Dots are stable and order-dependent */}
							{Array.from({ length: totalItems }).map((_, index) => (
								<button
									key={`carousel-dot-${index}`}
									type="button"
									onClick={() => {
										setIsPaused(true);
										goToImage(index);
									}}
									className={`h-2 rounded-full transition-all ${
										index === currentImageIndex
											? "w-8 bg-ink"
											: "w-2 bg-ink/30 hover:bg-ink/50"
									}`}
									aria-label={`Go to ${index === 0 && copy.video ? "video" : `image ${copy.video ? index : index + 1}`}`}
								/>
							))}
						</div>
					)}

					{/* Video label */}
					{copy.video && copy.videoLabel && currentImageIndex === 0 && (
						<p className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
							{copy.videoLabel}
						</p>
					)}
				</div>
			</div>
		</SectionShell>
	);
}
