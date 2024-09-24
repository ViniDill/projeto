import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SendCode from ".";

describe("SendCode Component", () => {
  it("Renders without errors", () => {
    render(<SendCode />);
    const headerElement = screen.getByAltText("imagem do header mobile");
    const h2Element = screen.getByText("Send_code_to_another_location");
    const textElement = screen.getByText("Where_to_send_code");
    const buttonEmailElement = screen.getByText("E-mail");
    const buttonSMSElement = screen.getByText("SMS");
    const buttonWhatsappElement = screen.getByText("WhatsApp");

    expect(headerElement).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(buttonEmailElement).toBeInTheDocument();
    expect(buttonSMSElement).toBeInTheDocument();
    expect(buttonWhatsappElement).toBeInTheDocument();
  });
});