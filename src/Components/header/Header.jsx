import "./header.css";
import DownloadButtons from "./Download_Buttons";
import SocialMediaLinks from "./SocialMediaLinks";
import myImg from "../../assets/piyush.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>Piyush Pamnani</h2>
        <h5 className="text-light">Software Developer</h5>
        <DownloadButtons />
        <SocialMediaLinks />
        <div className="myImg">
          <img src={myImg} alt="piyush" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
