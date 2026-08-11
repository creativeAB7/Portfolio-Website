import {
  Blocks,
  Bot,
  Bug,
  Code,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconKey } from "@/content";

/**
 * Resolves a content-level service icon key to a concrete Lucide component.
 * Living in the presentation layer keeps the content data icon-agnostic and
 * serializable (no React components stored in content).
 */
const registry: Record<ServiceIconKey, LucideIcon> = {
  architecture: Blocks,
  "test-automation": Bot,
  "qa-strategy": ShieldCheck,
  "software-testing": Bug,
  "web-development": Code,
  "ai-assisted": Sparkles,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  const Icon = registry[name];
  return <Icon className={className} aria-hidden />;
}
