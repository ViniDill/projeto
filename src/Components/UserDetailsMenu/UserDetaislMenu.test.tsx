import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetailsMenu from ".";

describe("UserDetailsMenu", () => {
  it("Should render name", () => {
    const name = "João da silva";
    render(<UserDetailsMenu name={name} controlModal={() => {}} />);
    const result = screen.getByText(name);
    expect(result).toBeInTheDocument();
  });
  it("Should render the title", () => {
    const name = "João da silva";
    const title = "vendedor externo";
    render(
      <UserDetailsMenu name={name} title={title} controlModal={() => {}} />
    );
    const result = screen.getByText(title);
    expect(result).toBeInTheDocument();
  });
});
