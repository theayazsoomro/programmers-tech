// src/components/VideoPlayer/VideoPlayer.js
import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="videoPlayer">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
