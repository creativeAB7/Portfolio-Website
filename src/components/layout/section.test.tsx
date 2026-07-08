import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { Section } from "./section";

// Smoke test proving the unit-testing stack (Vitest + RTL + jest-dom) works.
// The real suite is added once the UI is complete.
test("Section renders its heading and children", () => {
  render(
    <Section id="demo" title="Hello world">
      <p>Body content</p>
    </Section>,
  );

  expect(
    screen.getByRole("heading", { level: 2, name: "Hello world" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Body content")).toBeInTheDocument();
});
