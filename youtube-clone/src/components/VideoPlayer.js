import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VideoPlayer.css';

const VideoPlayer = () => {
  const { videoId } = useParams();

  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
