import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../pages/Login";
describe("checking login functionality", () => {
  it("render heading in login page", async () => {
    render(<Login />);
    const heading = screen.getByText("Login Form");
    expect(heading).toBeInTheDocument();
  });

  it("input name attribute ", async () => {
    const component = render(<Login />);
    const emailField = component.getByPlaceholderText("Email");
    const passwordField = component.getByPlaceholderText("Password");
    expect(emailField.getAttribute("name")).toBe("email");
    expect(passwordField.getAttribute("name")).toBe("password");
  });
  it("input values check", async () => {
    const component = render(<Login />);
    const emailField = component.getByPlaceholderText("Email");
    fireEvent.change(emailField, { target: { value: "nada@gmail.com" } });
    const passwordField = component.getByPlaceholderText("Password");
    fireEvent.change(passwordField, { target: { value: "nnn123" } });
    expect(emailField.value).toBe("nada@gmail.com");
    expect(passwordField.value).toBe("nnn123");
  });
  it("checks Input change Validation", async () => {
    const { container, getByPlaceholderText } = render(<Login />);
    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Password");
    userEvent.type(emailField, "nada@gmail.com");
    userEvent.type(passwordField, "nnn1123");
    userEvent.clear(emailField);
    userEvent.clear(passwordField);
    await waitFor(() => {
      const errorMessage = container.querySelector(".required");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
