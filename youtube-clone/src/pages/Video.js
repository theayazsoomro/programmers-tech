import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import '../styles/Video.css';

const Video = ({ match }) => {
  return (
    <div className="video">
      <VideoPlayer videoId={match.params.videoId} />
    </div>
  );
};

export default Video;
