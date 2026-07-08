import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<
  ComponentPropsWithoutRef<"section">,
  "title"
> {
  /** Anchor id used by in-page navigation (e.g. "about"). */
  id?: string;
  /** Small uppercase label shown above the heading. */
  eyebrow?: string;
  /** Section heading (rendered as an <h2>). */
  title?: ReactNode;
  /** Supporting copy shown beneath the heading. */
  description?: ReactNode;
  /** Set true to skip the built-in Container (for full-bleed sections). */
  bleed?: boolean;
  children?: ReactNode;
}

/**
 * Standard content section with an optional heading block. Every homepage
 * section is built on this so spacing, widths, headings, and scroll-anchor
 * offsets stay consistent — and so any section can later be lifted into its
 * own standalone page unchanged.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || description);

  const content = (
    <>
      {hasHeader && (
        <header className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold tracking-wider text-brand uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-pretty text-muted-foreground">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </>
  );

  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
      {...props}
    >
      {bleed ? content : <Container>{content}</Container>}
    </section>
  );
}
