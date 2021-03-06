import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => 
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Art school for all"/>
        <h1 className="app__header-h1">Art mint</h1>
        <p className="p_inconsolata" style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac faucibus urna. Mauris viverra augue quis velit elementum eleifend. Maecenas pulvinar eros sit amet arcu gravida</p>
        <a href="https://www.instagram.com/art_mint_studio/" target="_blank" rel="noreferrer" type="button" className="custom__button">Instagram</a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
      </div>
    </div>;

export default Header;