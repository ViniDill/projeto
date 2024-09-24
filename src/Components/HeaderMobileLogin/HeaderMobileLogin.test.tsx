import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderMobileLogin from ".";

describe("HeaderMobileLogin", () => {
  it("Should render default image", () => {
    render(<HeaderMobileLogin />);
    const defaultImage = screen.getByAltText("imagem do header mobile");
    expect(defaultImage).toHaveAttribute("src", "/logoInovador.png");
  });

  it("Should render provide image", () => {
    const provideImage = "https://example.com/image.jpg";
    render(<HeaderMobileLogin image={provideImage} />);
    const defaultImage = screen.getByAltText("imagem do header mobile");
    expect(defaultImage).toHaveAttribute("src", provideImage);
  });
});
