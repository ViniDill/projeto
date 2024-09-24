import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReadOnly from ".";

describe("ReadOnly", () => {
  it("Should have a title", () => {
    render(<ReadOnly title="titulo teste" value={"any value"} />);
    expect(screen.getByText("titulo teste")).toBeInTheDocument();
  });
  it("Should have a value", () => {
    render(<ReadOnly title="titulo teste" value={"any value"} />);
    expect(screen.getByText("any value")).toBeInTheDocument();
  });
});
