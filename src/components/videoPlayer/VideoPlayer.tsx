import * as React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

import { setNextVideoItem } from '../../actions/videos';
import './VideoPlayer.css';

interface Props {
  videoId?: string;
  setNextVideoItem?: any;
}

export function VideoPlayer ({ videoId, setNextVideoItem }: Props) {
  return (
    (videoId === null)
    ? (
      <div className="video-player-placeholder">
        Nothing to see yet ... 🙈
      </div>
      )
    : (
      <YouTube
        videoId={videoId}
        opts={{width: '640', height: '390', playerVars: { autoplay: 1 }}}
        className="video-player"
        onReady={(e) => {
          e.target.playVideo();
        }}
        onEnd={(e) => {
          setNextVideoItem();
        }}
      />
    )
  );
}

export default connect<{}, {}>(null, { setNextVideoItem })(VideoPlayer);