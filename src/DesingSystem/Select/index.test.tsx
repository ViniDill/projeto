import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select, { SelectProps } from "./index";

describe("Select component", () => {
  it("renders with label and children", () => {
    render(
      <Select label="Test Label">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });
});
