import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TableSwitch from "./index";
import "@testing-library/jest-dom";

describe("TableSwitch Component", () => {
  it("renders without crashing", () => {
    render(
      <TableSwitch
        index={1}
        name="Test"
        onClickPencil={() => {}}
        onClickSwitch={() => {}}
      />
    );
  });

  it("displays the name correctly", () => {
    render(
      <TableSwitch
        index={1}
        name="Test"
        onClickPencil={() => {}}
        onClickSwitch={() => {}}
      />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("calls onClickPencil when pencil icon is clicked", () => {
    const onClickPencilMock = jest.fn();
    render(
      <TableSwitch
        index={1}
        name="Test"
        onClickPencil={onClickPencilMock}
        onClickSwitch={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("click_pencil"));
    expect(onClickPencilMock).toHaveBeenCalled();
  });

  it("calls onClickSwitch when switch is clicked", () => {
    const onClickSwitchMock = jest.fn();
    render(
      <TableSwitch
        index={1}
        name="Test"
        onClickPencil={() => {}}
        onClickSwitch={onClickSwitchMock}
      />
    );
    fireEvent.click(screen.getByTestId("switch_button"));
    expect(onClickSwitchMock).toHaveBeenCalled();
  });
});
