import { Section } from "@/components/layout/section";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";
import { projects } from "@/content";

/** Placeholder for sections still to be built (Projects → M3, Contact → M5). */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
      {label} coming in a later milestone.
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Technologies />

      <Section
        id="projects"
        eyebrow={projects.eyebrow}
        title={projects.title}
        description={projects.description}
      >
        <Placeholder label="Case studies" />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind? I'd love to hear about it."
        className="bg-muted/30"
      >
        <Placeholder label="Contact form" />
      </Section>
    </>
  );
}
