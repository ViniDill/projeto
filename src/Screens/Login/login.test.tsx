import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from ".";

describe("Login Component", () => {
  it("Renders without errors", () => {
    render(<Login />);
    
    const headerElement = screen.getByAltText("imagem do header mobile");
    expect(headerElement).toBeInTheDocument();

    const forgotPasswordLink = screen.getByText("login_forgot_password");
    expect(forgotPasswordLink).toBeInTheDocument();

    const emailInputElement = screen.getByPlaceholderText("login_input_placeholder_email");
    expect(emailInputElement).toBeInTheDocument();

    const passwordInputElement = screen.getByPlaceholderText("login_input_placeholder_password");
    expect(passwordInputElement).toBeInTheDocument();

    const loginButtonElement = screen.getByTestId("default-button");
    expect(loginButtonElement).toBeInTheDocument();
  });

  it("Submits the form with valid input", () => {
    render(<Login />);

    const emailInputElement = screen.getByPlaceholderText("login_input_placeholder_email");
    const passwordInputElement = screen.getByPlaceholderText("login_input_placeholder_password");

    fireEvent.change(emailInputElement, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInputElement, { target: { value: "password123" } });

    expect(emailInputElement).toHaveValue("user@example.com");
    expect(passwordInputElement).toHaveValue("password123");

    const submitButtonElement = screen.getByTestId("default-button");
    fireEvent.click(submitButtonElement);
  });
});
