import React, { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import useForm from "../hooks/useForm";
import { maxLengthValidator, minLengthValidator } from "../utils/validators";
import InputError from "./InputError";
import Label from "./Label";

export type LoginData = {
  email: string;
  password: string;
};

export interface LoginFormProps {
  onSubmit: (data: LoginData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = useForm<LoginData>({
    fields: {
      email: [minLengthValidator(6), maxLengthValidator(20)],
      password: [minLengthValidator(8)],
    },
    onSubmit,
  });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    form.submit({ email, password });
  };

  return (
    <Form onSubmit={submitForm}>
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
        />
      </Label>
      <button>Log In</button>
    </Form>
  );
};

export default LoginForm;