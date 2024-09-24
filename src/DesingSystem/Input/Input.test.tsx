import Input from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "../../theme";

describe("Input Component", () => {
  const title = "titulo teste";
  it("Render Title", () => {
    render(<Input title={title} />);
    const element = screen.getByText(title);
    const textbox = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
    expect(textbox).toBeInTheDocument();
  });
  it("renders input with error", () => {
    render(<Input title={title} error={"error"} />);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toHaveStyle(`border: solid 1px ${theme.colors.error}`);
  });

  it("triggers onChange event", () => {
    const handleChange = jest.fn();
    render(<Input title={title} onChange={handleChange} />);
    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "New Value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
