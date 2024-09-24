import { render, fireEvent, screen } from "@testing-library/react";
import Switch from "../Switch";
import "@testing-library/jest-dom";

describe("Switch Component", () => {
  it("renders without crashing", () => {
    render(<Switch />);
  });

  it("renders unchecked by default", () => {
    render(<Switch />);
    const switchButton = screen.getByTestId("switch_button");
    expect(switchButton).toBeInTheDocument();
    expect(switchButton).not.toHaveAttribute("checked");
  });

  it("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    render(<Switch onClick={onClickMock} />);
    const switchButton = screen.getByTestId("switch_button");
    fireEvent.click(switchButton);
    expect(onClickMock).toHaveBeenCalled();
  });
});
