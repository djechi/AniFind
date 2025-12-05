import { render, screen, cleanup } from "@testing-library/react";
import About from "./About";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("HomeList", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders Our Goal title", () => {
    render(<About />);
    const goalTitle = screen.getByText("Our Goal");
    expect(goalTitle).toBeInTheDocument();
  });

  it("Renders Contributors title", () => {
    render(<About />);
    const contributorsTitle = screen.getByText("Contributors");
    expect(contributorsTitle).toBeInTheDocument();
  });
});
