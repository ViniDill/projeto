import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckBoxCategory from ".";

describe("CheckBoxCategory", () => {
  it("Should render title ", () => {
    const categoryname = "nome da categoria";
    render(<CheckBoxCategory name={categoryname} />);
    const result = screen.getByText(categoryname);
    expect(result).toBeInTheDocument();
  });
  it("Should press the button", () => {
    const clickButon = jest.fn();
    render(<CheckBoxCategory name="string" onClick={clickButon} />);
    const button = screen.getByTestId("CheckBoxCategoryButton");
    fireEvent.click(button);
    expect(clickButon).toHaveBeenCalled();
  });
});
