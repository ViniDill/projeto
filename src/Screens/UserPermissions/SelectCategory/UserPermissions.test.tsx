import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SelectCategory from ".";

describe("SelectCategory Component", () => {
  it("Renders without errors", () => {
    render(<SelectCategory />);

    const permissions = screen.getAllByTestId("switch_button");
    expect(permissions).toHaveLength(16);

    const roleNameInput = screen.getByPlaceholderText(
      "User_permissions_role_name_placeholder"
    );
    expect(roleNameInput).toBeInTheDocument();

    const descriptionInput = screen.getByPlaceholderText(
      "User_permissions_description_placeholder"
    );
    expect(descriptionInput).toBeInTheDocument();

    const sendButton = screen.getByTestId("send-button");
    expect(sendButton).toBeInTheDocument();
  });

  it("Allows user input in form fields", async () => {
    render(<SelectCategory />);

    const roleNameInput = screen.getByPlaceholderText(
      "User_permissions_role_name_placeholder"
    );
    const descriptionInput = screen.getByPlaceholderText(
      "User_permissions_description_placeholder"
    );

    await userEvent.type(roleNameInput, "Admin");
    await userEvent.type(descriptionInput, "Administrator role");

    expect(roleNameInput).toHaveValue("Admin");
    expect(descriptionInput).toHaveValue("Administrator role");
  });

  it('Submits form data when "Save" button is clicked', async () => {
    render(<SelectCategory />);

    const roleNameInput = screen.getByPlaceholderText(
      "User_permissions_role_name_placeholder"
    );
    const descriptionInput = screen.getByPlaceholderText(
      "User_permissions_description_placeholder"
    );
    const sendButton = screen.getByTestId("send-button");

    await userEvent.type(roleNameInput, "Admin");
    await userEvent.type(descriptionInput, "Administrator role");

    fireEvent.click(sendButton);
  });
});
