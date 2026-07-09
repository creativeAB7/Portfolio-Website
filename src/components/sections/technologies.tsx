import { Section } from "@/components/layout/section";
import { TechnologyGroups } from "@/components/technology-groups";
import { technologies } from "@/content";

/**
 * Technologies section — categorised badge groups. Deliberately text-based
 * (no brand logos) to stay low-maintenance; logos can be layered on later.
 */
export function Technologies() {
  return (
    <Section
      id="technologies"
      eyebrow={technologies.eyebrow}
      title={technologies.title}
      description={technologies.description}
      className="bg-muted/30"
    >
      <TechnologyGroups groups={technologies.groups} />
    </Section>
  );
}
