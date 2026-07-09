import { Section } from "@/components/layout/section";
import { TechnologyGroups } from "@/components/technology-groups";
import { technologies, workProcess } from "@/content";

/**
 * "How I Work" — an engagement process from discovery to ongoing support.
 * Replaces the CV-style timeline (client-oriented, not employer-oriented) and
 * absorbs the Technologies content as a "tools" strip so the page stays tight.
 */
export function HowIWork() {
  return (
    <Section
      id="process"
      eyebrow={workProcess.eyebrow}
      title={workProcess.title}
      description={workProcess.description}
      className="bg-muted/30"
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workProcess.phases.map((phase, index) => (
          <li
            key={phase.title}
            className="rounded-xl bg-card p-6 ring-1 ring-foreground/10"
          >
            <span className="font-heading text-sm font-bold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold">
              {phase.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t pt-10">
        <h3 className="text-center font-heading text-lg font-semibold">
          {technologies.title}
        </h3>
        <p className="mx-auto mt-2 mb-8 max-w-xl text-center text-sm text-pretty text-muted-foreground">
          {technologies.description}
        </p>
        <TechnologyGroups groups={technologies.groups} />
      </div>
    </Section>
  );
}
