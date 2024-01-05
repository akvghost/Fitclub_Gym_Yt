import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className='header' id='home'>
      <a href='#home'>
        <img src={Logo} alt='' className='logo' />
      </a>
      <ul className='header-menu'>
        <li>
          <a className='nav_links' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a className='nav_links' href='#programs'>
            Programs
          </a>
        </li>
        <li>
          <a className='nav_links' href='#reasons'>
            Why Us
          </a>
        </li>
        <li>
          <a className='nav_links' href='#plan'>
            Plans
          </a>
        </li>
        <li>
          <a className='nav_links' href='#testimonials'>
            Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
