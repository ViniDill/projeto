import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonSendCode from ".";

describe("ButtonSendCode Component", () => {
  const text = "SendCode";

  it("renders the correct label and icon for SMS type", () => {
    render(<ButtonSendCode type="sms" />);
    const labelElement = screen.getByText("SMS");
    expect(labelElement).toBeInTheDocument();
    const iconElement = screen.getByAltText("SMS Icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders the correct label and icon for WhatsApp type", () => {
    render(<ButtonSendCode type="whatsapp" />);
    const labelElement = screen.getByText("WhatsApp");
    expect(labelElement).toBeInTheDocument();
    const iconElement = screen.getByAltText("WhatsApp Icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders the correct label and icon for Email type", () => {
    render(<ButtonSendCode type="email" />);
    const labelElement = screen.getByText("E-mail");
    expect(labelElement).toBeInTheDocument();
    const iconElement = screen.getByAltText("E-mail Icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("calls onClick callback when clicked", () => {
    const onClickMock = jest.fn();
    render(<ButtonSendCode type="sms" onClick={onClickMock} />);
    const buttonElement = screen.getByText("SMS");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
