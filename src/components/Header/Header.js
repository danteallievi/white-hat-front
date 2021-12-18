import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const Header = ({ isAuthenticated }) => {
  return (
    <header>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</header>
  );
};

export default Header;
