import React from 'react';
import './Header.css';
import twitterLogo from './Fb.png';
import instagramLogo from './Instagram.png';
import youtubeLogo from './youtube-logo.png';
import boxProjectImage from './BoxProject.jpg';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src={boxProjectImage}
          alt="BoxProject Logo"
          style={{ width: '125px', height: '100px' }} // Adjust the width and height as needed
        />
        <a href="https://www.facebook.com/TBP1962/" target="_blank">
          <img src={twitterLogo} alt="Twitter Logo" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src={instagramLogo} alt="Instagram Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCu-tEnjTcYvVlTRcvvCJw3g" target="_blank">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </a>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#section1">About</a></li>
          <li><a href="#section2">Get Involved</a></li>
          <li className="centered"><a href="#section3">News</a></li>
          <li><a href="#section4">Resources</a></li>
          <li><a href="#section5">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;