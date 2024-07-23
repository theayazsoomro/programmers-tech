// src/pages/Home/Home.js
import React from 'react';
import VideoCard from '../components/VideoCard';
import '../styles/Home.css';

const Home = () => {
  const videos = [
    {
      title: 'Video 1',
      channel: 'Channel 1',
      views: '1M views',
      timestamp: '1 week ago',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Video 2',
      channel: 'Channel 2',
      views: '2M views',
      timestamp: '2 weeks ago',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="home">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default Home;
