import "./header.css";
import logoImg from "./../../img/icons/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <img className="logo" src={logoImg} alt="" />
        <a className="logo_title" href="#">
          Fasion
        </a>
      </div>
      <div className="header_right">
        <nav className="nav">
          <a href="#">CATALOGUE</a>
          <a href="#">FASHION</a>
          <a href="#">FAVOURITE</a>
          <a href="#">LIFESTYLE</a>
        </nav>
        <button className="btn header_btn">SIGN UP</button>
      </div>
    </header>
  );
}

export default Header;
