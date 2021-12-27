import React, {useState} from "react";
import Form from "./Form";
import Input from "./Input";
import useForm from "../hooks/useForm";
import {maxLengthValidator, minLengthValidator} from "../utils/validators";
import InputError from "./InputError";
import Label from "./Label";
import {LoginData} from "../types/User";
import useAsync from "../hooks/useAsync";

export interface LoginFormProps {
  onSubmit: (data: LoginData) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { execute, status, value, error } = useAsync<void>(() => onSubmit({ email, password }), false);

  const form = useForm<LoginData>({
    fields: {
      email: [minLengthValidator(6), maxLengthValidator(20)],
      password: [minLengthValidator(8)],
    },
    onSubmit: execute
  });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    form.submit({ email, password });
  };

  return (
    <Form onSubmit={submitForm}>
      {error &&
        <p>{error}</p>
      }
      {form.errors.email?.map((error, key) => (
        <InputError key={key}>{error}</InputError>
      ))}
      <Label>
        Email
        <Input
          placeholder={"Enter your email"}
          kind={"email"}
          value={email}
          onInput={(event) => setEmail(event.target.value)}
          disabled={status === "pending"}
        />
      </Label>
      {form.errors.password?.map((error, key) => (
        <InputError key={key}>{error}</InputError>
      ))}
      <Label>
        Password
        <Input
          placeholder={"Enter your password"}
          kind={"password"}
          value={password}
          onInput={(event) => setPassword(event.target.value)}
          disabled={status === "pending"}
        />
      </Label>
      <button disabled={status === "pending"}>Log In</button>
    </Form>
  );
};

export default LoginForm;
