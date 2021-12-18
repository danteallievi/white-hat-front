import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WhButton from "../WhButton/WhButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <WhButton onClick={loginWithRedirect} text="Log in" />;
};

export default LoginButton;
