import { ReactComponent as ImageAmbient } from "../../assets/image_ambient.svg";
import "./Header.scss";
const Header = ({ titleWhite, titleBlue }) => {
  return (
    <header className="header-main">
      <ImageAmbient className="header-main__image" />
      <h1 className="header-main__title">
        {titleWhite}
        <span className="header-main__title-blue"> {`\n${titleBlue}`} </span>
      </h1>
    </header>
  );
};

export default Header;
