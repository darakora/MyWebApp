import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home" alt="logo img">
        <img src={images.vector} alt="app__logo" />
        </a>
       
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#motivation">Motivation</a></li>
        <li className="p__opensans"><a href="#price">Price</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#home" className="p__opensans">Log In / Sign Up</a>
        {/* <div /> */}
        {/* <a href="/" className="p__opensans">Book Table</a> */}
      </div>
      <div className="app__navbar-smallscreen">
        <BiMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiCrossMark fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#motivation" onClick={() => setToggleMenu(false)}>Motivation</a></li>
              <li><a href="#price" onClick={() => setToggleMenu(false)}>Price</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
