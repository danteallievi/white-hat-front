import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useStores from "../../hooks/useStores";

import { ReactComponent as LogoutIcon } from "../../assets/icono-logout.svg";
import "./LogoutButton.styles.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { logoutUser } = useStores();

  const onClick = () => {
    logout({ returnTo: window.location.origin });
    logoutUser();
  };

  return <LogoutIcon className="logout-button" onClick={onClick} />;
};

export default LogoutButton;
