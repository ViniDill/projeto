import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginInput from ".";

describe("LoginInput", () => {
  it("Initial whith text component", () => {
    render(<LoginInput />);
    const altText = screen.getByAltText("carta email");
    expect(altText).toBeInTheDocument();
  });
  it("Render lock icon", () => {
    render(<LoginInput variation="password" />);
    const altText = screen.getByAltText("cadeado");
    expect(altText).toBeInTheDocument();
  });
  it("toggles password visibility when eye icon is clicked", () => {
    render(<LoginInput variation="password" />);
    const input = screen.getByTestId("inputLogin");
    expect(input.getAttribute("type")).toBe("password");
    const button = screen.getByTestId("eyeIcons");
    fireEvent.click(button);
    expect(input.getAttribute("type")).toBe("text");
  });
});
