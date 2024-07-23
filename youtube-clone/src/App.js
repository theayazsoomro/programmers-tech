// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Video from './pages/Video';
import './App.css';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="app__body">
          <Sidebar isVisible={isSidebarVisible} />
          <main className="main-content">
            <Routes>
              <Route path="/video/:videoId" element={<Video />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;