import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact"/>
      <h1 className="headtext__syne_mono_brown" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app_wrapper-content">
        <p className="p_inconsolata">Art Mint School of Drawing and Painting, 8 W 8th St, New York</p>
        <p className="p_syne_mono" style={{ color: '#7CD2B3', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p_inconsolata">Mon - Fri: 10:00 am - 09:00 pm</p>
        <p className="p_inconsolata">Sat - Sun: 10:00 am - 06:00 pm</p>
      </div>
      <a href="https://www.instagram.com/art_mint_creators/" target="_blank" rel="noreferrer" type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</a>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/> 
    </div>
  </div>
);

export default FindUs;
