import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import WhButton from "../WhButton/WhButton";

import "./Header.styles.scss";

const Header = ({ isAuthenticated }) => {
  const handleHomeNavigation = () => {
    return;
  };

  const handleMySpaceNavigation = () => {};

  return (
    <header className="header">
      <h1 className="web-title">
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
    </header>
  );
};

export default Header;
