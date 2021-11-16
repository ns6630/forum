import {render, screen} from "@testing-library/react";
import LoginForm from "../../components/LoginForm";
import userEvent from "@testing-library/user-event";

test('LoginForm password must be greater than 8 characters', () => {
  render(<LoginForm/>);
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeVisible();
  userEvent.type(passwordInput, "qwerty");

  const submit = screen.getByText("Log In");
  expect(submit).toBeVisible();
  userEvent.click(submit);

  const error = screen.getByText("Password must be at least 8 characters.");
  expect(error).toBeVisible();
});