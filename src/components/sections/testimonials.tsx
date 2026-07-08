import { MessageSquareQuote } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/layout/section";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { testimonials } from "@/content";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      description={testimonials.description}
      className="bg-muted/30"
    >
      {testimonials.items.length === 0 ? (
        <EmptyState
          icon={MessageSquareQuote}
          title="Testimonials on the way"
          description="I'm gathering feedback from recent clients and colleagues. Want to be among the first? Let's talk."
          action={{ label: "Get in touch", href: "#contact" }}
        />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((testimonial, index) => (
            <li key={`${testimonial.author}-${index}`} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
