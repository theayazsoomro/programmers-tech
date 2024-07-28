import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/videos.json');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <Link to={`/video/${video.id}`}>
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
