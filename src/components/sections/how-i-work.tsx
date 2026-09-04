import { ShieldCheck } from "lucide-react";

import { Section } from "@/components/layout/section";
import { TechnologyGroups } from "@/components/technology-groups";
import { technologies, workProcess } from "@/content";

/**
 * "How I Work" — the engagement process, from discovery to ongoing support.
 * Client-oriented rather than employer-oriented (it replaced a CV-style
 * timeline) and it absorbs the Technologies content as a "tools" strip.
 *
 * Rendered as a single vertical rail rather than a card grid. Two reasons: a
 * continuous line through every step *is* the section's argument — quality runs
 * through the whole engagement — where six separate cards only asserted it; and
 * it avoids stacking a second card grid immediately after Services, which made
 * the middle of the page monotonous (and very tall on mobile).
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
      <ol className="mx-auto max-w-4xl">
        {workProcess.phases.map((phase, index) => (
          <li
            key={phase.title}
            className="relative border-l-2 border-brand/20 pb-8 pl-8 last:border-transparent last:pb-0"
          >
            <span
              aria-hidden
              className="absolute top-0 -left-[15px] flex size-7 items-center justify-center rounded-full bg-background font-heading text-xs font-bold text-brand ring-2 ring-brand/20"
            >
              {index + 1}
            </span>

            <h3 className="font-heading leading-none font-semibold">
              {phase.title}
            </h3>
            {/* Side by side once there's room: keeps the rail continuous while
                stopping six stacked steps from running taller than the grid
                this replaced. Stacks on narrow screens. */}
            <div className="mt-1.5 gap-x-8 gap-y-2 sm:grid sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed sm:mt-0">
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
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-t pt-10">
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
