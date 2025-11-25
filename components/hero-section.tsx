// import Image from "next/image";
// import { CtaButton } from "@/components/cta-button";
// import { siteCopy } from "@/config/siteCopy";

// export function HeroSection() {
//   const copy = siteCopy.hero;

//   return (
//     <section className="section pt-10 md:pt-16">
//       <div className="section-inner space-y-10 md:space-y-14">
//         <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] md:items-end">
//           <div className="space-y-6">
//             <p className="section-title">{copy.eyebrow}</p>
//             <h1 className="h1 max-w-xl">
//               {copy.heading}
//             </h1>
//             <p className="body-lg max-w-xl">
//               {copy.subheading}
//             </p>
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <CtaButton href={copy.primaryCtaHref}>
//                 {copy.primaryCtaLabel}
//               </CtaButton>
//               <CtaButton variant="secondary" href={copy.secondaryCtaHref}>
//                 {copy.secondaryCtaLabel}
//               </CtaButton>
//             </div>
//             <p className="pt-2 text-[0.7rem] uppercase tracking-[0.26em] text-muted/80">
//               {copy.highlightNote}
//             </p>
//           </div>

//           <div className="relative">
//             <div className="relative overflow-hidden rounded-[1.8rem]">
//               <div className="relative aspect-[5/3]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
//                   alt="Softly lit, neutral-toned living space with sculptural decor."
//                   fill
//                   className="object-cover"
//                   sizes="(min-width: 1024px) 640px, 100vw"
//                   priority
//                 />
//               </div>
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.18)] via-transparent to-transparent mix-blend-multiply" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/hero-section.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { siteCopy } from "@/config/siteCopy";

export function HeroSection() {
	const copy = siteCopy.hero;
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [scrollY, setScrollY] = useState(0);

	// Auto-play video on load
	useEffect(() => {
		const video = videoRef.current;
		if (!video || !copy.video) return;

		// Try to play video on mount
		video.play().catch((error) => {
			// Autoplay was prevented, which is fine
			console.log("Video autoplay prevented:", error);
		});
	}, [copy.video]);

	// Track scroll position for overlay opacity
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Set initial scroll position
		setScrollY(window.scrollY);

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Calculate overlay opacity based on scroll position
	// Transparent at top (0), fully visible after scrolling 200px
	const overlayOpacity = Math.min(scrollY / 200, 1);

	return (
		<section className="relative isolate h-screen overflow-hidden">
			{/* background image or video */}
			<div className="absolute inset-0">
				{copy.video ? (
					<video
						ref={videoRef}
						src={copy.video}
						className="w-full h-full object-cover"
						loop
						muted
						playsInline
						autoPlay
						preload="auto"
					>
						Your browser does not support the video tag.
					</video>
				) : (
					<Image
						src={copy.image}
						alt="Soft, neutral-toned interior with elegant decor."
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
				)}
				{/* overlay for readability */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.28),_transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.55))]" />
			</div>

			{/* content */}
			<div className="relative flex h-screen items-center">
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
							Made in small batches · Hand-poured and finished · Neutral
							palettes
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
