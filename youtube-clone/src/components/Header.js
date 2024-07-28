import React from 'react';
import '../styles/Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <img
          className="header__logo"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="Logo"
        />
      </div>
      <input className="header__search" type="text" placeholder="Search" />
      <button className="header__button">Sign In</button>
    </header>
  );
};

export default Header;