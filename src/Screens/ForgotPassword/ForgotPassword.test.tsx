import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ForgotPass from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe("ForgotPassWordScreen", () => {
  it("Should render titles", () => {
    render(<ForgotPass />);
    const title = screen.getByText("forgot_pass_title");
    const subTitle = screen.getByText("forgot_pass_sub_title");
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
  it("Should render form placeholder corretly", () => {
    render(<ForgotPass />);
    const placeholder = screen.getByPlaceholderText("forgot_pass_input_email");
    expect(placeholder).toBeInTheDocument();
  });
  it("Should render error corretly", async () => {
    render(<ForgotPass />);
    const user = userEvent.setup();
    const inputEmail = screen.getByPlaceholderText("forgot_pass_input_email");
    await user.type(inputEmail, "wrong");
    expect(screen.getByText("forgot_pass_email_invalid")).toBeInTheDocument();
  });
});
