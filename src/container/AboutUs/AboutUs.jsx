import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./AboutUs.css";

const AwardCard = ({ award: { title, subtitle } }) => (
  <div className="app__aboutus_title-card">
    <div className="app__aboutus_title-card_content">
      <p className="p__cormorant" style={{color: "#8D48B4"}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      <SubHeading title="'Become a part of us'" />
      <h1 className="headtext__cormorant_tets">About Us</h1>
      <div className="app__aboutus_title">
        {data.aboutus.map((item) => (
          <AwardCard award={item} key={item.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.paints} alt="paints img"/>
    </div>
  </div>
);

export default AboutUs;