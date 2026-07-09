import { siteConfig } from "@/config/site";

import type {
  ContactMessage,
  ContactSubmitResult,
  ContactSubmitter,
} from "../types";

/**
 * Builds an RFC-6068 mailto: URL for a contact message. Kept pure (no DOM) so
 * it's trivially unit-testable. Uses encodeURIComponent so spaces/newlines are
 * percent-encoded correctly for mail clients.
 */
export function buildMailtoHref(
  message: ContactMessage,
  to: string = siteConfig.links.email,
): string {
  const subject = encodeURIComponent(`[Portfolio] ${message.subject}`);
  const body = encodeURIComponent(
    `Name: ${message.name}\nEmail: ${message.email}\n\n${message.message}`,
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

/**
 * v1 submitter: hands off to the visitor's email client. When a hosted provider
 * is introduced, add a sibling submitter and swap it in `../index.ts`.
 */
export const mailtoSubmitter: ContactSubmitter = {
  async submit(message: ContactMessage): Promise<ContactSubmitResult> {
    try {
      const href = buildMailtoHref(message);
      if (typeof window !== "undefined") {
        window.location.href = href;
      }
      return { ok: true };
    } catch {
      return {
        ok: false,
        error: "We couldn't open your email client. Please email me directly.",
      };
    }
  },
};
