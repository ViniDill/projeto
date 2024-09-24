import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListItem from "../ListItem";

describe("ListItem Component", () => {
  it("renders title correctly", () => {
    render(<ListItem title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description correctly", () => {
    render(<ListItem title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<ListItem onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId("button"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
