import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./index";

describe("TextArea Component", () => {
  // Test to check if the component renders without crashing
  it("renders without crashing", () => {
    render(<TextArea />);
  });

  // Test to check if the label is rendered correctly when provided
  it("renders label correctly", () => {
    render(<TextArea label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  // Test to check if the label is not rendered when not provided
  it("does not render label when not provided", () => {
    render(<TextArea />);
    expect(screen.queryByText("Test Label")).toBeNull();
  });
});
