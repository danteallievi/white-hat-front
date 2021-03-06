import { useNavigate } from "react-router-dom";
import useStores from "../../hooks/useStores";
import paths from "../../navigation/paths";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import WhButton from "../WhButton/WhButton";

import "./Nav.styles.scss";

const Nav = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const { loggedUser } = useStores();
  const handleHomeNavigation = () => {
    navigate(paths.home);
  };

  const handleMySpaceNavigation = () => {
    if (loggedUser.userData?.id) {
      navigate(`${paths.mySpace}/${loggedUser.userData.id}`, {
        userId: loggedUser.id,
      });
    }
  };

  return (
    <nav className="nav">
      <h1 className="web-title" onClick={() => navigate(paths.home)}>
        White <span className="web-title web-title--secondary">Hat</span>
      </h1>
      <div className="header__button-container">
        <WhButton text="Home" onClick={handleHomeNavigation} />
        {isAuthenticated ? (
          <>
            <WhButton text="Mi espacio" onClick={handleMySpaceNavigation} />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Nav;
