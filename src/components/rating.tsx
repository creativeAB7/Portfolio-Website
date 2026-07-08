import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Star rating. Purely visual with an accessible text label; filled stars use
 * the brand colour. Renders nothing meaningful for out-of-range values.
 */
export function Rating({
  value,
  max = 5,
  className,
}: {
  value: number;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "size-4",
            index < value
              ? "fill-brand text-brand"
              : "text-muted-foreground/30",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}
