import React from 'react';
import { PriceItem } from '../../components';
import { data, images } from '../../constants';
import './Price.css';

const Price = () => (
  <div className="app__price flex__center section__padding" id="price">
    <div className="app__price-title">
      <h1 className="headtext__cormorant">Art Mint</h1>
    </div>

    <div className="app__price-list">

      <div className="app__price-list_img">
        <img src={images.price_img} alt="price img" />
      </div>

      <div className="app__price-list_item flex__center">
        <p className="app__price-heading">Price</p>
        <div className="app__price_list_items">
          {data.lessons.map((lesson, index) => (
            <PriceItem key={lesson.title + index} title={lesson.title} price={lesson.price} tags={lesson.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Price;