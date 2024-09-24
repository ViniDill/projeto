import React from "react";
import { render, screen } from "@testing-library/react";
import StageStatus, { StageStatusEnum } from ".";

describe("StageStatus Component", () => {
  const label = "Test Label";

  it("Renders with label and default status", () => {
    render(<StageStatus label={label} />);
    const backgroundElement = screen.getByTestId("status-background");

    expect(backgroundElement).toHaveClass("status-1");
  });
});
