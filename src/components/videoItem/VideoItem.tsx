import * as React from 'react';
import { connect } from 'react-redux';

import * as types from '../../consts/types';
import { getVideoDetails } from '../../reducers/videosReducer';

import './VideoItem.css';

interface Props {
  videoId: string;
  videoItem?: any;
}

export function VideoItem ({ videoId, videoItem }: Props) {
  return (
    <li className="video-list__item">
      <h5 className="video-list__item__title">{videoItem.title}</h5>
      <span className="video-list__item__duration">{videoItem.duration}</span>
    </li>
  );
}

const mapStateToProps = (state: types.StoreState, ownProps: Props) => ({
  videoItem: getVideoDetails(state.videos, ownProps.videoId)
});

export default connect<{}, {}>(mapStateToProps, { })(VideoItem);