import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        chrome: "relative bg-gradient-to-b from-[#e8e8e8] via-[#d4d4d4] to-[#a8a8a8] text-[#1a1a1a] font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_-1px_0_0_rgba(0,0,0,0.1)_inset,0_4px_12px_rgba(0,0,0,0.3)] hover:from-[#f0f0f0] hover:via-[#e0e0e0] hover:to-[#b8b8b8] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_-1px_0_0_rgba(0,0,0,0.1)_inset,0_6px_16px_rgba(0,0,0,0.35)] active:from-[#d0d0d0] active:via-[#c4c4c4] active:to-[#989898] border border-[#888]/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
