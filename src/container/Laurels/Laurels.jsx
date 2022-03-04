import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    {/* <img src={imgUrl} alt="award" /> */}
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#8D48B4"}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      <SubHeading title="'Become a part of us'" />
      <h1 className="headtext__cormorant_tets">About Us</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels_test} alt="laurels"/>
    </div>
  </div>
);

export default Laurels;
