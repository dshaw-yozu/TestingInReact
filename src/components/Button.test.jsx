import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button", () => {
  it("should render without crashing", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("should render correct button text", () => {
    render(<Button text="Click Me!" />);
    const button = screen.getByTestId("button");

    expect(button).toHaveTextContent("Click Me!");
  });
});
