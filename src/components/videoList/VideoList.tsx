import * as React from 'react';

import VideoItem from '../videoItem/VideoItem';

import './VideoList.css';

export interface Props {
  videos: Array<string>;
}

export function VideoList({ videos }: Props) {
  return (
      (videos.length === 0)
        ? null
        : (
        <ul className="video-list">
          {videos.map(videoId => <VideoItem key={videoId} videoId={videoId} />)}
        </ul>
        )
  );
}

export default VideoList;