/**
 * The payload a submission mechanism actually needs — deliberately free of any
 * form-internal fields (e.g. the honeypot), so submitters stay simple.
 */
export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactSubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Abstraction over "how a contact message is delivered". The UI depends only on
 * this interface, so the delivery mechanism (mailto today, a hosted email
 * provider tomorrow) can change without touching components.
 */
export interface ContactSubmitter {
  submit(message: ContactMessage): Promise<ContactSubmitResult>;
}
