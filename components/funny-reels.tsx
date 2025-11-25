"use client";

import * as React from "react";
import { ClientOnlyInstagramEmbed } from "@/components/client-only-instagram-embed";
import { SectionShell } from "@/components/section-shell";

interface FunnyReelSectionProps {
	title?: string;
	intro?: string;
	description?: string;
}

const REEL_URL =
	"https://www.instagram.com/em_haboude_official/reel/DExHwaoN4jW/";

export function FunnyReelSection({
	title = "A little store moment",
	intro = "A quick visit to the store, as seen on Instagram.",
	description,
}: FunnyReelSectionProps) {
	return (
		<SectionShell
			id="store-reel"
			eyebrow="From Instagram"
			heading={title}
			intro={intro}
		>
			{/* Optional description text */}
			{description && (
				<div className="mx-auto mb-8 max-w-2xl text-center">
					<p className="text-base text-neutral-600 leading-relaxed">
						{description}
					</p>
				</div>
			)}

			{/* Enhanced reel container with better visual hierarchy */}
			<div className="relative mx-auto w-full">
				{/* Decorative background gradient */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50 rounded-3xl blur-3xl opacity-60" />
				
				{/* Reel container with enhanced styling */}
				<div className="relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/90 shadow-xl shadow-neutral-900/5 backdrop-blur-sm ring-1 ring-neutral-900/5">
					<ClientOnlyInstagramEmbed url={REEL_URL} width="100%" captioned />
				</div>

				{/* Credit with better styling */}
				<div className="mt-6 text-center">
					<p className="text-sm text-neutral-500">
						Featured reel by{" "}
						<a
							href="https://www.instagram.com/em_haboude_official/"
							target="_blank"
							rel="noreferrer"
							className="font-semibold text-neutral-900 underline decoration-neutral-300 decoration-2 underline-offset-4 transition-colors hover:text-neutral-700 hover:decoration-neutral-400"
						>
							@em_haboude_official
						</a>
					</p>
				</div>
			</div>
		</SectionShell>
	);
}
