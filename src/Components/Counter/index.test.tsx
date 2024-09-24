import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from ".";

describe("Counter component", () => {
  it("Initial value zero", () => {
    render(<Counter />);
    const value = screen.getByText("0");
    expect(value).toBeInTheDocument();
  });

  it("have the right value", () => {
    render(<Counter value={10} />);
    const value = screen.getByText("10");
    expect(value).toBeInTheDocument();
  });

  it("increments the value when plus button is clicked", () => {
    const mockClickIncrement = jest.fn();
    render(<Counter clickIncrement={mockClickIncrement} />);
    fireEvent.click(screen.getByTestId("increment"));
    expect(mockClickIncrement).toHaveBeenCalledTimes(1);
  });

  it("decrements the value when plus button is clicked", () => {
    const mockClickIncrement = jest.fn();
    render(<Counter clickDecrement={mockClickIncrement} />);
    fireEvent.click(screen.getByTestId("decrement"));
    expect(mockClickIncrement).toHaveBeenCalledTimes(1);
  });
});
