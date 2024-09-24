import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { H1, H2, H3, H4 } from "./index";

describe("Title Components", () => {
  const title = "Test Title";

  it("Should render H1 with correct title", () => {
    render(<H1>{title}</H1>);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });

  it("Should render H2 with correct title", () => {
    render(<H2>{title}</H2>);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
  });

  it("Should render H3 with correct title", () => {
    render(<H3>{title}</H3>);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H3");
  });

  it("Should render H4 with correct title", () => {
    render(<H4>{title}</H4>);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H4");
  });
});