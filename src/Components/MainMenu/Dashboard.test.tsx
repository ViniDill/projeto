import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainMenu from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Dashboard Component", () => {
  const label = "Dashboard";
  const iconName = "Graphic";

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));
});
