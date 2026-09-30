import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowIWork } from "@/components/sections/how-i-work";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

/**
 * Homepage flow is proof-first:
 * Hero → Work (proof) → Testimonials → About → Services → How I Work → FAQ →
 * Contact.
 *
 * Work sits directly under the hero deliberately. Most visitors arrive from a
 * proposal or profile and already know who I am — they clicked to see what
 * I've built, so the evidence shouldn't sit behind a section of prose. The
 * hero already establishes the identity that About used to carry here.
 *
 * Testimonials and Certifications self-hide until they have real content, so
 * the journey stays substantive with no empty states.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
      <About />
      <Services />
      <HowIWork />
      <Certifications />
      <Faq />
      <Contact />
    </>
  );
}
