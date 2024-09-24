import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import UserMenu from ".";

describe("UserMenu Component", () => {
  test("displays menu headers", () => {
    render(
      <MemoryRouter>
        <UserMenu modalControl={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText("Gestão de negócio")).toBeInTheDocument();
    expect(screen.getByText("Informações da empresa")).toBeInTheDocument();
    expect(screen.getByText("Gestão de usuário")).toBeInTheDocument();
    expect(screen.getByText("Layout de propósta")).toBeInTheDocument();
    expect(screen.getByText("Criar funções de usuário")).toBeInTheDocument();
    expect(screen.getByText("Configurações")).toBeInTheDocument();
  });
});
