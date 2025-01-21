import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome.js";

describe("Welcome component", () => {
  it("has correct Vite guide link", () => {
    render(<Welcome />);
    expect(screen.getByText("this guide")).toHaveAttribute(
      "href",
      "https://mantine.dev/guides/vite/"
    );
  });
});
