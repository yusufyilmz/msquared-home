"use client";

// components/about-preview-section.tsx

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

export function AboutPreviewSection() {
	const copy = siteCopy.aboutPreview;
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	// Track video play/pause state
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);

		video.addEventListener("play", handlePlay);
		video.addEventListener("pause", handlePause);

		return () => {
			video.removeEventListener("play", handlePlay);
			video.removeEventListener("pause", handlePause);
		};
	}, []);

	return (
		<SectionShell
			id="about-preview"
		>
			<div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
				{/* Content on the left */}
				<div className="space-y-6">
					<div className="space-y-5">
						{copy.body.map((paragraph) => (
							<p
								key={paragraph.slice(0, 30)}
								className="body-lg text-ink/90 leading-relaxed"
							>
								{paragraph}
							</p>
						))}
					</div>

					{copy.bullets && copy.bullets.length > 0 && (
						<ul className="space-y-2.5 pt-2">
							{copy.bullets.map((bullet) => (
								<li
									key={bullet}
									className="flex items-start gap-3 text-base text-ink/80"
								>
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
									<span>{bullet}</span>
								</li>
							))}
						</ul>
					)}

					<div className="pt-2">
						<CtaButton variant="secondary" href={copy.ctaHref}>
							{copy.ctaLabel}
						</CtaButton>
					</div>
				</div>

				{/* Single media container for videos and images */}
				<div className="relative order-first lg:order-last">
					<div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-surface/50 group">
						{copy.video && (
							<>
								<video
									ref={videoRef}
									src={copy.video}
									className="h-full w-full object-cover"
									loop
									muted={isMuted}
									playsInline
									preload="auto"
								>
									Your browser does not support the video tag.
								</video>
								{/* Play/Pause button - centered */}
								<button
									type="button"
									onClick={() => {
										if (videoRef.current) {
											if (isPlaying) {
												videoRef.current.pause();
											} else {
												videoRef.current.play().catch((error) => {
													console.log("Video play failed:", error);
												});
											}
										}
									}}
									className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-xl transition-all hover:bg-white hover:scale-110 group-hover:opacity-100"
									aria-label={isPlaying ? "Pause video" : "Play video"}
								>
									{isPlaying ? (
										<Pause className="h-6 w-6 ml-0.5" />
									) : (
										<Play className="h-6 w-6 ml-1" />
									)}
								</button>
								{/* Mute/Unmute button */}
								<button
									type="button"
									onClick={() => {
										if (videoRef.current) {
											videoRef.current.muted = !isMuted;
											setIsMuted(!isMuted);
										}
									}}
									className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-all hover:bg-white hover:scale-110"
									aria-label={isMuted ? "Unmute video" : "Mute video"}
								>
									{isMuted ? (
										<VolumeX className="h-5 w-5" />
									) : (
										<Volume2 className="h-5 w-5" />
									)}
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</SectionShell>
	);
}
