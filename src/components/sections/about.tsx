import { Section } from "@/components/layout/section";
import { about } from "@/content";

/**
 * About section — presentation only; all copy comes from `@/content/about`.
 * Two-column on large screens: narrative on the left, at-a-glance highlights
 * on the right (which collapse to a row, then a stack, on smaller screens).
 */
export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wider text-brand uppercase">
            {about.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-6 text-lg text-pretty text-foreground">
            {about.lead}
          </p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside aria-label="At a glance">
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((highlight) => (
              <li
                key={highlight.label}
                className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
              >
                <div className="font-heading text-2xl font-bold text-brand">
                  {highlight.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {highlight.label}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
