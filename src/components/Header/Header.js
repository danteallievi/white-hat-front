import { ReactComponent as ImageAmbient } from "../../assets/image_ambient.svg";

const Header = () => {
  return (
    <header className="header-main">
      <ImageAmbient className="header-main__image" />
      <h1 className="header-main__title">Home</h1>
    </header>
  );
};

export default Header;
