"use client";

import { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface ClientOnlyInstagramEmbedProps {
	url: string;
	width?: string | number;
	captioned?: boolean;
}

/**
 * Wrapper component that only renders InstagramEmbed on the client side
 * to prevent hydration mismatches caused by UUID generation in the library
 */
export function ClientOnlyInstagramEmbed({
	url,
	width = "100%",
	captioned = false,
}: ClientOnlyInstagramEmbedProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		// Return a placeholder with the same dimensions during SSR
		return (
			<div
				style={{
					width: typeof width === "string" ? width : `${width}px`,
					minHeight: "400px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#f5f5f5",
					borderRadius: "8px",
				}}
			>
				<div className="text-sm text-neutral-500">Loading Instagram post...</div>
			</div>
		);
	}

	return <InstagramEmbed url={url} width={width} captioned={captioned} />;
}

