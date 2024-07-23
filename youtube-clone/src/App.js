// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Video from './pages/Video';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/video/:videoId" component={Video} />
            <Route path="/" component={Home} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;