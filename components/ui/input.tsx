import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-full border border-[rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.88)] px-4 text-sm outline-none ring-0 transition focus-visible:border-[rgba(0,0,0,0.3)] focus-visible:ring-1 focus-visible:ring-[rgba(0,0,0,0.18)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
