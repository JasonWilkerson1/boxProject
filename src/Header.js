import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="twitter-logo.png" alt="Twitter Logo" />
        <img src="instagram-logo.png" alt="Instagram Logo" />
        <img src="youtube-logo.png" alt="YouTube Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#section1">About Us</a></li>
          <li><a href="#section2">Contact Us</a></li>
          <li><a href="#section3">Donate</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;