import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const headerVariants = cva(
  "text-black dark:text-white text-center lg:text-left leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5x1 lg:text-6xl",
        lg: "text-4xl font-extrabold md:text-5x1 lg:text-6xl",
        sm: "text-xl md:text-xl lg:text-3x1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const HeaderText = forwardRef(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headerVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

HeaderText.displayName = "HeaderText";

export default HeaderText;
