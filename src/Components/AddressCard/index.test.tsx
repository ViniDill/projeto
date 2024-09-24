import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddressCard, { AddressCardProps } from ".";
import "@testing-library/jest-dom";

describe("AddressCard", () => {
  const defaultProps: AddressCardProps = {
    selected: false,
    street: "Rua: testando testonildo",
    neighborhood: "nova vila",
    city: "campo largo",
    state: "PR",
    complement: "casa numero 007",
    houseName: "Casa da bruxa",
    openMenu: jest.fn(),
  };

  it("renders with correct content", () => {
    render(<AddressCard {...defaultProps} />);

    expect(
      screen.getByText(
        "Rua: testando testonildo - nova vila - campo largo - PR - casa numero 007"
      )
    ).toBeInTheDocument();
    expect(screen.getByText(defaultProps.houseName)).toBeInTheDocument();
  });

  it("calls openMenu function when menu icon is clicked", () => {
    render(<AddressCard {...defaultProps} />);
    fireEvent.click(screen.getByTestId("open-menu"));

    expect(defaultProps.openMenu).toHaveBeenCalled();
  });
});
