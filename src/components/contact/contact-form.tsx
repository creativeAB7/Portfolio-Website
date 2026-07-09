"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";

import { siteConfig } from "@/config/site";
import {
  contactFormSchema,
  contactSubmitter,
  type ContactFormValues,
} from "@/lib/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage(null);

    const result = await contactSubmitter.submit({
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl bg-card p-8 text-center ring-1 ring-foreground/10"
      >
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Check className="size-6" aria-hidden />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold">
          Thanks — your message is on its way
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          Your email client should have opened with your message ready to send.
          If it didn&apos;t, email me directly at{" "}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-brand hover:underline"
          >
            {siteConfig.links.email}
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
      >
        {/* Honeypot: visually hidden and out of the tab order; catches bots. */}
        <div className="sr-only" aria-hidden>
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's this about?"
                  className="h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell me a little about your project…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div aria-live="polite">
          {status === "error" && errorMessage && (
            <p role="alert" className="text-sm text-destructive">
              {errorMessage}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            "Sending…"
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
