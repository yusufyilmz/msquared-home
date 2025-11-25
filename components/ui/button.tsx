import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap text-xs font-medium tracking-[0.2em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(0,0,0,0.28)] disabled:opacity-50 disabled:pointer-events-none rounded-full px-6 py-2.5",
	{
		variants: {
			variant: {
				primary:
					"bg-[color:var(--color-ink)] text-[color:var(--color-surface)] hover:bg-[color:var(--color-ink)]/90",
				secondary:
					"border border-[rgba(0,0,0,0.14)] bg-[rgba(255,255,255,0.7)] text-[color:var(--color-ink)] hover:border-[rgba(0,0,0,0.3)]",
				ghost:
					"bg-transparent text-[color:var(--color-ink)] hover:bg-[rgba(0,0,0,0.03)]",
				subtle:
					"bg-[rgba(0,0,0,0.04)] text-[color:var(--color-ink)] hover:bg-[rgba(0,0,0,0.08)]",
			},
			size: {
				default: "h-9",
				sm: "h-8 px-4 text-[0.68rem]",
				lg: "h-10 px-7 text-[0.75rem]",
				icon: "h-8 w-8 p-0",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size }), className)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export { Button, buttonVariants };
