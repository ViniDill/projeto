import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductListKitItem from ".";

describe("ProductListKitItem component", () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  const defaultProps = {
    priceValue: "R$ 100,00",
    title: "Example Product",
    brand: "Example Brand",
    category: "Example Category",
    inversor: "Example Inversor",
    totalItem: 2,
    increment: mockIncrement,
    decrement: mockDecrement,
  };

  it("calls increment function when increment button is clicked", () => {
    render(<ProductListKitItem {...defaultProps} />);
    fireEvent.click(screen.getByTestId("decrement"));
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  it("calls decrement function when decrement button is clicked", () => {
    render(<ProductListKitItem {...defaultProps} />);
    fireEvent.click(screen.getByTestId("increment"));
    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });
});
