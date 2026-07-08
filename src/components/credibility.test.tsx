import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { certificationItemSchema, testimonialItemSchema } from "@/content";
import { CertificationCard } from "@/components/certifications/certification-card";
import { Faq } from "@/components/sections/faq";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { exampleCertification } from "@/test/fixtures/example-certification";
import { exampleTestimonial } from "@/test/fixtures/example-testimonial";

describe("credibility layer", () => {
  test("fixtures validate against the extended schemas", () => {
    expect(() => testimonialItemSchema.parse(exampleTestimonial)).not.toThrow();
    expect(() =>
      certificationItemSchema.parse(exampleCertification),
    ).not.toThrow();
  });

  test("TestimonialCard renders quote, attribution, rating, skills and verification", () => {
    render(<TestimonialCard testimonial={exampleTestimonial} />);
    expect(
      screen.getByText(/raised our release confidence/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/jordan rivera/i)).toBeInTheDocument();
    expect(
      screen.getByText(/engineering lead · example co/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /rated 5 out of 5/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Playwright")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /verify testimonial/i }),
    ).toBeInTheDocument();
  });

  test("CertificationCard renders name, issuer, dates, credential and skills", () => {
    render(<CertificationCard certification={exampleCertification} />);
    expect(
      screen.getByRole("heading", {
        name: /example professional certification/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Example Certification Body")).toBeInTheDocument();
    expect(screen.getByText(/issued 2022 · expires 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/EX-123456/)).toBeInTheDocument();
    expect(screen.getByText("Test Design")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view credential/i }),
    ).toBeInTheDocument();
  });

  test("FAQ renders client-oriented questions as accordion triggers", () => {
    render(<Faq />);
    expect(
      screen.getByRole("button", { name: /what services do you offer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /do you write automated tests/i }),
    ).toBeInTheDocument();
  });
});
