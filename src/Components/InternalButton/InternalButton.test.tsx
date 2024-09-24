import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InternalButton from ".";

describe("InternalButton Component", () => {
  const label = "Example Button";
  const onClickMock = jest.fn();

  it("Renders the button with the correct label", () => {
    render(<InternalButton label={label} />);
    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
  });

  it("Calls onClick callback when clicked", () => {
    render(<InternalButton label={label} onClick={onClickMock} />);
    const button = screen.getByText(label);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
