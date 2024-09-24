import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("ButtonComponente", () => {
  const text = "texto teste btn";
  it("Should render rigth text", () => {
    render(<Button>{text}</Button>);
    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should render type text", () => {
    render(<Button variantStyle="text">{text}</Button>);
    const buttonElement = screen.getByTestId("default-button-text");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should render type border ", () => {
    render(<Button variantStyle="border">{text}</Button>);
    const buttonElement = screen.getByTestId("default-button-border");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onPress callback when clicked", () => {
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock}>{text}</Button>);
    const buttonElement = screen.getByTestId("default-button");
    fireEvent.click(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  it("Not calls onPress callback when clicked", () => {
    const onPressMock = jest.fn();
    render(
      <Button onPress={onPressMock} disable>
        {text}
      </Button>
    );
    const buttonElement = screen.getByTestId("default-button");
    fireEvent.click(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
});
