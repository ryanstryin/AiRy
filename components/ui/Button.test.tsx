import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders primary variant with teal styles", () => {
    render(<Button variant="primary">Get Started</Button>);
    const btn = screen.getByRole("button", { name: "Get Started" });
    expect(btn).toHaveClass("bg-teal");
  });

  it("renders as anchor when href provided", () => {
    render(<Button href="/accelerator" variant="primary">Learn More</Button>);
    expect(screen.getByRole("link", { name: "Learn More" })).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Contact</Button>);
    const btn = screen.getByRole("button", { name: "Contact" });
    expect(btn).toHaveClass("border-teal");
  });
});
