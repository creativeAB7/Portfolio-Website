import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  test("renders labelled fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^subject$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
  });

  test("shows accessible validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText(/please enter your name/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
    // Field is flagged invalid for assistive technology.
    expect(screen.getByLabelText(/^name$/i)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
