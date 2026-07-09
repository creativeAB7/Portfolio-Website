"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

/**
 * Landing hero — a balanced two-column layout: reliability-led messaging on the
 * left, a "credibility panel" on the right that builds trust above the fold
 * without needing a photo. All copy and proof points come from `@/content/hero`.
 *
 * This is the only place we opt into JS-driven motion (a subtle staggered
 * fade-up); it collapses to no movement when the user prefers reduced motion.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const item: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  return (
    <section className="relative overflow-hidden">
      {/* Subtle brand glow behind the hero. Decorative only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklch, var(--brand) 12%, transparent), transparent)",
        }}
      />
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — messaging */}
          <div>
            <motion.p variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-sm font-medium text-muted-foreground">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                {hero.availability}
              </span>
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {hero.headline}{" "}
              <span className="text-brand">{hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="h-11 px-6 text-base">
                <Link href="#contact">
                  Get in touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-6 text-base"
              >
                <Link href="#projects">View case studies</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right — credibility panel (evolves into / alongside a headshot later) */}
          <motion.div variants={item} className="lg:justify-self-end">
            <div className="w-full rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10 sm:p-8 lg:max-w-md">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="size-3 rounded-full bg-muted-foreground/25" />
                  <span className="size-3 rounded-full bg-muted-foreground/25" />
                  <span className="size-3 rounded-full bg-muted-foreground/25" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {hero.panelLabel}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {hero.proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t pt-5">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-heading text-lg font-bold text-brand">
                        {stat.value}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
