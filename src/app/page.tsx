import { Section } from "@/components/layout/section";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";

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
      <Testimonials />
      <Certifications />
      <Faq />

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind? I'd love to hear about it."
      >
        <Placeholder label="Contact form" />
      </Section>
    </>
  );
}
