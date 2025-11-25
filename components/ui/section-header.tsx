import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
	eyebrow?: string;
	heading?: string;
	intro?: string;
	align?: "left" | "center";
	className?: string;
	children?: ReactNode;
};

export function SectionHeader({
	eyebrow,
	heading,
	intro,
	align = "left",
	className,
	children,
}: SectionHeaderProps) {
	const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
	const introWidth = align === "center" ? "max-w-2xl" : "max-w-3xl";

	if (!eyebrow && !heading && !intro && !children) return null;

	return (
		<header className={cn("mb-10", alignClass, introWidth, className)}>
			{eyebrow ? <p className="section-title">{eyebrow}</p> : null}
			{heading ? <h2 className="h2 mb-3">{heading}</h2> : null}
			{intro ? <p className="body-lg">{intro}</p> : null}
			{children}
		</header>
	);
}
