import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationSelect, { PaginationProps } from ".";

describe("PaginationSelect Component", () => {
  const totalPages = 5;

  const onPageChangeMock = jest.fn();
  const setCurrentPageMock = jest.fn();
  const setLoadingMock = jest.fn();

  const renderComponent = (currentPage: number) => {
    render(
      <PaginationSelect
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChangeMock}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders correctly with initial state", () => {
    renderComponent(1);

    const paginationContainer = screen.getByTestId("pagination-container");
    expect(paginationContainer).toBeInTheDocument();

    const pageNumberElements = screen.getAllByTestId("page-number");
    const currentPageNumber = pageNumberElements[0];

    expect(currentPageNumber).toBeInTheDocument();
    expect(currentPageNumber).toHaveTextContent("1");
  });

  it("Navigates to the next page correctly", () => {
    renderComponent(1);

    const rightArrow = screen.getByTestId("right-arrow");
    fireEvent.click(rightArrow);

    const pageNumberElements = screen.getAllByTestId("page-number");
    const currentPageNumber = pageNumberElements.find(
      (element) => element.textContent === "2"
    );
    expect(currentPageNumber).toBeInTheDocument();
  });

  it("Navigates to the previous page correctly", () => {
    renderComponent(2);

    const leftArrow = screen.getByTestId("left-arrow");
    fireEvent.click(leftArrow);

    const pageNumberElements = screen.getAllByTestId("page-number");
    const currentPageNumber = pageNumberElements.find(
      (element) => element.textContent === "1"
    );
    expect(currentPageNumber).toBeInTheDocument();
  });

  it("Navigates to a specific page when clicked", () => {
    renderComponent(1);

    const pageNumberElements = screen.getAllByTestId("page-number");
    const thirdPageNumber = pageNumberElements[2];
    fireEvent.click(thirdPageNumber);

    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });
});
