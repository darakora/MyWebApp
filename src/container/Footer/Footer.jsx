import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          9Art Mint School of Drawing and Painting, 8 W 8th St, New York
        </p>
        <p className="p__opensans">+7 888-676-234</p>
        <p className="p__opensans">+7 888-565-098</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.vector} alt="footer__logo" />
        <p className="p__opensans">"Everything you can imagine is real.”</p>
        {/* <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        /> */}
        <div className="app__footer-links_icons">
          <FiFacebook />
          {/* <FiTwitter /> */}
          <a href="https://www.instagram.com/art_mint_creators/" target="_blank" alt="inst">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 09:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00am - 06:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Art Mint.</p>
    </div>
  </div>
);

export default Footer;
