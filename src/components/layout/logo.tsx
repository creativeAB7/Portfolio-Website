import { cn } from "@/lib/utils";

/**
 * The AB monogram: an "A" whose vertical right leg doubles as the "B" spine,
 * so the two letters read as one continuous piece of geometry.
 *
 * Drawn with `currentColor` at a single stroke weight, so it inherits text
 * colour (and therefore adapts to light/dark automatically) and can be sized
 * with a utility class. The viewBox is cropped to the mark's visual bounds —
 * including stroke width — so it optically centres wherever it's placed.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="5 5 100 90"
      fill="none"
      stroke="currentColor"
      strokeWidth={13}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      {/* A: left diagonal + crossbar */}
      <path d="M12 88 L58 12" />
      <path d="M32 68 H58" />
      {/* Shared spine */}
      <path d="M58 12 V88" />
      {/* B: upper and lower bowls */}
      <path d="M58 12 H76 A18 18 0 0 1 76 48 H58" />
      <path d="M58 48 H78 A20 20 0 0 1 78 88 H58" />
    </svg>
  );
}
