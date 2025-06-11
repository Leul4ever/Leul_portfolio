import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "text-lg mb-8 pl-2 max-w-prose text-slate-700 dark:text-slate-300 mb-2",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base pt-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Paragraph = forwardRef(({ className, size, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = "Paragraph";
export default Paragraph;
