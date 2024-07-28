import React, { useState, useEffect } from 'react';
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
          {/* <img src={video.thumbnail} alt={video.title} /> */}
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
