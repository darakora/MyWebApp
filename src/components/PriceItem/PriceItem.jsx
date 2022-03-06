import React from 'react';

import './PriceItem.css';

const PriceItem = ({title, price, tags}) => (
  <div className="app__priceitem">
    <div className="app__priceitem-head">
      <div className="app__priceitem-name">
        <p className="p_syne_mono" style={{ color: '#7CD2B3' }}>{title}</p>
      </div>

      <div className="app__priceitem-dash"/>

      <div className="app__priceitem-price">
        <p className="p_syne_mono">{price}</p>
      </div>
    </div>

    <div className="app__priceitem-sub">
      <p className="p_inconsolata" style={{ color: '#AAA' }}>{tags}</p>
    </div>
  </div>
);

export default PriceItem;
