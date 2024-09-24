import { fireEvent, render, screen } from "@testing-library/react";
import BackButtonTop from "../BackButtonTop";

describe("BackButtonTop Component", () => {
  it("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    render(<BackButtonTop onClick={onClickMock} />);
    fireEvent.click(screen.getByText("Back_button_top_title"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
