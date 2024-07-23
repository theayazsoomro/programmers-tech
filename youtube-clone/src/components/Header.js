// src/components/Header/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
        alt="YouTube Logo"
      />
      <input className="header__search" type="text" placeholder="Search" />
      <button className="header__button">Search</button>
    </div>
  );
};

export default Header;
