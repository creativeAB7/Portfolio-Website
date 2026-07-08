import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

/**
 * Sticky site header: brand, desktop navigation, theme toggle, and a mobile
 * drawer. Uses a translucent, blurred background so content reads clearly as
 * it scrolls underneath.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight"
            aria-label={`${siteConfig.name} — home`}
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-1">
            <MainNav className="hidden md:flex" />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
