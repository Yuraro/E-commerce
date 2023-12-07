import React from 'react'
import './Breadcrums.css'
import dropright from '../Assets/dropright.png'

export const Breadcrums = (props) => {
    const { product } = props;
  return (
      <div className='breadcrums'>
          HOME <img src={dropright} alt="dropright" width="30px"/>SHOP <img src={dropright} alt="dropright" width="30px"/> {product.category} <img src={dropright} alt="dropright" width="30px"/> {product.name}
    </div>
  )
}
