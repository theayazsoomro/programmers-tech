// src/components/VideoCard/VideoCard.js
import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ title, channel, views, timestamp, image }) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} • {timestamp}</p>
      </div>
    </div>
  );
};

export default VideoCard;
