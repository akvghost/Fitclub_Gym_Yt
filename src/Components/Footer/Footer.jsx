import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkdIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Github} alt='' />
          <img src={Instagram} alt='' />
          <img src={LinkdIn} alt='' />
        </div>
        <div className='logo-f'>
          <a href='#home'>
            <img src={Logo} alt='' />
          </a>
        </div>
        <div className='blur blur-footer-1'></div>
        <div className='blur blur-footer-2'></div>
      </div>
    </div>
  );
};

export default Footer;
