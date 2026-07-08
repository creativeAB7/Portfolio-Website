import { Section } from "@/components/layout/section";
import { Hero } from "@/components/sections/hero";

/**
 * Temporary placeholder for section bodies that will be built in Milestone 2.
 * Keeps the page navigable (anchors resolve) without shipping empty sections.
 */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
      {label} content is coming in the next milestone.
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="about"
        eyebrow="About"
        title="A decade of making quality a competitive advantage"
        description="QA leadership and hands-on automation experience, now paired with full-stack development."
      >
        <Placeholder label="About" />
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="How I can help"
        description="Test automation, quality strategy, web development, and AI-assisted delivery."
        className="bg-muted/30"
      >
        <Placeholder label="Services" />
      </Section>

      <Section
        id="projects"
        eyebrow="Work"
        title="Selected work & case studies"
        description="Real problems, the approach I took, and the outcomes delivered."
      >
        <Placeholder label="Projects" />
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Experience & skills"
        description="Roles, responsibilities, and the tools I work with day to day."
        className="bg-muted/30"
      >
        <Placeholder label="Experience" />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind? I'd love to hear about it."
      >
        <Placeholder label="Contact" />
      </Section>
    </>
  );
}
