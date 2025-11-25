"use client";

import Image from "next/image";
import { VideoPlayer } from "./video-player";
import { cn } from "@/lib/utils";

type MediaContainerProps = {
	src: string;
	alt: string;
	type?: "image" | "video";
	className?: string;
	containerClassName?: string;
	aspectRatio?: string;
	priority?: boolean;
	sizes?: string;
	// Video-specific props
	videoProps?: {
		loop?: boolean;
		muted?: boolean;
		autoPlay?: boolean;
		showControls?: boolean;
	};
};

export function MediaContainer({
	src,
	alt,
	type = "image",
	className,
	containerClassName,
	aspectRatio = "aspect-[4/5]",
	priority = false,
	sizes = "(min-width: 1024px) 1000px, 100vw",
	videoProps,
}: MediaContainerProps) {
	return (
		<div className={cn("relative overflow-hidden", aspectRatio, containerClassName)}>
			{type === "video" ? (
				<VideoPlayer
					src={src}
					className={className}
					containerClassName="absolute inset-0"
					loop={videoProps?.loop ?? true}
					muted={videoProps?.muted ?? false}
					autoPlay={videoProps?.autoPlay ?? false}
					showControls={videoProps?.showControls ?? true}
				/>
			) : (
				<Image
					src={src}
					alt={alt}
					fill
					className={cn("object-cover", className)}
					priority={priority}
					sizes={sizes}
				/>
			)}
		</div>
	);
}

