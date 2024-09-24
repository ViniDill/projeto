import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TokenVerification from ".";

describe("TokenVerification Component", () => {
    it("Renders without errors", () => {
      render(<TokenVerification />);
      const headerElement = screen.getByAltText("imagem do header mobile");
      expect(headerElement).toBeInTheDocument();
  
      const titleElement = screen.getByText("Token_verification");
      expect(titleElement).toBeInTheDocument();
  
      const textElement = screen.getByText("Token_please_fill_in_with_the_code_sent_via_SMS");
      expect(textElement).toBeInTheDocument();
  
      const digitInputElement = screen.getByTestId("digit-input-container");
      expect(digitInputElement).toBeInTheDocument();
  
      const linkElement = screen.getByText("Token_resend");
      expect(linkElement).toBeInTheDocument();
  
      const buttonElement = screen.getByText("Token_verify");
      expect(buttonElement).toBeInTheDocument();
    });
  
    it("Allows input of token code", () => {
      render(<TokenVerification />);
      const inputElement = screen.getByTestId("digit-input-0") as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: "1234" } });
      expect(inputElement.value).toBe("1234");
    });
  });