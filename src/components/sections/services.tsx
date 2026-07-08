import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ServiceIcon } from "@/components/sections/service-icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/content";

/**
 * Services section — a responsive card grid. Icons are resolved from content
 * keys via ServiceIcon; all copy comes from `@/content/services`.
 */
export function Services() {
  return (
    <Section
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      description={services.description}
      className="bg-muted/30"
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
                <CardDescription className="mt-1 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
