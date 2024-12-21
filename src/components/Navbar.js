import React from 'react'
import logo from '../assets/navbar-logo.svg';

const Navbar = () => {
  return (
    <section className='navbar' id='Navbar'>
    <div className='navbar-cont'>

        <img className='navbar-logo' src={logo} alt="" />

      <div className='navbar-links'>
          <ul>
              <a href="">Home</a>
              <a href="">Services</a>
              <a href="">Comments</a>
              <a href="">Works</a>
              <a href="">Contact</a>
          </ul>
      </div>

    </div>
    </section>
  )
}

export default Navbar;