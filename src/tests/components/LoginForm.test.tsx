import { render, screen } from "@testing-library/react";
import LoginForm, { LoginData } from "../../components/LoginForm";
import userEvent from "@testing-library/user-event";

test("LoginForm password must be greater than 8 characters", () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeVisible();
  userEvent.type(passwordInput, "qwerty");

  const submit = screen.getByText("Log In");
  expect(submit).toBeVisible();
  userEvent.click(submit);

  const error = screen.getByText("Password must be at least 8 characters.");
  expect(error).toBeVisible();
});

test("LoginForm submit", () => {
  const data: LoginData = {
    email: "test@test.test",
    password: "qwertyui",
  };

  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  const emailInput = screen.getByLabelText("Email");
  expect(emailInput).toBeVisible();
  userEvent.type(emailInput, data.email);

  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeVisible();
  userEvent.type(passwordInput, data.password);

  const submit = screen.getByText("Log In");
  expect(submit).toBeVisible();
  userEvent.click(submit);
  expect(onSubmit).toBeCalledWith(data);
});
