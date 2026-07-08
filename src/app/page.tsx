import { Section } from "@/components/layout/section";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";

/** Placeholder for the contact section, built in a later milestone. */
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
      <Projects />

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
