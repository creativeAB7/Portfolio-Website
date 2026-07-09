import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";

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
      <Contact />
    </>
  );
}
