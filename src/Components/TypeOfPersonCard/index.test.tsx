import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TypeOfPersonCard from ".";

describe("TypeOfPersonCard", () => {
  test("calls onClick callback when clicked", () => {
    const handleClick = jest.fn();
    render(<TypeOfPersonCard onClick={handleClick} />);
    const buttonContainer = screen.getByTestId("button_container");

    fireEvent.click(buttonContainer);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
