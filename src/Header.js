import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

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
          style={{ width: '125px', height: '100px' }}
        />
        <a href="https://www.facebook.com/TBP1962/">
          <img src={twitterLogo} alt="Twitter Logo" />
        </a>
        <a href="https://instagram.com">
          <img src={instagramLogo} alt="Instagram Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCu-tEnjTcYvVlTRcvvCJw3g">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </a>
      </div>
      <nav>
        <ul className="nav-list">
          {/* Use Link component to navigate */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/get-involved">Get Involved</Link>
          </li>
          <li className="centered">
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;