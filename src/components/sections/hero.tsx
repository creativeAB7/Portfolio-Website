"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Landing hero. This is the only place we opt into JS-driven motion: a subtle
 * staggered fade-up on load. When the user prefers reduced motion we render the
 * final state immediately (no movement).
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
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
          className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20"
        >
          <motion.p variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-sm font-medium text-muted-foreground">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Available for freelance &amp; consulting
            </span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Reliable software,{" "}
            <span className="text-brand">proven by tests</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground"
          >
            I&apos;m {siteConfig.name} — a QA automation and software engineer
            helping teams design, build, and ship web applications they can
            trust. From test strategy and automation to full-stack development
            and AI-assisted delivery.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="h-11 px-6 text-base">
              <Link href="#projects">
                View my work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-6 text-base"
            >
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
