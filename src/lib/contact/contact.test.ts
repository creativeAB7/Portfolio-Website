import { describe, expect, test } from "vitest";

import { buildMailtoHref, contactFormSchema } from "@/lib/contact";

const validSubmission = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  subject: "Project enquiry",
  message: "I'd love to discuss a project with you.",
  website: "",
};

describe("contactFormSchema", () => {
  test("accepts a valid submission", () => {
    expect(contactFormSchema.safeParse(validSubmission).success).toBe(true);
  });

  test("rejects an invalid email", () => {
    expect(
      contactFormSchema.safeParse({ ...validSubmission, email: "not-an-email" })
        .success,
    ).toBe(false);
  });

  test("rejects a too-short message", () => {
    expect(
      contactFormSchema.safeParse({ ...validSubmission, message: "hi" })
        .success,
    ).toBe(false);
  });

  test("rejects a filled honeypot (bot submission)", () => {
    expect(
      contactFormSchema.safeParse({
        ...validSubmission,
        website: "http://spam.example",
      }).success,
    ).toBe(false);
  });
});

describe("buildMailtoHref", () => {
  test("produces a correctly percent-encoded mailto URL", () => {
    const href = buildMailtoHref(
      {
        name: "Ada Lovelace",
        email: "ada@example.com",
        subject: "Hello there",
        message: "Line one\nLine two",
      },
      "me@example.com",
    );

    expect(href.startsWith("mailto:me@example.com?")).toBe(true);
    expect(href).toContain(encodeURIComponent("[Portfolio] Hello there"));
    expect(href).toContain(encodeURIComponent("Ada Lovelace"));
    // Newlines encoded, and spaces as %20 rather than "+".
    expect(href).toContain("%0A");
    expect(href).not.toContain("+");
  });
});
