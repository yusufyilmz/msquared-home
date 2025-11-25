"use client";

import { CtaButton } from "@/components/cta-button";
import { SectionShell } from "@/components/section-shell";
import { MediaContainer } from "@/components/features/media-container";
import { siteCopy } from "@/config/siteCopy";

export function AboutPreviewSection() {
	const copy = siteCopy.aboutPreview;

	return (
		<SectionShell id="about-preview">
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
					{copy.video ? (
						<MediaContainer
							src={copy.video}
							alt="About preview video"
							type="video"
							aspectRatio="aspect-[4/5]"
							containerClassName="overflow-hidden rounded-[1.8rem] bg-surface/50"
							videoProps={{
								loop: true,
								muted: false,
								autoPlay: false,
								showControls: true,
							}}
						/>
					) : null}
				</div>
			</div>
		</SectionShell>
	);
}
