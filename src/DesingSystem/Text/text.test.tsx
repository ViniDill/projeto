import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from ".";

describe("Text Component", () => {
  const text = "Conteúdo do texto";

  it("should render the correct text", () => {
    render(<Text>{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it("should render with size md by default", () => {
    render(<Text>{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("font-size: 16px");
  });

  it("should render with size lg", () => {
    render(<Text size="lg">{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("font-size: 18px");
  });

  it("should render with bold font when bold prop is true", () => {
    render(<Text bold>{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("font-weight: 600");
  });

  it("should render with normal font weight by default", () => {
    render(<Text>{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("font-weight: normal");
  });

  it("should render with left alignment by default", () => {
    render(<Text>{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("text-align: left");
  });

  it("should render with center alignment", () => {
    render(<Text align="center">{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("text-align: center");
  });

  it("should render with right alignment", () => {
    render(<Text align="right">{text}</Text>);
    const textElement = screen.getByText(text);
    expect(textElement).toHaveStyle("text-align: right");
  });
});