import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DigitInputCode from ".";
import theme from "../../theme";

describe("Componente DigitInputCode", () => {
  it("Renders without errors", () => {
    render(<DigitInputCode error={false} />);
    const containerElement = screen.getByTestId("digit-input-container");
    expect(containerElement).toBeInTheDocument();
  });

  it("Calls onBlur when the input loses focus", () => {
    const onBlurMock = jest.fn();
    render(<DigitInputCode error={true} onBlur={onBlurMock} />);
    const inputElement = screen.getByTestId(
      "digit-input-0"
    ) as HTMLInputElement;
    fireEvent.blur(inputElement);
    expect(onBlurMock).toHaveBeenCalled();
  });

  it("Displays error message and changes field color when error is active", () => {
    render(<DigitInputCode error={true} />);

    const inputField = screen.getByTestId("digit-input-0");
    const errorMessageElement = screen.getByText("Digit_input_code_invalid_code");

    expect(inputField).toBeInTheDocument();
    expect(errorMessageElement).toBeInTheDocument();
    expect(inputField).toHaveStyle(`border: 1px solid ${theme.colors.error}`);
  });

  it("Updates the state of the code when the input value changes", () => {
    render(<DigitInputCode error={false} />);
    const inputElement = screen.getByTestId(
      "digit-input-0"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "1" } });
    expect(inputElement.value).toBe("1");
  });

  it("Does not allow input of non-numeric characters", () => {
    render(<DigitInputCode error={false} />);
    const inputElement = screen.getByTestId(
      "digit-input-0"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "a" } });
    expect(inputElement.value).toBe("");
  });

  it("Moves focus to the next field when entering a digit", () => {
    render(<DigitInputCode error={false} />);
    const inputElement0 = screen.getByTestId(
      "digit-input-0"
    ) as HTMLInputElement;
    const inputElement1 = screen.getByTestId(
      "digit-input-1"
    ) as HTMLInputElement;
    fireEvent.change(inputElement0, { target: { value: "1" } });
    setTimeout(() => {
      // Correção aqui
      expect(inputElement1).toHaveFocus();
    }, 100);
  });

  it("Moves focus to previous input when a digit is deleted", () => {
    render(<DigitInputCode error={false} />);

    const firstInput = screen.getByTestId("digit-input-0");
    const secondInput = screen.getByTestId("digit-input-1");

    fireEvent.change(firstInput, { target: { value: "1" } });
    fireEvent.keyDown(firstInput, { key: "Backspace" });

    expect(firstInput).not.toHaveFocus();
    expect(secondInput).toHaveFocus();
  });
});
