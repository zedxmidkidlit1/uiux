import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-apple text-[17px] font-medium tracking-[-0.01em] transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        apple:
          "min-h-11 px-5 text-white bg-gradient-to-b from-[#2392ff] to-[#0071e3] shadow-apple hover:brightness-[1.04] active:translate-y-px active:shadow-apple-pressed",
        appleSubtle:
          "min-h-11 px-5 text-[#0057b8] bg-gradient-to-b from-white to-[#edf3ff] ring-1 ring-[#cddfff] hover:brightness-[1.02] active:translate-y-px",
      },
      size: {
        default: "h-11",
        sm: "h-9 rounded-xl px-4 text-[15px]",
        lg: "h-12 rounded-[16px] px-6 text-[18px]",
      },
    },
    defaultVariants: {
      variant: "apple",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
