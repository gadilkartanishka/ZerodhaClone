import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/Home/Hero.jsx";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders sign up button", () => {
    render(<Hero />);
    const signupButton = screen.getByText("Sign up for free");
    expect(signupButton).toBeInTheDocument();
    expect(signupButton.tagName).toBe("BUTTON");
  });
});
