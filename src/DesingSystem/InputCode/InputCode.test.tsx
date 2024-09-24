import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CodeInput from ".";
import theme from "../../theme";

describe("CodeInput Component", () => {
  it("Should call onChange callback with the correct value", () => {
    const handleChange = jest.fn();
    render(<CodeInput onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "5" } });

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "5" }),
      })
    );
  });

  it("Should render input with error style when error prop is true", () => {
    render(<CodeInput error />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle(`border: solid 1px ${theme.colors.error}`);
  });
});
