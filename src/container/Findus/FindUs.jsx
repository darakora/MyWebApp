import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact"/>
      <h1 className="headtext__cormorant_tets" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app_wrapper-content">
        <p className="p__opensans">Art Mint School of Drawing and Painting, 8 W 8th St, New York</p>
        <p className="p__cormorant" style={{ color: '#7CD2B3', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 09:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 06:00 pm</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus_test} alt="findus"/> 
    </div>
  </div>
);

export default FindUs;
