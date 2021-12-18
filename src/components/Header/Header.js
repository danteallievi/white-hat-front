import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</header>
  );
};

export default Header;
