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
 * Homepage flow is proof-led for conversion:
 * Hero → About → Work (proof) → Testimonials → Services → How I Work → FAQ →
 * Contact. Testimonials and Certifications self-hide until they have real
 * content, so the journey stays substantive with no empty states.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Services />
      <HowIWork />
      <Certifications />
      <Faq />
      <Contact />
    </>
  );
}
