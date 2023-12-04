import React from 'react';
import './Item.css';

export const Item = (props) => {
  return (
    <div className='item'>
          <img src={props.image} alt="item" width="250px" height="350px"/>
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-prices-new">
                  ${props.new_price}
              </div>
              <div className="item-prices-old">
                  ${props.old_price}
              </div>
          </div>
    </div>
  )
}
