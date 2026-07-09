import { Section } from "@/components/layout/section";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { testimonials } from "@/content";

/**
 * Testimonials section. Self-hides when there are none, so no empty state is
 * ever shown to a client — it reappears automatically once testimonials exist.
 */
export function Testimonials() {
  if (testimonials.items.length === 0) return null;

  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      description={testimonials.description}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((testimonial, index) => (
          <li key={`${testimonial.author}-${index}`} className="flex">
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
