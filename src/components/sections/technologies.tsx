import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/content";

/**
 * Technologies section — categorised badge groups. Deliberately text-based
 * (no brand logos) to stay low-maintenance; logos can be layered on later via
 * a key/registry pattern like ServiceIcon.
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
      <div className="grid gap-8 sm:grid-cols-2">
        {technologies.groups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge
                    variant="secondary"
                    className="h-7 px-3 text-sm font-medium"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
