import { CertificationCard } from "@/components/certifications/certification-card";
import { Section } from "@/components/layout/section";
import { certifications } from "@/content";

/**
 * Certifications section. Self-hides when there are none, so no empty state is
 * shown to a client — it reappears automatically once certifications exist.
 */
export function Certifications() {
  if (certifications.items.length === 0) return null;

  return (
    <Section
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      description={certifications.description}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.items.map((certification) => (
          <li key={certification.name} className="flex">
            <CertificationCard certification={certification} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
