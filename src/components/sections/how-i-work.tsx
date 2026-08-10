import { ShieldCheck } from "lucide-react";

import { Section } from "@/components/layout/section";
import { TechnologyGroups } from "@/components/technology-groups";
import { technologies, workProcess } from "@/content";

/**
 * "How I Work" — an engagement process from discovery to ongoing support.
 * Client-oriented rather than employer-oriented (it replaced a CV-style
 * timeline) and it absorbs the Technologies content as a "tools" strip.
 *
 * Every phase carries an explicit quality practice, rendered as a consistent
 * band across all six cards. That repetition is the point: it shows quality
 * running through the whole engagement rather than sitting in a single
 * "testing" step near the end.
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
            className="flex flex-col rounded-xl bg-card p-6 ring-1 ring-foreground/10"
          >
            <span className="font-heading text-sm font-bold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold">
              {phase.title}
            </h3>
            {/* Grows so the quality band sits flush at the bottom of every
                card, keeping the thread visually continuous across the grid. */}
            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>
            <p className="mt-4 flex gap-2.5 border-t border-brand/15 pt-4 text-sm leading-relaxed">
              <ShieldCheck
                className="mt-0.5 size-4 shrink-0 text-brand"
                aria-hidden
              />
              <span>
                {/* Gives assistive tech the framing the icon conveys visually. */}
                <span className="sr-only">Quality built in: </span>
                {phase.quality}
              </span>
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
