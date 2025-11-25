import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
	children: ReactNode;
	variant?: "default" | "muted" | "subtle";
	className?: string;
};

export function Badge({
	children,
	variant = "default",
	className,
}: BadgeProps) {
	const variants = {
		default: "text-muted",
		muted: "text-muted/80",
		subtle: "text-muted/60",
	};

	return (
		<p
			className={cn(
				"text-[0.7rem] uppercase tracking-[0.26em]",
				variants[variant],
				className,
			)}
		>
			{children}
		</p>
	);
}
