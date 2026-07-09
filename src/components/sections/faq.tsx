import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content";
import { faqStructuredData } from "@/lib/structured-data";

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow={faq.eyebrow}
      title={faq.title}
      description={faq.description}
    >
      <JsonLd data={faqStructuredData(faq.items)} />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
