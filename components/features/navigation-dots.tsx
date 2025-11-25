"use client";

import { cn } from "@/lib/utils";

type NavigationDotsProps = {
	count: number;
	currentIndex: number;
	onDotClick: (index: number) => void;
	className?: string;
	ariaLabel?: (index: number) => string;
};

export function NavigationDots({
	count,
	currentIndex,
	onDotClick,
	className,
	ariaLabel,
}: NavigationDotsProps) {
	if (count <= 1) return null;

	return (
		<div className={cn("flex justify-center gap-2", className)}>
			{Array.from({ length: count }).map((_, index) => (
				<button
					key={`dot-${index}`}
					type="button"
					onClick={() => onDotClick(index)}
					className={cn(
						"h-2 rounded-full transition-all",
						index === currentIndex
							? "w-8 bg-ink"
							: "w-2 bg-ink/30 hover:bg-ink/50",
					)}
					aria-label={ariaLabel?.(index) ?? `Go to item ${index + 1}`}
				/>
			))}
		</div>
	);
}

