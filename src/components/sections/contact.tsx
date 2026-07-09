import type { ComponentType } from "react";
import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { contact } from "@/content";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const methods: ContactMethod[] = [
  {
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "See my code",
    href: siteConfig.links.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: siteConfig.links.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-muted/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wider text-brand uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            {contact.description}
          </p>

          <div className="mt-6 space-y-1 text-sm">
            <p className="font-medium">{contact.availability}</p>
            <p className="text-muted-foreground">{contact.responseTime}</p>
          </div>

          <ul className="mt-8 space-y-3">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <li key={method.label}>
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-background text-muted-foreground ring-1 ring-foreground/10 transition-colors group-hover:text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium transition-colors group-hover:text-brand">
                        {method.label}
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {method.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
