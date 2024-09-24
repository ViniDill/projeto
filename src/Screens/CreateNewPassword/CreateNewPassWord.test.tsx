import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CreateNewPassword from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe("CreateNewPassword Screen", () => {
  it("Shoud have a title and subtitle", () => {
    render(<CreateNewPassword />);
    expect(screen.getByText("create_new_pass_title")).toBeInTheDocument();
    expect(screen.getByText("create_new_pass_rules_title")).toBeInTheDocument();
  });
  it("Should render placeholder", () => {
    render(<CreateNewPassword />);
    expect(
      screen.getByPlaceholderText("create_new_pass_input_password_placeholder")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        "create_new_pass_input_password_placeholder_confirm"
      )
    ).toBeInTheDocument();
  });

  test("validação de entrada funciona corretamente", async () => {
    render(<CreateNewPassword />);
    const user = userEvent.setup();

    const passwordInput = screen.getByPlaceholderText(
      "create_new_pass_input_password_placeholder"
    );
    const confirmPasswordInput = screen.getByPlaceholderText(
      "create_new_pass_input_password_placeholder_confirm"
    );

    await user.type(passwordInput, "pass");

    await user.type(confirmPasswordInput, "differentpass");

    // Verifica se a mensagem de erro é exibida
    expect(screen.getByText("create_new_pass_min_length")).toBeInTheDocument();
    expect(screen.getByText("create_new_pass_match")).toBeInTheDocument();

    await user.type(passwordInput, "passssss");

    expect(screen.getByText("create_new_pass_upper_case")).toBeInTheDocument();

    await user.type(passwordInput, "passssssA");

    expect(screen.getByText("create_new_pass_number")).toBeInTheDocument();

    await user.type(passwordInput, "passssssA1");
    expect(screen.getByText("create_new_pass_simbol")).toBeInTheDocument();
  });
});
