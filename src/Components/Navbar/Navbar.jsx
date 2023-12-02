import React from 'react';
import logo from '../Assets/needle.svg';
import bag from '../Assets/bag.svg';
import './Navbar.css'; 

export const Navbar = () => {
  return (
    <div className="navbar"> 
      <div className="nav_logo">
        <img src={logo} alt="logo" width="50px" />
        <p>Needle</p>
      </div>
      <ul className="nav_menu">
        <li>Shop<hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav_login_cart">
        <button>Login</button>
              <img src={bag} alt="bag" width="50px" />
              <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};
