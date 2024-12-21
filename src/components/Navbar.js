import React from 'react'
import logo from '../assets/navbar-logo.svg';

const Navbar = () => {
  return (
    <section className='navbar' id='Navbar'>
    <div className='navbar-cont'>

        <img className='navbar-logo' src={logo} alt="" />

      <div className='navbar-links'>
          <ul>
              <a href="/home">Home</a>
              <a href="/home">Services</a>
              <a href="/home">Comments</a>
              <a href="/home">Works</a>
              <a href="/home">Contact</a>
          </ul>
      </div>

    </div>
    </section>
  )
}

export default Navbar;