import { render, fireEvent, screen } from "@testing-library/react";
import NotFoundMessage from "./index";

describe("NotFoundMessage Component", () => {
  it("renders without crashing", () => {
    render(<NotFoundMessage />);
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<NotFoundMessage onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId("button_action"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
