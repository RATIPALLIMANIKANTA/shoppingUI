import React, { useState } from 'react'
import { Link } from 'react-router-dom'


  const Header = ({})=>{

    const[showProfile,setShowProfile]=useState(false);

    const toggleProfile =()=>{

      setShowProfile(prev => !prev);
      console.log("profile Toggled:",!showProfile);
    }
  return (
    <div className='headerSection'>
      
      <div className="left">
      <div className="logo">
        <img src="assets\MLogo.jpg" alt="Logo" />
      </div>
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li><Link to="/woman">Woman</Link></li>
          <li> <Link to="/men">Men</Link></li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type='text' placeholder='search...'/>
      </div>
      <div className="right">
        <div className="signin">
          signin/signup
        </div>
        <div className="profile"
        onClick={toggleProfile}
        >
          <i className='fas fa-user profile-icon'></i>
          <span className='profileName'>Profile</span>
        </div>
        <div className="wishlist">
          <i className='fas fa-heart wishlist-icon'></i>
          <span className='wishlistName'>Wishlist</span>
        </div>
        <div className="cart">
          <img src='assets\cart.jpg' alt='Cart' className='cartLogo'/>
          <span className='cartName'> Cart</span>
        </div>
      </div>

      {showProfile && (
        <div className="profileFloatingPage"> 
          <h3>Welcome</h3>
          <p>To access your account and manage orders</p>
          <button className='loginButton'>Login/Signup</button>
          <ul className='profileOptions'>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>GiftCards</li>
            <li>ContactUs</li>
            <li>M shopping mall About?</li>
            <li>M credits</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            <li>Saved Addresses</li>
          </ul>
        </div>
      )}
    </div>
  )
}


export default Header
