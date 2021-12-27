import { render, screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm";
import userEvent from "@testing-library/user-event";
import {LoginData} from "../../types/User";

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

test("LoginForm submit", async () => {
  const data: LoginData = {
    email: "test@test.test",
    password: "qwertyui",
  };

  const onSubmit = jest.fn(() => Promise.resolve());
  render(<LoginForm onSubmit={onSubmit} />);

  let emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  expect(emailInput).toBeVisible();
  userEvent.type(emailInput, data.email);

  let passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
  expect(passwordInput).toBeVisible();
  userEvent.type(passwordInput, data.password);

  let submit = screen.getByText("Log In") as HTMLInputElement;
  expect(submit).toBeVisible();
  userEvent.click(submit);
  expect(onSubmit).toBeCalledWith(data);

  emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  expect(emailInput.disabled).toBe(true);
  passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
  expect(passwordInput.disabled).toBe(true);
  submit = screen.getByText("Log In") as HTMLInputElement;
  expect(submit.disabled).toBe(true);

  emailInput = await screen.findByLabelText("Email") as HTMLInputElement;
  expect(emailInput.disabled).toBe(false);
  passwordInput = await screen.findByLabelText("Password") as HTMLInputElement;
  expect(passwordInput.disabled).toBe(false);
  submit = await screen.findByText("Log In") as HTMLInputElement;
  expect(submit.disabled).toBe(false);
});
