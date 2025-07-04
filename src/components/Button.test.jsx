import React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";

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
