import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <input type="email" placeholder='myemail@gmail.com' />
      <button>Subscribe</button>
    </div>
  )
}
