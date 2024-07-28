import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isVisible }) => {
  return (
    <aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
      </ul>
    </aside>
  );
};

export default Sidebar;