import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content";

/**
 * Experience & Skills section — a vertical role timeline on the left and
 * grouped competencies on the right. All copy comes from
 * `@/content/experience`.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow={experience.eyebrow}
      title={experience.title}
      description={experience.description}
    >
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <h3 className="sr-only">Roles</h3>
          <ol className="relative space-y-8 border-l border-border pl-6">
            {experience.roles.map((role) => (
              <li key={`${role.role}-${role.period}`} className="relative">
                <span
                  className="absolute top-1.5 -left-6 size-2.5 -translate-x-1/2 rounded-full bg-brand ring-4 ring-background"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h4 className="font-heading text-lg font-semibold">
                    {role.role}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-brand">{role.company}</p>
                {role.summary && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {role.summary}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/60"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-label="Core skills">
          <h3 className="mb-4 font-heading text-lg font-semibold">
            Core skills
          </h3>
          <div className="space-y-6">
            {experience.skills.map((group) => (
              <div key={group.group}>
                <h4 className="mb-2 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  {group.group}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="outline"
                        className="h-7 px-3 text-sm font-normal"
                      >
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
