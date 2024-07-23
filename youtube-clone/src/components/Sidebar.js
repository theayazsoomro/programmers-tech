// src/components/Sidebar/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
