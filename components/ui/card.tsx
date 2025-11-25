import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[2rem] border border-[rgba(0,0,0,0.06)] bg-[rgba(255,252,246,0.9)]",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 md:p-8", className)} {...props} />
));

CardContent.displayName = "CardContent";

export { Card, CardContent };
