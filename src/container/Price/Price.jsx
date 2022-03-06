import React from 'react';
import { PriceItem } from '../../components';
import { data, images } from '../../constants';
import './Price.css';

const Price = () => (
  <div className="app__specialMenu flex__center section__padding" id="price">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Art Mint</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_img">
        <img src={images.price_img} alt="price__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Price</p>
        <div className="app__specialMenu_menu_items">
          {data.lessons.map((lesson, index) => (
            <PriceItem key={lesson.title + index} title={lesson.title} price={lesson.price} tags={lesson.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Price;