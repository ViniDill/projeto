import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Subtitle } from "./index";

describe("Subtitle Components", () => {
  const subtitleText = "Test Subtitle";

  it("Should render S1 with correct text", () => {
    render(<Subtitle>{subtitleText}</Subtitle>);
    const subtitleElement = screen.getByText(subtitleText);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe("P");
  });
});
