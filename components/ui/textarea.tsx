import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-3xl border border-[rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm outline-none ring-0 transition focus-visible:border-[rgba(0,0,0,0.3)] focus-visible:ring-1 focus-visible:ring-[rgba(0,0,0,0.18)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
