import Link from "next/link";

import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Desktop primary navigation. Kept as a server component (plain links); an
 * active-section scroll-spy can be layered on later without changing the API.
 */
export function MainNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={cn("flex items-center gap-1", className)}
    >
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
