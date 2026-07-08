import { Award } from "lucide-react";

import { CertificationCard } from "@/components/certifications/certification-card";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/layout/section";
import { certifications } from "@/content";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      description={certifications.description}
    >
      {certifications.items.length === 0 ? (
        <EmptyState
          icon={Award}
          title="Certifications coming soon"
          description="Professional certifications and credentials will be listed here as they're added."
        />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((certification) => (
            <li key={certification.name} className="flex">
              <CertificationCard certification={certification} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
