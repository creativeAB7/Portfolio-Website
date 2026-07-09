import { mailtoSubmitter } from "./submitters/mailto";
import type { ContactSubmitter } from "./types";

/**
 * The active contact submitter — the single seam between the UI and the
 * delivery mechanism.
 *
 * To move to a hosted email provider (e.g. Resend), add a new submitter under
 * `./submitters/` that POSTs to a server route, then swap the assignment below.
 * No form or section components need to change.
 */
export const contactSubmitter: ContactSubmitter = mailtoSubmitter;

export { buildMailtoHref } from "./submitters/mailto";
export * from "./schema";
export * from "./types";
