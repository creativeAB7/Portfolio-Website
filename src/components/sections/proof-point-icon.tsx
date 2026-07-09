import {
  Accessibility,
  Code,
  FlaskConical,
  Gauge,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import type { HeroProofIcon } from "@/content";

/**
 * Maps a hero proof-point icon key to a concrete Lucide component, keeping the
 * content layer icon-agnostic (add a key here + in the schema enum to extend).
 */
const registry: Record<HeroProofIcon, LucideIcon> = {
  experience: ShieldCheck,
  testing: FlaskConical,
  quality: Accessibility,
  performance: Gauge,
  stack: Code,
  delivery: Rocket,
  outcome: TrendingUp,
};

export function ProofPointIcon({
  name,
  className,
}: {
  name: HeroProofIcon;
  className?: string;
}) {
  const Icon = registry[name];
  return <Icon className={className} aria-hidden />;
}
