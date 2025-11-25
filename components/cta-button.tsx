import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Variant = "primary" | "secondary" | "ghost" | "subtle";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className
}: CtaButtonProps) {
  return (
    <Button asChild variant={variant} className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
