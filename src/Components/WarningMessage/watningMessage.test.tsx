import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WarningMessage from ".";

describe("WarningMessage", () => {
  it("Should return description", () => {
    const descricao = "testo teste";
    render(<WarningMessage type="succcess" descrition={descricao} />);
    const result = screen.getByText(descricao);
    expect(result).toBeInTheDocument();
  });
  it("Should click in the function", () => {
    const onPressMock = jest.fn();
    render(
      <WarningMessage
        type="succcess"
        descrition="descricao"
        onClick={onPressMock}
      />
    );
    const button = screen.getByTestId("warning-button");
    fireEvent.click(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
