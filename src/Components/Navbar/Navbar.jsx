import React, { useContext, useState } from 'react';
import logo from '../Assets/needle.svg';
import bag from '../Assets/bag.svg';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar"> 
      <div className="nav_logo">
        <Link to="/">
        <img src={logo} alt="logo" width="50px" />
        </Link>
        <p>Needle</p>
      </div>
      <ul className="nav_menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav_login_cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={bag} alt="bag" width="50px" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
