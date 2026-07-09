import { z } from "zod";

/**
 * Shared contact-form schema. Used by the client form (via zodResolver) and
 * available to any future server-side handler, so validation lives in one place.
 */
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject.").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Please include a little more detail.")
    .max(2000, "Please keep your message under 2000 characters."),
  // Honeypot: must stay empty. It's visually hidden, so real users never fill
  // it; a non-empty value fails validation and silently blocks the submission.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
