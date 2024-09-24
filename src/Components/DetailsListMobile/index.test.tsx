import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTranslation } from "react-i18next";
import DetailsListMobile, {
  DetailsListMobileProps,
} from "../DetailsListMobile";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("DetailsListMobile Component", () => {
  const defaultProps: DetailsListMobileProps = {
    image: "/productModel.jpg",
    product: "Test Product",
    brand: "Test Brand",
    type: "Test Type",
    onEdit: jest.fn(),
    onDelet: jest.fn(),
  };

  it("renders without crashing", () => {
    render(<DetailsListMobile {...defaultProps} />);
  });

  it("renders product information correctly", () => {
    render(<DetailsListMobile {...defaultProps} />);
    expect(
      screen.getByText("details_list_mobile_name_of_product")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(
      screen.getByText("details_list_mobile_name_of_brand")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Brand")).toBeInTheDocument();
    expect(
      screen.getByText("details_list_mobile_name_of_type")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Type")).toBeInTheDocument();
  });

  it("calls onEdit when edit button is clicked", () => {
    render(<DetailsListMobile {...defaultProps} />);
    fireEvent.click(screen.getByTestId("button-edit"));
    expect(defaultProps.onEdit).toHaveBeenCalled();
  });

  it("calls onDelete when delete button is clicked", () => {
    render(<DetailsListMobile {...defaultProps} />);
    fireEvent.click(screen.getByTestId("button-delete"));
    expect(defaultProps.onDelet).toHaveBeenCalled();
  });
});
