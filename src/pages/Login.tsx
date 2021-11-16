import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <LoginForm
      onSubmit={() => {
        console.log("LoginForm was submitted.");
      }}
    />
  );
};

export default Login;
