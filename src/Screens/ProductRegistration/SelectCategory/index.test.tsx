import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectCategory from ".";

describe("SelectCategory Component", () => {
  const mockSetCategory = jest.fn();
  const mockNextStage = jest.fn();

  const renderComponent = (category?: string) =>
    render(
      <SelectCategory
        category={category}
        setCategory={mockSetCategory}
        nextStage={mockNextStage}
      />
    );

  it("renders without crashing", () => {
    renderComponent();
  });

  it("renders category items correctly", () => {
    renderComponent();

    expect(screen.getByTestId("item-category 0")).toBeInTheDocument();
    expect(screen.getByTestId("item-category 1")).toBeInTheDocument();
    expect(screen.getByTestId("item-category 2")).toBeInTheDocument();
    expect(screen.getByTestId("item-category 3")).toBeInTheDocument();
    expect(screen.getByTestId("item-category 4")).toBeInTheDocument();
  });

  it("calls nextStage when the 'Next' button is clicked", () => {
    renderComponent();
    const next = screen.getByTestId("btn-next");
    fireEvent.click(next);
    expect(mockNextStage).toHaveBeenCalled();
  });
});
