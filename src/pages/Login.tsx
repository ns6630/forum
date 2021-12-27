import LoginForm from "../components/LoginForm";
import { LoginData } from "../types/User";
import { authenticationApi } from "../App";
import { Redirect } from "react-router-dom";
import {observer} from "mobx-react-lite";

const Login = () => {
  return (
    <>
      {authenticationApi.isAuthenticated() ? (
        <Redirect to={"/"} />
      ) : (
        <LoginForm
          onSubmit={async ({ email, password }: LoginData) => {
            await authenticationApi.signIn(email, password);
            console.log(
              `LoginForm was submitted. { email: ${email}, password: ${password} }`
            );
          }}
        />
      )}
    </>
  );
};

export default observer(Login);
