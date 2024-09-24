import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from ".";

describe("ErrorMessage", () => {
  it("Sould render corretly", () => {
    const text = "testando 123";
    render(<ErrorMessage message={text} />);
    const find = screen.queryByText(text);
    expect(find).toBeInTheDocument();
  });
});
