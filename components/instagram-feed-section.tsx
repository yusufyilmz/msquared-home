"use client";

import * as React from "react";
import { ClientOnlyInstagramEmbed } from "@/components/client-only-instagram-embed";
import { SectionShell } from "@/components/section-shell";

interface InstagramFeedSectionProps {
	title?: string;
	intro?: string;
	instagramHandle?: string;
	instagramUrl?: string;
	postUrls: string[];
	maxPosts?: number;
}

export function InstagramFeedSection({
	title = "Studio feed",
	intro = "Recent pieces and moments from Instagram.",
	instagramHandle = "@msquaredhome",
	instagramUrl = "https://www.instagram.com/msquaredhome",
	postUrls,
	maxPosts = 4,
}: InstagramFeedSectionProps) {
	// Take only the specified number of posts
	const displayPosts = postUrls.slice(0, maxPosts);

	return (
		<SectionShell
			id="instagram-feed"
			eyebrow={title}
			heading={intro}
			align="left"
		>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{displayPosts.map((url) => (
					<div
						key={url}
						className="overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white/80 shadow-sm backdrop-blur"
					>
						<ClientOnlyInstagramEmbed url={url} width="100%" captioned />
					</div>
				))}
			</div>

			<div className="mt-8 text-center">
				<p className="text-sm text-neutral-600">
					More on{" "}
					<a
						href={instagramUrl}
						target="_blank"
						rel="noreferrer"
						className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700 transition-colors"
					>
						{instagramHandle}
					</a>
				</p>
			</div>
		</SectionShell>
	);
}
