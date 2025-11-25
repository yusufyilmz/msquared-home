import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/section-header";

type SectionShellProps = {
	id?: string;
	eyebrow?: string;
	heading?: string;
	intro?: string;
	align?: "left" | "center";
	children: ReactNode;
	className?: string;
};

export function SectionShell({
	id,
	eyebrow,
	heading,
	intro,
	align = "left",
	children,
	className,
}: SectionShellProps) {
	return (
		<section id={id} className={`section ${className || ""}`}>
			<div className="section-inner">
				<SectionHeader
					eyebrow={eyebrow}
					heading={heading}
					intro={intro}
					align={align}
				/>
				{children}
			</div>
		</section>
	);
}
