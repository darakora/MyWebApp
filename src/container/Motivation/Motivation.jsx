import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Motivation.css';

const Motivation = () => (
  <div className="app__bg app__wrapper section__padding" id="motivation">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.brush_men} alt="brush_men img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Quotes from the greats" />
      <h1 className="headtext__cormorant_tets">Be a creator with all your soul</h1>

      <div className="app__motivation-content">
        <div className="app__motivation-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Where the spirit does not work with the hand there is no art.</p>
        </div>
      </div>

      <div className="app__motivation-sign">
        <p>Leonardo da Vinci</p>
        <br/>
        <br/>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
    </div>
  </div>
);

export default Motivation;