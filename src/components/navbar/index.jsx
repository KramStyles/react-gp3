import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { useState } from "react";

import logo from "../../assets/logo.svg";
import "./style.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <a href="#Home">Home</a>
      <a href="#about">What is GPT?</a>
      <a href="#possibility">Open AI</a>
      <a href="#features">Case Studies</a>
      <a href="#blog">Library</a>
    </>
  );

  return (
    <div className="gp_navbar">
      <div className="gp_navbar-links">
        <div className="gp_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gp_navbar-links-container">
          <Menu />
        </div>
        <div className="gp_navbar-sign">
          <a href="/">Login</a>
          <button>Register</button>
        </div>
        <div className="gp_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size="27"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size="27"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gp_navbar-mobile-menubar scale-up-center">
              <Menu />
              <div className="gp_navbar-sign-small">
                <a href="#features">Login</a>
                <a href="#blog">Register</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
