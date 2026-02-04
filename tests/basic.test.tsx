import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, expect, it, beforeEach } from "vitest";

describe("Landing Page renders correctly", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("renders the boilerplate text", () => {
    const title = screen.getByTestId("boilerplate");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Boilerplate");
  });
});
