import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ServiceIcon } from "@/components/sections/service-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content";

/**
 * Services section — a responsive card grid. Each card is framed as
 * problem → solution → outcome (business value, not a feature list). Icons are
 * resolved from content keys; all copy comes from `@/content/services`.
 */
export function Services() {
  return (
    <Section
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      description={services.description}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => (
          <li key={service.title}>
            <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:ring-foreground/20">
              <CardHeader>
                <span className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <ServiceIcon name={service.icon} className="size-5" />
                </span>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">{service.problem}</p>
                <p className="leading-relaxed">{service.solution}</p>
                <p className="flex items-start gap-2 font-medium text-brand">
                  <ArrowRight className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{service.outcome}</span>
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
