"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteCopy } from "@/config/siteCopy";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ href: "/products", label: "Pieces" },
	{ href: "/about", label: "Studio" },
	{ href: "/contact", label: "Contact" },
];

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			// Smooth scroll detection with a threshold
			setScrolled(window.scrollY > 20);
		};
		// Check initial scroll position
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-30 border-b transition-all duration-500 ease-out",
				scrolled
					? "bg-[rgba(255,252,246,0.95)] border-[rgba(0,0,0,0.06)] shadow-sm"
					: "bg-transparent border-transparent",
			)}
		>
			<div className="section-inner flex items-center justify-between py-3 md:py-4">
				<Link href="/" className="flex items-center gap-3">
					<div
						className={cn(
							"flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.18em] uppercase transition-all",
							scrolled
								? "border-[rgba(0,0,0,0.08)] bg-surface"
								: "border-white/30 bg-white/10 text-white",
						)}
					>
						M²
					</div>
					<div className="flex flex-col">
						<span
							className={cn(
								"font-display text-sm uppercase tracking-[0.2em] transition-colors",
								scrolled ? "text-ink" : "text-white",
							)}
						>
							{siteCopy.site.name}
						</span>
						<span
							className={cn(
								"text-[0.65rem] uppercase tracking-[0.24em] transition-colors",
								scrolled ? "text-muted" : "text-white/70",
							)}
						>
							Handcrafted decor
						</span>
					</div>
				</Link>

				{/* desktop nav */}
				<nav className="hidden items-center gap-7 text-[0.7rem] uppercase tracking-[0.22em] md:flex">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"transition-colors",
								scrolled
									? "text-muted hover:text-ink"
									: "text-white/80 hover:text-white",
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* mobile menu button */}
				<div className="md:hidden">
					<Button
						variant="ghost"
						size="icon"
						aria-label="Toggle menu"
						onClick={() => setMobileOpen((open) => !open)}
						className={cn(
							scrolled ? "text-ink" : "text-white hover:bg-white/10",
						)}
					>
						<Menu className="h-4 w-4" />
					</Button>
				</div>
			</div>

			{/* mobile nav dropdown */}
			{mobileOpen ? (
				<div
					className={cn(
						"border-t md:hidden transition-all",
						scrolled
							? "border-[rgba(0,0,0,0.06)] bg-[rgba(255,252,246,0.98)]"
							: "border-white/20 bg-black/40",
					)}
				>
					<div className="section-inner flex flex-col gap-3 py-4 text-[0.8rem] uppercase tracking-[0.24em]">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"py-1 transition-colors",
									scrolled ? "text-muted" : "text-white/90",
								)}
								onClick={() => setMobileOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			) : null}
		</header>
	);
}
