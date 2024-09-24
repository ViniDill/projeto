import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultNotFound from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("ResultNotFound Component", () => {
  it("renders without crashing", () => {
    render(<ResultNotFound />);
  });

  it("renders the not found image", () => {
    render(<ResultNotFound />);
    const image = screen.getByAltText("Product Not Found") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/icons/not_found.svg");
  });

  it("renders the sorry message", () => {
    render(<ResultNotFound />);
    const sorryMessage = screen.getByText("Sorry_no_products_were_found");
    expect(sorryMessage).toBeInTheDocument();
  });
});