import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "./index";

describe("Link Component", () => {
  const text = "Valor teste";
  const href = "https://www.example.com";

  it("renders the correct text", () => {
    render(<Link>{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders with the correct href attribute", () => {
    render(<Link href={href}>{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toHaveAttribute("href", href);
  });

  it("renders with the correct type", () => {
    render(<Link type="Secundary">{text}</Link>);
    const linkElement = screen.getByText(text);
  });

  it("renders with the correct size 'xs'", () => {
    render(<Link size="xs">{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toHaveStyle({
      fontSize: "12px",
    });
  });

  it("renders with the correct size 'sm'", () => {
    render(<Link size="sm">{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toHaveStyle({
      fontSize: "14px",
    });
  });

  it("renders with the correct size 'md'", () => {
    render(<Link size="md">{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toHaveStyle({
      fontSize: "16px", 
    });
  });

  it("disables the link when disable prop is true", () => {
    render(<Link type="Tertiary" disable={true}>{text}</Link>);
    const linkElement = screen.getByText(text);
    expect(linkElement).not.toHaveAttribute("href");
  });
});