import "./header.css";
import logoImg from "./../../img/icons/logo.svg";
import Btn from "../btn/Btn";

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <img className="logo" src={logoImg} alt="" />
        <a className="logo_title" href="#">
          FASHION
        </a>
      </div>
      <div className="header_right">
        <nav className="nav">
          <a href="#">CATALOGUE</a>
          <a href="#">FASHION</a>
          <a href="#">FAVOURITE</a>
          <a href="#">LIFESTYLE</a>
        </nav>
        <Btn className="btn header_btn" text="SING UP" />
      </div>
    </header>
  );
}

export default Header;
