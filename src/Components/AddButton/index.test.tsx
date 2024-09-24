import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddButton from ".";

describe("AddButton", () => {
  it("renders correctly", () => {
    render(<AddButton text="Add Item" />);
    const buttonText = screen.getByText("Add Item");
    expect(buttonText).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<AddButton text="Add Item" onClick={handleClick} />);
    const buttonContainer = screen.getByTestId("container_button");
    fireEvent.click(buttonContainer);
    expect(handleClick).toHaveBeenCalled();
  });
});
