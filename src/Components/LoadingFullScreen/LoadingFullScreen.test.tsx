import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingFullScreen from ".";

jest.mock("lottie-web");
jest.mock("lottie-react");

describe("FullScreenLoading", () => {
  it("Should render component", () => {
    render(<LoadingFullScreen />);
    const load = screen.getByTestId("loading-container");
    expect(load).toBeInTheDocument();
  });
});
