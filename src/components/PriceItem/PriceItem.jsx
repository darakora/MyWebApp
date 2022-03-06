import React from 'react';

import './PriceItem.css';

const PriceItem = ({title, price, tags}) => (
  <div className="app__priceitem">
    <div className="app__priceitem-head">
      <div className="app__priceitem-name">
        <p className="p__cormorant" style={{ color: '#7CD2B3' }}>{title}</p>
      </div>

      <div className="app__priceitem-dash"/>

      <div className="app__priceitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__priceitem-sub">
      <p className="p__opensans" style={{ color: '#AAA' }}>{tags}</p>
    </div>
  </div>
);

export default PriceItem;
