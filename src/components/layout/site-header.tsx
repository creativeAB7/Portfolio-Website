import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Sticky site header: brand, desktop navigation, a persistent "Book a call"
 * CTA (desktop), theme toggle, and a mobile drawer. Translucent/blurred so
 * content reads clearly as it scrolls underneath.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <Logo className="h-7 w-auto text-brand" />
            <span className="font-heading text-lg font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <MainNav className="hidden md:flex" />
            <Button asChild size="sm" className="ml-1 hidden md:inline-flex">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
